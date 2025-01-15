using BCrypt.Net;
using MongoDB.Driver;
using Server.Models;
using Microsoft.Extensions.Options;
using Server.Settings;

namespace Server.Services
{
    public class AuthService
    {
        private readonly IMongoCollection<User> _userCollection;

        public AuthService(IOptions<MongoDbSettings> mongoSettings)
        {
            var settings = mongoSettings.Value;
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _userCollection = database.GetCollection<User>("Users");
        }

        public async Task<string?> RegisterAsync(string username, string email, string password)
        {
            var existingUser = await _userCollection.Find(u => u.Email == email).FirstOrDefaultAsync();
            if (existingUser != null)
            {
                return "User already exists";
            }

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(password);
            var newUser = new User
            {
                Email = email,
                Username = username,
                Password = hashedPassword,
                Roles = new List<string> { "Tenant" }
            };

            await _userCollection.InsertOneAsync(newUser);
            return null;
        }

        public async Task<User> LoginAsync(string email, string password)
        {
            var user = await _userCollection.Find(u => u.Email == email).FirstOrDefaultAsync();

            if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.Password))
            {
                return null; 
            }

            return user; 
        }

         public async Task<User?> GetUserByIdAsync(string userId)
        {
            return await _userCollection.Find(u => u.Id == userId).FirstOrDefaultAsync();

        }

        public async Task<string?> AssignTaskAsync(string username, Models.Task task)
        {
            var user = await _userCollection.Find(u => u.Username == username).FirstOrDefaultAsync();
            if (user == null)
            {
                return "User not found";
            }

            task.CreatedDate = DateTime.Now;

            user.Tasks.Add(task);
            await _userCollection.ReplaceOneAsync(u => u.Username == username, user);
            return null;
        }

        public async Task<List<Models.Task>> GetUserTasksAsync(string username)
        {
            var user = await _userCollection.Find(u => u.Username == username).FirstOrDefaultAsync();
            return user?.Tasks ?? new List<Models.Task>();  // Return the user's tasks, or an empty list if no tasks exist
        }
    }
}

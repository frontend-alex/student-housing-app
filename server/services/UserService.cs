using Server.Models;
using MongoDB.Driver;

namespace Server.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _usersCollection;
        private readonly IMongoCollection<Complaint> _complaintCollection;

        public UserService(IMongoDatabase database)
        {
            _usersCollection = database.GetCollection<User>("Users");
            _complaintCollection = database.GetCollection<Complaint>("Complaints");
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            return await _usersCollection.Find(user => true).ToListAsync();
        }

        public async Task<User> GetUserByIdAsync(string userId)
        {
            return await _usersCollection.Find(user => user.Id == userId).FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateUserAsync(User user)
        {
            var result = await _usersCollection.ReplaceOneAsync(
                u => u.Id == user.Id,
                user,
                new ReplaceOptions { IsUpsert = false });

            return result.ModifiedCount > 0;
        }


        public async Task<Complaint> CreateComplaintAsync(Complaint complaint)
        {
            await _complaintCollection.InsertOneAsync(complaint);
            return complaint;
        }

    }
}

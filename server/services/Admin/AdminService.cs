using MongoDB.Driver;
using Server.Models;

public class AdminService : IAdminService
{
    private readonly IMongoCollection<User> _usersCollection;

    public AdminService(IMongoDatabase database)
    {
        _usersCollection = database.GetCollection<User>("Users");
    }

    public async Task<bool> AddAdminRoleAsync(string userId)
    {
        // Fetch the user by ID
        var user = await _usersCollection.Find(u => u.Id == userId).FirstOrDefaultAsync();
        if (user == null) return false;

        if (!user.Roles.Contains("Admin"))
        {
            user.Roles.Add("Admin");
            var updateResult = await _usersCollection.ReplaceOneAsync(
                u => u.Id == userId,
                user
            );
            return updateResult.ModifiedCount > 0;
        }

        return false; 
    }

    public async Task<bool> RemoveAdminRoleAsync(string userId)
    {
        var user = await _usersCollection.Find(u => u.Id == userId).FirstOrDefaultAsync();
        if (user == null) return false;

        if (user.Roles.Contains("Admin"))
        {
            user.Roles.Remove("Admin");
            var updateResult = await _usersCollection.ReplaceOneAsync(
                u => u.Id == userId,
                user
            );
            return updateResult.ModifiedCount > 0;
        }

        return false; 
    }
}

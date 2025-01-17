using MongoDB.Driver;
using Server.Models;

namespace Server.Services
{
    public class ComplaintService
    {
        private readonly IMongoCollection<Complaint> _complaintCollection;

        public ComplaintService(IMongoDatabase database)
        {
            _complaintCollection = database.GetCollection<Complaint>("Complaints");
        }

        public async Task<Complaint> CreateComplaintAsync(Complaint complaint)
        {
            await _complaintCollection.InsertOneAsync(complaint);
            return complaint;
        }

        public async Task<List<Complaint>> GetAllComplaintsAsync()
        {
            return await _complaintCollection.Find(e => true).ToListAsync();
        }

        public async Task<List<Complaint>> GetComplaintsByUsernameAsync(string username)
        {
            return await _complaintCollection
                .Find(complaint => complaint.Username == username)
                .ToListAsync();
        }
    }
}

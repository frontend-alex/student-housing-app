using MongoDB.Driver;

namespace Server.Services
{
    public class AnnouncementService
    {
        private readonly IMongoCollection<Announcement> _announcementCollection;

        public AnnouncementService(IMongoDatabase database)
        {
            _announcementCollection = database.GetCollection<Announcement>("Announcements");
        }

        public async Task<Announcement> CreateAnnouncementAsync(Announcement announcement)
        {
            await _announcementCollection.InsertOneAsync(announcement);
            return announcement;
        }

        public async Task<List<Announcement>> GetAllAnnouncementsAsync()
        {
            return await _announcementCollection.Find(a => true).ToListAsync();
        }
    }
}

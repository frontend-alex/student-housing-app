using MongoDB.Driver;

namespace Server.Services
{
    public class EventService
    {
        private readonly IMongoCollection<Event> _eventCollection;

        public EventService(IMongoDatabase database)
        {
            _eventCollection = database.GetCollection<Event>("Events");
        }

        public async Task<Event> CreateEventAsync(Event eventObj)
        {
            await _eventCollection.InsertOneAsync(eventObj);
            return eventObj;
        }

        public async Task<List<Event>> GetAllEventsAsync()
        {
            return await _eventCollection.Find(e => true).ToListAsync();
        }
    }
}

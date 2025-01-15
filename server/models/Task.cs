using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Server.Models
{
    public class Task
    {
        [BsonId]
        public string Id { get; set; } = null!;

        [BsonElement("Title")]
        public string Title { get; set; } = null!;

        [BsonElement("Description")]
        public string Description { get; set; } = null!;

        [BsonElement("start")]
        public DateTime Start { get; set; }

        [BsonElement("End")]
        public DateTime End { get; set; }
    }
}

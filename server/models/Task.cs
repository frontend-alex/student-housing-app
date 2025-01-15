using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Server.Models{
     public class Task {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string TaskId { get; set; } = null!;

        [BsonElement("Title")]
        public string Title { get; set; } = null!;

        [BsonElement("Description")]
        public string Description { get; set; } = null!;

        [BsonElement("Status")]
        public string Status { get; set; } = "Pending"; 

        [BsonElement("DueDate")]
        public DateTime DueDate { get; set; } = DateTime.Now.AddDays(7);  

        [BsonElement("CreatedDate")]
        public DateTime CreatedDate { get; set; } = DateTime.Now; 
    }
}
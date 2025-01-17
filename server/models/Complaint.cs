using MongoDB.Bson;

namespace Server.Models
{
    public class Complaint
    {
        public ObjectId Id { get; set; }
        public string Username {get; set;}
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
    }


}

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Server.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = null!;

        [BsonElement("Username")]
        public string Username { get; set; } = null!;
        [BsonElement("Email")]
        public string Email { get; set; } = null!;

        [BsonElement("Password")]
        public string Password { get; set; } = null!;

        [BsonElement("profileImage")]
        public string ProfileImage { get; set; } = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png";

        [BsonElement("Roles")]
        public List<string> Roles { get; set; } = new List<string> { "Tenant" };


        [BsonElement("Tasks")]
        public List<Task> Tasks { get; set; } = new List<Task>();
    }
}

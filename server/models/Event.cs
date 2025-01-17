using MongoDB.Bson;

public class Event
{
    public ObjectId Id { get; set; }
    public string Title { get; set; } 
    public string Description { get; set; }  
    public DateTime EventDate { get; set; }
    public DateTime CreatedAt { get; set; }  
}

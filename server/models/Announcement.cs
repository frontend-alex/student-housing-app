using MongoDB.Bson;

public class Announcement
{
    public ObjectId Id { get; set; }  
    public string Title { get; set; } 
    public string Description { get; set; }  
    public DateTime CreatedAt { get; set; }  
    public DateTime Date { get; set; }  
}

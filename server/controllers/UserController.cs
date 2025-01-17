using Microsoft.AspNetCore.Mvc;
using Server.Services;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly ComplaintService _complaintService;
        private readonly AnnouncementService _announcementService;
        private readonly EventService _eventService;

        public UserController(UserService userService, ComplaintService complaintService, AnnouncementService announcementService, EventService eventService)
        {
            _userService = userService;
            _complaintService = complaintService;
            _announcementService = announcementService;
            _eventService = eventService;
        }

        // GET: api/user/get-all-users
        [HttpGet("get-all-users")]
        public async Task<IActionResult> GetAllUsers()
        {
            try
            {
                var users = await _userService.GetAllUsersAsync();

                if (users == null || users.Count == 0)
                {
                    return NotFound(new { message = "No users found" });
                }

                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while fetching the users", error = ex.Message });
            }
        }

        // POST: api/user/create-complaint
        [HttpPost("create-complaint")]
        public async Task<IActionResult> CreateComplaint([FromBody] Complaint complaint)
        {
            try
            {
                if (complaint == null)
                {
                    return BadRequest(new { message = "Complaint data is required" });
                }

                complaint.CreatedAt = DateTime.UtcNow;

                var createdComplaint = await _complaintService.CreateComplaintAsync(complaint);

                return Ok(new { message = "Complaint created successfully", complaintId = createdComplaint.Id });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while creating the complaint", error = ex.Message });
            }
        }

        [HttpGet("get-complaints-by-username/{username}")]
        public async Task<IActionResult> GetComplaintsByUsername(string username)
        {
            try
            {
                var complaints = await _complaintService.GetComplaintsByUsernameAsync(username);

                if (complaints == null || complaints.Count == 0)
                {
                    return NotFound(new { message = "No complaints found for the provided username" });
                }

                return Ok(complaints);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while fetching the complaints", error = ex.Message });
            }
        }

        // GET: api/user/get-all-complaints
        [HttpGet("get-all-complaints")]
        public async Task<IActionResult> GetAllComplaints()
        {
            try
            {
                var complaints = await _complaintService.GetAllComplaintsAsync();

                if (complaints == null || complaints.Count == 0)
                {
                    return NotFound(new { message = "No complaints found" });
                }

                return Ok(complaints);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while fetching the complaints", error = ex.Message });
            }
        }

        // POST: api/user/create-announcement
        [HttpPost("create-announcement")]
        public async Task<IActionResult> CreateAnnouncement([FromBody] Announcement announcement)
        {
            try
            {
                if (announcement == null)
                {
                    return BadRequest(new { message = "Announcement data is required" });
                }

                announcement.CreatedAt = DateTime.UtcNow;

                var createdAnnouncement = await _announcementService.CreateAnnouncementAsync(announcement);

                return Ok(new { message = "Announcement created successfully", announcementId = createdAnnouncement.Id });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while creating the announcement", error = ex.Message });
            }
        }

        // POST: api/user/create-event
        [HttpPost("create-event")]
        public async Task<IActionResult> CreateEvent([FromBody] Event eventObj)
        {
            try
            {
                if (eventObj == null)
                {
                    return BadRequest(new { message = "Event data is required" });
                }

                eventObj.CreatedAt = DateTime.UtcNow;

                // Create the event using the EventService
                var createdEvent = await _eventService.CreateEventAsync(eventObj);

                return Ok(new { message = "Event created successfully", eventId = createdEvent.Id });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while creating the event", error = ex.Message });
            }
        }

        // GET: api/user/get-all-announcements
        [HttpGet("get-all-announcements")]
        public async Task<IActionResult> GetAllAnnouncements()
        {
            try
            {
                var announcements = await _announcementService.GetAllAnnouncementsAsync();

                if (announcements == null || announcements.Count == 0)
                {
                    return NotFound(new { message = "No announcements found" });
                }

                return Ok(announcements);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while fetching the announcements", error = ex.Message });
            }
        }

        // GET: api/user/get-all-events
        [HttpGet("get-all-events")]
        public async Task<IActionResult> GetAllEvents()
        {
            try
            {
                var events = await _eventService.GetAllEventsAsync();

                if (events == null || events.Count == 0)
                {
                    return NotFound(new { message = "No events found" });
                }

                return Ok(events);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while fetching the events", error = ex.Message });
            }
        }
    }
}

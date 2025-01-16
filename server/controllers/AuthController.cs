using Microsoft.AspNetCore.Mvc;
using Server.Services;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;
        private readonly JwtService _jwtService;

        public AuthController(AuthService authService, JwtService jwtService)
        {
            _authService = authService;
            _jwtService = jwtService;
        }

        [HttpGet("profile")]
        [Authorize]
        public async Task<IActionResult> GetUserProfile()
        {
            var userIdClaim = User.FindFirst("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier");

            if (userIdClaim == null || string.IsNullOrEmpty(userIdClaim.Value))
            {
                return Unauthorized(new { message = "Invalid or missing token" });
            }

            var userId = userIdClaim.Value;

            var user = await _authService.GetUserByIdAsync(userId);

            if (user == null)
            {
                return NotFound(new { message = "User not found" });
            }

            return Ok(user);
        }

        // POST: api/auth/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            var result = await _authService.RegisterAsync(request.Username, request.Email, request.Password);

            if (result != null)
            {
                return BadRequest(new { message = result });
            }

            return Ok(new { message = "User registered successfully", status=200 });
        }

        // POST: api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _authService.LoginAsync(request.Email, request.Password);

            if (user == null)
            {
                return Unauthorized(new { message = "Invalid credentials" });
            }

            // Generate JWT Token
            var token = _jwtService.GenerateToken(user.Id.ToString(), string.Join(",", user.Roles));

            return Ok(new { message = "Login successful", token, user.Tasks });
        }

        // POST: api/auth/assign-task
        // [Authorize] 
        [HttpPost("assign-task")]
        public async Task<IActionResult> AssignTask([FromBody] AssignTaskRequest request)
        {
            var task = new Models.Task
            {
                Id = Guid.NewGuid().ToString(),
                Title = request.Title,
                UrgencyLevel = request.UrgencyLevel,
                Description = request.Description,
                Start = request.Start,
                End = request.End,
            };

            var result = await _authService.AssignTaskAsync(request.Username, task);

            if (result != null)
            {
                return BadRequest(new { message = result, status = 400 });
            }

            return Ok(new { message = "Task assigned successfully" });
        }

        // GET: api/auth/get-tasks/{username}
        [HttpGet("/get-task/{username}")]
        [Authorize] // Protect with JWT Authentication
        public async Task<IActionResult> GetTasks(string username)
        {
            var tasks = await _authService.GetUserTasksAsync(username);
            return Ok(tasks);
        }
    }

    public class RegisterRequest
    {
        public string Username { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
    }

    public class LoginRequest
    {
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
    }

    public class AssignTaskRequest
    {
        public string Id { get; set; } = null!;
        public string Username { get; set; } = null!;
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string UrgencyLevel { get; set; } = null!;
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        }   
}

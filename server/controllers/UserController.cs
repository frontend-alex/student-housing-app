using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Server.Services; 

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
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
    }
}

using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    private readonly AdminService _adminService;

    public AdminController(AdminService adminService)
    {
        _adminService = adminService;
    }

    [HttpPost("add-admin-role/{userId}")]
    public async Task<IActionResult> AddAdminRole(string userId)
    {
        var result = await _adminService.AddAdminRoleAsync(userId);
        if (result)
        {
            return Ok(new { Message = "Admin role added successfully.", status = 200 });
        }
        return BadRequest(new { Message = "Failed to add Admin role.", status = 400 });
    }

    // Remove Admin role from a user
    [HttpPost("remove-admin-role/{userId}")]
    public async Task<IActionResult> RemoveAdminRole(string userId)
    {
        var result = await _adminService.RemoveAdminRoleAsync(userId);
        if (result)
        {
            return Ok(new { Message = "Admin role removed successfully.", status = 200 });
        }
        return BadRequest(new { Message = "Failed to remove Admin role.", status = 400 });
    }
}

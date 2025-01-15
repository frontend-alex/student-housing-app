public interface IAdminService
{
    Task<bool> AddAdminRoleAsync(string userId);
    Task<bool> RemoveAdminRoleAsync(string userId);
}

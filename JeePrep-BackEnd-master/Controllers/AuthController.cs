using MegaProject.BackEnd.Model;
using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;
using MegaProject.BackEnd.DataAccess.Data; 

namespace MegaProject.BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public AuthController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpPost("register")]
        public ActionResult<User> Register(UserDto request)
        {
            
            if (_db.Users.Any(u => u.UserName == request.UserName))
            {
                return Conflict("Username already exists");
            }

            string passwordHashed = BCrypt.Net.BCrypt.HashPassword(request.Password);

            var user = new User
            {
                UserName = request.UserName,
                PasswordHashed = passwordHashed
                
            };

            _db.Users.Add(user);
            _db.SaveChanges();

            return Ok(user);
        }

        [HttpPost("login")]
        public ActionResult<User> Login(UserDto request)
        {
            var user = _db.Users.FirstOrDefault(u => u.UserName == request.UserName);

            if(user == null)
            {
                return BadRequest("User Not Found");
            }

            if(!BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHashed))
            {
                return BadRequest("Wrong Password");
            }

            return Ok(user);
        }
    }
}

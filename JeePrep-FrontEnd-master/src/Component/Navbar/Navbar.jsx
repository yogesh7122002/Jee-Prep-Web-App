import React, { useState } from 'react'
import logo from '../Assets/logo3.png'
import profile from '../Assets/diversity.png'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../Utility/AuthContexProvider'
const Navbar = () => {
  const [menu,setmenu] = useState("home")
  const{isLoggedIn,role} = useAuth();
    return (
    <div className="navbar">
    <div className="nav-logo">
      <img src={logo} alt='logo'/>
    </div>
    <ul className='nav-menu'>
    <li onClick={()=>{setmenu("home")}}><Link id='link' to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("practice")}}><Link id='link' to='/practice'>Practice</Link>{menu==='practice'?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("about-us")}}><Link id='link' to='/about-us'>About us</Link>{menu==='about-us'?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("MockQuize")}}><Link id='link' to='/mock-quize'>Mock Quize</Link>{menu==='MockQuize'?<hr/>:<></>}</li>
   { role=='admin'?<li onClick={()=>{setmenu("admin")}}><Link id='link' to='/admin'>Admin</Link>{menu==='admin'?<hr/>:<></>}</li>:''}
    </ul>
    <div className="nav-cart">
      {isLoggedIn ?<Link id='profile' to='/profile'><img src={profile} alt='bag-icon'/>
      </Link>:<Link id='link' to='/signup'><button >Register Now</button></Link>}
     { isLoggedIn? "": <Link id='link' to='/login'><button >Login</button></Link>}
      
      
    </div>
    </div>
  )
}

export default Navbar

import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth-context"
import "./navbar.css"
export const Navbar = () => {
 const {user,setUser,logout}  = useAuth()
const navigate = useNavigate()
 const logoutHandler = () =>{
   logout();
   localStorage.removeItem("userInfo")
   setUser({token: '', userID: '', displayName: '',email: ''})
   navigate("/login")
 }

  return (
    <nav className="navbar">
      <h2 className="text-2xl ff-title fw-semibold"><Link to="/" className="links">Quizli.</Link></h2>
      <ul className="navbar-right text-normal">
        <li className="nav-icons">
          <span className="material-icons">person</span>
          {user?.token ?<Link to="/profile" className="links">{user?.displayName}</Link> : <Link to="/login" className='links'>Log In</Link>} </li>
        {user?.token && <li className="pointer">
          <span className="pointer" onClick={()=>logoutHandler()}> Logout</span>
        </li>}
      </ul>
    </nav>
  )
}

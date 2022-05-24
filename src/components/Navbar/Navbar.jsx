import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/auth-context"
import "./navbar.css"
import toast from "react-hot-toast"
export const Navbar = () => {
 const {user,setUser,logout}  = useAuth()
const navigate = useNavigate()
 const logoutHandler = () =>{
   logout();
   localStorage.removeItem("userInfo")
   localStorage.removeItem("userScore")
   setUser({token: '', userID: '', displayName: '',email: ''})
   toast.success('Logged Out Successfully!',{duration: 1500, position: 'bottom-center'})
   navigate("/login")
 }

  return (
    <nav className="navbar">
      <h2 className="text-2xl ff-title fw-semibold"><Link to="/" className="links">Quizli.</Link></h2>
      <ul className="navbar-right text-normal">
        <li className="nav-icons">
          <span className="material-icons">person</span>
          {user?.token ?<span className="links">{user?.displayName}</span> : <Link to="/login" className='links'>Log In</Link>} </li>
        {user?.token && <li className="pointer">
          <span className="pointer" onClick={()=>logoutHandler()}> Logout</span>
        </li>}
      </ul>
    </nav>
  )
}

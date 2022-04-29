import { Link } from "react-router-dom"
import "./navbar.css"
export const Navbar = () => {
    
  return (
    <nav className="navbar">
    <h2 className="text-2xl ff-title fw-semibold"><Link to="/" className="links">Quizli.</Link></h2>
    <ul className="navbar-right text-normal">
        <li className="nav-icons">
        <span className="material-icons">person</span>
        <Link to="/login" className="links">Login</Link></li>
    </ul>
</nav>
  )
}

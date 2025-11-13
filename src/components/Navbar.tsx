import { NavLink } from 'react-router-dom'
import './navbar.css'
import logo from '../assets/Imperium Logo.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/news" aria-label="Go to News">
          <img src={logo} alt="Imperium logo" />
        </NavLink>
      </div>
      <div className="navbar-links">
        <h4><NavLink to="/news" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>News</NavLink></h4>
        <h4><NavLink to="/lore" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Lore</NavLink></h4>
        <h4><NavLink to="/recruit" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Recruit</NavLink></h4>
        <h4><NavLink to="/matchmaking" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Matchmaking</NavLink></h4>
        <h4><NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Profile</NavLink></h4>
        <h4><NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Login</NavLink></h4>
      </div>
    </nav>
  )
}

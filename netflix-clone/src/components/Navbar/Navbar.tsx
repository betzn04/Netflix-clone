import './Navbar.css'
import logo from '/netflix_logo.svg'
import profile_icon from '../../assets/images/users/4.png'
import { Search, Bell, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <div className={`navbar__hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a href='/'><img src={logo} alt="netflix" /></a>
        <ul className={`navbar__links ${menuOpen ? 'active' : ''}`}>
          <li><a href='/'>Home</a></li>
          <li><a href=''>TV Shows</a></li>
          <li><a href=''>Movies</a></li>
          <li><a href=''>New & Popular</a></li>
          <li><a href=''>My List</a></li>
          <li><a href=''>Browse by Languages</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <Search className='w-5 h-5' />
        <Bell className='w-5 h-5' />
        <p>Children</p>
        <div className="navbar-profile">
          <img
            src={profile_icon}
            alt="Profile"
            className="w-8 h-8 rounded"
          />
          <ChevronDown className="dropdown-button w-4 h-4" />
          <div className="dropdown-menu">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

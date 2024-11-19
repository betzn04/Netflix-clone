import './Navbar.css'
import logo from '/netflix_logo.svg'
import profile_icon from '../../assets/images/users/4.png'
import { Search, Bell, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
        <img src={logo} alt="netflix" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
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

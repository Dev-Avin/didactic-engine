import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <div className='nav'>
    <div className='navMain'>
      <img src='https://www.unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png'/>
      <div className='navMainLinks'>
        <img src='https://www.unfluke.in/static/media/bell-icon.d99e8edc.png'/>
        <img src='https://www.unfluke.in/static/media/coin.9bfaef7e.jpeg'/>
        <img src='https://www.unfluke.in/static/media/monkey.5456259d.jpg'/>
      </div>
    </div>
    <div className='navLinks'>
      <div className='navLinkContainer'>
        <Link to="/leaderboard" className='navLink'> <p>Leaderboard</p> </Link>
        <Link to="/historical-trading" className='navLink'> <p>Historical Trading</p> </Link>
        <Link to="/historical-chart" className='navLink'> <p>Historical Chart</p> </Link>
        <Link to="/scanners" className='navLink'> <p>Scanners</p> </Link>
        <Link to="/alerts" className='navLink'> <p>Alerts</p> </Link>
        <Link to="/basic-backtest" className='navLink'> <p>Basic Backtest</p> </Link>
        <Link to="/advanced-backtest" className='navLink'> <p>Advanced Backtest</p> </Link>
        <Link to="/pricing" className='navLink'> <p>Pricing</p> </Link>
        <Link to="/my-earning" className='navLink'> <p>My Earning</p> </Link>
      </div>
    </div>
   </div>
  );
};

export default Navbar;

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
   <div className='nav'>
    <div className='navMain'>
      <img src='https://www.unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png'/>
      <div className='navMainLinks'>
      <img src='https://www.unfluke.in/static/media/bell-icon.d99e8edc.png'/>
      <img src='https://www.unfluke.in/static/media/coin.9bfaef7e.jpeg'/>
      <img src=' https://www.unfluke.in/static/media/monkey.5456259d.jpg'/>
     
      </div>

    </div>
    <div className='navLinks'>
      {/* <div className='hamburger'>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className='navLinkContainerMobile'>
        <div className='navLink' onClick={() => window.location.href = "/leaderboard"}> <p>  Leaderboard  </p> </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>  <p> Historical Trading </p>  </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>   <p> Historical Chart</p>   </div>
        <div className='navLink' onClick={() => window.location.href = "/scanner"}>  <p>  Scanners </p>  </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>   <p> Alerts  </p> </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>    <p>Basic Backtest</p>   </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>    <p>Advanced Backtest</p>   </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>   <p>Pricing</p>   </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>    <p>My Earning</p>   </div>
      </div> */}
      <div className='navLinkContainer'>
        <div className='navLink' onClick={() => window.location.href = "/leaderboard"}> <p>  Leaderboard  </p> </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>  <p> Historical Trading </p>  </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>   <p> Historical Chart</p>   </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>  <p>  Scanners </p>  </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>   <p> Alerts  </p> </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>    <p>Basic Backtest</p>   </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>    <p>Advanced Backtest</p>   </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>   <p>Pricing</p>   </div>
        <div className='navLink' onClick={() => window.location.href = "/dud"}>    <p>My Earning</p>   </div>
      </div>
    </div>
   </div>
  )
}

export default Navbar
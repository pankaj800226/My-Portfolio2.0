// import React from 'react'
import React, { useState } from "react";
import { Link } from "react-router-dom"
import { BsCodeSlash } from 'react-icons/bs'
const Header = () => {

  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');

    toggleIcon === 'nav__toggler'
      ? setToggleIcon('nav__toggler toggle')
      : setToggleIcon("nav__toggler")
  };


  return (
    <nav className="nav">
      <Link to="/" className='nav__brand'>
        <h3><BsCodeSlash />CodeWithPankaj</h3>
      </Link>
      <ul className={active}>
        <Link to="/">Home</Link>
        <Link to="about">About Me</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>

        <div className="email">
          <a href="mailto:pk0158548@gmail.com">
            <button>Email</button>
          </a>
        </div>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>

      </div>
    </nav>
  )
}

export default Header
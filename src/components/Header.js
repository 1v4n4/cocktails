import React from 'react';
import '../CSS/header.css';
import logo1 from '../assets/logo1.png';

const Header = () => (
  <header>
    <div className="logo-div"><img className="logo" src={logo1} alt="logo" /></div>
    {' '}
    <div className="right-div" />
  </header>
);
export default Header;

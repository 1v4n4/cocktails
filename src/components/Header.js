import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/header.css';
/* eslint-disable */
import logo1 from '../assets/logo1.png';

const Header = () => (
  <header>
    <Link to="/"><div className="logo-div"><img className="logo" src={logo1} alt="logo" /></div></Link>
    <div className="central">
      <Link className="nav-link" to="/alcoholic">ALCOHOLIC</Link>
      <Link className="nav-link" to="/non-alcoholic">NON-ALCOHOLIC</Link>
    </div>
    {' '}
    <div className="right-div">
      <h1>All the cocktails you've</h1>
      <h1> ever wanted to try</h1>

    </div>
  </header>
);
export default Header;

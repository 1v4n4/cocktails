import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/header.css';
import logo1 from '../assets/logo1.png';

const Header = () => (
  <header>
    <Link to="/"><div className="logo-div"><img className="logo" src={logo1} alt="logo" /></div></Link>
    <div className="right">
      <Link className="nav-link" to="/alcoholic">ALCOHOLIC</Link>
      <br className="new-line" />
      <Link className="nav-link" to="/non-alcoholic">NON-ALCOHOLIC</Link>
      <br className="new-line1" />

      <Link className="nav-link" to="/ingredients">SELECT BY INGREDIENT</Link>
    </div>

  </header>
);
export default Header;

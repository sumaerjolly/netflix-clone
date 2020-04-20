import React from 'react';
import logo from '../svg/logo.svg';

function Header() {
  return (
    <div className="header-container">
      <div className="header-top">
        <img src={logo} alt="netflix-logo" />
      </div>
    </div>
  );
}

export default Header;

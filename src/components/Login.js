import React from 'react';
import Logo from '../svg/logo.svg';

function Login() {
  return (
    <div className="main-login-container">
      <div className="header-top">
        <img src={Logo} alt="netflix logo" className="logo" />
      </div>
    </div>
  );
}

export default Login;

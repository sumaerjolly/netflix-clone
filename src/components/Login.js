import React from 'react';
import logo from '../svg/logo.svg';
import styled from 'styled-components';
import LoginForm from './login/LoginForm';
import LoginFooter from './login/LoginFooter';
import { generateMedia } from 'styled-media-query';

function Login() {
  return (
    <div className="main-login-container">
      <div className="header-top">
        <Logo src={logo} alt="netflix logo" className="logo" />
      </div>
      <LoginForm />
      <LoginFooter />
    </div>
  );
}

export default Login;

// media queries

const customMedia = generateMedia({
  tablet: '640px',
  largeTablet: '800px'
});

// Logo styling

const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, 50%);
  margin-left: 0;
  ${customMedia.lessThan('largeTablet')`
    top: 15%;
    left: 23%;
  `}
`;

import React from 'react';
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { arrow_right } from 'react-icons-kit/ikons/arrow_right';
import { Button } from './Button';
// For Media Query
import { generateMedia } from 'styled-media-query';

function Header() {
  return (
    <HeaderComponent className="header-container">
      <div className="header-top">
        <Logo src={logo} alt="netflix-logo" />
        <NavLink to="/login" className="signIn-btn">
          Sign In
        </NavLink>
      </div>
      <div className="header-content">
        <Title>See what's next.</Title>
        <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
        <Link to="/plans">
          <Button className="main-offer-btn" primary>
            try it now <Icon className="Icon" icon={arrow_right} size={32} />
          </Button>
        </Link>
      </div>
    </HeaderComponent>
  );
}

export default Header;

// Media Queries

const customMedia = generateMedia({
  largeDesktop: '1350px',
  mediumDesktop: '1150px',
  tablet: '960px',
  smallTablet: '740px'
});

// logo

const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${customMedia.lessThan('tablet')`
    left: 20%;
  `}
`;

// Header Container

const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    // transform: translate(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }
    ${customMedia.lessThan('smallTablet')`
      // margin-top: 1.25rem;
      // right: 5%;
  `}
  }

  // Header Top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }

  // headerContent

  .header-content {
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    z-index: 1;
    ${customMedia.lessThan('smallTablet')`
     display: grid;
     grid-template-rows: repeat(3,60px);
     margin-top: 8rem;
     grid-gap: 1.5rem;
  `}
  }

  .Icon svg{
    vertical-align: bottom !important;
    margin-left: 1rem;
    ${customMedia.lessThan('smallTablet')`
     display: none !important;
  `}
  }

  .main-offer-btn {
    ${customMedia.lessThan('largeDesktop')`
      margin: 0 33%;
      font-size: 1.5rem;
  `}
    ${customMedia.lessThan('mediumDesktop')`
      margin: 0 25%;
      font-size: 1.5rem;
  `}
   ${customMedia.lessThan('tablet')`
      margin: 0 20%;
      font-size: 1.2rem;
  `}
  ${customMedia.lessThan('smallTablet')`
      margin: 0 20%;
      font-size: 1.2rem;
      padding: 0;
  `}
  }
`;

// Main title

const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 1.1em;
  ${customMedia.lessThan('tablet')`
     font-size: 2.6rem;
  `}
`;

// Subtitle

const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.25em;
  text-transform: uppercase;
  margin: 0 0 1.875rem;
  ${customMedia.lessThan('smallTablet')`
     font-size: 1.4rem;
     margin: 0;
  `}
`;

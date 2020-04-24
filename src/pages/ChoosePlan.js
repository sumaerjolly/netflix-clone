import React from 'react';
import styled from 'styled-components';
import logo from '../svg/logo.svg';
import Checkmark from '../images/Checkmark.png';
import { Link, NavLink } from 'react-router-dom';

function ChoosePlan() {
  return (
    <MainContainer>
      <div className="header-top">
        <Link to="/">
          <img src={logo} alt="netflix logo" />
        </Link>
        <NavLink to="/login" className="btn sign-in-btn">
          Sign In
        </NavLink>
      </div>
      <div className="header-content">
        <img classname="checkmark-logo" src={Checkmark} alt="checkmark" />
        <p>
          Step <strong>1</strong> of <strong>3</strong>
        </p>
        <h2>Choose your plan.</h2>
      </div>
    </MainContainer>
  );
}

export default ChoosePlan;

// Main Container

const MainContainer = styled.div`
  // header top styling
  background: #fff;
  .header-top {
    background: #fff;
    height: 6rem;
    border-bottom: solid 1px #6e6e6e;
  }

  .header-content {
    display: grid;
    justify-content: center;
    background: #fff;
    color: var(--main-dark);
    margin-bottom: 6rem;
    width: 65%;
    position: relative;
    margin: auto;
    margin-top: 4.5rem;
    text-align: center;
    align-content: center;
    flex-direction: column;
    z-index: 2;
  }
`;

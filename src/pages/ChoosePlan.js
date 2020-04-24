import React from 'react';
import styled from 'styled-components';
import logo from '../svg/logo.svg';
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
    </MainContainer>
  );
}

export default ChoosePlan;

// Main Container

const MainContainer = styled.div``;

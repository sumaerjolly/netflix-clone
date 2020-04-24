import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from '../svg/logo.svg';
import Checkmark from '../images/Checkmark.png';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../components/Button';
import FooterChoosePlan from '../components/choosePlan/FooterChoosePlan';

function ChoosePlan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MainContainer>
      <div className="header-top">
        <Link to="/">
          <Logo src={logo} alt="netflix logo" />
        </Link>
        <NavLink to="/login" className="btn sign-in-btn">
          Sign In
        </NavLink>
      </div>
      <div className="header-content">
        <img className="checkmark-logo" src={Checkmark} alt="checkmark" />
        <p>
          Step <strong>1</strong> of <strong>3</strong>
        </p>
        <h2>Choose your plan.</h2>
        <div className="checked-list">
          <div className="bullet">No commitments,cancel anytime.</div>
          <div className="bullet">Everything on Netflix for one low price.</div>
          <div className="bullet">Unlimited viewing on all your devices</div>
        </div>
        <Link to="/">
          <Button>See the plans</Button>
        </Link>
      </div>
      <FooterChoosePlan />
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
    border-bottom: solid 1px #e6e6e6;
    margin: 0;
    padding: 0;
  }

  .header-content {
    display: grid;
    justify-content: center;
    background: #fff;
    color: var(--main-dark);
    margin-bottom: 3rem;
    width: 65%;
    position: relative;
    margin: auto;
    margin-top: 0.5rem;
    text-align: center;
    align-content: center;
    flex-direction: column;
    z-index: 2;
  }

  // checkmark logo

  .checkmark-logo {
    width: 3rem;
    margin-top: 3.125rem;
    margin-bottom: 2rem;
  }

  .header-content img {
    margin: 6.25rem auto 1.875rem;
  }

  .checked-list {
    text-align: left;
    margin: 1rem auto 3rem;
    padding-left: 1.5625rem;
    width: 85%;
    font-size: 17px;
    padding: auto;
  }

  // bullets

  .bullet {
    margin-top: 1rem;
    margin-left: 1rem;
    text-indent: -1em;
    line-height: 1.2;
  }

  .checked-list .bullet::before {
    color: transparent;
    display: inline-block;
    position: relative;
    height: 0.3em;
    width: 0.8em;
    content: '';
    left: -0.9375rem;
    bottom: 0.1875rem;
    border-bottom: 1px solid #e50914;
    border-left: 1px solid #e50914;
    transform: rotate(-45deg);
  }

  // sign in btn

  .sign-in-btn {
    margin: 1.625rem 3% 0;
    padding: 0.4375rem 1.625rem;
    font-weight: 700;
    line-height: normal;
    color: var(--main-dark);
    font-size: 1.25rem;
    right: 0;
    position: absolute;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logo = styled.img`
  width: 10.5rem;
  height: 3.5rem;
  position: absolute;
  top: 49%;
  left: 8%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;

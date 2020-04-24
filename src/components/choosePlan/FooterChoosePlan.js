import React from 'react';
import { Link } from 'react-router-dom';
import { generateMedia } from 'styled-media-query';
import styled from 'styled-components';

function FooterChoosePlan() {
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        <span className="question-link">
          Questions?&nbsp;<Link to="#">Contact us.</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link>Gift Card Terms</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Terms Of Use</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Privacy Statement</Link>
            </li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
}

export default FooterChoosePlan;

// footer container

const FooterContainer = styled.footer`
  display: grid;
  justify-content: center;
  background: #f3f3f3;
  padding: 1.875rem 0;
  margin-top: 5rem;
  position: relative;
  border-top: solid 1px #e6e6e6;
  z-index: 5;

  .footer-columns {
    width: 80%;
    margin: 1rem 3rem 0 3rem;
    color: #999;
    display: grid;
    grid-template-columns: repeat(4, 250px);
    grid-gap: 0.3rem;
  }

  // footer wrapper

  .footer-wrapper {
    margin: 0 auto;
    padding: 1.25rem;
  }

  .footer-columns ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: #999;
    font-size: 0.8125rem;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .question-link {
    margin-left: 3rem;
    font-size: 1rem;
    color: #999;
  }
`;

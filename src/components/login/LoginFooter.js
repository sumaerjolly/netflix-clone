import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from 'styled-media-query';

function LoginFooter() {
  const [langContent, setLangContent] = useState(false);

  const handleToggle = e => {
    e.preventDefault();
    setLangContent(prevState => !prevState);
  };
  return (
    <FooterContainer>
      <span style={{ marginLeft: '10%', color: '#999' }}>
        Questions?&nbsp;<Link to="#">Contact us.</Link>
      </span>
      <div className="footer-columns">
        <ul>
          <li>
            <Link to="#">Gift Card Terms</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#">Terms Of Use</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#">Privacy Statement</Link>
          </li>
        </ul>
      </div>
      <div className="lang-btn" onClick={handleToggle}>
        <Icon icon={iosWorld} size={20} />
        &nbsp;&nbsp;English&nbsp;&nbsp;
        <Icon icon={arrowSortedDown} />
      </div>

      {/* Toggle Language Content */}
      {langContent && (
        <div className="lang-toggle">
          <ul>
            <li>English</li>
            <li>Hindi</li>
          </ul>
        </div>
      )}

      <span
        style={{
          marginLeft: '10%',
          fontSize: '0.9rem',
          marginTop: '2rem',
          color: '#999'
        }}
      >
        Netflix India
      </span>
    </FooterContainer>
  );
}

export default LoginFooter;

// Media Queries

const customMedia = generateMedia({
  tablet: '740px'
});

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.8);
  padding-top: 3rem;
  padding-bottom: 6rem;
  margin-top: 6rem;
  justify-content: center;
  position: relative;
  z-index: 5;
  ${customMedia.lessThan('tablet')`
     padding-bottom: 3rem;
  `}

  ul {
    margin: 0;
    padding: 0;
  }

  .footer-columns {
    width: 80%;
    color: #999;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan('tablet')`
      grid-template-columns: repeat(2, 1fr); 
  `}
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    color: #999;
    font-size: 0.9rem;
  }

  p {
    text-decoration: underline;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  // Language Button

  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    color: #999;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 2rem;
    margin-left: 10%;
    cursor: pointer;
  }

  // toggle language content

  .lang-toggle {
    margin-left: 10%;
    position: absolute;
    margin-top: -2rem;
  }

  .lang-toggle ul li {
    background: var(--main-deep-dark);
    width: 8rem;
    border: 0.9px solid #333;
    text-align: center;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;

import React from 'react';
import Img from '../images/tab-1-pic.png';
import styled from 'styled-components';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { generateMedia } from 'styled-media-query';

function TabContentOne() {
  return (
    <TabContentContainer>
      <div className="container">
        <div className="tab-content">
          <div>
            <span className="title" style={{ marginBottom: '2rem' }}>
              If you decide Netflix isn't for you - no problem. No commitment.
              Cancel online anytime.
            </span>
            <br />
            <Link to="/plans">
              <Button style={{ marginTop: '2rem' }}>try it now</Button>
            </Link>
          </div>
          <img src={Img} alt="tab-1-pic" />
        </div>
      </div>
    </TabContentContainer>
  );
}

export default TabContentOne;

// Media Queries

const customMedia = generateMedia({
  desktop: '1440px',
  tablet: '960px'
});

// Main Content Container

const TabContentContainer = styled.div`
  background: var(--main-deep-dark);

  .container {
    margin: 0 10%;
  }

  img {
    width: 31.875rem;
    ${customMedia.lessThan('tablet')`
      text-align: center;
      width: 25rem;
     
  `}
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
    ${customMedia.lessThan('tablet')`
      grid-template-columns: 100%;
      text-align: center;
      padding-left: 0;
      padding-right: 0;
  `}
  }

  .title {
    margin-top: 2rem;
    ${customMedia.lessThan('desktop')`
    font-size: 1.5rem;
    line-height: 1;
  `}
  }
`;

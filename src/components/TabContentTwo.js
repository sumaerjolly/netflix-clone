import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';
import Img1 from '../images/tab-tv.png';
import Img2 from '../images/tab-tablet.png';
import Img3 from '../images/tab-macbook.png';

function TabContentTwo() {
  return (
    <TabContentContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: '1.5rem' }}>
            Watch TV shows and movies anytime, anywhere - personalized for you.
          </span>
          <Button className="btn">try it now</Button>
        </div>
        <div className="tab-bottom-cotent">
          <div>
            <img src={Img1} alt="Tv photo" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.{' '}
            </p>
          </div>
          <div>
            <img src={Img2} alt="Tv photo" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.{' '}
            </p>
          </div>
          <div>
            <img src={Img3} alt="Tv photo" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.{' '}
            </p>
          </div>
        </div>
      </div>
    </TabContentContainer>
  );
}

export default TabContentTwo;

// Main Tab Content Container

const TabContentContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  // tab top content

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
  }

  span {
    grid-column: 1 / 8;
  }

  .btn {
    // margin: 0 1.25rem 1.25rem;
    grid-column: 10/12;
  }
`;

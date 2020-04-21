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
        <div className="tab-bottom-content">
          <div>
            <img src={Img1} alt="Tv" style={{ width: '18.75rem' }} />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.{' '}
            </p>
          </div>
          <div>
            <img
              src={Img2}
              alt="Tablet "
              style={{ paddingTop: '0.625rem', width: '18.75rem' }}
            />
            <h3>Watch instantly or download later</h3>
            <p>Available on phone and tablet, wherever you go.</p>
          </div>
          <div>
            <img
              src={Img3}
              alt="Macbook"
              style={{
                width: '18.75rem',
                paddingTop: '0.625rem',
                paddingBottom: '0.625rem'
              }}
            />
            <h3>Use any computer</h3>
            <p>Watch right on Netflix.com</p>
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

  // Tab Bottom Content

  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    color: var(--main-grey);
  }
`;

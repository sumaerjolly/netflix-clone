import React from 'react';
import Img from '../images/tab-1-pic.png';

function TabContentOne() {
  return (
    <div>
      <div className="container">
        <div className="tab-content">
          <span>
            If you decide Netflix isn't for you - no problem. No commitment.
            Cancel online anytime.
          </span>
          <br />
          <button>try it now</button>
          <img src={Img} alt="tab-1-pic" />
        </div>
      </div>
    </div>
  );
}

export default TabContentOne;

import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabsDevices from './tabs_nav/TabsDevices';
import TabsPrice from './tabs_nav/TabsPrice';
import '../css/TabsNav.css';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';

function TabComponent() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Tabs
        className="tabs"
        selectedIndex={tabIndex}
        onSelect={tabIndex => setTabIndex(tabIndex)}
      >
        <TabList className="tab-nav-container">
          <Tab className={`${tabIndex === 0 ? 'tab-selected active' : null}`}>
            <TabDoor />
            <p className="lgScreen">
              <strong>
                No commitments
                <br />
                Cancel online at anytime
              </strong>
            </p>
            <span className="mdScreen">Cancel</span>
          </Tab>
          <Tab className={`${tabIndex === 1 ? 'tab-selected active' : null}`}>
            <TabsDevices />
            <p className="lgScreen" style={{ marginTop: '-5.3125rem' }}>
              <strong>Watch Anywhere</strong>
            </p>
            <span className="mdScreen">Devices</span>
          </Tab>
          <Tab className={`${tabIndex === 2 ? 'tab-selected active' : null}`}>
            <TabsPrice />
            <p className="lgScreen" style={{ marginTop: '0.3rem' }}>
              <strong>Pick your price</strong>
            </p>
            <span className="mdScreen">Prices</span>
          </Tab>
        </TabList>
        <TabPanel>
          <TabContentOne />
        </TabPanel>
        <TabPanel>
          <TabContentTwo />
        </TabPanel>
        <TabPanel>
          <TabContentThree />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabComponent;

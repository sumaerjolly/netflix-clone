import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabsDevices from './tabs_nav/TabsDevices';
import TabsPrice from './tabs_nav/TabsPrice';
import '../css/TabsNav.css';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';

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
            <p>
              <strong>
                No commitments
                <br />
                Cancel online at anytime
              </strong>
            </p>
          </Tab>
          <Tab className={`${tabIndex === 1 ? 'tab-selected active' : null}`}>
            <TabsDevices />
            <p style={{ marginTop: '-5.3125rem' }}>
              <strong>Watch Anywhere</strong>
            </p>
          </Tab>
          <Tab className={`${tabIndex === 2 ? 'tab-selected active' : null}`}>
            <TabsPrice />
            <p style={{ marginTop: '0.3rem' }}>
              <strong>Pick your price</strong>
            </p>
          </Tab>
        </TabList>
        <TabPanel>
          <TabContentOne />
        </TabPanel>
        <TabPanel>
          <TabContentTwo />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabComponent;

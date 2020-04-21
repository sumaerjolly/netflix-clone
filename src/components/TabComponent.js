import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import TabDoor from './tabs_nav/TabDoor';
import TabsDevices from './tabs_nav/TabsDevices';
import TabsPrice from './tabs_nav/TabsPrice';

import '../css/TabsNav.css';

function TabComponent() {
  return (
    <div>
      <Tabs className="tabs">
        <TabList className="tab-nav-container">
          <Tab>
            <TabDoor />
            <p>
              <strong>
                No commitments
                <br />
                Cancel online at anytime
              </strong>
            </p>
          </Tab>
          <Tab>
            <TabsDevices />
            <p style={{ marginTop: '-5.3125rem' }}>
              <strong>Watch Anywhere</strong>
            </p>
          </Tab>
          <Tab>
            <TabsPrice />
            <p>
              <strong>Pick your price</strong>
            </p>
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
}

export default TabComponent;

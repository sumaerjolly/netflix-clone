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
      <Tabs>
        <TabList>
          <Tab>
            <TabDoor />
          </Tab>
          <Tab>
            <TabsDevices />
          </Tab>
          <Tab>
            <TabsPrice />
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
}

export default TabComponent;

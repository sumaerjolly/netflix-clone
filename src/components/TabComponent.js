import React from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import TabDoor from './tabs_nav/TabDoor';
import '../css/TabsNav.css';

function TabComponent() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>
            <TabDoor />
          </Tab>
          <Tab>TabLink 2</Tab>
          <Tab>TabLink 3</Tab>
        </TabList>
      </Tabs>
    </div>
  );
}

export default TabComponent;

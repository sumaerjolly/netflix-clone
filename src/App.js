import React from 'react';
import Main from './pages';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import ChoosePlan from './pages/ChoosePlan';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/plans" component={ChoosePlan} />
    </Switch>
  );
}

export default App;

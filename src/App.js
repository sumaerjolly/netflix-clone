import React from 'react';
import Main from './pages';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;

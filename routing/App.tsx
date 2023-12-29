import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/index';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import ServicesPage from '../pages/services';
import DashboardPage from '../pages/dashboard';
import AdminPage from '../pages/admin';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

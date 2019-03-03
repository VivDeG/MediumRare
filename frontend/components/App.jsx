import React from 'react';
import { Route, Redirect, Link, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


const App = () => (
  <>
    <Modal />
    <header>
      <div className="nav-bar">
        <Link to="/" className="header-link">
          <h1>MediumRare</h1>
        </Link>
        <GreetingContainer />
      </div>
    </header>

    <Switch>
      <Route exact path="/" />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
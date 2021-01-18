import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './pages/Home';
import {Layout} from "./pages/Layoute";
import {Auth} from "./pages/Auth";
import {ModelRow} from "./pages/ModelRow";
import {Production} from "./pages/Production";
import {Profile} from "./pages/Profile";
import {Register} from "./pages/Register";
import {Report} from "./pages/Report";


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
          <Route exact path='/' component={Home} />
            <Route exact path='/auth' component={Auth} />
            <Route exact path='/modelrow' component={ModelRow} />
            <Route exact path='/production' component={Production} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/report' component={Report} />
        </Layout>
    );
  }
}
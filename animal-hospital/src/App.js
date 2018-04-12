import React, { Component } from 'react';

import './App.css';
import {NavBar} from './components/index';
import {Body} from './components/index';
import {SiteInfo} from './components/index';
import {Location} from './components/index';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
     <NavBar />
     <Body />
     <SiteInfo />
     <Location />

      </div>
    );
  }
}

export default App;

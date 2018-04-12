import React, { Component } from 'react';

import './App.css';
import {NavBar} from './components/index';
import {Body} from './components/index';
import {SiteInfo} from './components/index';
import {Location} from './components/index';
import {Quotes} from './components/quoteGenerator';

class App extends Component {
  render() {

  const quote =<Quotes />;
  
    return (
      <div className="container-fluid">
     <NavBar />
     <Body quote={quote}/>
     <SiteInfo />
     <Location />

      </div>
    );
  }
}

export default App;

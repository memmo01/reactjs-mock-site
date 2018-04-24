import React from 'react';

import './App.css';
import NavBar from './components/Navbar';
import Body from './components/Body';
import SiteInfo from './components/Siteinfo';
import Location from './components/Location';
import Quotes from './components/quoteGenerator';

class App extends React.Component {
  render() {

  const quote =<Quotes />;
  
    return (
      <div className="container-fluid">
     <NavBar />
     <Body quote={quote}/>
     <SiteInfo />
     <Location />

     <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

      </div>
    );
  }
}

export default App;

import React from "react";

import "../App.css";
import Body from "../components/Body";
import SiteInfo from "../components/Siteinfo";
import Location from "../components/Location";
import Quotes from "../components/quoteGenerator";

class App extends React.Component {
  render() {
    const quote = <Quotes />;

    return (
      <div className="container-fluid">
        <Body quote={quote} />
        <SiteInfo />
        <Location />
      </div>
    );
  }
}

export default App;

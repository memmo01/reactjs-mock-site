import React from "react";

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  handle() {
    this.setState({
      show: !this.state.show
    });
    console.log("one");
  }

  render() {
    return (
      <div>
        {this.state.show ? (
          <div className="full">
            <span onClick={this.handle.bind(this)}>
              <i class="far fa-times-circle" />
            </span>{" "}
            <li>Contact</li>
            <hr />
            <li>Appointment</li>
            <hr />
            <li>Emergency</li>
            <hr />
            <li>About Us</li>
          </div>
        ) : null}
        <nav className="navbar navbar-light bg-warning">
          <div className="col-lg-3 col-md-11 col-sm-11 col-11 titleSection">
            <div id="ham" onClick={this.handle.bind(this)}>
              <i
                className="fas fa-bars fa-lg"
                onClick={this.handle.bind(this)}
              />
            </div>{" "}
            <h3>
              The <br />
              <u>Animal Hospital </u>
            </h3>
            <div className="loginMobile">
              <i className="fas fa-user fa-lg user" />
            </div>
          </div>
          <div className="col-lg-7 group">
            <button type="button" className="btn btn-warning btn-lg">
              Contact
            </button>
            <button type="button" className="btn btn-warning btn-lg">
              Appointment
            </button>
            <button type="button" className="btn btn-warning btn-lg">
              Emergency
            </button>
            <button type="button" className="btn btn-warning btn-lg">
              About Us
            </button>
          </div>
          <div className=" col-lg logoLogin">
            <a href="/login">
              {" "}
              <i className="fas fa-user fa-lg user" />
            </a>
          </div>{" "}
        </nav>
      </div>
    );
  }
}

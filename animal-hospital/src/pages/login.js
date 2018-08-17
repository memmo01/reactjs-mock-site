import React from "react";
import "../App.css";

class Login extends React.Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div>
        <div className="loginContainer">
          <form id="loginForm">
            <label>Username</label>
            <input type="text" name="username" />

            <label>Password</label>
            <input type="password" name="password" />
            <input type="submit" name="submit" value="login" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

import React from "react";

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  handleClick(e) {
    let info = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };
    this.setState({
      user: info
    });

    e.preventDefault();
  }
  render() {
    return (
      <div className="loginContainer">
        <form id="loginForm">
          <label>Username:</label>
          <input type="text" ref="username" name="username" />
          <label> Password: </label>
          <input type="password" ref="password" name="password" />
          <input
            type="submit"
            name="submit"
            value="login"
            onClick={this.handleClick.bind(this)}
          />
          <a href="#">Create Account</a>
        </form>
      </div>
    );
  }
}
export default LoginContainer;

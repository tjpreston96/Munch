import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import "./Login.css";

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      this.updateMessage(err.message);
    }
  };

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    const { email, pw } = this.state;
    return (
      <main className="Login">
        <div className="loginCard">
          <h3>Please Login to Continue</h3>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label htmlFor="email">
              <b>Email:</b>
            </label>
            <br />
            <input
              type="text"
              autoComplete="off"
              id="email"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password">
              <b>Password:</b>
            </label>
            <br />
            <input
              type="password"
              autoComplete="off"
              id="password"
              value={pw}
              name="pw"
              onChange={this.handleChange}
              className="password"
            />
            <br />
            <button className="btn btn-info">Log In</button>&nbsp;&nbsp;&nbsp;
            <Link className="btn btn-secondary" to="/">
              Cancel
            </Link>
          </form>
          <p>{this.state.message}</p>
        </div>
      </main>
    );
  }
}

export default LoginPage;

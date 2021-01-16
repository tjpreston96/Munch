import React, { Component } from "react";
import { Route, Redirect, Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import "./App.css";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import Board from "../Board/Board";

class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome to Munch!</h1>
              <Link to={{ pathname: "/search" }}>Search Recipes</Link>
              <br />
              <Link to={{ pathname: "/cookbook" }}>Cookbook</Link>
              <br />
              <div className="mike">
                <p>Michael's color</p>
              </div>
            </main>
          )}
        />
        <Route
          exact
          path="/search"
          render={() =>
            user ? <Search user={this.state.user} /> : <Redirect to="/login" />
          }
        />
        <Route
          exact
          path="/profile"
          render={() =>
            user ? <Profile user={this.state.user} /> : <Redirect to="/login" />
          }
        />
        <Route
          exact
          path="/board"
          render={() =>
            user ? <Board user={this.state.user} /> : <Redirect to="/login" />
          }
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
      </>
    );
  }
}

export default App;

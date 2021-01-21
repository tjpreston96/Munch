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
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import AddBoardPost from "../AddBoardPost/AddBoardPost";

class App extends Component {
  state = {
    createPost: [],
    singleRecipe: [],
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
          render={() =>
            user ? (
              <main>
                <h1>Welcome to Munch!</h1>
                <Link to={{ pathname: "/search" }}>Search Recipes</Link>
                <br />
                <Link to={{ pathname: "/cookbook" }}>Cookbook</Link>
                <br />
              </main>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/search"
          render={({ history }) =>
            user ? (
              <Search
                history={history}
                singleRecipe={this.state.singleRecipe}
                user={this.state.user}
              />
            ) : (
              <Redirect to="/login" />
            )
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
          render={({ history }) =>
            user ? (
              <Board
                history={history}
                createPost={this.state.createPost}
                user={this.state.user}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/board/add"
          render={({ history, location }) =>
            user ? (
              <AddBoardPost
                location={location}
                history={history}
                createPost={this.state.createPost}
                user={this.state.user}
              />
            ) : (
              <Redirect to="/login" />
            )
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
          path="/recipesDetails"
          render={({ location }) =>
            user ? (
              <RecipeDetails location={location} user={this.state.user} />
            ) : (
              <Redirect to="/login" />
            )
          }
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

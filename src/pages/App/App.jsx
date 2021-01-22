import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
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
import * as postAPI from "../../services/postService";

class App extends Component {
  state = {
    user: authService.getUser(),
    posts: [],
  };

  async componentDidMount() {
    const allPosts = await postAPI.getAll();
    this.setState({ posts: allPosts });
  }
  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleCreatePost = async (newPostData) => {
    console.log(this.state.posts);
    const newPost = await postAPI.createPost(newPostData);
    this.setState({ posts: [...this.state.posts, newPost] });
    this.props.history.push("/board");
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
                <img
                  classname="cookie"
                  src="https://d29fhpw069ctt2.cloudfront.net/icon/image/85060/preview.svg"
                  width="250px"
                  alt=""
                />
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
                user={this.state.user}
                posts={this.state.posts}
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
                handleCreatePost={this.handleCreatePost}
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

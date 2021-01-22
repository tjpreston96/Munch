import React, { Component } from "react";
import { getAllUsers } from "../../services/userService";
import { Link } from "react-router-dom";

class Users extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const users = await getAllUsers();
    this.setState({ users });
  }

  render() {
    return (
      <>
        <main>
          <div className="userCard">
            <h1>User List:</h1>
            <hr />

            {this.state.users.map((user) => (
              <div className="username">
                <p>{user.name} </p>
                <Link
                  className=" spacing btn btn-dark"
                  style={{ backgroundColor: "rgb(46,84,101)" }}
                >
                  Add Friend
                </Link>
              </div>
            ))}
            <div>
              <Link
                className="btn btn-dark"
                to={{ pathname: "/" }}
                style={{ margin: ".2rem", backgroundColor: "rgb(46,84,101)" }}
              >
                Return to Home
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Users;

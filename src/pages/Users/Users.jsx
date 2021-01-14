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
        <div className="userCard">
          <h1>User List:</h1>
          {this.state.users.map((user) => (

            <p>{user.name} </p>
          ))}
        </div>
        <Link to={{ pathname: "/" }}>Return to Home</Link>
      </>
    );
  }
}

export default Users;

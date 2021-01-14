import React, { Component } from "react";
import { getAllUsers } from "../../services/userService";

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
        <div className='userCard'>
        <h1>User List:</h1>
        {this.state.users.map((user) => (
            <p>{user.name} </p>

        ))}
          </div>
      </>
    );
  }
}

export default Users;
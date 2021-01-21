import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './Signup.css';

class Signup extends Component {
  state = {
    message: ''
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className="signupCard">
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Signup;
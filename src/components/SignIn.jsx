import React, { Component } from 'react';

import { auth, createUserProfileDocument, getUserDocument, signInWithGoogle } from '../firebase'

class SignIn extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // this.setState({ email: '', password: '' });
    const { email, password } = this.state

    // try {
    //   const { user } = await auth.signInWithEmailAndPassword(email, password)
    //   console.log('signIn--->', user)

    //   // getUserDocument(user.uid)
      
    // } catch (error) {
    //   console.log(error)
    // }
  };

  render() {
    const { email, password } = this.state;

    return (
      <form className="SignIn" onSubmit={this.handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Sign In" />
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </form>
    );
  }
}

export default SignIn;

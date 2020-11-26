import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const response = await axios.post(
        "https://acebook-team-life-savers.herokuapp.com/authenticate",
        {
          user: {
            email: email,
            password: password,
          },
        },
        {
          headers: { Authorization: this.props.Authorization }
        }
      );
      if (response.data.status === "created") {
        this.props.handleSuccesfulAuth(response.data);
      }
    } catch (error) {
      console.log("login error", error);
    }
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>

       
        <div class="form-label-group">
          <input type="email" name="email" id="inputEmail" class="form-control" placeholder="email" value={this.state.email} onChange={this.handleChange} required autofocus/>
          <label for="inputEmail">Email address</label>
        </div>

        <div class="form-label-group">
          <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
          <label for="inputPassword">Password</label>
        </div>

        <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Log In</button>
      </form>
    );
  }
}

export default Login;

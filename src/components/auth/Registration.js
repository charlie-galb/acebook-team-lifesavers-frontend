import React, { Component } from "react";
import axios from "axios";

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
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
    const { name, email, password, password_confirmation } = this.state;
    try {
      const response = await axios.post(
        "https://acebook-team-life-savers.herokuapp.com/users",
        {
          user: {
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
      );
      if (response.data.status === "created") {
        this.props.handleSuccesfulAuth(response.data);
      }
    } catch (error) {
      console.log("registration error", error);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <h3 className="login-heading mb-4">Sign Up</h3>

        <div className="form-label-group">
          <input type="name" id="inputName" name="name" className="form-control" placeholder="name" value={this.state.name} onChange={this.handleChange} required/>
          <label htmlFor="inputName">Name</label>
        </div>

        <div className="form-label-group">
          <input type="email" name="email" id="inputEmail" className="form-control" placeholder="email" value={this.state.email} onChange={this.handleChange} required autoFocus/>
          <label htmlFor="inputEmail">Email address</label>
        </div>

        <div className="form-label-group">
          <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
          <label htmlFor="inputPassword">Password</label>
        </div>

        <div className="form-label-group">
          <input type="password" name="password_confirmation" id="inputPassword" className="form-control" placeholder="Password confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required/>
          <label htmlFor="inputPassword">Password</label>
        </div>

        <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Register</button>
      </form>
    
    )
  }
}

export default Registration;

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
        console.log(response.data)
      if (response.data.status === "created") {
        this.props.handleSuccesfulAuth(response.data);
      }
    } catch (error) {
      console.log("registration error", error);
    }
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image">

          </div>
          <div class="col-md-8 col-lg-6">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-md-9 col-lg-8 mx-auto">
                    <h3 class="login-heading mb-4">Welcome!</h3>
                    <form onSubmit={this.handleSubmit}>

                      <div class="form-label-group">
                        <input type="name" id="inputName" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} required/>
                        <label for="inputName">Name</label>
                      </div>

                      <div class="form-label-group">
                        <input type="email" name="email" id="inputEmail" class="form-control" placeholder="email" value={this.state.email} onChange={this.handleChange} required autofocus/>
                        <label for="inputEmail">Email address</label>
                      </div>

                      <div class="form-label-group">
                        <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
                        <label for="inputPassword">Password</label>
                      </div>

                      <div class="form-label-group">
                        <input type="password" name="password_confirmation" id="inputPassword" class="form-control" placeholder="Password confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required/>
                        <label for="inputPassword">Password</label>
                      </div>

                      <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Register</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Registration;

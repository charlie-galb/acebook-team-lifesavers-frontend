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

  //handleSubmit(event) {
  //  const { name, email, password, password_confirmation } = this.state;
  //  axios
  //    .post(
  //      "https://acebook-team-life-savers.herokuapp.com/users",
   //     {
   //       user: {
   //         name: name,
  //           email: email,
  //           password: password,
  //           password_confirmation: password_confirmation,
  //         },
  //       },
  //       { withCredentials: true }
  //     )
  //     .then((response) => {
  //       if (response.data.status === "created") {
  //         this.props.handleSuccesfulAuth(response.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("registration error", error);
  //     });
  //  event.preventDefault();
  // }

  // .then
  // handleSubmit(event) {
  //   const { name, email, password, password_confirmation } = this.state;
  //   axios.post(
  //       "http://localhost:3001/users",
  //       {
  //         user: {
  //           name: name,
  //           email: email,
  //           password: password,
  //           password_confirmation: password_confirmation,
  //         },
  //       },
  //       { withCredentials: true }
  //     )
  //     .then((response) => {
  //       if (response.data.status === "created") {
  //         this.props.handleSuccesfulAuth(response.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("registration error", error);
  //     });
  //   event.preventDefault();
  // }

  //async/await
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
          { withCredentials: true }
        );

        if (response.data.status === "created") {
          this.props.handleSuccesfulAuth(response.data);
        }
    } catch(error) {
      console.log("registration error", error);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            className="email-input"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
          <button type="submit"> Register</button>
        </form>
      </div>
    );
  }
}

export default Registration;
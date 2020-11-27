import React, { Component } from "react";
import axios from "axios";

export class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      user_id: this.props.user.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updatePosts = this.updatePosts.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async updatePosts(token, handlePosts) {
    console.log(this.props.user.id)
    await axios
      .get(
        "https://acebook-team-life-savers.herokuapp.com/posts",
        // {
        //   params: {},
        // },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => handlePosts(response.data))
      .catch((error) => console.log(error));
  }

  async handleSubmit(event) {
    console.log(this.props.user)
    event.preventDefault();
    const { user_id, message } = this.state;
    try {
      const response = await axios.post(
        "https://acebook-team-life-savers.herokuapp.com/posts_create",
        {
          post: {
            user_id: user_id,
            message: message,
          },
        },
        {
          headers: { Authorization: this.props.Authorization },
        }
      );
      if (response.data.status === "created") {
        this.updatePosts(
          this.props.Authorization,
          this.props.handlePosts
        );
        console.log(response.data)
      }
    } catch (error) {
      console.log("login error", error);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="float-center">
          <input
            type="text"
            name="message"
            id="inputpost"
            class="form-control"
            placeholder="Please insert a post"
            value={this.state.message}
            onChange={this.handleChange}
            required
            autofocus
          />
        </div>
        <button
          class="btn btn-lg btn-primary btn-block inputpostbutton text-uppercase font-weight-bold mb-2 "
          type="submit"
        ></button>
      </form>
    );
  }
}

export default NewPost;

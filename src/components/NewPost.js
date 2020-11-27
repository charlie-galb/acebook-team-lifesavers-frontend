import React, { Component } from "react";
import axios from "axios";

export class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
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
        this.props.updatePosts(
          this.props.Authorization,
          this.props.handlePosts
        );
      }
    } catch (error) {
      console.log("login error", error);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-label-group">
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
          <label for="inputpost">Please insert your post</label>
        </div>
        <button
          class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
          type="submit"
        ></button>
      </form>
    );
  }
}

export default NewPost;

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Login from "./Login.js";
import { jest } from "@jest/globals";
import axios from "axios";
const TestRenderer = require("react-test-renderer");

jest.mock("axios");
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders log in form", function () {
  act(() => {
    render(<Login />, container);
  });
  expect(container.textContent).toContain("Login");
});

it("sends a post request", async () => {
  // const mockCallback = jest.fn();
  const login = new Login();
  login.state = {
    email: "",
    password: "",
  };

  try {
    await login.handleSubmit({ preventDefault: () => {} });
    expect(axios.post).toHaveBeenCalledWith(
      "https://acebook-team-life-savers.herokuapp.com/sessions",
      {
        user: { email: "", password: "" },
      },
      { withCredentials: true }
    );
  } catch (error) {
    throw error;
  }
});

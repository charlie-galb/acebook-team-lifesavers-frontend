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
  expect(container.textContent).toMatch(/Email address/);
  expect(container.textContent).toMatch(/Password/);
});

it("sends a post request", async () => {
  const login = new Login();
  login.state = {
    email: "",
    password: ""
  };
  login.props = jest.fn(function () {
    return this;
  })

  const mockHandleSuccessfulAuth = jest
    .spyOn(login.props, 'handleSuccessfulAuth')
    .mockImplementation(() => jest.fn(function () {
      return this;
    }))
  
  try {
    login.handleSubmit({ preventDefault: () => {} });
    expect(mockHandleSuccessfulAuth).toHaveBeenCalledWith(
      "https://acebook-team-life-savers.herokuapp.com/sessions",
      {
        user: { email: "", password: "" },
      },
    );
  } catch (error) {
    throw error;
  }
});

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "./Home.js";
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

it("renders registration, login, and logout inputs", function () {
  act(() => {
    render(<Home />, container);
  });
  expect(container.textContent).toContain("Register");
  expect(container.textContent).toContain("Login");
  expect(container.textContent).toContain("Logout");
});

it("sends a post request", async () => {
  // const mockCallback = jest.fn();
  const home = new Home();
  
  try {
    await home.handleLogoutClick();
    expect(axios.post).toHaveBeenCalledWith(
      "https://acebook-team-life-savers.herokuapp.com/log_out",
      { withCredentials: true }
    );
  } catch (error) {
    throw error;
  }
});

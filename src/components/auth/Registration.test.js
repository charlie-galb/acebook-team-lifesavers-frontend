import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Registration from "./Registration.js";
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

it("renders reg form", function () {
  act(() => {
    render(<Registration />, container);
  });
  expect(container.textContent).toContain("Register");
});

it("sends a post request", async () => {
  const reg = new Registration();

  reg.state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    registrationErrors: "",
  };
  
  try {
    await reg.handleSubmit({ preventDefault: () => {} });

    expect(axios.post).toHaveBeenCalledWith(
      "https://acebook-team-life-savers.herokuapp.com/users",
      {
        user: { email: "", name: "", password: "", password_confirmation: "" },
      },
    );
  } catch (error) {
    throw error;
  }
});

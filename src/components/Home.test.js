import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "./Home.js";
import { jest } from "@jest/globals";

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

it("renders registration and login inputss", function () {
  act(() => {
    render(<Home />, container);
  });
  expect(container.textContent).toMatch(/Sign Up/);
  expect(container.textContent).toMatch(/Log In/);
});



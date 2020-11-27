import App from './App';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { jest } from "@jest/globals";

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

it('renders the home sign up/log in page', () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toMatch(/Sign Up/);
  expect(container.textContent).toMatch(/Log In/);
});

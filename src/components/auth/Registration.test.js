import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Registration from './Registration.js'
import { jest } from '@jest/globals';
import axios from 'axios'
import handleSubmit from './Registration.js'

jest.mock("axios")
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

it('renders reg form', function(){
  act(() => {
    render(<Registration />, container);
  })
  expect(container.textContent).toContain("Register")
})

it('sends a post request', async () => {
  
  axios.post.mockImplementation(() => Promise.resolve({
    data: {
      results: ["user: {name: 'test'}"]
    }
  }))
  const response = new handleSubmit('/localhost::3001/users')
  expect(response).toEqual(["user: {name: 'test'}"])
})

import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Registration from './Registration.js'
import { jest } from '@jest/globals';
import axios from 'axios'

import handleSubmit from './Registration.js'
const TestRenderer = require('react-test-renderer');

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
  // Mount/render (lookup jest mounting/rending react components)
  // https://reactjs.org/docs/test-renderer.html
  const mockCallback = jest.fn();
  const reg = new Registration();
  const registration = TestRenderer.create(
    <Registration handleSuccesfulAuth="mockCallback" />
  );

  // Jest 
  //registration.setState.name = 'test';
  //registration.state.email = 'test@test.com';
  //registration.state.password = 'pword';
  //registration.state.password_confirmation = 'pword';
  reg.state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    registrationErrors: "",
  };
  //reg.handleSubmit()

  // expect axios to have been called with url, data from form, 3 param
  //expect(axios.post).toHaveBeenCalledWith(...);
  //expect(axios.mock.calls[0][0]).toEqual('/localhost::3001/users')

  // expect mockCallback to have been called with ....
  
  // await axios.post.mockImplementation(() => Promise.resolve({
  //   data: {
  //     status: created
  //   }
  // }))
  //const response = new handleSubmit('/localhost::3001/users')
  //expect(axios.post).toHaveBeenCalledWith("http://localhost:3001/users", {"user": {"email": "", "name": "", "password": "", "password_confirmation": ""}}, {"withCredentials": true})
  //expect(reg.props.handleSuccesfulAuth).toHaveBeenCalledWith("http://localhost:3001/users", {"user": {"email": "", "name": "", "password": "", "password_confirmation": ""}}, {"withCredentials": true})
  try {
    reg.handleSubmit();

    expect(axios.post).toHaveBeenCalledWith("http://localhost:3001/users", {"user": {"email": "", "name": "", "password": "", "password_confirmation": ""}}, {"withCredentials": true})
  } catch(error) {
    throw error;
  }  
})

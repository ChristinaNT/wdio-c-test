'use strict';

/* global $ */

const { When } = require('@cucumber/cucumber');
const Login = require('../../pages/Login');

When('I submit to login', () => {
  Login.clickSubmit()
});

When(/^I try to use valid credentials, "(.*)" to login$/,  username => {
  export default (isValid, username) => {
    const password = isValid
      ? credentials.find(creds => creds.username === username).password
      : "randomPassword";
    login.signIn(username, password);
  }; 
});
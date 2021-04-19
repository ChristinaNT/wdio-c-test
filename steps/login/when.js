'use strict';

/* global $ */

const { When } = require('@cucumber/cucumber');
const Login = require('../../pages/Login');

When('I submit to login', () => {
  Login.clickSubmit()
});

When(/^I use valid credentials "(.*)" and "(.*)" to login$/, (username, password) => {
  Login.signIn(username, password);
});
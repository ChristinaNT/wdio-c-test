'use strict';

/* global $ */

const { When } = require('@cucumber/cucumber');
const Login = require('../../pages/Login');

When('I submit to login', () => {
  Login.clickSubmit()
});

When('I use credentials {} and {}', (username, password) => {
  Login.signIn(username, password)
});
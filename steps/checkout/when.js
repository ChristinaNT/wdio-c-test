'use strict';

/* global $ */

const { When } = require('@cucumber/cucumber');
const Actions = require('../../support/actions');
const Checkout = require('../../pages/Checkout');

When('I submit firstname {} lastname {} and zipcode {} information', (fname, lname, zcode) => {
  Checkout.enterInfo(fname, lname, zcode)
});

When('I check the Checkout summary', () => {
  Checkout.checkSummary()
});
'use strict';

/* global $ */

const { Then } = require('@cucumber/cucumber');
const Checkout = require('../../pages/Checkout');

Then('I can confirm the items I bought', () => {
  Checkout.boughtItems();
});
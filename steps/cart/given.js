'use strict';

/* global $ */

const { Given } = require('@cucumber/cucumber');
const Cart = require('../../pages/Cart');

Given('I have added items to my cart', () => {
  Cart.itemsInCart();
});
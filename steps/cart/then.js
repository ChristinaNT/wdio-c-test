'use strict';

/* global $, browser */

const { Then } = require('@cucumber/cucumber');
const Cart = require('../../pages/Cart');


Then('I am directed to my shopping cart page', () => {
  Cart.directToCart()
});

Then('I can see my added items', () => {
  Cart.seeAddedItems()
});

Then('the cart count shows {}', (amount) => {
  Cart.checkAmount(amount)
});

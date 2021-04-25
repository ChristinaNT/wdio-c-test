'use strict';

/* global $ */

const { When } = require('@cucumber/cucumber');
const Cart = require('../../pages/Cart');

When('I click the shopping cart icon', () => {
  Cart.clickCartIcon()
});

When('I look at the shopping cart list', () => {
 Cart.checkCartList()
});

When('I select the sorting dropdown', () => {
 Cart.clickSorter()
});

When('I select to sort by {} to {}', (first, last) => {
  Cart.sortInventory(first,last)
});
'use strict';

/* global $ */

const { Given } = require('@cucumber/cucumber');
const login = require('../../pages/Login');
const inventory = require('../../pages/Inventory');
const cart = require('../../pages/Cart');
const checkout = require('../../pages/Checkout');

Given(/^the browser is at the "(Inventory|Login|Cart|Checkout)" page$/, page => {
  switch (page) {
    case "Inventory":
      browser.url(inventory.url);
      break;
    case "Login":
      browser.url(login.url);
      break;
    case "Cart":
      browser.url(cart.url);
      break;
      case "Checkout":
        browser.url(checkout.url);
        break;
    default:
      console.log(`Invalid Page ${page}`);
  }
});
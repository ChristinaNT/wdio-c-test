'use strict';

/* global browser */

const { Given } = require('@cucumber/cucumber');
const { expect } = require('chai');
const Actions = require('../../support/actions');
const login = require('../../pages/Login');
const inventory = require('../../pages/Inventory');
const cart = require('../../pages/Cart');
const checkout = require('../../pages/Checkout');

Given('I am logged in', () => {
  Actions.login();
});


Given(/^Landed on the "(Inventory|Login|Cart|Checkout)" page$/, page => {
  switch (page) {
    case "Inventory":
      expect(browser.getUrl()).to.have.string(inventory.url);
      break;
    case "Login":
      expect(browser.getUrl()).to.have.string(login.url);
      break;
    case "Cart":
      expect(browser.getUrl()).to.have.string(cart.url);
      break;
      case "Checkout":
        expect(browser.getUrl()).to.have.string(checkout.url);
        break;
    default:
      console.log(`Invalid Page ${page}`);
  }
  
});
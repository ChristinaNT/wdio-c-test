'use strict';

/* global $$ */

const { Then } = require('@cucumber/cucumber');
const inventory = require('../../pages/Inventory');

Then('I should see items sorted in {} price order', (order) => {
  inventory.sortItemPrices(order)
});

Then('I should see items sorted in name {} order', (order) => {
  inventory.sortItemNames(order)
});
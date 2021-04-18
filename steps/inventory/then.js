'use strict';

/* global $$ */

const { Then } = require('@cucumber/cucumber');
const inventory = require('../../pages/Inventory');

Then('I should see items sorted in {} price order', (order) => {
  inventory.sortItems(order)
});
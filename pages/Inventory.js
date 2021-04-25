const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-sorted'));

class Inventory {
    get url() {
      return "https://www.saucedemo.com/inventory.html";
    }
  
    sortItemPrices(order){
        const prices = [...$$('.inventory_item_price')].map(node => Number(node.getText().slice(1)));
        let descending = (order !== 'ascending') ? true : false;
        expect(prices).to.be.sorted({ descending });
    }

    sortItemNames(order){
      const itemNames = [...$$('.inventory_item_name')].map(node => String(node.getText()));
      let descending = (order !== 'ascending') ? true : false;
      expect(itemNames).to.be.sorted({ descending });
  }
  }
  
  module.exports = new Inventory();
  
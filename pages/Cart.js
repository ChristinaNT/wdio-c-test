const { expect, assert } = require('chai');
class Cart {
    get url() {
      return "https://www.saucedemo.com/cart.html";
    }
  
    itemsInCart(){
        expect($('.shopping_cart_badge')).to.exist;
    }
    directToCart(){
        expect(browser.getUrl()).to.have.string(this.url);
    }

    seeAddedItems(){
        assert.isNotNull($('.cart_item'));
    }
    checkAmount(amount){
        expect($('.shopping_cart_badge').getText()).to.equal(amount);
    }

  }
  
  module.exports = new Cart();
  
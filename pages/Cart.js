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
    clickCartIcon(){
        $('.shopping_cart_link').click();
    }
    checkCartList(){
        $('.cart_list').waitForDisplayed(5000);
    }
    clickSorter(){
        $('.product_sort_container').click();
    }

    sortInventory(first,last){
        const sort = first.slice(0, 2) + last.slice(0, 2);
  
        $(`option[value=${sort}]`).click();
    }

  }
  
  module.exports = new Cart();
  
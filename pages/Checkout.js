const { expect } = require('chai');
class Checkout {
    get url() {
      return "https://www.saucedemo.com/checkout-step-two.html";
    }
    get fname() {
        return $("#first-name");
      }
  
      get lname() {
        return $("#last-name");
      }
      get zcode() {
        return $("#postal-code");
      }
    
      get submitInfo() {
        return $(".cart_button");
      }
    
    
 
    boughtItems(){

        const itemOrCart = $('.cart_item') || $('.cart_list');
        itemOrCart.waitForDisplayed(5000);
        
    }

    enterInfo(fname, lname, zcode ){
        this.fname.waitForDisplayed(5000);
        this.fname.setValue(fname);
        this.lname.setValue(lname);
        this.zcode.setValue(zcode);
        this.submitInfo.click();
  }
  checkSummary(){
    $('#checkout_summary_container').waitForDisplayed(5000);
  }
}
  
  module.exports = new Checkout();
  
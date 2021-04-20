class Login {
    get url() {
      return "https://www.saucedemo.com/";
    }
  
    get emailInput() {
      return $("#user-name");
    }

    get passwordInput() {
      return $("#password");
    }
  
    get signInButton() {
      return $("#login-button");
    }
  
    get errorMessage() {
      return $("div.error-message-container.error h3");
    }
  
    /**
     * Signs in
     *
     * @param {String} email - Email
     * @param {String} password - Button
     */
    signIn(email, password) {
      this.emailInput.waitForDisplayed(5000);
      this.emailInput.setValue(email);
      this.passwordInput.setValue(password);
    }
    clickSubmit(){
        this.signInButton.click();
    }
  }
  
  module.exports = new Login();
  
Feature: Checkout

  Scenario Outline: As a logged user, I can checkout when I am ready
    Given the browser is at the "Login" page
    And I use valid credentials "<username>" and "<password>" to login
    When I submit to login
    When I click the shopping cart icon
    When I click the Checkout button
    And I submit firstname Tine lastname Thalay and zipcode 10314 information
    Then the browser is at the "Checkout" page
    Examples:
      | username      | password     |
      | standard_user | secret_sauce |

  Scenario: As a logged user, I can confirm my items at checkout
    Given the browser is at the "Checkout" page
    When I check the Checkout summary
    Then I can see the list of items selected
    And I can see the total of my purchase

  Scenario: As a logged user, I can complete my purchase
    Given the browser is at the "Checkout" page
    When I click the Finish button
    Then I can confirm I completed my purchase
Feature: Purchase Swag on Sauce Demo

  Scenario Outline: As a registered user, I can log in
    Given the browser is at the "Login" page
    And I use valid credentials "<username>" and "<password>" to login
    When I submit to login
    Then Landed on the "Inventory" page

    Examples:
      | username      |password      |
      | standard_user | secret_sauce |

  Scenario: As a logged user, I can sort items
    Given the browser is at the "Inventory" page
    When I select the sorting dropdown
    And I select to sort by lowest to highest price
    Then I should see items sorted in ascending price order

  Scenario: As a logged user, I can add items to the cart
    When I add an item to the cart
    And I add another item to the cart
    Then the cart count shows 2

  Scenario: As a logged user, I can see added items in the cart page
    Given the browser is at the "Cart" page
    And I have added items to my cart
    When I look at the shopping cart list
    Then I can see my added items

  Scenario: As a logged user, I can remove items from the cart
    Given the browser is at the "Cart" page
    When I remove an item from the cart
    Then the cart count shows 1

  Scenario: As a logged user, I can add another item to the cart
    Given the browser is at the "Inventory" page
    When I add an item to the cart
    Then the cart count shows 2

  Scenario: As a logged user, I can checkout when I am ready
    Given I am logged in
    And the browser is at the "Cart" page
    When I click the Checkout button
    And I submit firstname Tine lastname Thalay and zipcode 10314 information
    Then the browser is at the "Checkout" page

  Scenario: As a logged user, I can confirm my items at checkout
    Given Landed on the "Checkout" page
    When I check the Checkout summary
    Then I can see the list of items selected
    And I can see the total of my purchase

  Scenario: As a logged user, I can complete my purchase
    Given Landed on the "Checkout" page
    When I click the Finish button
    Then I can confirm I completed my purchase
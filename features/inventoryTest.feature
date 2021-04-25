Feature: Inventory/Cart Navigation

  Scenario Outline: As a logged user, I can sort items
    Given the browser is at the "Login" page
    And I use valid credentials "<username>" and "<password>" to login
    When I submit to login
    Then Landed on the "Inventory" page
    When I select the sorting dropdown
    And I select to sort by z to a
    Then I should see items sorted in name descending order

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |

  Scenario: As a logged user, I can add items to the cart
    When I add an item to the cart
    And I add another item to the cart
    Then the cart count shows 2

  Scenario: As a logged user, I can remove items from the cart
    Given the browser is at the "Cart" page
    When I remove an item from the cart
    Then the cart count shows 1
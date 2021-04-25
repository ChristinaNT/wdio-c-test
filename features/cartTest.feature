Feature: Cart Navigation

  Scenario Outline: As a logged user, I can navigate to the shopping cart
    Given the browser is at the "Login" page
    And I use valid credentials "<username>" and "<password>" to login
    When I submit to login
    When I click the shopping cart icon
    Then I am directed to my shopping cart page

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |

  Scenario: As a logged user, I can see added items in my shopping cart page
    Given the browser is at the "Cart" page
    And I have added items to my cart
    When I look at the shopping cart list
    Then I can see my added items

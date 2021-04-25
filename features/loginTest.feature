Feature: Login

  Scenario Outline: As a registered user, I can log in

    Given the browser is at the "Login" page
    And I use valid credentials "<username>" and "<password>" to login
    When I submit to login
    Then Landed on the "Inventory" page

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
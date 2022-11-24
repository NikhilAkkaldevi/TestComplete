Feature: SimplePage

  Scenario: Verify user can start the server
    Given Click on simple button
    Then Enter host address "0.0.0.0"
    And Enter port number "4723"
    Then Click on start server button
    Then Verify the server is running text is dipslyed on the header
    Then Verify welcom to appium message is displayed
    
    
    
    
    
    
    

    


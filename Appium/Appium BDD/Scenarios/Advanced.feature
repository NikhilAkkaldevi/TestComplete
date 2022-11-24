Feature: Advanced 

  Scenario: Add values in advanced page
    Given Click on advanced page
    Then I entered server address "0.0.0.0"
    And I entered the server port number "4723"
    And I entered the logFile path "Test Path"
    And I entered the log Level text "Debug"

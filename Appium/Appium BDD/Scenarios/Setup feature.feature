Feature: SetupPage

  Scenario: Launch the appium app
    Given Run the appium.exe file
    Then Maximize the appium window
    Then Wait until the simple button is visible
    
    
  Scenario: Close the appium app
    Given close the application
    
    
    

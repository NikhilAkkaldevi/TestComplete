Feature: Initial setup 

  Scenario: Launch Appium.exe
    Given Terminate the appium process running in the task manager
    Then Launch the application
    And Maximize window
    Then Wait for simple button is displayed on screen
    
    
    Scenario: Close Appium.exe
      Given Click on close button
      Then send the log or results to log folder
    
    
    
    
    
    


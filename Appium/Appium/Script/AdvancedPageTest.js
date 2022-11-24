﻿//USEUNIT AdvancedPage
//USEUNIT ExcelUtils
//USEUNIT LandingPage

function verify_user_can_enter_general_details()
{
      ExcelUtils.readDataFromExcel("TestData", "Advanced")
      var ArrayVar = ProjectSuite.Variables.UserData
      LandingPage.clickOnAdvanceBtn();
      
      for(var itr=0; itr<=ArrayVar.RowCount-1;itr++)
      {            
          AdvancedPage.enterTxtInServerAddress(ArrayVar.item("Server Address",itr));
          AdvancedPage.enterTxtInServerPort(ArrayVar.item("Server Port",itr));
          AdvancedPage.enterTxtInLogFilePath(ArrayVar.item("LogFile Path",itr));
          AdvancedPage.enterTxtLogLevel(ArrayVar.item("Log Level",itr));
      }
}




      
      

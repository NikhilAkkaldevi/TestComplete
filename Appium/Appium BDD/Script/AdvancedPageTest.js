﻿//USEUNIT LandingPage
//USEUNIT AdvancedPage

function verify_user_can_enter_general_details()
{
    LandingPage.clickOnAdvanceBtn();
    AdvancedPage.enterTxtInServerAddress("0.0.0.0");
    AdvancedPage.enterTxtInServerPort("4723");
    AdvancedPage.enterTxtInLogFilePath("Test");
    AdvancedPage.enterTxtLogLevel("debugTest");
}

//USEUNIT LandingPage
//USEUNIT SimplePage
//USEUNIT ServerIsRunningPage


function verify_user_can_start_server(Param1,Param2)
{
    LandingPage.clickOnSimpleBtn();
    SimplePage.enterTxtInHost(Param1);
    SimplePage.enterTxtInPort(Param2);
    LandingPage.clickOnStartServerBtn();
    ServerIsRunningPage.verifyTheServerIsRunningTxt();
    ServerIsRunningPage.verifyWelcomeToAppiumTxt(); 
}
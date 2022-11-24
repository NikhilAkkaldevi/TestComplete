


Given("Click on simple button", function ()
{
    LandingPage.clickOnSimpleBtn();
});

Then("Enter host address {arg}", function (param1)
{
    SimplePage.enterTxtInHost(Param1);
});

Then("Enter port number {arg}", function (param1)
{
    SimplePage.enterTxtInPort(Param1);
});

Then("Click on start server button", function ()
{
    LandingPage.clickOnStartServerBtn();
});

Then("Verify the server is running text is dipslyed on the header", function ()
{
    ServerIsRunningPage.verifyTheServerIsRunningTxt();
});

Then("Verify welcom to appium message is displayed", function ()
{
    ServerIsRunningPage.verifyWelcomeToAppiumTxt();
});

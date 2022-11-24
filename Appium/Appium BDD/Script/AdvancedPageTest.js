//USEUNIT AdvancedPage
//USEUNIT ExcelUtils
//USEUNIT LandingPage

Given("Click on advanced page", function ()
{
    LandingPage.clickOnAdvanceBtn();
});

Then("I entered server address {arg}", function (param1)
{
    AdvancedPage.enterTxtInServerAddress(param1)
});

Then("I entered the server port number {arg}", function (param1)
{
    AdvancedPage.enterTxtInServerPort(param1)
});

Then("I entered the logFile path {arg}", function (param1)
{
    AdvancedPage.enterTxtInLogFilePath(param1)
});

Then("I entered the log Level text {arg}", function (param1)
{
    AdvancedPage.enterTxtLogLevel(param1)
});

//USEUNIT LandingPage
//USEUNIT SimplePage
//USEUNIT ServerIsRunningPage

Given("Click on simple button", function ()
{
  LandingPage.clickOnSimpleBtn();
});

Then("Enter the host text {arg}", function (param1)
{
  SimplePage.enterTxtInHost(param1);
});

Then("Enter port number {arg}", function (param1)
{
   SimplePage.enterTxtInPort(param1);
});

Then("Click on the start server button", function ()
{
  LandingPage.clickOnStartServerBtn();
});

Then("validate the server is running", function ()
{
  ServerIsRunningPage.verifyTheServerIsRunningTxt();
});

Then("validate welcome to appium text is displayed", function ()
{
  ServerIsRunningPage.verifyWelcomeToAppiumTxt(); 
});



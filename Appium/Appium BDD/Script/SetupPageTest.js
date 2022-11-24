//USEUNIT LandingPage
//USEUNIT Action
//USEUNIT CommonUtils


Given("Terminate the appium process running in the task manager", function ()
{
  CommonUtils.terminateProcess("Appium.Application")
});

Then("Launch the application", function ()
{
  var launchApplication =  TestedApps.Appium.Run();
});

Then("Maximize window", function ()
{
  Action.maximizeWindow();
});

Then("Wait for simple button is displayed on screen", function ()
{
  Action.waitForElement(LandingPage.simpleBtn);
});



Given("Click on close button", function ()
{
  Sys.Process("Appium").BrowserWindow(0).Close();
});

Then("send the log or results to log folder", function ()
{
  CommonUtils.saveResultsToFolder();
});







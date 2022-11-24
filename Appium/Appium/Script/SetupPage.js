//USEUNIT LandingPage
//USEUNIT Action

function launch_appium()
{ 
   var launchApplication =  TestedApps.Appium.Run(); 
   Action.maximizeWindow();
   Action.waitForElement(LandingPage.simpleBtn);
}

function close_appium()
{
    Sys.Process("Appium").BrowserWindow(0).Close();
}

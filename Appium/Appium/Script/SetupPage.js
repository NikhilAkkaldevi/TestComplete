//USEUNIT LandingPage
//USEUNIT Action
//USEUNIT CommonUtils

function launch_appium()
{ 
   CommonUtils.terminateProcess("Appium.Application")
   var launchApplication =  TestedApps.Appium.Run(); 
   Action.maximizeWindow();
   Action.waitForElement(LandingPage.simpleBtn);
}

function close_appium()
{
    Sys.Process("Appium").BrowserWindow(0).Close();
    
    CommonUtils.saveResultsToFolder();
}

//USEUNIT Action

theServerIsRunningTxt = "//div[text()='The server is running']";
startNewSessionBtn = "#startNewSessionBtn";
welcomeToAppiumTxt = "//span[contains(text(), 'Welcome to Appium v1.18.2')]";


function verifyTheServerIsRunningTxt()
{
    Action.verifyElement(theServerIsRunningTxt);
}


function verifyStartNewSessionBtn()
{
    Action.verifyElement(startNewSessionBtn);
}


function verifyWelcomeToAppiumTxt()
{
    Action.verifyElement(welcomeToAppiumTxt);
}



//USEUNIT Action
//USEUNIT ServerIsRunningPage

appiumLogo = "//img";
simpleBtn = "//button[.='Simple']";
advanceBtn = "//button[.='Advanced']";
presetsBtn = "//button[.='Presets']";
startServerBtn = "//button[.='Start Server v1.18.2']";
editConfigurationsBtn = "//button[.='Edit Configurations']";





function verifyLogo()
{
    Action.verifyElement(appiumLogo);
}


function clickOnSimpleBtn()
{
    Action.clickBtn(simpleBtn);
    Action.waitForElement(startServerBtn);
}


function clickOnAdvanceBtn()
{
    Action.clickBtn(advanceBtn);
    Action.waitForElement(startServerBtn);
}


function clickOnPresetsBtn()
{
    Action.clickBtn(presetsBtn);
    Action.waitForElement(startServerBtn);
}


function clickOnStartServerBtn()
{
    Action.clickBtn(startServerBtn);
    Action.waitForElement(ServerIsRunningPage.theServerIsRunningTxt);
}


function clickOnEditConfigurationsBtn()
{
    Action.clickBtn(editConfigurationsBtn);
    Action.waitForElement(startServerBtn);
}

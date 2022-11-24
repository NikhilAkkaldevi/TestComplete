

function clickBtn(eleProperty)
{
    var pageObj = Sys.Process("Appium").Page("*");
    
    var Button = pageObj.FindElement(eleProperty);
    
      if(Button.Exists)
      {
          Log.Checkpoint(Button.contentText+ " button existed")
          Button.Click();
          Delay(Project.Variables.delayTime);
      }
      else
      {
          Log.Error("Button is not existed");
      }
}


function waitForElement(eleProperty)
{
    var pageObj = Sys.Process("Appium").Page("*");
    var waitElement = pageObj.WaitElement(eleProperty,30000);
    var property = pageObj.FindElement(eleProperty).contentText;
    Log.Checkpoint(property+" element is displayed")
}


function maximizeWindow()
{
    Sys.Process("Appium").BrowserWindow(0).Maximize();
    Log.Checkpoint("Maximized window successfully");
}


function verifyElement(eleProperty)
{
    var pageObj = Sys.Process("Appium").Page("*");
    var eleVerify = pageObj.FindElement(eleProperty).contentText;
    Log.Checkpoint(eleVerify+ " text existed");  
}


function enterTxt(eleProperty,Text)
{
    var pageObj = Sys.Process("Appium").Page("*");

    var eleEnterTxt = pageObj.FindElement(eleProperty);

        if(eleEnterTxt.Exists)
        {
            eleEnterTxt.Keys("^a [BS]");
            eleEnterTxt.Keys(Text);
            Log.Checkpoint(Text+ " text entered successfully");
        }
        else
        {
            Log.Error("Text field not found");
        }   
}


















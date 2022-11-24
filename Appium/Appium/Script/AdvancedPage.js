//USEUNIT Action


inputServerAddress = "//input[@name='address']";
inputServerPort = "//input[@name='port']";
inputLogFilePath = "//input[@name='log']";
inputLogLevel = "//input[@name='loglevel']";


function enterTxtInServerAddress(Text)
{
    Action.enterTxt(inputServerAddress,Text);
}


function enterTxtInServerPort(Text)
{
    Action.enterTxt(inputServerPort,Text);
}


function enterTxtInLogFilePath(Text)
{
    Action.enterTxt(inputLogFilePath,Text);
}

function enterTxtLogLevel(Text)
{
    Action.enterTxt(inputLogLevel,Text);
}
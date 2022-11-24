//USEUNIT Action

inputHost = "//input[@name='address']";
inputPort = "//input[@name='port']";




function enterTxtInHost(Text)
{
    Action.enterTxt(inputHost,Text);
}


function enterTxtInPort(Text)
{
    Action.enterTxt(inputPort,Text);
}


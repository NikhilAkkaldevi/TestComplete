
//USEUNIT Action

presetsPageTxt = "//div[text()=\"You don't yet have any presets. Create some on the Advanced tab.\"]";


function verifyPresetsPageTxt()
{
    Action.verifyElement(presetsPageTxt);
}

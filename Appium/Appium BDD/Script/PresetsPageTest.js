//USEUNIT LandingPage
//USEUNIT PresetsPage



Given("Click on the presents button", function ()
{
  LandingPage.clickOnPresetsBtn();
});

Then("validate the text present on page", function ()
{
  PresetsPage.verifyPresetsPageTxt();
});



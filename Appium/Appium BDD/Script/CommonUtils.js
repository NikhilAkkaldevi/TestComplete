﻿

function terminateProcess(enterApplicationNameTxt)
{
      var Process = Sys.WaitProcess(enterApplicationNameTxt);
      if (Process.Exists)
      {
        Process.Terminate();
      }
}




function saveResultsToFolder()
{   
    Log.SaveResultsAs(ProjectSuite.Path+ "Log\\", 1, true, 0)
}



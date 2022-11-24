


function SendEmail(mFrom, mTo, mSubject, mBody, mAttach)
{
  var schema, mConfig, mMessage;

  try
  {
    schema = "http://schemas.microsoft.com/cdo/configuration/";
    mConfig = getActiveXObject("CDO.Configuration");
    mConfig.Fields.$set("Item", schema + "sendusing", 2); 
    mConfig.Fields.$set("Item", schema + "smtpusessl", 1); 
    mConfig.Fields.$set("Item", schema + "smtpserver", "ServerName"); 
    mConfig.Fields.$set("Item", schema + "smtpserverport", 465); 
    
      if(mailType = "Gmail")
      {
          mConfig.Fields.$set("Item", schema + "smtpserver", "smtp.gmail.com");
          mConfig.Fields.$set("Item", schema + "smtpserverport", 465);
      }
      else
      {
          mConfig.Fields.$set("Item", schema + "smtpserver", "smtp-mail.outlook.com");
          mConfig.Fields.$set("Item", schema + "smtpserverport", 587);
      }
     

    mConfig.Fields.$set("Item", schema + "smtpauthenticate", 1);

    // User name (if needed)
    // mConfig.Fields.$set("Item", schema + "sendusername", "support@mycompany.com");

    // User password (if needed)
    // mConfig.Fields.$set("Item", schema + "sendpassword", "********");

    mConfig.Fields.Update();

    mMessage = getActiveXObject("CDO.Message");
    mMessage.Configuration = mConfig;
    mMessage.From = mFrom;
    mMessage.To = mTo;
    mMessage.Subject = mSubject;
    mMessage.HTMLBody = mBody;

    aqString.ListSeparator = ",";
      for(let i = 0; i < aqString.GetListLength(mAttach); i++)
          mMessage.AddAttachment(aqString.GetListItem(mAttach, i));
          mMessage.Send();
      }
      catch (exception)
      {
          Log.Error("Email cannot be sent", exception.message);
          return false;
      }
      
    Log.Message("Message to <" + mTo + "> was successfully sent");
    return true;
}


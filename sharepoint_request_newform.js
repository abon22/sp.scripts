​​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

//--------Change 'Save' to 'Submit'-----------------
(function ($, undefined)
{
   
RequestStarted();
    $("document").ready(function ()
    {
        var inputcontrols = document.getElementsByTagName("input");
        for(i = 0; i<inputcontrols.length; i++)
        {
            if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                inputcontrols[i].value = "Submit";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        ribbonSave.text("Submit");
    
           
    });
})(jQuery);
//------------------------------------

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

//-----------------------------------------------------------------------------------------------------------

 $(function() {

 SPUtility.HideSPField('Estimated Completion Date');
 SPUtility.HideSPField('QA Status');
 SPUtility.HideSPField('Status');
 SPUtility.HideSPField('Phase');
 SPUtility.HideSPField('Assigned to');
 SPUtility.HideSPField('Notes');
 SPUtility.HideSPField('Reference Number');

  
 
})
  
    function init(){

 

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));
    


 }
 
 function onQuerySucceeded() {

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;
  
  
    SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
}

function onRequestFail(sender, args) {
    alert("Error: " + args.get_message());
    alert("Error: " + args.get_message());
}


function getUserProperties() {



targetUser = 'hoitcebu\\'+targetUser;
    // Replace the placeholder value with the target user's credentials.
     //alert(targetUser);
     
     

    // Get the current client context and PeopleManager instance.
    var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
  

    // Specify the properties to retrieve and target user for the 
    // UserProfilePropertiesForUser object.
    var profilePropertyNames = ["PreferredName", "Department", "Manager","WorkEmail"];
    var userProfilePropertiesForUser = 
        new SP.UserProfiles.UserProfilePropertiesForUser(
            clientContext,
            targetUser,
            profilePropertyNames);

    // Get user profile properties for the target user.
    // To get the value for only one user profile property, use the
    // getUserProfilePropertyFor method.
    userProfileProperties = peopleManager.getUserProfilePropertiesFor(
        userProfilePropertiesForUser);

    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
}

var work_email_var;
var department_var;
// This function runs if the executeQueryAsync call succeeds.
function onRequestSuccess() {
    var requestorName = userProfileProperties[0];
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];
    var workemail =  userProfileProperties[3];
    department_var = department;
    work_email_var = workemail;
    work_email();

}

function work_email() {

var workemail_temp = work_email_var;
//var res_immediate = workemail_temp.substring(9);
var key_var = workemail_temp;


ExecuteOrDelayUntilScriptLoaded(function () {

    setTimeout(function () {
        var dispTitle = "Requestor Name Required Field";
        var pickerDiv = $("[id$='ClientPeoplePicker'][title='" + dispTitle + "']");
        var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[pickerDiv[0].id];
        var usrObj = { 'Key': key_var};
        peoplePicker.AddUnresolvedUser(usrObj,true); 
        document.getElementById('Department_x002f_Section_bf86b4d7-d067-45cf-8171-5f838c8d4574_$TextField').value = department_var;
RequestEnded();
    }, 500);
}, "clientpeoplepicker.js");


}


var waitDialog=null;
function RequestEnded(sender, args) {
  try {
    waitDialog.close();
    waitDialog = null;
  } catch (ex) { }
};

function RequestStarted(sender, args) {
   ExecuteOrDelayUntilScriptLoaded(ShowWaitDialog, "sp.js");
  // alert("wait");
};

function ShowWaitDialog() {
  
      if (waitDialog == null) {
       
         waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Processing...', 'Please wait while request is in progress...', 110, 420);
      }else{

      }
   
};


 
 //---------------------------------------------------------------------------------------------------------------

</script><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you recieve an email once you save the request from sharepoint@houseofit.com.au indicating <br/> &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;. If you haven&#39;t recieve any email upon submittin​​g the request , Please send an email <br/> to 
   <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i><br/>


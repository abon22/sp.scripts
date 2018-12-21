<p>&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;


//------------------------------------------------------------------------
 $(document).ready(function()
{

//------change Save to Submit---------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    
//-------------------------------------

//         document.getElementById("Document_x0020_No_x002e__182cafba-8241-4be0-8c05-12ab63112c30_$TextField").className = "ms-input ms-spellcheck-true ";
// document.getElementById("Document_x0020_No_x002e__182cafba-8241-4be0-8c05-12ab63112c30_$TextField").size = "11";

// $("input[id='Document_x0020_No_x002e__182cafba-8241-4be0-8c05-12ab63112c30_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

$("input[id='Revision_335e364c-3978-42f4-8b85-ec8d4dfda6ee_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 


});

//------------------------------------------------------------------------

    function init(){

 SPUtility.GetSPField('Reference Number').MakeReadOnly();
SPUtility.HideSPField('Reference Number');

 SPUtility.GetSPField('Status').MakeReadOnly();
SPUtility.HideSPField('Status');


SPUtility.HideSPField('Notes');

SPUtility.HideSPField('Date and Time Created');

SPUtility.HideSPField('Duration (Request to Approve/Reject/Closed)');

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
    var profilePropertyNames = ["PreferredName", "Department", "Manager"];
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

var immediate_head_var;
// This function runs if the executeQueryAsync call succeeds.
function onRequestSuccess() {
    var requestorName = userProfileProperties[0];
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];
    document.getElementById('Requestor_x0027_s_x0020_Name_dcda19f9-49d6-4f54-bee5-ba231b633505_$TextField').value = requestorName;
   document.getElementById('Department_x002f_Section_041c8714-3aa7-4ca4-b959-31d9e6365f89_$TextField').value = department;
    immediate_head_var = manager ;
    immediate_head();

}

function immediate_head() {

var immediate_head_temp = immediate_head_var;
var res_immediate = immediate_head_temp.substring(9);
var key_var = "i:0#.w|hoitcebu\\"+res_immediate;


ExecuteOrDelayUntilScriptLoaded(function () {
    setTimeout(function () {

        var dispTitle = "Immediate Head Required Field";
        var pickerDiv = $("[id$='ClientPeoplePicker'][title='" + dispTitle + "']");
        var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[pickerDiv[0].id];
        var usrObj = { 'Key': key_var};
        peoplePicker.AddUnresolvedUser(usrObj,true); 

    }, 500);
}, "clientpeoplepicker.js");


}
 
 //---------------------------------------------------------------------------------------------------------------
 
 function PreSaveAction()

{
var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();
  //  alert(datetime);


 document.getElementById('Date_x0020_and_x0020_Time_x0020__5a3cdd77-1950-4a33-a3df-d8d2deecf8d4_$TextField').value = datetime;

return true
}
 

</script><i>&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin&#8203;&#8203;g the request , Please send an email to 
      <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>&#8203;&#8203;&#8203; or click the link.&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;</i></p>
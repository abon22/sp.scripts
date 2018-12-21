<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script>​​​​​<script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script>

//--------Change 'Save' to 'Submit'-----------------
(function ($, undefined)
{
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

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.

ExecuteOrDelayUntilScriptLoaded(init,'sp.js');

 var targetUser;
 
 $(function() {

SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Date and Time Created');
SPUtility.HideSPField('Status (Department Head)');
SPUtility.HideSPField('Status (HR)');
SPUtility.HideSPField('Status (Finance)');
SPUtility.HideSPField('Travel Cost Summary');
SPUtility.HideSPField('Total Travel Expense');
SPUtility.HideSPField('Company Sponsored Amount');
SPUtility.HideSPField('Loanable amount');
SPUtility.HideSPField('Monthly Payment');
SPUtility.HideSPField('Total of Months to be Paid');
SPUtility.HideSPField('Status (VP)');
SPUtility.HideSPField('Status (CEO)');
SPUtility.HideSPField('Comments');
SPUtility.HideSPField('Hereby');
SPUtility.HideSPField('Waiver');
SPUtility.HideSPField('Complete Name');
SPUtility.HideSPField('Date');
SPUtility.HideSPField('Reference Number');
SPUtility.HideSPField('Allocation Type');
SPUtility.HideSPField('Next Approver');

SPUtility.HideSPField('Duration (Requested to Confirm)');

 });

function init()
{

        //------------------------
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


function getUserProperties() {



targetUser = 'hoitcebu\\'+targetUser;
    // Replace the placeholder value with the target user's credentials.
   //  alert(targetUser);
     
     

    // Get the current client context and PeopleManager instance.
    var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
  

    // Specify the properties to retrieve and target user for the 
    // UserProfilePropertiesForUser object.
    var profilePropertyNames = ["PreferredName", "Department", "Manager", "PictureURL"];
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
    var pic_url =  userProfileProperties[3];
    document.getElementById('Requestor_x0027_s_x0020_Name_6f3b7490-6aee-47b2-b7e7-9a6f050c3db4_$TextField').value = requestorName;
    document.getElementById('Department_x002f_Section_867bfa56-d676-4ede-b113-9128dd19b643_$TextField').value = department;
  // document.getElementById('Travel_x0020_Location_5f4f4b11-5ed9-468f-aa22-dd17a3030eab_$TextField').value = manager;
    immediate_head_var = manager;
   // alert(immediate_head_var);

    immediate_head();
}


function immediate_head() {

var immediate_head_temp = immediate_head_var;
var res_immediate = immediate_head_temp.substring(9);
var key_var = "i:0#.w|hoitcebu\\"+res_immediate;

ExecuteOrDelayUntilScriptLoaded(function () {
setTimeout(function () {


//alert(res_immediate);

var dispTitle = "Department Head Required Field";
var pickerDiv = $("[id$='ClientPeoplePicker'][title='" + dispTitle + "']");
var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[pickerDiv[0].id];
var usrObj = { 'Key': key_var};
peoplePicker.AddUnresolvedUser(usrObj,true); 



    }, 500);
}, "clientpeoplepicker.js");


}



// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args){
document.getElementById('Requestor_x0027_s_x0020_Name_e94bbc9e-d7f9-40d7-a0d9-1079ce563da9_$TextField').value = "Error: " + args.get_message();
document.getElementById('Department_x002f_Section_578d208f-aef2-4cba-944b-b177e0ce774a_$TextField').value = "Error: " + args.get_message();

}

function PreSaveAction()

{
var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();
    //alert(datetime);
    
 document.getElementById('Date_x0020_and_x0020_Time_x0020__dcf256f4-7bc2-430b-bc5c-6105e0219fc5_$TextField').value = datetime;


    var cheque_cash = $("input[title='Cheque/Cash Issued to']").val();

    if(cheque_cash == "" || cheque_cash == null){
        alert("Please input Cheque/Cash Issued to field.")
        return false;
    }else{

        return true;//true

    }

}







</script><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you recieve an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t recieve any email upon submittin​​g the request , Please send an email to 
   <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i>
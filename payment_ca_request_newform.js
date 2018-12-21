<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>

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

SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Date and Time Created');

//SPUtility.HideSPField('Reference Number');
SPUtility.HideSPField('Immediate Head Status');
//SPUtility.HideSPField('Purchaser Status');
//SPUtility.HideSPField('Actual Price');
SPUtility.HideSPField('CEO Approval');
SPUtility.HideSPField('Allocation Type');
SPUtility.HideSPField('Finance Status');
SPUtility.HideSPField('VP Approval');
SPUtility.HideSPField('Time Ago');
SPUtility.HideSPField('Comments');
SPUtility.HideSPField('Reference Number');


//document.getElementById("Document_x0020_No_x002e__78659a11-17f8-4bbc-9ff1-e64724e0d837_$TextField").className = "ms-input ms-spellcheck-true ";
//document.getElementById("Document_x0020_No_x002e__78659a11-17f8-4bbc-9ff1-e64724e0d837_$TextField").size = "11";

//$("input[id='Document_x0020_No_x002e__78659a11-17f8-4bbc-9ff1-e64724e0d837_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

$("input[id='Revision_4164c288-82cd-443a-9023-c69454b0274c_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 


});


//------------------------------------------------------------------------

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
    document.getElementById('Requestor_x0027_s_x0020_Name_30d25d7d-3b0b-4327-9c87-c374627e9e99_$TextField').value = "Error: " + args.get_message();
    document.getElementById('Department_x002f_Section_05179162-b3ed-4d46-9c53-830f84c98ab4_$TextField').value = "Error: " + args.get_message();
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
   // alert(manager);
    document.getElementById('Requestor_x0027_s_x0020_Name_30d25d7d-3b0b-4327-9c87-c374627e9e99_$TextField').value = requestorName;
   document.getElementById('Department_x002f_Section_05179162-b3ed-4d46-9c53-830f84c98ab4_$TextField').value = department;
    immediate_head_var = manager;
    immediate_head();

}

function immediate_head() {

var immediate_head_temp = immediate_head_var;

var res_immediate = immediate_head_temp.substring(9);
console.log(res_immediate);
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
    //alert(datetime);
var cheque_cash = $("input[title='Cheque/Cash Issued to']").val();
//console.log(cheque_cash);

document.getElementById('Date_x0020_and_x0020_Time_x0020__cedf8593-5e63-4955-82b8-94363e35b967_$TextField').value = datetime;
 
// var varPriority = $("input[title='Date and Time Created']").val();
//alert(varPriority);
if(cheque_cash == "" || cheque_cash == null){
    alert("Please input Cheque/Cash Issued to field.")
    return false;
}else{

    return true;//true

}


}

</script><i><b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to 
      <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i> ​
    


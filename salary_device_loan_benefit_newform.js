<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script src="/SiteAssets/sputility.min.js"></script>​​​​​<script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script>

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
        
        
      // $('.ms-formtable tbody tr:eq(2) td:eq(0)').html('<h3 class="ms-standardheader"><nobr>Requestors Name<span class="ms-accentText" title="This is a required field."> *</span></nobr></h3>');
       
// document.getElementById("Document_x0020_No_x002e__5334dbf2-aa40-46fc-a9bc-2a9244d0624d_$TextField").className = "ms-input ms-spellcheck-true ";
// document.getElementById("Document_x0020_No_x002e__5334dbf2-aa40-46fc-a9bc-2a9244d0624d_$TextField").size = "11";
// $("input[id='Document_x0020_No_x002e__5334dbf2-aa40-46fc-a9bc-2a9244d0624d_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 
$("input[id='Revision_6c6d9db5-36e8-4df6-bea8-020d3c60ea48_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

        
    });
})(jQuery);
//------------------------------------

var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.



ExecuteOrDelayUntilScriptLoaded(init,'sp.js');


 var targetUser;

function init()
{
 
//SPUtility.GetSPField('Temp').MakeReadOnly();
//SPUtility.HideSPField('Temp');

//SPUtility.GetSPField('Date and Time Created').MakeReadOnly();



    
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
   // alert(targetUser_temp);
    document.getElementById('Target_x0020_User_d2f138ae-0b93-43bf-b885-fc77bb1b558e_$TextField').value = targetUser_temp;
  
  
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
    document.getElementById('Requestors_x0020_Name_dcd0107a-18a1-4023-8983-7c327ba271f6_$TextField').value = requestorName;
    document.getElementById('Department_x002f_Section_a586c436-d641-4d61-b2a7-944f93035f64_$TextField').value = department;
   // document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField').value = manager;
    immediate_head_var = manager;
    immediate_head();
    //alert(pic_url);
    
}

function immediate_head() {

var immediate_head_temp = immediate_head_var;
var res_immediate = immediate_head_temp.substring(9);
var key_var = "i:0#.w|hoitcebu\\"+res_immediate;


ExecuteOrDelayUntilScriptLoaded(function () {
    setTimeout(function () {

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
document.getElementById('Requestors_x0020_Name_dcd0107a-18a1-4023-8983-7c327ba271f6_$TextField').value = "Error: " + args.get_message();
document.getElementById('Department_x002f_Section_a586c436-d641-4d61-b2a7-944f93035f64_$TextField').value = "Error: " + args.get_message();}

var authority_0 = 0;
var authority_1 = 0;
var authority_2 = 0;
var deduct_check= 0;



 $(function() {

SPUtility.HideSPField('Reference Number');

 
SPUtility.GetSPField('Target User').MakeReadOnly();
SPUtility.HideSPField('Target User');

SPUtility.HideSPField('Department Head Status');
SPUtility.HideSPField('Loans');
SPUtility.HideSPField('Finance Status');
SPUtility.HideSPField('Release Date');
SPUtility.HideSPField('HR Status');
SPUtility.HideSPField('VP Status');
SPUtility.HideSPField('CEO Status');
SPUtility.HideSPField('Allocation Type');
SPUtility.HideSPField('Next Approver');
SPUtility.HideSPField('Notes');
SPUtility.HideSPField('Date and Time Created');
SPUtility.HideSPField('Duration (Request to Approve)');
SPUtility.HideSPField('Duration (Request to Reject)');


// SPUtility.HideSPField('Date and Time Created')
   SPUtility.HideSPField('Item Specification');
   SPUtility.HideSPField('From');
   SPUtility.HideSPField('To');
   SPUtility.HideSPField('Pay period with the amount of ₱');
   SPUtility.HideSPField('By every');
  
  var specs_div = document.getElementById('Item_x0020_Specification_fe8ea5fb-ba7b-420c-b44c-3747421a4723_$TextField_inplacerte');

 //-------------------------------------------------------------------------------------------------------
 
$("input[id='Loan_x0020_Type_3b2034b0-6a7e-48ac-9796-eabdbbc8604a_$RadioButtonChoiceField0']").change(function(){
    SPUtility.HideSPField('Item Specification');
    
    specs_div.innerHTML = "";
});

//-------------------------------------------------------------------------------------------------------

$("input[id='Loan_x0020_Type_3b2034b0-6a7e-48ac-9796-eabdbbc8604a_$RadioButtonChoiceField1']").change(function(){
    SPUtility.ShowSPField('Item Specification');
    
    specs_div.innerHTML = "<table cellspacing='0' border='1' class='ms-rteTable-default' style='width: 575px; height: 104px;'><tbody style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 2%; text-align: right;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'>Item:</span></td><td class='ms-rteTableOddCol-default' style='width: 16.6667%; text-decoration: underline;'><br/></td><td class='ms-rteTableEvenCol-default' style='width: 8%; text-align: right;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'>Brand Name:</span></td><td class='ms-rteTableOddCol-default' style='width: 16.6667%; text-decoration: underline;'><span style='text-decoration: underline;'></span></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='text-align: right; width: 2%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'>Model:</span></td><td class='ms-rteTableOddCol-default' style='text-decoration: underline;'></td><td class='ms-rteTableEvenCol-default' style='text-align: right; width: 8%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'>Color:</span></td><td class='ms-rteTableOddCol-default' style='text-decoration: underline;'></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='text-align: right; width: 2%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'>Shop/Location</span></td><td class='ms-rteTableOddCol-default' style='text-decoration: underline;'></td><td class='ms-rteTableEvenCol-default' style='text-align: right; width: 8%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'>Price:</span></td><td class='ms-rteTableOddCol-default' style='text-decoration: underline;'></td></tr></tbody></table>";
 
 
});

//-------------------------------------------------------------------------------------------------------


//AGREE TO PAY
//-------------------------------------------------------------------------------------------------------

$("input[id='Agree_x0020_to_x0020_repay_x0020_59b4d697-29fe-4873-9e02-b69a4ba3edd3_$RadioButtonChoiceField0']").change(function(){
   SPUtility.HideSPField('From');
   SPUtility.HideSPField('To');
   SPUtility.HideSPField('Pay period with the amount of ₱');
   SPUtility.HideSPField('By every');
   deduct_check= 0;
});

//-------------------------------------------------------------------------------------------------------


$("input[id='Agree_x0020_to_x0020_repay_x0020_59b4d697-29fe-4873-9e02-b69a4ba3edd3_$RadioButtonChoiceField1']").change(function(){
   
   
   SPUtility.ShowSPField('From');
   SPUtility.ShowSPField('To');
   SPUtility.ShowSPField('Pay period with the amount of ₱');
   SPUtility.ShowSPField('By every');
   deduct_check= 1;
   


});

//-------------------------------------------------------------------------------------------------------




 //---- CHECKBOXES---
 //-------------------------------------------------------------------------------------------------------
 
$('input[id=Authority_x0020_to_x0020_Deduct_36983ee3-ac6d-4f78-b089-8d7a94e59b8d_MultiChoiceOption_0').change( function() {

  if(document.getElementById('Authority_x0020_to_x0020_Deduct_36983ee3-ac6d-4f78-b089-8d7a94e59b8d_MultiChoiceOption_0').checked) {
   authority_0= 1;
} else {
    authority_0= 0;
}

});

//-------------------------------------------------------------------------------------------------------

$('input[id=Authority_x0020_to_x0020_Deduct_36983ee3-ac6d-4f78-b089-8d7a94e59b8d_MultiChoiceOption_1').change( function() {

  if(document.getElementById('Authority_x0020_to_x0020_Deduct_36983ee3-ac6d-4f78-b089-8d7a94e59b8d_MultiChoiceOption_1').checked) {
   authority_1= 1;
} else {
    authority_1= 0;
}

});

//-------------------------------------------------------------------------------------------------------

$('input[id=Authority_x0020_to_x0020_Deduct_36983ee3-ac6d-4f78-b089-8d7a94e59b8d_MultiChoiceOption_2').change( function() {

  if(document.getElementById('Authority_x0020_to_x0020_Deduct_36983ee3-ac6d-4f78-b089-8d7a94e59b8d_MultiChoiceOption_2').checked) {
   authority_2= 1;
} else {
    authority_2= 0;
}

});

//-------------------------------------------------------------------------------------------------------





})

function PreSaveAction()

{

var from = $("input[title='From']").val();
var to = $("input[title='To']").val();
var pay_period = $("input[title='Pay period with the amount of ₱']").val();
var by_every= $("select[title='By every']").val();


var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();
    //alert(datetime);


 document.getElementById('Date_x0020_and_x0020_Time_x0020__998fc44f-8102-43be-87e9-d9d6d563645f_$TextField').value = datetime;

 console.log("authority_0: "+authority_0)
 console.log("authority_1: "+authority_1)
 console.log("authority_2: "+authority_2)
 
if(deduct_check ==1){
    if(from == "" || to == "" ){
    alert("Please add value for From or To!");
    return false;
    }else if (pay_period == "" )
    {

    alert("Please add value for Pay period amount!");
    return false;
    }else if ( by_every == "" )
    {
    alert("Please add value for By every!");
    return false;

    }else
    {
    if(authority_0!= 1 || authority_1!= 1 || authority_2!= 1 )
{
alert("Check all authority deduction!");
return false;
}
else{

return true;

}
    }
 
}else{

if(authority_0!= 1 || authority_1!= 1 || authority_2!= 1 )
{
alert("Check all authority deduction!");
return false;
}
else{

return true;

}

}


}







</script><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you recieve an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t recieve any email upon submittin​​g the request , Please send an email to 
   <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i>




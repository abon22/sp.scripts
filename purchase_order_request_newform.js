<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;


//------------------------------------------------------------------------
 $(document).ready(function()
{

console.log("Version 2.0");
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

SPUtility.HideSPField('Immediate Head Status');
SPUtility.HideSPField('Purchaser Status');
SPUtility.HideSPField('Actual Price');
SPUtility.HideSPField('CEO Approval');
SPUtility.HideSPField('Finance Status');
SPUtility.HideSPField('VP Approval');
SPUtility.HideSPField('Time Ago');
SPUtility.HideSPField('Comments');
SPUtility.HideSPField('Reference Number');
SPUtility.HideSPField('Acknowledgement');


//document.getElementById("Document_x0020_No_x002e__78659a11-17f8-4bbc-9ff1-e64724e0d837_$TextField").className = "ms-input ms-spellcheck-true ";
//document.getElementById("Document_x0020_No_x002e__78659a11-17f8-4bbc-9ff1-e64724e0d837_$TextField").size = "11";

//$("input[id='Document_x0020_No_x002e__78659a11-17f8-4bbc-9ff1-e64724e0d837_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

//$("input[id='Revision_4164c288-82cd-443a-9023-c69454b0274c_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 


openDialog();

 var desc_div = document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField_inplacerte');
 
  desc_div.innerHTML = "<table cellspacing='0' class='ms-rteTable-default' style='width: 600px;'> <tbody> <tr class='ms-rteTableHeaderRow-default'> <th class='ms-rteTableHeaderFirstCol-default' rowspan='1' colspan='1' style='width: 6%; text-align: center;'> <font color='#191919' face='segoe ui, tahoma'> <span style='font-size: 13.3333px;'> <b>Qty</b></span></font></th> <th class='ms-rteTableHeaderOddCol-default' rowspan='1' colspan='1' style='width: 38%; text-align: center;'> <font color='#191919' face='segoe ui, tahoma'> <span style='font-size: 13.3333px;'> <b>Item</b></span></font></th> <th class='ms-rteTableHeaderEvenCol-default' rowspan='1' colspan='1' style='width: 55%; text-align: center;'>​<strong style='color: #191919;'>Description</strong><br/></th> </tr> <tr class='ms-rteTableOddRow-default'> <th class='ms-rteTableFirstCol-default' rowspan='1' colspan='1' style='width: 6%; height: 32px;'>&#160;</th> <td class='ms-rteTableOddCol-default' rowspan='1' colspan='1' style='width: 38%; height: 32px;'>&#160;</td> <td class='ms-rteTableEvenCol-default' rowspan='1' colspan='1' style='width: 55%; height: 32px;'>​<br/></td> </tr> <tr class='ms-rteTableEvenRow-default'> <th class='ms-rteTableFirstCol-default' rowspan='1' colspan='1' style='width: 6%;'>&#160;</th> <td class='ms-rteTableOddCol-default' rowspan='1' colspan='1' style='width: 38%;'>&#160;</td> <td class='ms-rteTableEvenCol-default' rowspan='1' colspan='1' style='width: 55%;'>​<br/></td> </tr> <tr class='ms-rteTableOddRow-default'> <th class='ms-rteTableFirstCol-default' rowspan='1' colspan='1' style='width: 6%;'>&#160;</th> <td class='ms-rteTableOddCol-default' rowspan='1' colspan='1' style='width: 38%;'>&#160;</td> <td class='ms-rteTableEvenCol-default' rowspan='1' colspan='1' style='width: 55%;'>​<br/></td> </tr> <tr class='ms-rteTableEvenRow-default'> <th class='ms-rteTableFirstCol-default' rowspan='1' colspan='1' style='width: 6%;'>&#160;</th> <td class='ms-rteTableOddCol-default' rowspan='1' colspan='1' style='width: 38%;'>&#160;</td> <td class='ms-rteTableEvenCol-default' rowspan='1' colspan='1' style='width: 55%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <th class='ms-rteTableFirstCol-default' rowspan='1' colspan='1' style='width: 6%;'>&#160;</th> <td class='ms-rteTableOddCol-default' rowspan='1' colspan='1' style='width: 38%;'>&#160;</td> <td class='ms-rteTableEvenCol-default' rowspan='1' colspan='1' style='width: 55%;'>​</td> </tr> <tr class='ms-rteTableFooterRow-default'> <th class='ms-rteTableFooterFirstCol-default' rowspan='1' colspan='1' style='width: 6%;'>&#160;</th> <td class='ms-rteTableFooterOddCol-default' rowspan='1' colspan='1' style='width: 38%;'>&#160;</td> <td class='ms-rteTableFooterEvenCol-default' rowspan='1' colspan='1' style='width: 55%;'>​</td> </tr> </tbody></table><p></p>";

});

//------------------------------------------------------------------------

function openDialog() {
   var e = document.getElementById('d10');
   var options = {
    title: "Reminder",
    width: 1200,
    height: 720,
    html: e
   };
   SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
}



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
// console.log(res_immediate);
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


 document.getElementById('Date_x0020_and_x0020_Time_x0020__cedf8593-5e63-4955-82b8-94363e35b967_$TextField').value = datetime;

 var cheque_cash = $("input[title='Cheque/Cash Issued to']").val();
 
if(cheque_cash == "" || cheque_cash == null){
    alert("Please input Cheque/Cash Issued to field.")
    return false;
}else{
    alert("Information, This is an older version of Purchase Order Request. Please contact SharePoint Team.")
    return false;//true

}


}

</script><i><b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to 
      <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i> ​
    

    <div style="display:none">
   <div id="d10">
       <h3 class="ms-core-pageTitle"> Purchase Lead Time <img width="35px" align="center" src="https://intranet.houseofit.com.au/SiteAssets/info%20icon.png"/></h3> <br>
       <img width="100%" align="center" src="https://intranet.houseofit.com.au/SiteAssets/puchasing%20time%20lead/2018-02-01_8-41-49.png"/>
       <img width="100%" align="center" src="https://intranet.houseofit.com.au/SiteAssets/puchasing%20time%20lead/2018-02-01_8-42-02.png"/>
       </div>
   </div>
</div>


&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> &#8203;&#8203;&#8203;<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

var issue_id;
var status;

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

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

var status = $('select[id=Status0_2cf8125a-79c3-4b8f-9a7f-3f6cd52f0d66_$DropDownChoice]').val();

    if(status=="In Progress")//CEO
    {

    if(targetUser=="artems" || targetUser=="aysoukhomlinov" || targetUser=="litoa" ){
    SPUtility.GetSPField('Status').MakeEditable();
    SPUtility.ShowSPField('Status');
    }else{
    SPUtility.ShowSPField('Status');
    }

    }
    else if(status=="Approve" || status=="Reject" )//Admin Asst.
    {

    if(targetUser=="camelley" ){
    SPUtility.GetSPField('Status').MakeEditable();
    SPUtility.ShowSPField('Status');
    }else{
    SPUtility.ShowSPField('Status');
    }

    }
    else if(status=="Closed")
    {
    SPUtility.ShowSPField('Status');
    $("input[id='ctl00_ctl43_g_a97e2832_1784_4ee8_9500_fc7bac65199b_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


    }




}

function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());

    $("input[id='ctl00_ctl43_g_a97e2832_1784_4ee8_9500_fc7bac65199b_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}



$(function() {

})

function getQueryString() {
  var assoc = new Array();
  var queryString = unescape(location.search.substring(1));
  var keyValues = queryString.split('&');
  for (var i in keyValues) {
    var key = keyValues[i].split('=');
    assoc[key[0]] = key[1];
    }
  return assoc;
}


 $(document).ready(function()
{

//         document.getElementById("Document_x0020_No_x002e__182cafba-8241-4be0-8c05-12ab63112c30_$TextField").className = "ms-input ms-spellcheck-true ";
// document.getElementById("Document_x0020_No_x002e__182cafba-8241-4be0-8c05-12ab63112c30_$TextField").size = "11";

// $("input[id='Document_x0020_No_x002e__182cafba-8241-4be0-8c05-12ab63112c30_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("input[id='Revision_335e364c-3978-42f4-8b85-ec8d4dfda6ee_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');



SPUtility.GetSPField('Status').MakeReadOnly();

//SPUtility.GetSPField('Reference Number').MakeReadOnly();
//SPUtility.GetSPField("Requestor's Name").MakeReadOnly();
//SPUtility.GetSPField('Department/Section').MakeReadOnly();
//SPUtility.GetSPField('Company/Merchant').MakeReadOnly();
//SPUtility.GetSPField('Purpose of Purchase').MakeReadOnly();
//SPUtility.GetSPField('Link or Website').MakeReadOnly();

SPUtility.HideSPField('Immediate Head');

SPUtility.HideSPField('Status');

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

SPUtility.GetSPField('Duration (Request to Approve/Reject/Closed)').MakeReadOnly();
SPUtility.HideSPField('Duration (Request to Approve/Reject/Closed)');



$("input[id='Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Requestor_x0027_s_x0020_Name_dcda19f9-49d6-4f54-bee5-ba231b633505_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Department_x002f_Section_041c8714-3aa7-4ca4-b959-31d9e6365f89_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Company_x002f_Merchant_ef423636-71af-4ad1-a7dc-a574963594b4_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Link_x0020_or_x0020_Website_5e8ac543-97ad-46cf-aa49-060412824bc6_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Total_x0020_Amount_b670fbd5-a5df-4aa4-bb08-e746441a339d_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


$("textarea[id='Purpose_x0020_of_x0020_Purchase_b600b5cb-476c-4216-8919-f6e46341403b_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');



})


function PreSaveAction()
{

 var status = $('select[id=Status0_2cf8125a-79c3-4b8f-9a7f-3f6cd52f0d66_$DropDownChoice]').val();
//--------------------------------------------------

var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-"
                + currentdate.getDate() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();


var created_date_time = $("input[title='Date and Time Created']").val();
var timeAgo = jQuery.timeago(new Date(created_date_time));

//----------------------------------------------------

if(status == "Approve")
{
document.getElementById('Duration_x0020__x0028_Request_x0_46845a96-c41a-42c9-ad49-312dd46c1de4_$TextField').value = timeAgo;
}else if(status == "Reject")
{
document.getElementById('Duration_x0020__x0028_Request_x0_46845a96-c41a-42c9-ad49-312dd46c1de4_$TextField').value = timeAgo;
}
if(status == "Closed")
{
document.getElementById('Duration_x0020__x0028_Request_x0_46845a96-c41a-42c9-ad49-312dd46c1de4_$TextField').value = timeAgo;
}

return true;

}

</script>&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;

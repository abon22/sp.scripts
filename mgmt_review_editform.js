​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>



var userProfileProperties;

//ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

function checkuserprofile()
{
  //alert("Init running...");


    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded2), Function.createDelegate(this,this.onQueryFailed2));

}
var get_preferredname;
  function onQuerySucceeded2()
  {

var account = targetUser.get_loginName();
targetUser_temp = account.substring(account.indexOf("|") + 10);
targetUser = targetUser_temp;

SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');

var Ackowledgement = $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff161_ctl00_ctl00_TextField']").val();

$("label[for='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff51_ctl00_FillInButton']").text("If others, please specify");

$("label[for='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff131_ctl00_ctl00']").text("I attest the veracity of the information in this meeting minutes");
$("label[for='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff141_ctl00_ctl00']").text("I attest the veracity of the information in this meeting minutes");
$("label[for='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff151_ctl00_ctl00']").text("I attest the veracity of the information in this meeting minutes");

$("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff161_ctl00_ctl00_TextField']").css("visibility","hidden");

$("textarea[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff91_ctl00_ctl00_TextField']").css("width","1165px");

$("input[id='ctl00_ctl43_g_37c0904a_9050_40f2_969d_a515e2e59c6b_ff11_ctl00_ctl00_TextField']").prop("readonly","true");

$("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_savebutton2_ctl00_diidIOSaveItem']").attr("value","Submit");

var qmr = 'victors';
var cso = 'scott.osgood';
var cso2 = 'scott';
var ceo = 'artems';
var ceo2 = 'aysoukhomlinov';

// document.getElementById("ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff161_ctl00_ctl00_TextField").value = '2';
// alert(targetUser +" --- "+Ackowledgement);
// alert(targetUser);
// alert(targetUser+" --------- "+qmr);
if(Ackowledgement == "1"){
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
  if(targetUser == qmr){
    // alert("< QMR >");
    $('#tbl_managementreview_frm #tr_cso').hide();
    $('#tbl_managementreview_frm #tr_ceo').hide();
    $('#tbl_managementreview_frm #tr_cb_cso').hide();
    $('#tbl_managementreview_frm #tr_cb_ceo').hide();
  }
  else {
    $('#tbl_managementreview_frm #tr_qmr').hide();
    $('#tbl_managementreview_frm #tr_cb_qmr').hide();
    $('#tbl_managementreview_frm #tr_cso').hide();
    $('#tbl_managementreview_frm #tr_cb_cso').hide();
    $('#tbl_managementreview_frm #tr_ceo').hide();
    $('#tbl_managementreview_frm #tr_cb_ceo').hide();
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff131_ctl00_ctl00']").css("visibility","hidden");
  }
}
else if(Ackowledgement == "2"){
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
  $("input[id='ctl00_ctl43_g_37c0904a_9050_40f2_969d_a515e2e59c6b_ff11_ctl00_ctl00_TextField']").prop("readonly","true");

    $("label[for='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff131_ctl00_ctl00']").text("Acknowledged");
  if(targetUser == cso || targetUser == cso2 || targetUser == 'litoa'){
        $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    // alert("< CSO >");
    $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff131_ctl00_ctl00']").css("visibility","hidden");
    $('#tbl_managementreview_frm #tr_ceo').hide();
    $('#tbl_managementreview_frm #tr_cb_ceo').hide();
  }
  else {
    $("label[for='ctl00_ctl43_g_37c0904a_9050_40f2_969d_a515e2e59c6b_ff101_ctl00_ctl00']").text("Acknowledged");
    // $('#tbl_managementreview_frm #tr_qmr').hide();
    // $('#tbl_managementreview_frm #tr_cb_qmr').hide();
    $('#tbl_managementreview_frm #tr_cso').hide();
    $('#tbl_managementreview_frm #tr_cb_cso').hide();
    $('#tbl_managementreview_frm #tr_ceo').hide();
    $('#tbl_managementreview_frm #tr_cb_ceo').hide();
    $("input[id='ctl00_ctl43_g_37c0904a_9050_40f2_969d_a515e2e59c6b_savebutton2_ctl00_diidIOSaveItem']").css("visibility","hidden");
    // $("input[id='ctl00_ctl43_g_37c0904a_9050_40f2_969d_a515e2e59c6b_ff101_ctl00_ctl00']").css("visibility","hidden");
    // $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff131_ctl00_ctl00']").css("visibility","hidden");
        $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff131_ctl00_ctl00']").css("visibility","hidden");// QMR Acknowledgement
            $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_savebutton2_ctl00_diidIOSaveItem']").css("visibility","hidden") // Save Button
  }
}
else if(Ackowledgement == "3"){
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
  $("label[for='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff131_ctl00_ctl00']").text("Acknowledged");
  $("label[for='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff141_ctl00_ctl00']").text("Acknowledged");
  if(targetUser == ceo || targetUser == ceo2 || targetUser == 'litoa'){
    // alert("< CEO >");
    $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff131_ctl00_ctl00']").css("visibility","hidden");
   $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff141_ctl00_ctl00']").css("visibility","hidden");
  }
  else {
    // $('#tbl_managementreview_frm #tr_qmr').hide();
    // $('#tbl_managementreview_frm #tr_cb_qmr').hide();
    // $('#tbl_managementreview_frm #tr_cso').hide();
    // $('#tbl_managementreview_frm #tr_cb_cso').hide();
    $('#tbl_managementreview_frm #tr_ceo').hide();
    $('#tbl_managementreview_frm #tr_cb_ceo').hide();
    $("input[id='ctl00_ctl43_g_37c0904a_9050_40f2_969d_a515e2e59c6b_savebutton2_ctl00_diidIOSaveItem']").css("visibility","hidden");
    $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff131_ctl00_ctl00']").css("visibility","hidden"); // QMR Acknowledgement
    $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff141_ctl00_ctl00']").css("visibility","hidden"); // CSO Acknowledgement
    $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_savebutton2_ctl00_diidIOSaveItem']").css("visibility","hidden") // Save Button
  }
}
else if(Ackowledgement == "4"){
    $("label[for='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff131_ctl00_ctl00']").text("Acknowledged");
    $("label[for='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff141_ctl00_ctl00']").text("Acknowledged");
    $("label[for='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff151_ctl00_ctl00']").text("Acknowledged");
    $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff131_ctl00_ctl00']").css("visibility","hidden");
    $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff141_ctl00_ctl00']").css("visibility","hidden");
    $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_ff151_ctl00_ctl00']").css("visibility","hidden");
    $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_savebutton2_ctl00_diidIOSaveItem']").css("visibility","hidden");
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
                $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_savebutton2_ctl00_diidIOSaveItem']").css("visibility","hidden") // Save Button
}

// QMR = ctl00_ctl43_g_37c0904a_9050_40f2_969d_a515e2e59c6b_ff101_ctl00_ctl00
// CSO = ctl00_ctl43_g_37c0904a_9050_40f2_969d_a515e2e59c6b_ff111_ctl00_ctl00
// CEO = ctl00_ctl43_g_37c0904a_9050_40f2_969d_a515e2e59c6b_ff121_ctl00_ctl00

  }

function getUserProperties() {
// targetUser = 'hoitcebu\\'+targetUser;

var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
    // Specify the properties to retrieve and target user for the
    // UserProfilePropertiesForUser object.
    var profilePropertyNames = ["PreferredName"];
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
function onRequestSuccess() {
    get_preferredname = userProfileProperties[0];
  //alert("Login user: "+get_preferredname);


}
  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());

    $("input[id='ctl00_ctl43_g_4ddb975a_b567_47c5_ae09_9acd99dac43f_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}


    function onSucceededCallback(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

      var id = listItem.get_item('ID')

        if(itemId==id){//if

      get_immediate= listItem.get_item('Immediate_x0020_Head').get_lookupValue();
     // alert("From DB: "+get_immediate);



        }//end if

      }  //end while
    }


     function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

    //  $("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }

$(function() {
  checkuserprofile();
});


</script>

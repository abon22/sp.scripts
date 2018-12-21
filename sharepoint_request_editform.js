​​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/SiteAssets/Scripts/spjs-utility.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

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


    if(targetUser=="junreyd" ||  targetUser=="litoa" || targetUser=="fernandos" || targetUser=="victors" || targetUser=="idrianb" || targetUser=="carla" || targetUser=="nowmarc"){

        if($("#QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0").is(':checked')){

          if($("#QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_1").is(':checked')){
           
          }else{
             $("input[id='QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0']").attr('disabled', 'disabled');
          }
        }else{
           $("span[title='Requestor Approved']").css("display","none");
        }
      

   if(status_0 == "Complete"){

    $("a[class='sp-peoplepicker-delImage']").css("display","none");
    $("input[class='sp-peoplepicker-editorInput']").css("display","none");

    $("textarea[id='Note_842065ef-250f-42ec-aadb-a2647e219c7d_$TextField']").removeAttr('hidden');
    $("input[id='ctl00_ctl43_g_ea5490ad_faa6_4bb5_a19f_0c345416b223_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");

   }



      
    }else{

      SPUtility.ShowSPField('Estimated Completion Date');
      SPUtility.ShowSPField('Status');
      SPUtility.ShowSPField('Assigned to');
      SPUtility.ShowSPField('Phase');
      SPUtility.ShowSPField('QA Status');
      SPUtility.ShowSPField('Notes');

      SPUtility.GetSPField('Estimated Completion Date').MakeReadOnly();
      SPUtility.GetSPField('Status').MakeReadOnly();
      SPUtility.GetSPField('Phase').MakeReadOnly();

    $("input[id='ctl00_ctl43_g_ea5490ad_faa6_4bb5_a19f_0c345416b223_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


    //-------------------------------------------

console.log("phase_0: "+phase_0);
if(phase_0=="Testing & Debugging" || phase_0=="N/A"){


    if(document.getElementById('QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0').checked){
      if(document.getElementById('QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_1').checked){

      }else{
       /* SPUtility.ShowSPField('Estimated Completion Date');
          SPUtility.ShowSPField('Status');
          SPUtility.ShowSPField('Assigned to');
          SPUtility.ShowSPField('Phase');
          SPUtility.ShowSPField('QA Status');
          SPUtility.ShowSPField('Notes');*/

        SPUtility.GetSPField('Status').MakeReadOnly();
        //SPUtility.GetSPField('Assigned to').MakeReadOnly();
        SPUtility.GetSPField('Phase').MakeReadOnly();
        SPUtility.GetSPField('Phase').MakeReadOnly();


          $("input[id='QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0']").attr('disabled', 'disabled');

          $("input[id='ctl00_ctl43_g_ea5490ad_faa6_4bb5_a19f_0c345416b223_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('hidden');
        $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");

        $("a[class='sp-peoplepicker-delImage']").css("display","none");
        $("input[class='sp-peoplepicker-editorInput']").css("display","none");

     

          }

    }
    else{
     // $("span[title='Requestor Approved']").css("display","none");
     // console.log("else")
    }
}


    //-------------------------------------------




    }


 }

 function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_ea5490ad_faa6_4bb5_a19f_0c345416b223_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}



var phase_0;
var status_0;
 $(function() {

// $(".sp-peoplepicker-delImage").css({ 'display' : 'none'});
// $(".sp-peoplepicker-editorInput").attr('disabled' , 'disabled');

//SPUtility.HideSPField('Actual Price');
//SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.GetSPField('Priority').MakeReadOnly();
SPUtility.GetSPField('Type of Request').MakeReadOnly();

 status_0 = $('select[id=Status_b669db8d-c2bb-45f8-89fe-a7adef2eb96a_$DropDownChoice]').val();
if(status_0!="Not Started"){
var selectobject=document.getElementById("Status_b669db8d-c2bb-45f8-89fe-a7adef2eb96a_$DropDownChoice")
  for (var i=0; i<selectobject.length; i++){
  if (selectobject.options[i].value == 'Not Started' )
     selectobject.remove(i);
  }
}

phase_0 = $('select[id=Project_x0020_Stage_eb8a65a4-34ff-4458-ba48-88e0d05e8db2_$DropDownChoice]').val();
if(phase_0==""){
var selectobject_phase=document.getElementById("Project_x0020_Stage_eb8a65a4-34ff-4458-ba48-88e0d05e8db2_$DropDownChoice")
  for (var i=0; i<selectobject_phase.length; i++){
  if (selectobject_phase.options[i].value == 'Implementation')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Testing & Debugging')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Deployment')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Maintenance')
     selectobject_phase.remove(i);
  }
}

if(phase_0=="N/A"){
var selectobject_phase=document.getElementById("Project_x0020_Stage_eb8a65a4-34ff-4458-ba48-88e0d05e8db2_$DropDownChoice")
  for (var i=0; i<selectobject_phase.length; i++){
    if (selectobject_phase.options[i].value == 'Planning')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Implementation')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Testing & Debugging')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Deployment')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Maintenance')
     selectobject_phase.remove(i);
  }

SPUtility.GetSPField('Phase').MakeReadOnly();

}

if(phase_0=="Planning"){
var selectobject_phase=document.getElementById("Project_x0020_Stage_eb8a65a4-34ff-4458-ba48-88e0d05e8db2_$DropDownChoice")
  for (var i=0; i<selectobject_phase.length; i++){

  if (selectobject_phase.options[i].value == 'Testing & Debugging')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Deployment')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Maintenance')
     selectobject_phase.remove(i);
   if (selectobject_phase.options[i].value == 'N/A')
     selectobject_phase.remove(i);
  }
}

if(phase_0=="Implementation"){
var selectobject_phase=document.getElementById("Project_x0020_Stage_eb8a65a4-34ff-4458-ba48-88e0d05e8db2_$DropDownChoice")
  for (var i=0; i<selectobject_phase.length; i++){
    if (selectobject_phase.options[i].value == 'Planning')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Deployment')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Maintenance')
     selectobject_phase.remove(i);
   if (selectobject_phase.options[i].value == 'N/A')
     selectobject_phase.remove(i);
  }
}

if(phase_0=="Testing & Debugging" ){

  if(document.getElementById('QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0').checked && document.getElementById('QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_1').checked ){
var selectobject_phase=document.getElementById("Project_x0020_Stage_eb8a65a4-34ff-4458-ba48-88e0d05e8db2_$DropDownChoice")
  for (var i=0; i<selectobject_phase.length; i++){
    if (selectobject_phase.options[i].value == 'Planning')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Implementation')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Maintenance')
     selectobject_phase.remove(i);
   if (selectobject_phase.options[i].value == 'N/A')
     selectobject_phase.remove(i);
  }
  }else{

    var selectobject_phase=document.getElementById("Project_x0020_Stage_eb8a65a4-34ff-4458-ba48-88e0d05e8db2_$DropDownChoice")
  for (var i=0; i<selectobject_phase.length; i++){
    if (selectobject_phase.options[i].value == 'Planning')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Implementation')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Deployment')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Maintenance')
     selectobject_phase.remove(i);
   if (selectobject_phase.options[i].value == 'N/A')
     selectobject_phase.remove(i);
  }

  }








}

if(phase_0=="Deployment"){
var selectobject_phase=document.getElementById("Project_x0020_Stage_eb8a65a4-34ff-4458-ba48-88e0d05e8db2_$DropDownChoice")
  for (var i=0; i<selectobject_phase.length; i++){
    if (selectobject_phase.options[i].value == 'Planning')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Implementation')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Testing & Debugging')
     selectobject_phase.remove(i);
   if (selectobject_phase.options[i].value == 'N/A')
     selectobject_phase.remove(i);
  }
}

if(phase_0=="Maintenance"){
var selectobject_phase=document.getElementById("Project_x0020_Stage_eb8a65a4-34ff-4458-ba48-88e0d05e8db2_$DropDownChoice")
  for (var i=0; i<selectobject_phase.length; i++){
    if (selectobject_phase.options[i].value == 'Planning')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Implementation')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Testing & Debugging')
     selectobject_phase.remove(i);
  if (selectobject_phase.options[i].value == 'Deployment')
     selectobject_phase.remove(i);
   if (selectobject_phase.options[i].value == 'N/A')
     selectobject_phase.remove(i);
  }

  SPUtility.GetSPField('Phase').MakeReadOnly();
}


})
//------------------------------------------------------------------------------------------------------------------------------------------------

// $(window).resize(function(){
//     //Call AutosizeDialog() make dialog box responsive in mobile 
//     AutosizeDialog();
// });
 
// function showEditFormDialog(id) {
//    $.ajax({
//             url: openSPDialog("https://abc.sharepoint.com/Lists/Test/EditFrm.aspx?ID="+id+"&isdlg=1","Metric - Metric Cat 1"),
//             async: true,
//             cache: false,
//             success: function (data) {
//                 /* load data into element(s) */
//                  ExecuteOrDelayUntilScriptLoaded(AutosizeDialog, "sp.js");        
//             },
//             error: function (err) {
//             console.log(err);
//                 /* be good and handle errors */
//             }
//         });
// }

var thisListGuid = '{7CFFD7BF-D187-46E1-BEB6-DEB8E9072E24}';

function getLastItemID(){ 
  var queryBuffer = [];
    queryBuffer.push("<Where><Eq><FieldRef Name='Author' LookupId='TRUE' /><Value Type='User'>"+_spPageContextInfo.userId+"</Value></Eq></Where>");
    queryBuffer.push("<OrderBy><FieldRef Name='ID' Ascending='FALSE' /></OrderBy>");
  var res = spjs_QueryItems({listName:thisListGuid,query:queryBuffer.join(''),viewFields:['ID'],rowLimit:1});
  
  if(res.count<0){
    alert("An error occurred. Most likely the parameter \"thisListGuid\" is wrong.");
  }else if(res.count>0){
    RequestEnded();
    return res.items[0].ID;
    
  }else{
    RequestEnded();
    return '';
    
  }
}
function openSPDialog(Url, Title) {

      
     // console.log("lastID: "+lastID);
 
      // var options = {
      //     url: Url,
      //     title:Title, 
      // };

      


      // SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options); 

var options = SP.UI.$create_DialogOptions();
    options.url = Url;
    options.dialogReturnValueCallback = Function.createDelegate(null, CloseCallback);
    SP.UI.ModalDialog.showModalDialog(options);


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




 // Dialog callback
function CloseCallback(result, target) {

    if (result == SP.UI.DialogResult.OK) {
        // Run OK Code
        // console.log("a");
      RequestStarted();

      

      setTimeout(function(){ 
        var lastID = getLastItemID();

         $("textarea[id='Note_842065ef-250f-42ec-aadb-a2647e219c7d_$TextField']").val("QPC Reference# : <a href='https://intranet.houseofit.com.au/Lists/QA%20Project%20Checklist/DispForm.aspx?ID="+lastID+"' target='_blank'>QPC-"+lastID+"</a>");
         $('input:checkbox[id=QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0]').attr('disabled',true)
        RequestEnded();
       }, 3000);

      // console.log("QPC-"+lastID);

      // $("textarea[id='Note_842065ef-250f-42ec-aadb-a2647e219c7d_$TextField']").val("<a href='https://intranet.houseofit.com.au/Lists/QA%20Project%20Checklist/DispForm.aspx?ID="+lastID+" ' target='_blank'>QPC-"+lastID+"</a>");

     


      

    }
    if (result == SP.UI.DialogResult.cancel) {
        // Run Cancel Code
        // console.log("b");
        $('input:checkbox[id=QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0]').attr('checked',false);
    }
}

// function MyDialogClosed(result, value) {
//   console.log(result)
//   console.log(value)
// if (result == SP.UI.DialogResult.Cancel) {
//     //Cancel. Do whatever
//     console.log("a")
// }
// else { //SP.UI.DialogResult.OK
//     //User clicked OK. You can pickup whatever was sent back in 'value'    
//     console.log("b")

//     // $('#QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0').prop('checked', true); // Checks it
   
// //    $('input:checkbox[id=QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0]').attr('checked',false);

//   }

// }

// function AutosizeDialog() {
//     //resize dialog if we are in one
//     var dlg = typeof(SP.UI.ModalDialog.get_childDialog) == "function" ? SP.UI.ModalDialog.get_childDialog() : null;
 
//     if (dlg != null) {
//         dlg.autoSize();
//         var dlgWin = $(".ms-dlgContent", window.parent.document);
//         dlgWin.css({ top: ($(window.top).height() / 2 - dlgWin.height() / 2) + "px", left: $(window.top).width() / 2 - dlgWin.width() / 2 });
//         $('.ms-dlgTitle').css({'padding':'10px 30px 5px 10px'});
      
//     }
// }

 

 $(document).ready(function()
{




itemId = GetUrlKeyValue("ID", false, location.href);
var request_title = $("input[id='Project_x0020_Title_ce0d1cce-a287-4cd6-88fb-a0c149a86d1e_$TextField']").val()
var ref_num = $("input[id='Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField']").val()

$("input[id='QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0']").change( function() {
  if ($("#QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0").is(':checked')) {
    var type_of_request = $('select[id=Type_x0020_of_x0020_Project_25fc8ee8-e4a3-4a38-98e9-201852c71d26_$DropDownChoice]').val();
   /*  console.log(type_of_request) */
    

    var requestor_name = $("input[id='Requestor_x0027_s_x0020_Name_fc0086ea-e0c1-4f31-85e8-85ce1e4b3d25_$ClientPeoplePicker_HiddenInput']").val()

    var temp_req_name = JSON.parse(requestor_name)[0].Description

    // console.log(JSON.parse(requestor_name)[0])
    // console.log(temp_req_name.substring(7));

    if (type_of_request != "Modification") {
      openSPDialog("https://intranet.houseofit.com.au/Lists/QA%20Project%20Checklist/NewFormCopyCopy.aspx?&isdlg=1&SFR_ID="+itemId+"&Title="+request_title+"&requestor="+temp_req_name.substring(7)+"&ref_num="+ref_num+" ","QA Project Checklist");
   }
    
  }
  else{
    
  }

})

  //----Chage Save to Submit------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    

//-------------------



SPUtility.HideSPField('Status');
SPUtility.HideSPField('Assigned to');
SPUtility.HideSPField('Phase');
SPUtility.HideSPField('QA Status');
SPUtility.GetSPField('Reference Number').MakeReadOnly();


 $("input[id='Department_x002f_Section_bf86b4d7-d067-45cf-8171-5f838c8d4574_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 $("input[id='Project_x0020_Title_ce0d1cce-a287-4cd6-88fb-a0c149a86d1e_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 $("select[id='Priority_278dc808-b648-4bb7-a1db-1d5d5a8b58de_$DropDownChoice']").attr('disabled', 'disabled');
 $("select[id='Type_x0020_of_x0020_Project_25fc8ee8-e4a3-4a38-98e9-201852c71d26_$DropDownChoice']").attr('disabled', 'disabled');
 $("textarea[id='Project_x0020_Description_dfa79a0c-c053-4ca3-afa3-e06f2869e559_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 $("input[id='Date_x0020_Needed_874b178a-4311-440a-8d33-2a1027d489db_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 

$("input[id='Requested_x0020_Completion_x0020_17f148f8-fb64-44fa-9b97-d7a6819c5ac5_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
var req_cal = document.getElementById("Requested_x0020_Completion_x0020_17f148f8-fb64-44fa-9b97-d7a6819c5ac5_$DateTimeFieldDateDatePickerImage");
req_cal.src = "";
req_cal.alt = ""; 

//----------------------------------------------------------------------------------------------------------

var status= $("select[id='Status_b669db8d-c2bb-45f8-89fe-a7adef2eb96a_$DropDownChoice']").val();
var est_date= $("input[id='Estimated_x0020_Completion_x0020_5176e7fd-8e77-437c-ad7b-dcd0625cb835_$DateTimeFieldDate']").val();

if(est_date!=""){
$("input[id='Estimated_x0020_Completion_x0020_5176e7fd-8e77-437c-ad7b-dcd0625cb835_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
var est_cal = document.getElementById("Estimated_x0020_Completion_x0020_5176e7fd-8e77-437c-ad7b-dcd0625cb835_$DateTimeFieldDateDatePickerImage");
est_cal.src = "";
est_cal.alt = ""; 

SPUtility.ShowSPField('Status');

}

//----------------------------------------------------------------------------------------------------------

var status;
  $('select[id=Status_b669db8d-c2bb-45f8-89fe-a7adef2eb96a_$DropDownChoice]').change( function() {
   status= $('select[id=Status_b669db8d-c2bb-45f8-89fe-a7adef2eb96a_$DropDownChoice]').val();


  if(status=="In Progress"){
    SPUtility.ShowSPField('Assigned to');
    SPUtility.ShowSPField('Phase');
  }

  
  });

var status_0 = $('select[id=Status_b669db8d-c2bb-45f8-89fe-a7adef2eb96a_$DropDownChoice]').val();
if(status_0=="In Progress" || status_0=="On Hold"){
    SPUtility.ShowSPField('Assigned to');
    SPUtility.ShowSPField('Phase');
}
console.log(phase_0);
if(status_0=="Complete" || status_0=="Canceled"){
    SPUtility.GetSPField('Status').MakeReadOnly();
    $("textarea[id='Note_842065ef-250f-42ec-aadb-a2647e219c7d_$TextField']").attr('hidden', 'hidden');
    $("input[id='ctl00_ctl43_g_ea5490ad_faa6_4bb5_a19f_0c345416b223_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

     

    SPUtility.ShowSPField('Assigned to');
    SPUtility.ShowSPField('Phase');
    SPUtility.ShowSPField('QA Status');

}

if(phase_0=="N/A" || phase_0=="Testing & Debugging" ||phase_0=="Deployment" || phase_0=="Maintenance"  ){

  SPUtility.ShowSPField('QA Status');

}


if(document.getElementById('QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0').checked && document.getElementById('QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_1').checked) {
  $("input[id='QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_0']").attr('disabled', 'disabled');
  $("input[id='QA_x0020_Status_dab186fa-c718-45f5-a5c8-3d3aa62c8bc8_MultiChoiceOption_1']").attr('disabled', 'disabled');
}




});

//-------------------------------------------------------------------------------------------------------------------------------------------------------


</script>​​​​​​​​​​​​​​

<style>
.ms-propertysheet{
  display:none;
}



</style>
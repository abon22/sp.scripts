​​​​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">



var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

function init(){
  //alert("Init running...");

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
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_4ca88fcc_05ac_4a11_b9a3_435b244b809d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}

var targetUser2;
function getUserProperties() {
targetUser2 = 'hoitcebu\\'+targetUser;

var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
  

    var profilePropertyNames = ["PreferredName"];
       var userProfilePropertiesForUser = 
        new SP.UserProfiles.UserProfilePropertiesForUser(
            clientContext,
            targetUser2,
            profilePropertyNames);

    userProfileProperties = peopleManager.getUserProfilePropertiesFor(
        userProfilePropertiesForUser);

    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);

   

}

var get_login_preferredname;
function onRequestSuccess() {
  get_salary_device_benefits();

    get_login_preferredname = userProfileProperties[0];
   // console.log("get_login_preferredname: "+get_login_preferredname);

}

var itemId;
  function get_salary_device_benefits(){


 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
       // caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>224</Value></Eq></Where><OrderBy><FieldRef Name='ID' Ascending='False' /></OrderBy></Query></View>");

        caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query><ViewFields><FieldRef Name='Author' LookupId='FALSE'/><FieldRef Name='Immediate_x0020_Head'  LookupId='FALSE'/></ViewFields><QueryOptions /></View>");

     // caml.set_viewXml("<View><ViewFields><FieldRef Name='Author' LookupId='FALSE'/><FieldRef Name='Immediate_x0020_Head' LookupId='FALSE'/></ViewFields></View>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback2, onFailedCallback2);


  

 }

  var created_by;
 var immediate_head;
 var listItem;

  function onSucceededCallback2(sender, args) {



//================================================================================================================================================================================
         var enumerator = returnedItems.getEnumerator();
         //console.log("enumerator: "+enumerator)
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

      var id = listItem.get_item('ID') 
        if(itemId==id){
          created_by= listItem.get_item('Author').get_lookupValue();
          immediate_head = listItem.get_item('Immediate_x0020_Head').get_lookupValue();
        }//end if
      }  //end while

      console.log("created_by: "+created_by);
      console.log("immediate_head: "+immediate_head);

          //SPUtility.ShowSPField('Next Approver');
         // SPUtility.GetSPField('Next Approver').MakeEditable();



          //======================================================================================================================

          //------------------------------------------------------------------------------

          //var from = $("input[title='From']").val();
          //var to = $("input[title='To']").val();
          //var pay_period = $("input[title='Pay period with the amount of ₱']").val();
          var immediate_status= $("select[title='Department Head Status']").val();
          console.log("immediate_status: "+immediate_status);
          var finance_status= $("select[title='Finance Status']").val();
          console.log("finance_status: "+finance_status);
          var hr_status= $("select[title='HR Status']").val();
          console.log("hr_status: "+hr_status);
          var executive_status= $("select[title='CEO Status']").val();
          console.log("executive_status: "+executive_status);
          var vp_status= $("select[title='VP Status']").val();
          console.log("vp_status: "+vp_status);
          var finance_status_closed;
          var next_approver = $("select[title='Next Approver']").val();

          SPUtility.HideSPField('Loans');
          SPUtility.HideSPField('Release Date');



          if(immediate_status==""){

            if(immediate_head==get_login_preferredname || targetUser=="aysoukhomlinov" || targetUser=="artems" || targetUser=="System Account"){
              SPUtility.GetSPField('Department Head Status').MakeEditable();
              SPUtility.ShowSPField('Department Head Status');
            }else{
            SPUtility.ShowSPField('Department Head Status');
            $("input[id='ctl00_ctl43_g_4ca88fcc_05ac_4a11_b9a3_435b244b809d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
          
            }
          }

          else if(immediate_status=="Approve" && hr_status=="" ){


            if(targetUser=="diannag" || targetUser=="ninoc" ||  targetUser=="alfieo" || targetUser=="litoa" ){
            SPUtility.GetSPField('HR Status').MakeEditable();
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Department Head Status');


            }else{
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Department Head Status');

            $("input[id='ctl00_ctl43_g_4ca88fcc_05ac_4a11_b9a3_435b244b809d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
            }
          }

          else if(hr_status=="Approve" && finance_status=="" ){


            if(targetUser=="cherryy" || targetUser=="jestinel"  || targetUser=="ricellel" || targetUser=="saraht" || targetUser=="litoa" ){
            SPUtility.ShowSPField('HR Status');
            SPUtility.GetSPField('Finance Status').MakeEditable();
            SPUtility.ShowSPField('Finance Status');
            SPUtility.ShowSPField('Department Head Status');
            SPUtility.ShowSPField('Loans');
            SPUtility.GetSPField('Loans').MakeEditable();

            

            $("select[id='Finance_x0020_Status_41cd2aab-84c8-4a88-9883-a4c488a8354c_$DropDownChoice']").change(function() {
                var finance_status= $("select[id='Finance_x0020_Status_41cd2aab-84c8-4a88-9883-a4c488a8354c_$DropDownChoice']").val();
                if(finance_status == "Approve"){
                  SPUtility.ShowSPField('Allocation Type');
                  SPUtility.GetSPField('Allocation Type').MakeEditable();

                  SPUtility.ShowSPField('Next Approver');
                  SPUtility.GetSPField('Next Approver').MakeEditable();

                }else if(finance_status == "Reject" || finance_status == "Closed"){
                  SPUtility.HideSPField('Allocation Type');
                  SPUtility.HideSPField('Next Approver');

                  $("select[id='Allocation_x0020_Type_d30ed536-6527-4fa6-bc86-7b8789d23b98_$DropDownChoice'] ").find('option:contains("(None)")').attr("selected",true);
                  $("select[id='Next_x0020_Approver_bd4f5f48-2551-4031-87e8-865003460308_$DropDownChoice'] ").find('option:contains("(None)")').attr("selected",true);

                }
            });

            
            }else{
            SPUtility.ShowSPField('Allocation Type');
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Finance Status');
            SPUtility.ShowSPField('Loans');
            SPUtility.ShowSPField('Department Head Status');

            $("input[id='ctl00_ctl43_g_4ca88fcc_05ac_4a11_b9a3_435b244b809d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
            }
          }
          else if(finance_status=="Approve" && next_approver=="For VP" && vp_status==""){


            if(targetUser=="mithis" || targetUser=="litoa"){
            SPUtility.GetSPField('VP Status').MakeEditable();
            SPUtility.ShowSPField('VP Status');
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Finance Status');
            SPUtility.ShowSPField('Department Head Status');
            SPUtility.ShowSPField('Loans');
            SPUtility.ShowSPField('Allocation Type');
            //.ShowSPField('Next Approver');


            
            }else{
            SPUtility.ShowSPField('CEO Status');
            SPUtility.ShowSPField('VP Status');
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Finance Status');
            SPUtility.ShowSPField('Loans');
            SPUtility.ShowSPField('Department Head Status');
            SPUtility.ShowSPField('Allocation Type');
            //SPUtility.ShowSPField('Next Approver');

            $("input[id='ctl00_ctl43_g_4ca88fcc_05ac_4a11_b9a3_435b244b809d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
            }
          }
          else if(finance_status=="Approve" &&  vp_status=="Approve" && next_approver=="For VP" && executive_status==""){

            if(targetUser=="artems"  || targetUser=="aysoukhomlinov" || targetUser=="litoa"){
            SPUtility.GetSPField('CEO Status').MakeEditable();
            SPUtility.ShowSPField('CEO Status');
            SPUtility.ShowSPField('VP Status');
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Finance Status');
            SPUtility.ShowSPField('Department Head Status');
            SPUtility.ShowSPField('Loans');
            SPUtility.ShowSPField('Allocation Type');

            
            }else{
            SPUtility.ShowSPField('CEO Status');
            SPUtility.ShowSPField('VP Status');
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Finance Status');
            SPUtility.ShowSPField('Department Head Status');
            SPUtility.ShowSPField('Loans');
            SPUtility.ShowSPField('Allocation Type');
            

            $("input[id='ctl00_ctl43_g_4ca88fcc_05ac_4a11_b9a3_435b244b809d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
            }
          }else if(finance_status=="Approve" && next_approver=="For CEO" && executive_status=="" ){

            if(targetUser=="artems"  || targetUser=="aysoukhomlinov" || targetUser=="litoa"){
            SPUtility.GetSPField('CEO Status').MakeEditable();
            SPUtility.ShowSPField('CEO Status');
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Finance Status');
            SPUtility.ShowSPField('Department Head Status');
            SPUtility.ShowSPField('Loans');
            SPUtility.ShowSPField('Allocation Type');

            
            }else{
            SPUtility.ShowSPField('CEO Status');
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Finance Status');
            SPUtility.ShowSPField('Loans');
            SPUtility.ShowSPField('Department Head Status');
            SPUtility.ShowSPField('Allocation Type');

            

            $("input[id='ctl00_ctl43_g_4ca88fcc_05ac_4a11_b9a3_435b244b809d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
            }
          }else if(executive_status=="Approve" && finance_status=="Approve" && next_approver=="For VP" ){


            if(targetUser=="cherryy" || targetUser=="jestinel"  || targetUser=="ricellel" || targetUser=="saraht" || targetUser=="litoa" ){
            SPUtility.GetSPField('Finance Status').MakeEditable();
            SPUtility.ShowSPField('CEO Status');
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Finance Status');
            SPUtility.ShowSPField('VP Status');
            SPUtility.ShowSPField('Department Head Status');
            SPUtility.ShowSPField('Loans');
            SPUtility.ShowSPField('Allocation Type');

            var selectobject_phase=document.getElementById("Finance_x0020_Status_41cd2aab-84c8-4a88-9883-a4c488a8354c_$DropDownChoice")
              for (var i=0; i<selectobject_phase.length; i++){
                if (selectobject_phase.options[i].value == 'Reject')
                 selectobject_phase.remove(i);
              }


            
            }else{
            SPUtility.ShowSPField('CEO Status');
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Finance Status');
            SPUtility.ShowSPField('VP Status');
            SPUtility.ShowSPField('Loans');
            SPUtility.ShowSPField('Department Head Status');
            SPUtility.ShowSPField('Allocation Type');

            $("input[id='ctl00_ctl43_g_4ca88fcc_05ac_4a11_b9a3_435b244b809d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
            }
          }else if(executive_status=="Approve" && finance_status=="Approve" && next_approver=="For CEO" ){


            if(targetUser=="cherryy" || targetUser=="jestinel"  || targetUser=="ricellel" || targetUser=="saraht" || targetUser=="litoa" ){
            SPUtility.GetSPField('Finance Status').MakeEditable();
            SPUtility.ShowSPField('CEO Status');
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Finance Status');
            SPUtility.ShowSPField('Department Head Status');
            SPUtility.ShowSPField('Loans');
            SPUtility.ShowSPField('Allocation Type');


            var selectobject_phase=document.getElementById("Finance_x0020_Status_41cd2aab-84c8-4a88-9883-a4c488a8354c_$DropDownChoice")
              for (var i=0; i<selectobject_phase.length; i++){
                if (selectobject_phase.options[i].value == 'Reject')
                 selectobject_phase.remove(i);
              }


            
            }else{
            SPUtility.ShowSPField('CEO Status');
            SPUtility.ShowSPField('HR Status');
            SPUtility.ShowSPField('Finance Status');
            SPUtility.ShowSPField('Department Head Status');
            SPUtility.ShowSPField('Loans');
            SPUtility.ShowSPField('Allocation Type');

            $("input[id='ctl00_ctl43_g_4ca88fcc_05ac_4a11_b9a3_435b244b809d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
            }
          }


          else{
                  SPUtility.ShowSPField('Department Head Status');
                  SPUtility.ShowSPField('Finance Status');
                  SPUtility.ShowSPField('HR Status');
                  SPUtility.ShowSPField('CEO Status');
                  SPUtility.ShowSPField('VP Status');
                  SPUtility.ShowSPField('Loans');
                  SPUtility.ShowSPField('Allocation Type');
                  


          //console.log("aw");
            $("input[id='ctl00_ctl43_g_4ca88fcc_05ac_4a11_b9a3_435b244b809d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
              $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

          }

      

        //======================================================================================================================







//================================================================================================================================================================================
  }



    function onFailedCallback2(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

      $("input[id='ctl00_ctl43_g_4ca88fcc_05ac_4a11_b9a3_435b244b809d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }





 $(function() {
 
 //------change Save to Submit---------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    


// document.getElementById("Document_x0020_No_x002e__5334dbf2-aa40-46fc-a9bc-2a9244d0624d_$TextField").className = "ms-input ms-spellcheck-true ";
// document.getElementById("Document_x0020_No_x002e__5334dbf2-aa40-46fc-a9bc-2a9244d0624d_$TextField").size = "11";
// $("input[id='Document_x0020_No_x002e__5334dbf2-aa40-46fc-a9bc-2a9244d0624d_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 
$("input[id='Revision_6c6d9db5-36e8-4df6-bea8-020d3c60ea48_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 
$("textarea[id='Reason_ed41d462-78bf-4412-bfa6-8af7190507f5_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 


SPUtility.HideSPField('Department Head Status');
SPUtility.GetSPField('Department Head Status').MakeReadOnly();
SPUtility.HideSPField('Finance Status');
SPUtility.GetSPField('Finance Status').MakeReadOnly();
SPUtility.HideSPField('HR Status');
SPUtility.GetSPField('HR Status').MakeReadOnly();
SPUtility.HideSPField('CEO Status');
SPUtility.GetSPField('CEO Status').MakeReadOnly();
SPUtility.HideSPField('VP Status');
SPUtility.GetSPField('VP Status').MakeReadOnly();
SPUtility.HideSPField('Loans');
SPUtility.GetSPField('Loans').MakeReadOnly();
SPUtility.HideSPField('Allocation Type');
SPUtility.GetSPField('Allocation Type').MakeReadOnly();
SPUtility.HideSPField('Next Approver');
SPUtility.GetSPField('Next Approver').MakeReadOnly();


 


//-------------------------------------

  // Get the ID from the query string
 // var id = getQueryString()["ID"];

  // Find the form's main table
  var table = $('table.ms-formtable');
  var target_user = $("input[title='Target User']").val()
 var profile_path = "https://mysites.houseofit.com.au/User%20Photos/Profile%20Pictures/hoitcebu_"+target_user+"_lThumb.jpg";
   //Add a row with the ID in
  //alert(profile_path);
  table.prepend("<tr><td>Profile Picture</td><td><a href = '' target='_blank' id='anchor_profile'><img id='profile_image' src='' width ='30%' hieght ='30%' ></a></td></tr>" );
 
document.getElementById('profile_image').src = profile_path;
document.getElementById('anchor_profile').href = "https://mysites.houseofit.com.au/Person.aspx?accountname=hoitcebu\\"+target_user ;

//-----------------------------------------------------------------------------------------------   
   
SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Date and Time Created');

SPUtility.GetSPField('Duration (Request to Approve)').MakeReadOnly();
SPUtility.HideSPField('Duration (Request to Approve)');

SPUtility.GetSPField('Duration (Request to Reject)').MakeReadOnly();
SPUtility.HideSPField('Duration (Request to Reject)');


SPUtility.GetSPField('Target User').MakeReadOnly();
SPUtility.HideSPField('Target User');
 
 $("input[id='Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
  $("input[id='Requestors_x0020_Name_dcd0107a-18a1-4023-8983-7c327ba271f6_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Department_x002f_Section_a586c436-d641-4d61-b2a7-944f93035f64_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Advance_x0020_payment_x0020_of_x_20f0570e-264b-428c-bac2-677e1c8d715b_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='From_b8ded6ee-2967-49a3-ac9b-41939dd9e057_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='To_5ec21242-afbc-49ae-804d-06a2e005e6a6_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Pay_x0020_period_x0020_with_x002_a5357467-8adb-44f1-9b42-e949ae4fb702_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("select[id='By_x0020_every_e510289f-9623-4685-9f44-31d818d823ba_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');

document.getElementById("Item_x0020_Specification_fe8ea5fb-ba7b-420c-b44c-3747421a4723_$TextField_inplacerte").contentEditable = "false";
$("div[id='Item_x0020_Specification_fe8ea5fb-ba7b-420c-b44c-3747421a4723_$TextField_topDiv']").css('background-color','#F6F6F6');
$("div[id='Item_x0020_Specification_fe8ea5fb-ba7b-420c-b44c-3747421a4723_$TextField_inplacerte']").css('background-color','#F6F6F6');


$("input[id='Authority_x0020_to_x0020_Deduct_36983ee3-ac6d-4f78-b089-8d7a94e59b8d_MultiChoiceOption_0']").attr('disabled', 'disabled');
$("input[id='Authority_x0020_to_x0020_Deduct_36983ee3-ac6d-4f78-b089-8d7a94e59b8d_MultiChoiceOption_1']").attr('disabled', 'disabled');
$("input[id='Authority_x0020_to_x0020_Deduct_36983ee3-ac6d-4f78-b089-8d7a94e59b8d_MultiChoiceOption_2']").attr('disabled', 'disabled');




if(document.getElementById('Agree_x0020_to_x0020_repay_x0020_59b4d697-29fe-4873-9e02-b69a4ba3edd3_$RadioButtonChoiceField0').checked) {
   
   SPUtility.HideSPField('From');
   SPUtility.HideSPField('To');
   SPUtility.HideSPField('Pay period with the amount of ₱');
   SPUtility.HideSPField('By every');
   
    $("input[id='Agree_x0020_to_x0020_repay_x0020_59b4d697-29fe-4873-9e02-b69a4ba3edd3_$RadioButtonChoiceField1']").attr('disabled', 'disabled');
   
} else if(document.getElementById('Agree_x0020_to_x0020_repay_x0020_59b4d697-29fe-4873-9e02-b69a4ba3edd3_$RadioButtonChoiceField1').checked) {
    
   SPUtility.ShowSPField('From');
   SPUtility.ShowSPField('To');
   SPUtility.ShowSPField('Pay period with the amount of ₱');
   SPUtility.ShowSPField('By every');
   
    $("input[id='Agree_x0020_to_x0020_repay_x0020_59b4d697-29fe-4873-9e02-b69a4ba3edd3_$RadioButtonChoiceField0']").attr('disabled', 'disabled');
   
   
  
} 

//-------------------------------------------------------------------------------------------------

if(document.getElementById('Loan_x0020_Type_3b2034b0-6a7e-48ac-9796-eabdbbc8604a_$RadioButtonChoiceField0').checked) {
   
 
   SPUtility.HideSPField('Item Specification');
   
   $("input[id='Loan_x0020_Type_3b2034b0-6a7e-48ac-9796-eabdbbc8604a_$RadioButtonChoiceField1']").attr('disabled', 'disabled');
   
} else if(document.getElementById('Loan_x0020_Type_3b2034b0-6a7e-48ac-9796-eabdbbc8604a_$RadioButtonChoiceField1').checked) {

   $("input[id='Loan_x0020_Type_3b2034b0-6a7e-48ac-9796-eabdbbc8604a_$RadioButtonChoiceField0']").attr('disabled', 'disabled');
  
} 


var from_cal = document.getElementById("From_b8ded6ee-2967-49a3-ac9b-41939dd9e057_$DateTimeFieldDateDatePickerImage");
from_cal.src = "";
from_cal.alt = ""; 

var to_cal = document.getElementById("To_5ec21242-afbc-49ae-804d-06a2e005e6a6_$DateTimeFieldDateDatePickerImage");
to_cal.src = "";
to_cal.alt = ""; 





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
 function PreSaveAction()
{
var immediate_status= $("select[title='Department Head Status']").val();
var finance_status= $("select[title='Finance Status']").val();
var hr_status= $("select[title='HR Status']").val();
var executive_status= $("select[title='CEO Status']").val();
var vp_status= $("select[title='VP Status']").val();
var allocation_type = $("select[title='Allocation Type']").val();
var next_approver = $("select[title='Next Approver']").val();
//--------------------------------------------------

var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();
                

var created_date_time = $("input[title='Date and Time Created']").val();
var timeAgo = jQuery.timeago(new Date(created_date_time)); 

//--------------------------------------------------


if(immediate_status=="Approve")
{
document.getElementById('Duration_x0020__x0028_Request_x0_a34458ad-4d87-49bc-8a01-34d86c9b249e_$TextField').value = timeAgo;
}else if(immediate_status=="Reject"){
document.getElementById('Duration_x0020__x0028_Request_x00_f05e24ed-728b-4488-85c1-b7cdd5607c3a_$TextField').value = timeAgo;
}


if(finance_status=="Approve")
{
document.getElementById('Duration_x0020__x0028_Request_x0_a34458ad-4d87-49bc-8a01-34d86c9b249e_$TextField').value = timeAgo;
}else if(finance_status=="Reject"){
document.getElementById('Duration_x0020__x0028_Request_x00_f05e24ed-728b-4488-85c1-b7cdd5607c3a_$TextField').value = timeAgo;
}else if(finance_status=="Closed")
{
document.getElementById('Duration_x0020__x0028_Request_x0_a34458ad-4d87-49bc-8a01-34d86c9b249e_$TextField').value = timeAgo;
}




if(hr_status=="Approve")
{
document.getElementById('Duration_x0020__x0028_Request_x0_a34458ad-4d87-49bc-8a01-34d86c9b249e_$TextField').value = timeAgo;
}else if(hr_status=="Reject"){
document.getElementById('Duration_x0020__x0028_Request_x00_f05e24ed-728b-4488-85c1-b7cdd5607c3a_$TextField').value = timeAgo;
}


if(executive_status=="Approve")
{
document.getElementById('Duration_x0020__x0028_Request_x0_a34458ad-4d87-49bc-8a01-34d86c9b249e_$TextField').value = timeAgo;
}else if(executive_status=="Reject"){
document.getElementById('Duration_x0020__x0028_Request_x00_f05e24ed-728b-4488-85c1-b7cdd5607c3a_$TextField').value = timeAgo;
}

if(hr_status == "Approve" && finance_status == "Approve" ){

  if(allocation_type == "(None)" || next_approver == "(None)"){
  alert("Information, Allocation Type and Next Approver needs a value.")

  return false;
  
  }else{
    return true; //true
    
  }

}else{
  return true; //true
  
}






}


</script>
<style>

.sp-peoplepicker-delImage{
display:none;

}
.sp-peoplepicker-editorInput{
display:none;

}

</style>

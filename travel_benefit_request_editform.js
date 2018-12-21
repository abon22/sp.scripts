​​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

//var get_request_type; 

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
  get_travel_benefit_request();

    get_login_preferredname = userProfileProperties[0];
   // console.log("get_login_preferredname: "+get_login_preferredname);

}

  function get_travel_benefit_request(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Travel Benefit Request');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where><OrderBy><FieldRef Name='ID' Ascending='False' /></OrderBy></Query></View>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback2, onRequestFail);

 }

  var created_by;
 var immediate_head;

    function onSucceededCallback2(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         //console.log("enumerator: "+enumerator)
        while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();
        var id = listItem.get_item('ID') 
        if(itemId==id){

          created_by= listItem.get_item('Author').get_lookupValue();
          immediate_head = listItem.get_item('Immediate_x0020_Head').get_lookupValue();
          //console.log("test: "+immediate_head);
        }//end if
      }  //end while

      var status_immediate_head= $("select[title='Status (Department Head)']").val();
      var status_hr= $("select[title='Status (HR)']").val();
      var status_finance= $("select[title='Status (Finance)']").val();
      var next_approver= $("select[title='Next Approver']").val();
      var status_vp= $("select[title='Status (VP)']").val();
      var status_executive= $("select[title='Status (CEO)']").val();
      var complete_name= $("input[title='Complete Name']").val();
      //console.log(complete_name);

      console.log("get_login_preferredname: "+get_login_preferredname);
      console.log("immediate_head: "+immediate_head);

      if(status_immediate_head == ""){
       // console.log("immediate_head:"+immediate_head);
        //|| targetUser=="litoa"
        if(immediate_head==get_login_preferredname || targetUser=="litoa" || targetUser=="aysoukhomlinov" || targetUser=="artems" || targetUser=="System Account"){

        SPUtility.GetSPField('Status (Department Head)').MakeEditable();
        SPUtility.ShowSPField('Status (Department Head)');


        }else{

          if(created_by == get_login_preferredname){

            SPUtility.HideSPField('Status (Department Head)');
            var from_cal = document.getElementById("Dates_x0020_From_2a7efbd9-b442-4af1-ab80-82a11ac51306_$DateTimeFieldDateDatePickerImage");
from_cal.src = "/_layouts/15/images/calendar_25.gif?rev=23";
from_cal.alt = "Select a date from the calendar.";


var to_cal = document.getElementById("Dates_x0020_To_b1af63bd-04bf-441b-9c09-585e4a110c14_$DateTimeFieldDateDatePickerImage");
to_cal.src = "/_layouts/15/images/calendar_25.gif?rev=23";
to_cal.alt = "Select a date from the calendar.";

            $("textarea[id='Type_x0020_of_x0020_Leave_x0020__0c4f1977-78af-4b24-b084-3e7760b72c0a_$TextField']").removeAttr('readonly').css('background-color','');

            $("input[id='Cheque_x002f_Cash_x0020_Issued_x_af0d0645-8936-4d94-bf0f-9ddeab7f8555_$TextField']").removeAttr('readonly').css('background-color','');

            $("input[id='Travel_x0020_Location_bbd49b23-22f4-45ad-bfd9-01b7ebd16a0d_$TextField']").removeAttr('readonly').css('background-color','');
            
            $("input[id='Dates_x0020_From_2a7efbd9-b442-4af1-ab80-82a11ac51306_$DateTimeFieldDate']").removeAttr('readonly').css('background-color','');
            $("input[id='Dates_x0020_To_b1af63bd-04bf-441b-9c09-585e4a110c14_$DateTimeFieldDate']").removeAttr('readonly').css('background-color','');

            $("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
          }else{
            SPUtility.ShowSPField('Status (Department Head)');
            //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
          }

        }

      }else if(status_immediate_head == "Rejected"){
        SPUtility.ShowSPField('Status (Department Head)');
        //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

      }

//====================================================================================================================================
      else if(status_immediate_head == "Approved" && status_hr == ""){

        if(targetUser == "diannag" ||  targetUser == "ninoc" || targetUser == "alfieo" || targetUser == "litoa"){
          SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.GetSPField('Status (HR)').MakeEditable();

        }else{
          SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

        }

      }else if(status_immediate_head == "Approved" && status_hr == "Rejected"){
          SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');

           //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

      }
//=====================================================================================================================================

      else if(status_immediate_head == "Approved" && status_hr == "Approved" && status_finance == ""){
        if(targetUser == "cherryy" || targetUser == "jestinel" || targetUser=="saraht"|| targetUser=="ricellel" || targetUser == "litoa"){
           

            $('select[id=Status_x0020__x0028_Finance_x002_28be3d92-2cd2-4480-a7b9-68aba50bf8d2_$DropDownChoice]').change( function() {
               reason_approval_rejection= $('select[id=Status_x0020__x0028_Finance_x002_28be3d92-2cd2-4480-a7b9-68aba50bf8d2_$DropDownChoice]').val();


              if(reason_approval_rejection == "Approved")
              {
              
            SPUtility.ShowSPField('Allocation Type');
            SPUtility.ShowSPField('Next Approver');
            SPUtility.ShowSPField('Travel Cost Summary');
            SPUtility.ShowSPField('Total Travel Expense');
            SPUtility.ShowSPField('Company Sponsored Amount');
            SPUtility.ShowSPField('Loanable amount');
            SPUtility.ShowSPField('Monthly Payment');
            SPUtility.ShowSPField('Total of Months to be Paid');
              }
              else if(reason_approval_rejection == "Rejected")
              {

            SPUtility.HideSPField('Allocation Type');
            SPUtility.HideSPField('Next Approver');
            SPUtility.HideSPField('Travel Cost Summary');
            SPUtility.HideSPField('Total Travel Expense');
            SPUtility.HideSPField('Company Sponsored Amount');
            SPUtility.HideSPField('Loanable amount');
            SPUtility.HideSPField('Monthly Payment');
            SPUtility.HideSPField('Total of Months to be Paid');

                $("select[id='Allocation_x0020_Type_e2fa5efd-9566-4fb3-bb12-4196513bf4c4_$DropDownChoice'] ").find('option:contains("(None)")').attr("selected",true);
                $("select[id='Next_x0020_Approver_d6f9f9c0-759e-445b-aa72-535c19af1c13_$DropDownChoice'] ").find('option:contains("(None)")').attr("selected",true);
              }else if (reason_approval_rejection == "Closed"){
                $("select[id='Allocation_x0020_Type_e2fa5efd-9566-4fb3-bb12-4196513bf4c4_$DropDownChoice'] ").find('option:contains("(None)")').attr("selected",true);
                $("select[id='Next_x0020_Approver_d6f9f9c0-759e-445b-aa72-535c19af1c13_$DropDownChoice'] ").find('option:contains("(None)")').attr("selected",true);

              }



            });


          SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          SPUtility.GetSPField('Status (Finance)').MakeEditable();

        }else{
          SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
        }

      } else if(status_immediate_head == "Approved" && status_hr == "Approved" && status_finance == "Rejected"){
        SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');

           //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

      }
//============================================================================================================================================


      else if(status_immediate_head == "Approved" && status_hr == "Approved" && status_finance == "Approved" && next_approver == "For VP" && status_vp == ""){

        if(targetUser=="mithis" || targetUser == "litoa"){
          SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');

          SPUtility.ShowSPField('Allocation Type');
          SPUtility.GetSPField('Allocation Type').MakeReadOnly();

          //===================================
          SPUtility.ShowSPField('Travel Cost Summary');
          SPUtility.ShowSPField('Total Travel Expense');
          SPUtility.ShowSPField('Company Sponsored Amount');
          SPUtility.ShowSPField('Loanable amount');
          SPUtility.ShowSPField('Monthly Payment');
          SPUtility.ShowSPField('Total of Months to be Paid');

          document.getElementById("Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte").contentEditable = "false";
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_topDiv']").css('background-color','#F6F6F6');
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte']").css('background-color','#F6F6F6')
          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Loanable_x0020_amount_301eed40-048a-4651-a577-6f3032625acb_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Monthly_x0020_Payment_d921b63d-5122-4337-a479-ace9a19cf3f7_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Total_x0020_of_x0020_Months_x002_5aa7dc5a-90f1-49ec-92ff-0ffbba0e5622_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

          //===================================



          SPUtility.ShowSPField('Status (VP)');
          SPUtility.GetSPField('Status (VP)').MakeEditable();

        }else{
          SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          SPUtility.ShowSPField('Allocation Type');
          SPUtility.GetSPField('Allocation Type').MakeReadOnly();

          //===================================
          SPUtility.ShowSPField('Travel Cost Summary');
          SPUtility.ShowSPField('Total Travel Expense');
          SPUtility.ShowSPField('Company Sponsored Amount');
          SPUtility.ShowSPField('Loanable amount');
          SPUtility.ShowSPField('Monthly Payment');
          SPUtility.ShowSPField('Total of Months to be Paid');

          document.getElementById("Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte").contentEditable = "false";
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_topDiv']").css('background-color','#F6F6F6');
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte']").css('background-color','#F6F6F6')
          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Loanable_x0020_amount_301eed40-048a-4651-a577-6f3032625acb_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Monthly_x0020_Payment_d921b63d-5122-4337-a479-ace9a19cf3f7_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Total_x0020_of_x0020_Months_x002_5aa7dc5a-90f1-49ec-92ff-0ffbba0e5622_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

          //===================================


          SPUtility.ShowSPField('Status (VP)');
          //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
        }

      }else if(status_immediate_head == "Approved" && status_hr == "Approved" && status_finance == "Approved" && next_approver == "For VP" && status_vp == "Rejected"){
          SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          SPUtility.ShowSPField('Allocation Type');
          SPUtility.GetSPField('Allocation Type').MakeReadOnly();

          //===================================
          SPUtility.ShowSPField('Travel Cost Summary');
          SPUtility.ShowSPField('Total Travel Expense');
          SPUtility.ShowSPField('Company Sponsored Amount');
          SPUtility.ShowSPField('Loanable amount');
          SPUtility.ShowSPField('Monthly Payment');
          SPUtility.ShowSPField('Total of Months to be Paid');

          document.getElementById("Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte").contentEditable = "false";
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_topDiv']").css('background-color','#F6F6F6');
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte']").css('background-color','#F6F6F6')
          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Loanable_x0020_amount_301eed40-048a-4651-a577-6f3032625acb_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Monthly_x0020_Payment_d921b63d-5122-4337-a479-ace9a19cf3f7_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Total_x0020_of_x0020_Months_x002_5aa7dc5a-90f1-49ec-92ff-0ffbba0e5622_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

          //===================================


          SPUtility.ShowSPField('Status (VP)');
          //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
      }

//===============================================================================================================================================

      else if(status_immediate_head == "Approved" && status_hr == "Approved" && status_finance == "Approved" && next_approver == "For VP" && status_vp == "Approved" && status_executive == ""){

        if( targetUser =="litoa" || targetUser=="aysoukhomlinov" || targetUser=="artems" || targetUser=="System Account"){

          SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          SPUtility.ShowSPField('Allocation Type');
          SPUtility.GetSPField('Allocation Type').MakeReadOnly();

          //===================================
          SPUtility.ShowSPField('Travel Cost Summary');
          SPUtility.ShowSPField('Total Travel Expense');
          SPUtility.ShowSPField('Company Sponsored Amount');
          SPUtility.ShowSPField('Loanable amount');
          SPUtility.ShowSPField('Monthly Payment');
          SPUtility.ShowSPField('Total of Months to be Paid');

          document.getElementById("Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte").contentEditable = "false";
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_topDiv']").css('background-color','#F6F6F6');
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte']").css('background-color','#F6F6F6')
          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Loanable_x0020_amount_301eed40-048a-4651-a577-6f3032625acb_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Monthly_x0020_Payment_d921b63d-5122-4337-a479-ace9a19cf3f7_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Total_x0020_of_x0020_Months_x002_5aa7dc5a-90f1-49ec-92ff-0ffbba0e5622_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

          //===================================



          SPUtility.ShowSPField('Status (VP)');
          SPUtility.ShowSPField('Status (CEO)');
          SPUtility.GetSPField('Status (CEO)').MakeEditable();


        }else{
          SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          SPUtility.ShowSPField('Allocation Type');
          SPUtility.GetSPField('Allocation Type').MakeReadOnly();
          SPUtility.ShowSPField('Status (VP)');
          SPUtility.ShowSPField('Status (CEO)');

          SPUtility.ShowSPField('Travel Cost Summary');
          SPUtility.ShowSPField('Total Travel Expense');
          SPUtility.ShowSPField('Company Sponsored Amount');
          SPUtility.ShowSPField('Loanable amount');
          SPUtility.ShowSPField('Monthly Payment');
          SPUtility.ShowSPField('Total of Months to be Paid');
         
          if(targetUser == "cherryy" ){
             $("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");

          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").removeAttr('readonly').css('background-color','');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").removeAttr('readonly').css('background-color','');


          }else{
             //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

          }

        }

      } else if(status_immediate_head == "Approved" && status_hr == "Approved" && status_finance == "Approved" && next_approver == "For VP" && status_vp == "Approved" && status_executive == "Rejected"){

        SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          SPUtility.ShowSPField('Allocation Type');
          SPUtility.GetSPField('Allocation Type').MakeReadOnly();
          SPUtility.ShowSPField('Status (VP)');
          SPUtility.ShowSPField('Status (CEO)');

          //===================================
          SPUtility.ShowSPField('Travel Cost Summary');
          SPUtility.ShowSPField('Total Travel Expense');
          SPUtility.ShowSPField('Company Sponsored Amount');
          SPUtility.ShowSPField('Loanable amount');
          SPUtility.ShowSPField('Monthly Payment');
          SPUtility.ShowSPField('Total of Months to be Paid');

          document.getElementById("Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte").contentEditable = "false";
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_topDiv']").css('background-color','#F6F6F6');
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte']").css('background-color','#F6F6F6')
          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Loanable_x0020_amount_301eed40-048a-4651-a577-6f3032625acb_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Monthly_x0020_Payment_d921b63d-5122-4337-a479-ace9a19cf3f7_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Total_x0020_of_x0020_Months_x002_5aa7dc5a-90f1-49ec-92ff-0ffbba0e5622_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

          //===================================

          //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

      }

//===========================================================================================================================================

    else if(status_immediate_head == "Approved" && status_hr == "Approved" && status_finance == "Approved" && next_approver == "For CEO" && status_executive == ""){

        if( targetUser == "litoa" || targetUser=="aysoukhomlinov" || targetUser=="artems" || targetUser=="System Account"){
           SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          SPUtility.ShowSPField('Allocation Type');
          SPUtility.GetSPField('Allocation Type').MakeReadOnly();
          SPUtility.ShowSPField('Status (CEO)');
          SPUtility.GetSPField('Status (CEO)').MakeEditable();

          //===================================
          SPUtility.ShowSPField('Travel Cost Summary');
          SPUtility.ShowSPField('Total Travel Expense');
          SPUtility.ShowSPField('Company Sponsored Amount');
          SPUtility.ShowSPField('Loanable amount');
          SPUtility.ShowSPField('Monthly Payment');
          SPUtility.ShowSPField('Total of Months to be Paid');

          document.getElementById("Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte").contentEditable = "false";
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_topDiv']").css('background-color','#F6F6F6');
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte']").css('background-color','#F6F6F6')
          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Loanable_x0020_amount_301eed40-048a-4651-a577-6f3032625acb_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Monthly_x0020_Payment_d921b63d-5122-4337-a479-ace9a19cf3f7_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Total_x0020_of_x0020_Months_x002_5aa7dc5a-90f1-49ec-92ff-0ffbba0e5622_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

          //===================================


        }else{
         // console.log("aw");

             SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          SPUtility.ShowSPField('Allocation Type');
          SPUtility.GetSPField('Allocation Type').MakeReadOnly();
          SPUtility.ShowSPField('Status (CEO)');

          //===================================
          SPUtility.ShowSPField('Travel Cost Summary');
          SPUtility.ShowSPField('Total Travel Expense');
          SPUtility.ShowSPField('Company Sponsored Amount');
          SPUtility.ShowSPField('Loanable amount');
          SPUtility.ShowSPField('Monthly Payment');
          SPUtility.ShowSPField('Total of Months to be Paid');

          document.getElementById("Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte").contentEditable = "false";
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_topDiv']").css('background-color','#F6F6F6');
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte']").css('background-color','#F6F6F6')
          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Loanable_x0020_amount_301eed40-048a-4651-a577-6f3032625acb_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Monthly_x0020_Payment_d921b63d-5122-4337-a479-ace9a19cf3f7_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Total_x0020_of_x0020_Months_x002_5aa7dc5a-90f1-49ec-92ff-0ffbba0e5622_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

          //===================================
         
          if(targetUser == "cherryy"){
             $("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");

          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").removeAttr('readonly').css('background-color','');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").removeAttr('readonly').css('background-color','');


          }else{
             //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

          }

        }

      
    }else if(status_immediate_head == "Approved" && status_hr == "Approved" && status_finance == "Approved" && next_approver == "For CEO" && status_executive == "Rejected"){
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          SPUtility.ShowSPField('Allocation Type');
          SPUtility.GetSPField('Allocation Type').MakeReadOnly();
          SPUtility.ShowSPField('Status (CEO)');

          //===================================
          SPUtility.ShowSPField('Travel Cost Summary');
          SPUtility.ShowSPField('Total Travel Expense');
          SPUtility.ShowSPField('Company Sponsored Amount');
          SPUtility.ShowSPField('Loanable amount');
          SPUtility.ShowSPField('Monthly Payment');
          SPUtility.ShowSPField('Total of Months to be Paid');

          document.getElementById("Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte").contentEditable = "false";
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_topDiv']").css('background-color','#F6F6F6');
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte']").css('background-color','#F6F6F6')
          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Loanable_x0020_amount_301eed40-048a-4651-a577-6f3032625acb_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Monthly_x0020_Payment_d921b63d-5122-4337-a479-ace9a19cf3f7_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Total_x0020_of_x0020_Months_x002_5aa7dc5a-90f1-49ec-92ff-0ffbba0e5622_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

          //===================================

        //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    }

//=======================================================================================================================================================



    else if(status_immediate_head == "Approved" && status_hr == "Approved" && status_finance == "Approved" && status_executive == "Approved" && complete_name == ""){

          SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          SPUtility.ShowSPField('Allocation Type');
          SPUtility.GetSPField('Allocation Type').MakeReadOnly();

          if(next_approver == "For VP"){
            SPUtility.ShowSPField('Status (VP)');
            SPUtility.ShowSPField('Status (CEO)');
          }else{
            SPUtility.ShowSPField('Status (CEO)');
          }

          //===================================
          SPUtility.ShowSPField('Travel Cost Summary');
          SPUtility.ShowSPField('Total Travel Expense');
          SPUtility.ShowSPField('Company Sponsored Amount');
          SPUtility.ShowSPField('Loanable amount');
          SPUtility.ShowSPField('Monthly Payment');
          SPUtility.ShowSPField('Total of Months to be Paid');

          document.getElementById("Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte").contentEditable = "false";
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_topDiv']").css('background-color','#F6F6F6');
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte']").css('background-color','#F6F6F6')
          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Loanable_x0020_amount_301eed40-048a-4651-a577-6f3032625acb_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Monthly_x0020_Payment_d921b63d-5122-4337-a479-ace9a19cf3f7_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Total_x0020_of_x0020_Months_x002_5aa7dc5a-90f1-49ec-92ff-0ffbba0e5622_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

          //===================================

         /* SPUtility.ShowSPField('Hereby');
          SPUtility.ShowSPField('Waiver');
          SPUtility.ShowSPField('Complete Name');
          SPUtility.ShowSPField('Date');*/

        if(created_by == get_login_preferredname){
            $("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");

        }else{

          //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
        }

      }else if(status_immediate_head == "Approved" && status_hr == "Approved" && status_finance == "Approved" && status_executive == "Approved" && complete_name != ""){

         SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          SPUtility.ShowSPField('Allocation Type');
          SPUtility.GetSPField('Allocation Type').MakeReadOnly();

          if(next_approver == "For VP"){
            SPUtility.ShowSPField('Status (VP)');
            SPUtility.ShowSPField('Status (CEO)');
          }else{
            SPUtility.ShowSPField('Status (CEO)');
          }

          //===================================
          SPUtility.ShowSPField('Travel Cost Summary');
          SPUtility.ShowSPField('Total Travel Expense');
          SPUtility.ShowSPField('Company Sponsored Amount');
          SPUtility.ShowSPField('Loanable amount');
          SPUtility.ShowSPField('Monthly Payment');
          SPUtility.ShowSPField('Total of Months to be Paid');

          document.getElementById("Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte").contentEditable = "false";
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_topDiv']").css('background-color','#F6F6F6');
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte']").css('background-color','#F6F6F6')
          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Loanable_x0020_amount_301eed40-048a-4651-a577-6f3032625acb_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Monthly_x0020_Payment_d921b63d-5122-4337-a479-ace9a19cf3f7_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Total_x0020_of_x0020_Months_x002_5aa7dc5a-90f1-49ec-92ff-0ffbba0e5622_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

           document.getElementById("Waiver_d8431e8a-595b-4f5e-a08a-025dbdcc15d5_$TextField_inplacerte").contentEditable = "false";

        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_0']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_1']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_2']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_3']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_4']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_5']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_6']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_7']").attr('disabled', 'disabled');

       

        var from_cal = document.getElementById("Date_20bc85c0-2543-46f2-b068-d99f956735cc_$DateTimeFieldDateDatePickerImage");
        from_cal.src = "";
        from_cal.alt = "";

       


        if(targetUser == "cherryy" || targetUser == "jestinel" || targetUser=="saraht"|| targetUser=="ricellel"|| targetUser == "litoa"){
          SPUtility.GetSPField('Status (Finance)').MakeEditable();

          var selectobject_phase=document.getElementById("Status_x0020__x0028_Finance_x002_28be3d92-2cd2-4480-a7b9-68aba50bf8d2_$DropDownChoice")
              for (var i=0; i<selectobject_phase.length; i++){
                if (selectobject_phase.options[i].value == 'Rejected')
                 selectobject_phase.remove(i);
              }

        }else{
          SPUtility.HideSPField('Comments');
          //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
        }

      }

      else if(status_immediate_head == "Approved" && status_hr == "Approved" && status_finance == "Closed" && status_executive == "Approved" && complete_name != ""){

          SPUtility.ShowSPField('Status (Department Head)');
          SPUtility.ShowSPField('Status (HR)');
          SPUtility.ShowSPField('Status (Finance)');
          SPUtility.ShowSPField('Allocation Type');
          SPUtility.GetSPField('Allocation Type').MakeReadOnly();
          
          if(next_approver == "For VP"){
            SPUtility.ShowSPField('Status (VP)');
            SPUtility.ShowSPField('Status (CEO)');
          }else{
            SPUtility.ShowSPField('Status (CEO)');
          }
          

          //===================================
          SPUtility.ShowSPField('Travel Cost Summary');
          SPUtility.ShowSPField('Total Travel Expense');
          SPUtility.ShowSPField('Company Sponsored Amount');
          SPUtility.ShowSPField('Loanable amount');
          SPUtility.ShowSPField('Monthly Payment');
          SPUtility.ShowSPField('Total of Months to be Paid');

          document.getElementById("Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte").contentEditable = "false";
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_topDiv']").css('background-color','#F6F6F6');
          $("div[id='Travel_x0020_Cost_x0020_Summary_2d7e4e76-74b2-424b-83c6-91e2b7e681f8_$TextField_inplacerte']").css('background-color','#F6F6F6')
          $("input[id='Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Loanable_x0020_amount_301eed40-048a-4651-a577-6f3032625acb_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Monthly_x0020_Payment_d921b63d-5122-4337-a479-ace9a19cf3f7_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          $("input[id='Total_x0020_of_x0020_Months_x002_5aa7dc5a-90f1-49ec-92ff-0ffbba0e5622_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

           document.getElementById("Waiver_d8431e8a-595b-4f5e-a08a-025dbdcc15d5_$TextField_inplacerte").contentEditable = "false";

        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_0']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_1']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_2']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_3']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_4']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_5']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_6']").attr('disabled', 'disabled');
        $("input[id='Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_7']").attr('disabled', 'disabled');

       

        var from_cal = document.getElementById("Date_20bc85c0-2543-46f2-b068-d99f956735cc_$DateTimeFieldDateDatePickerImage");
        from_cal.src = "";
        from_cal.alt = "";

        SPUtility.HideSPField('Comments');

         //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


      }

      else{

        //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
      }



    }//end function





  function onQuerySucceeded() {

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;

SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
 
}

function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    //$("input[id='ctl00_ctl43_g_675bfd80_8e9c_4f5e_9079_031460bd7348_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}



var status_executive = $("select[title='Status (CEO)']").val();

$(function() {

  SPUtility.GetSPField('Reference Number').MakeReadOnly();

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

var from_cal = document.getElementById("Dates_x0020_From_2a7efbd9-b442-4af1-ab80-82a11ac51306_$DateTimeFieldDateDatePickerImage");
from_cal.src = "";
from_cal.alt = "";


var to_cal = document.getElementById("Dates_x0020_To_b1af63bd-04bf-441b-9c09-585e4a110c14_$DateTimeFieldDateDatePickerImage");
to_cal.src = "";
to_cal.alt = "";








  // Get the ID from the query string
  var id = getQueryString()["ID"];
 
  // Find the form's main table
  var table = $('table.ms-formtable');
 
  // Add a row with the ID in
  table.prepend(
    "<tr><td class='ms-formlabel'><h3 class='ms-standardheader'>Issue ID</h3></td>" +
                "<td class='ms-formbody'>" + id + "&nbsp;</td></tr>"
                );




SPUtility.HideSPField('Status (Department Head)');
SPUtility.GetSPField('Status (Department Head)').MakeReadOnly();

SPUtility.HideSPField('Status (HR)');
SPUtility.GetSPField('Status (HR)').MakeReadOnly();

SPUtility.HideSPField('Status (Finance)');
SPUtility.GetSPField('Status (Finance)').MakeReadOnly();

SPUtility.HideSPField('Status (VP)');
SPUtility.GetSPField('Status (VP)').MakeReadOnly();

SPUtility.HideSPField('Status (CEO)');
SPUtility.GetSPField('Status (CEO)').MakeReadOnly();


SPUtility.HideSPField('Allocation Type');
SPUtility.HideSPField('Next Approver');
SPUtility.HideSPField('Travel Cost Summary');
SPUtility.HideSPField('Total Travel Expense');
SPUtility.HideSPField('Company Sponsored Amount');
SPUtility.HideSPField('Loanable amount');
SPUtility.HideSPField('Monthly Payment');
SPUtility.HideSPField('Total of Months to be Paid');

SPUtility.HideSPField('Hereby');
SPUtility.HideSPField('Waiver');

SPUtility.HideSPField('Complete Name');
SPUtility.HideSPField('Date');



  var status_immediate_head= $("select[title='Status (Department Head)']").val();
        var status_hr= $("select[title='Status (HR)']").val();
        var status_finance= $("select[title='Status (Finance)']").val();
        var next_approver= $("select[title='Next Approver']").val();
        status_vp= $("select[title='Status (VP)']").val();
        status_executive= $("select[title='Status (CEO)']").val();


       if(status_finance == "Approved" ){
         check_require = "yes";
        }

       if(status_executive== "Approved"){

        check_require = "no";

        $("select[id='Status_x0020__x0028_Executive_x0_3a507ff1-a4fe-4e44-b1b1-3073e91b46b6_$DropDownChoice']").attr('disabled', 'disabled');
    

        SPUtility.ShowSPField('Hereby');
        SPUtility.ShowSPField('Waiver');


         var waiver_div = document.getElementById('Waiver_d8431e8a-595b-4f5e-a08a-025dbdcc15d5_$TextField_inplacerte');

        waiver_div.innerHTML = "<table border='0' cellpadding='0' cellspacing='0' width='582' style='width: 437pt;'><colgroup><col width='340' style='width: 255pt;'></col><col width='242' style='width: 182pt;'></col> </colgroup><tbody<tr height='49' style='height: 36.75pt;'><td colspan='2' height='49' class='xl66' width='582' style='height: 36.75pt; width: 437pt; text-align: center;'><span lang='EN-AU' style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'><strong>TRAVEL WAIVER FORM</strong></span></td></tr><tr height='43' style='height: 32.25pt;'><td colspan='2' height='43' class='xl67' width='582' style='height: 32.25pt; width: 437pt;'><span lang='EN-AU'>I acknowledge and accept that my participation in this travel is entirely voluntary and I assumed all risk.</span></td></tr><tr height='27' style='height: 20.25pt;'><td colspan='2' height='27' class='xl67' width='582' style='height: 20.25pt; width: 437pt;'><span lang='EN-AU'>I understand that company rules and regulations will be in effect.</span></td></tr><tr height='91' style='height: 68.25pt;'><td colspan='2' height='91' class='xl67' width='582' style='height: 68.25pt; width: 437pt;'><span lang='EN-AU'>I hereby agree not to hold the company, any individual employed by the company, or the management liable for any expense, loss, personal injury, or accident I may have encounter during the travel. I will not bring any suit or assert any claims against the House of I.T as a result of any action taken.</span></td></tr><tr height='51' style='height: 38.25pt;'><td colspan='2' height='51' class='xl67' width='582' style='height: 38.25pt; width: 437pt;'><span lang='EN-AU'>By typing my complete name and date ‘personally’ in the space provided, I agree with the statement above.</span></td></tr></tbody></table>";

        SPUtility.ShowSPField('Complete Name');
        SPUtility.ShowSPField('Date');

        }


/*
        else if(status_executive== "Rejected"){


        $("select[id='Status_x0020__x0028_Executive_x0_3a507ff1-a4fe-4e44-b1b1-3073e91b46b6_$DropDownChoice']").attr('disabled', 'disabled');


        }*/

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

var check_require;

 $(document).ready(function()
{



//$('nobr:contains("Rich Text")').closest('tr').find('div[id$="Waiver_d8431e8a-595b-4f5e-a08a-025dbdcc15d5_$TextField_inplacerte"]').val('<table border="1"><tr><td>Hello </td><td><b>World !!!</b></td></tr></table>');

//--------------------------------------------------------------------------------------------------------------------------------------------


SPUtility.GetSPField('Reference Number').MakeReadOnly();

//--------------------------------------------------------------------------------------------------------------------------------------------------------

SPUtility.HideSPField('Duration (Requested to Confirm)');


SPUtility.HideSPField('Date and Time Created');
//SPUtility.HideSPField('Duration(Created to Closed)');
//SPUtility.HideSPField('Duration(Requested to Approved)');
//SPUtility.HideSPField('Date and Time Approved');
//SPUtility.HideSPField('Duration(Approved to Closed)');
//SPUtility.HideSPField('Duration(Requested to Rejected)');
//SPUtility.GetSPField('Department Head').MakeReadOnly();
//SPUtility.HideSPField('Department Head');



//document.getElementById("Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField_inplacerte").contentEditable = false;
$("input[id='Requestor_x0027_s_x0020_Name_6f3b7490-6aee-47b2-b7e7-9a6f050c3db4_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Department_x002f_Section_867bfa56-d676-4ede-b113-9128dd19b643_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Dates_x0020_From_2a7efbd9-b442-4af1-ab80-82a11ac51306_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Dates_x0020_To_b1af63bd-04bf-441b-9c09-585e4a110c14_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Travel_x0020_Location_bbd49b23-22f4-45ad-bfd9-01b7ebd16a0d_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("textarea[id='Type_x0020_of_x0020_Leave_x0020__0c4f1977-78af-4b24-b084-3e7760b72c0a_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
//$("textarea[id='Type_x0020_of_x0020_Leave_x0020__0c4f1977-78af-4b24-b084-3e7760b72c0a_$TextField']").css('width','906px');

$("input[id='Cheque_x002f_Cash_x0020_Issued_x_af0d0645-8936-4d94-bf0f-9ddeab7f8555_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


var comp_name = document.getElementById("Name_x0020_of_x0020_the_x0020_Em_cf3766a6-9041-4651-a36e-23e5b13978c5_$TextField").value;

//alert(comp_name);
if(comp_name != ''){
$("input[id='Name_x0020_of_x0020_the_x0020_Em_cf3766a6-9041-4651-a36e-23e5b13978c5_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Date_20bc85c0-2543-46f2-b068-d99f956735cc_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
}






});
var reason_approval_rejection;
var check_0 = 0;
var check_1 = 0;
var check_2 = 0;
var check_3 = 0;
var check_4 = 0;
var check_5 = 0;
var check_6 = 0;
var check_7 = 0;

$(function() {


SPUtility.GetSPField('Reference Number').MakeReadOnly();



  //------------------------------For Check Boxex in Hereby-------------------------------
  

$('input[id=Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_0').change( function() {

  if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_0').checked) {
   check_0 = 1;
} else {
    check_0 = 0;
}

}); 
//----------------------------------------------------------------------------------------------------------------  
  

$('input[id=Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_1').change( function() {

  if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_1').checked) {
   check_1 = 1;
} else {
    check_1 = 0;
}

}); 
  
//----------------------------------------------------------------------------------------------------------------  

$('input[id=Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_2').change( function() {

  if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_2').checked) {
   check_2 = 1;
} else {
    check_2 = 0;
}


  }); 
//----------------------------------------------------------------------------------------------------------------  

$('input[id=Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_3').change( function() {

  if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_3').checked) {
   check_3 = 1;
} else {
    check_3 = 0;
}

  }); 
//----------------------------------------------------------------------------------------------------------------   

$('input[id=Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_4').change( function() {


  if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_4').checked) {
   check_4 = 1;
} else {
    check_4 = 0;
}

  }); 
//----------------------------------------------------------------------------------------------------------------    

$('input[id=Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_5').change( function() {

  if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_5').checked) {
   check_5 = 1;
} else {
    check_5 = 0;
}
}); 
  
//----------------------------------------------------------------------------------------------------------------    

$('input[id=Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_6').change( function() {

  if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_6').checked) {
   check_6 = 1;
} else {
    check_6 = 0;
}

  }); 
//----------------------------------------------------------------------------------------------------------------    
  
$('input[id=Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_7').change( function() {
 

  if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_7').checked) {
   check_7 = 1;
} else {
    check_7 = 0;
}

}); 



//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------    
      
    
    if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_0').checked) {
   check_0 = 1;
} else {
    check_0 = 0;
} 
   
   //----------------------------------------------------------------------------------------------------------------    
   
       if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_1').checked) {
   check_1 = 1;
} else {
    check_1 = 0;
} 
   
   //----------------------------------------------------------------------------------------------------------------    

    if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_2').checked) {
   check_2 = 1;
} else {
    check_2 = 0;
} 
   
   //----------------------------------------------------------------------------------------------------------------    


    if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_3').checked) {
   check_3 = 1;
} else {
    check_3 = 0;
} 
   
   //----------------------------------------------------------------------------------------------------------------    


    if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_4').checked) {
   check_4 = 1;
} else {
    check_4 = 0;
} 
   
   //----------------------------------------------------------------------------------------------------------------    

    if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_5').checked) {
   check_5 = 1;
} else {
    check_5 = 0;
} 
   
   //----------------------------------------------------------------------------------------------------------------    

    if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_6').checked) {
   check_6 = 1;
} else {
    check_6 = 0;
} 
   
   //----------------------------------------------------------------------------------------------------------------    


    if(document.getElementById('Hereby_a3254037-3f80-4ae8-abdf-81c99a86040a_MultiChoiceOption_7').checked) {
   check_7 = 1;
} else {
    check_7 = 0;
} 
   
   //----------------------------------------------------------------------------------------------------------------    


  
  
});

function PreSaveAction(){





var created_date_time = $("input[title='Date and Time Created']").val();

var complete_name = $('input[id=Name_x0020_of_x0020_the_x0020_Em_cf3766a6-9041-4651-a36e-23e5b13978c5_$TextField]').val();
var date = $('input[id=Date_20bc85c0-2543-46f2-b068-d99f956735cc_$DateTimeFieldDate]').val();

var status_immediate_head= $("select[title='Status (Department Head)']").val();
var status_hr= $("select[title='Status (HR)']").val();
var status_finance= $("select[title='Status (Finance)']").val();
status_executive= $("select[title='Status (CEO)']").val();

var next_approver= $("select[title='Next Approver']").val();
var allocation_type= $("select[title='Allocation Type']").val();

var total_expense= $('input[id=Total_x0020_Travel_x0020_Expense_907853a2-51e4-4a89-a9d5-1c0dfb6d1d26_$CurrencyField]').val();
var sponsored_amount= $('input[id=Company_x0020_Sponsored_x0020_Am_8b7383e4-a949-4575-bc3c-8a6a41ca0253_$CurrencyField]').val();
var loan_amount= $('input[id=Loanable_x0020_amount_301eed40-048a-4651-a577-6f3032625acb_$CurrencyField]').val();
var month_pay= $('input[id=Monthly_x0020_Payment_d921b63d-5122-4337-a479-ace9a19cf3f7_$CurrencyField]').val();
var total_months= $('input[id=Total_x0020_of_x0020_Months_x002_5aa7dc5a-90f1-49ec-92ff-0ffbba0e5622_$NumberField]').val();


 if(status_executive == "Approved" && check_require == "no")
{
//alert(check_require);
if(check_0 != 1 || check_1 != 1 || check_2 != 1 || check_3 != 1 || check_4 != 1 || check_5 != 1 || check_6 != 1 || check_7 != 1 || complete_name == "" || date == "" )
{
alert("Check/Fill up all fields");
return false;
}else
{




if (complete_name != "" && date != ""){
var timeAgo_req2confirm = jQuery.timeago(new Date(created_date_time)); 
document.getElementById('Duration_x0020__x0028_Requested__f846355a-aa8a-4e70-95a6-c10572b07e1f_$TextField').value = timeAgo_req2confirm ;
//alert(timeAgo_req2confirm);
}


  if(status_hr == "Approved" && status_finance == "Approved" ){

      if(allocation_type == "(None)" || next_approver == "(None)"){
      alert("Information, Allocation Type and Next Approver needs a value.")
      console.log("a");
      return false;

      
      }else{
        return true; //true
     //console.log("b");
        
    }

  }else{
   return true; //true
   //console.log("c");
    
  }
}


}


else
{
  if(status_hr == "Approved" && status_finance == "Approved" ){

      if(allocation_type == "(None)" || next_approver == "(None)"){
      alert("Information, Allocation Type and Next Approver needs a value.")

      return false;
      console.log("d");
      
      }else{
        return true; //true
        console.log("e");
        
      }

    }else{
     return true; //true
      
    }
}


}

</script>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

<style>
.sp-peoplepicker-delImage{
display:none;
}
.sp-peoplepicker-editorInput{
display:none;
}
.ms-propertysheet{
display:none;
}
</style>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/SiteAssets/Scripts/spjs-utility.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script>
<script type="text/javascript">
//function to open pages in a dialog
function openInDialog(dlgWidth, dlgHeight, dlgAllowMaximize,dlgShowClose,needCallbackFunction, pageUrl) 
{    
    var options = { url: pageUrl, width: dlgWidth, height: dlgHeight, allowMaximize: dlgAllowMaximize,
        showClose: dlgShowClose   
    };
    
  if(needCallbackFunction)
  {
    options.dialogReturnValueCallback = Function.createDelegate(null, CloseDialogCallback);
  }
    SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
}

function CloseDialogCallback(dialogResult, returnValue)
{
  //if user click on OK or Save
     if(dialogResult == SP.UI.DialogResult.OK)
     {  // refresh parent page
    //SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.RefreshPage', SP.UI.DialogResult.OK);
    ExecuteOrDelayUntilScriptLoaded(init,'sp.js');     

     }
     // if user click on Close or Cancel
     else if(dialogResult == SP.UI.DialogResult.cancel)
     {  // Do Nothing or add any logic you want 
     }
     else
     {//alert("else " + dialogResult);
     }
}


</script>
<script type="text/javascript">


var userProfileProperties;

//ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

function checkuserprofile(){
  //alert("Init running...");

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded2), Function.createDelegate(this,this.onQueryFailed2));
    

 }

 function get_liquidation_forms(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Liquidation Form');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query></View>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback2, onFailedCallback2);

 }

 var created_by;
 var immediate_head;

    function onSucceededCallback2(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

      var id = listItem.get_item('ID') 
        
        if(itemId==id){

          created_by= listItem.get_item('Author').get_lookupValue();
          immediate_head = listItem.get_item('Immediate_x0020_Head').get_lookupValue();
        
        }//end if
  
        
      }  //end while



fin_status = $("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff111_ctl00_DropDownChoice']").val();
immediate_status = $("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff151_ctl00_DropDownChoice']").val();

var immediate_head_appr = $("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff151_ctl00_DropDownChoice']").val();
var fin_approval = $("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff111_ctl00_DropDownChoice']").val();

if(document.getElementById('ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff131_ctl00_ctl00').checked) {
// console.log("immediate_head: "+immediate_head)
//console.log("get_preferredname : "+get_preferredname);
//console.log("created_by : "+created_by);


     if(immediate_head_appr=="(None)"){
           if(get_preferredname == immediate_head || targetUser=="litoa" || get_preferredname=="Artem Soukhomlinov | OffshoringTBOS.com"|| targetUser=="aysoukhomlinov"){
            $(".ms-propertysheet").css("visibility","hidden")
           // console.log("a");
           }else if(get_preferredname==created_by ){

            $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff71_ctl00_ctl00_TextField']").removeAttr('readonly').css('background-color','');

            $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_savebutton2_ctl00_diidIOSaveItem']").removeAttr('disabled');
            $("#immediate_head_approval").hide();
            $("#item_expenses_tr").hide();
            $("#item_expenses_tr_load").show();
            $("div[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff61_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'true').css('background-color','')

           }else{
            //console.log("b");
            $(".ms-propertysheet").css("visibility","hidden")
            $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
           }

     }

     if(immediate_head_appr=="Approved" && fin_approval=="(None)")
     {
      $(".ms-propertysheet").css("visibility","hidden")
  
          if(targetUser=="jestinel" || targetUser=="cherryy" || targetUser=="saraht"|| targetUser=="ricellel" || targetUser=="litoa" || targetUser == "nowmarc"){

            $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff71_ctl00_ctl00_TextField']").removeAttr('readonly').css('background-color','');

            $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_savebutton2_ctl00_diidIOSaveItem']").removeAttr('disabled');
            $("#immediate_head_approval").hide();
            $("#item_expenses_tr").hide();
            $("#item_expenses_tr_load").show();
            $("div[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff61_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'true').css('background-color','')

       

          }else{
            $(".ms-propertysheet").css("visibility","hidden")
            $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
          }
     }

if(immediate_head_appr=="Approved" && fin_approval=="Closed"){
  $(".ms-propertysheet").css("visibility","hidden")
  $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}



}else{
 
  if(get_preferredname == created_by || get_preferredname == "Lito Abon Jr."){
    $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff71_ctl00_ctl00_TextField']").removeAttr('readonly').css('background-color','');


  }
  $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
  $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}





  }




    function onFailedCallback2(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

      $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }





 var fin_status;
 var immediate_status;

  function onQuerySucceeded2() {

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;

SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');







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

var get_preferredname;
function onRequestSuccess() {
    get_preferredname = userProfileProperties[0];
   get_liquidation_forms();
    
}



  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}


function onRequestFail2(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}


$(document).ready(function() {




 $('#ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff131_ctl00_ctl00').change(function() {
     if(this.checked) {
// console.log("created_by: "+created_by);
//  console.log("get_preferredname: "+get_preferredname);

          if(created_by == get_preferredname || get_preferredname == "Lito Abon Jr."){
          $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_savebutton2_ctl00_diidIOSaveItem']").removeAttr('disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
          }else{

          }
          
        }else{
          $(".ms-propertysheet").css("visibility","hidden")
          $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
        }
});


});
  
//--------Change 'Save' to 'Submit'-----------------
$(function() {

var html ="<tr><td width='400px' colspan='2'><div id='ExpenseItemFilter' style='border: thin solid rgb(210, 208, 221);'></div></td> </tr>";
$('.ms-formtable > tbody > tr').eq(5).before(html);

$("#item_expenses_tr").hide();
$("#finance_approval").hide();
$("#immediate_head_approval").hide();


$("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff31_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff101_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff41_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff71_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');



$("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


if(document.getElementById('ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff131_ctl00_ctl00').checked) {
$("#NoteHide").hide();
  $("#MSOZoneCell_WebPartWPQ4").hide();

$("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff131_ctl00_ctl00']").attr('disabled', 'disabled')
$("#immediate_head_approval").show();
$("#item_expenses_tr_load").hide();
$("#item_expenses_tr").show();

$("textarea[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff51_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("div[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff61_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F9F9F9');

$("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

var from_cal = document.getElementById("ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
from_cal.src = "";
from_cal.alt = ""; 



if($("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff111_ctl00_DropDownChoice']").val()=="Closed"){

  $("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff111_ctl00_DropDownChoice']").attr('disabled', 'disabled');
  $("#ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff121_ctl00_ctl00_TextField").hide();

  $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
  $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}



}//end checked


var immediate_head_app = $("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff151_ctl00_DropDownChoice']").val();
if(immediate_head_app=="Approved"){
$("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff151_ctl00_DropDownChoice']").attr('disabled', 'disabled');
$("#immediate_head_approval").show();
$("#finance_approval").show();
$("#item_expenses_tr_load").hide();
$("#item_expenses_tr").show();
}


$("div[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff141_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$( "a[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff141_ctl00_ctl00_UserField_checkNames']" ).empty();
$( "a[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff141_ctl00_ctl00_UserField_browse']" ).empty();
  



        var inputcontrols = document.getElementsByTagName("input");
        for(i = 0; i<inputcontrols.length; i++)
        {
            if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                inputcontrols[i].value = "Submit";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        ribbonSave.text("Submit");


    });

//------------------------------------

// List GUID or list display name of the current list
var thisListGuid = '{247C4734-16F6-4753-AE01-A27C3B241745}';

// This code runs only if the ID parameter is omitted
if(GetUrlKeyValue('ID')==''){

  var lastID = getLastItemID();

  if(lastID!==''){
    var newURL = location.pathname+"?ID="+lastID;
    //alert(newURL);
    if(GetUrlKeyValue('IsDlg')==='1'){
      newURL+="&IsDlg=1";
    }
    location.href=newURL+"&Source=https://intranet.houseofit.com.au/Lists/Liquidation%20Form%20V2/My%20Liquidation%20Forms.aspx";

    
  }
}

/********************************************
  Do not modify anything below this line
*********************************************/
function getLastItemID(){ 
  var queryBuffer = [];
    queryBuffer.push("<Where><Eq><FieldRef Name='Author' LookupId='TRUE' /><Value Type='User'>"+_spPageContextInfo.userId+"</Value></Eq></Where>");
    queryBuffer.push("<OrderBy><FieldRef Name='ID' Ascending='FALSE' /></OrderBy>");
  var res = spjs_QueryItems({listName:thisListGuid,query:queryBuffer.join(''),viewFields:['ID'],rowLimit:1});
  
  if(res.count<0){
    alert("An error occurred. Most likely the parameter \"thisListGuid\" is wrong.");
  }else if(res.count>0){
    return res.items[0].ID;
  }else{
    return '';
  }
}



ExecuteOrDelayUntilScriptLoaded(init,'sp.js');

var issue_id;
var status;
var itemId;
//var expense_reimburse_id;

      

function init(){



itemId = GetUrlKeyValue("ID", false, location.href);


         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Liquidation Expense Items');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<Query><OrderBy><FieldRef Name='ID' Ascending='True' /></OrderBy></Query>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);


        


 }

 var returnedItems;

// var siteUrl="https://intranet.houseofit.com.au";

   function del_expenses(temp_id) {
    var get_expense_id = temp_id;
    var r = confirm("Are you sure you want to send the item to the site Recycle Bin?");

    if (r == true) {

    this.setitemId = get_expense_id;
    var ctx = new SP.ClientContext();
    var oList = ctx.get_web().get_lists().getByTitle('Liquidation Expense Items');
    this.ListItem = oList.getItemById(setitemId);
    ListItem.deleteObject();
    ctx.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded),Function.createDelegate(this, this.onQueryFailed));


    }
   
};

function onQuerySucceeded() {
  //var getlastID = GetUrlKeyValue("ID", false, location.href);
  //var getURL = location.pathname+"?ID="+getlastID;
  //location.href=getURL+"&Source=https%3A%2F%2Fintranet%2Ehouseofit%2Ecom%2Eau%2FLists%2FExpense%2520Reimbursement%2520Form%2FAllItems%2Easpx";
  //location.href=getURL+"&Source=https://intranet.houseofit.com.au/Lists/Liquidation%20Form%20V2/My%20Liquidation%20Forms.aspx";
  ExecuteOrDelayUntilScriptLoaded(init,'sp.js'); 

}
function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() +'\n' + args.get_stackTrace());
}


   function onSucceededCallback(sender, args) {

checkuserprofile();

    Number.prototype.format = function(n, x) {
    var re = '(\\d)(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
};


         var enumerator = returnedItems.getEnumerator();
         //var table = $('#ExpenseItemFilter');
         var table = document.getElementById('ExpenseItemFilter');

         var markuptable = "<table id='table_expense_id' cellpadding='0' cellspacing='0' class='class_table_expenses' style='width: 570px;' ><thead style='font-weight: normal; font-size: 0.89em; color: #777;' ><tr><td colspan='6' align='center' class='ms-vb2'><b>ITEMIZED EXPENSES</b> </td></tr><tr valign='top' ><th style='font-weight: bold;' align='center' class='ms-vb2'>Edit</th><th style='font-weight: bold;' align='left' class='ms-vb2'>OR Date</th><th  align='left' style='font-weight: bold;' class='ms-vb2'>OR No.</th><th  align='left' style='font-weight: bold;' class='ms-vb2'>Expense Item</th><th style='font-weight: bold;' align='right' class='ms-vb2'>Qty</th><th style='font-weight: bold;' align='right' class='ms-vb2'>Amount</th><th style='font-weight: bold;' align='right' class='ms-vb2'>Total</th><th style='font-weight: bold;' align='center' class='ms-vb2'>Delete</th></tr></thead><tbody>";
         var markuptable2 = "<table id='table_expense_id' cellpadding='0' cellspacing='0' class='class_table_expenses' style='width: 570px;' ><thead style='font-weight: normal; font-size: 0.89em; color: #777;' ><tr><td colspan='4' align='center' class='ms-vb2'><b>ITEMIZED EXPENSES</b> </td></tr><tr valign='top' ><th style='font-weight: bold;' align='left' class='ms-vb2'>OR Date</th><th  align='left' style='font-weight: bold;' class='ms-vb2'>OR No.</th><th  align='left' style='font-weight: bold;' class='ms-vb2'>Expense Item</th><th style='font-weight: bold;' align='right' class='ms-vb2'>Qty</th><th style='font-weight: bold;' align='right' class='ms-vb2'>Amount</th><th style='font-weight: bold;' align='right' class='ms-vb2'>Total</th></tr></thead><tbody>";

         var markuptableend ="</tbody></table><br>";


        var markupData = "";
        var markupData2 = "";

         var total=0;


         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

  var id = listItem.get_item('ID');
  var get_expense_reimburse_id = listItem.get_item('LEID');
        
        if(itemId==get_expense_reimburse_id){//if

        var date= listItem.get_item('OR_x0020_Date');
        var frmtDate = date.format('M/dd/yyyy');

        total += listItem.get_item('Total');
        //alert(listItem.get_item('Qty'));

        var edit_url = "<a href='#' onclick='openInDialog(610,410,true,true,true,&#39;https://intranet.houseofit.com.au/Lists/Liquidation%20Expense%20Items/EditForm.aspx?RootFolder=&amp;IsDlg=1&ID="+id+"&amp;LEID="+itemId+"&#39;);'><img border='0' alt='edit' src='/_layouts/15/images/edititem.gif?rev=23'></a>";

        var del_url = "<a onclick= 'del_expenses("+id+");' href='javascript:void(0)' ><img border='0' alt='Delete' src='/_layouts/15/images/delitem.gif?rev=23'></a>";

        markupData += "<tr><td class='ms-vb2' align='center' >"+edit_url+"</td><td class='ms-vb2'>"+frmtDate+"</td><td class='ms-vb2'>"+listItem.get_item('OR_x0020_No_x002e_')+"</td><td class='ms-vb2'>"+listItem.get_item('Expense_x0020_Item')+"</td><td align='right' class='ms-vb2'>"+listItem.get_item('Qty')+"</td><td align='right' class='ms-vb2'>₱"+listItem.get_item('Amount').format(2)+"</td><td align='right' class='ms-vb2'>₱"+listItem.get_item('Total').format(2)+"</td><td align='center' class='ms-vb2'>"+del_url+"</td></tr>";

        markupData2 += "<tr><td class='ms-vb2'>"+frmtDate+"</td><td class='ms-vb2'>"+listItem.get_item('OR_x0020_No_x002e_')+"</td><td class='ms-vb2'>"+listItem.get_item('Expense_x0020_Item')+"</td><td align='right' class='ms-vb2'>"+listItem.get_item('Qty')+"</td><td align='right' class='ms-vb2'>₱"+listItem.get_item('Amount').format(2)+"</td><td align='right' class='ms-vb2'>₱"+listItem.get_item('Total').format(2)+"</td></tr>";

        }//end if
        
        
      }  //end while


     // console.log(total);
     var new_item_html = "&nbsp &nbsp &nbsp<span style='height:10px;width:10px;position:relative;display:inline-block;overflow:hidden;' class='s4-clust'><img src='/_layouts/15/images/fgimg.png?rev=23' alt='' style='left:-0px !important;top:-32px !important;position:absolute;'></span>&nbsp; <a class='ms-addnew' id='idHomePageNewItem' href='#' onclick='openInDialog(610,430,true,true,true,&#39;https://intranet.houseofit.com.au/Lists/Liquidation%20Expense%20Items/newform.aspx?RootFolder=&amp;IsDlg=1&LEID="+itemId+"&#39;);'>Add new item</a>";



    table.innerHTML ="<br>"+new_item_html+""+markuptable+""+markupData+""+markuptableend+"<br><br>";

     var frmt_div = document.getElementById('ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff61_ctl00_ctl00_TextField_inplacerte');

  frmt_div.innerHTML = "<br>"+markuptable2+""+markupData2+""+markuptableend+"<br><br>";

    $("table#table_expense_id tbody tr:even").css("background-color", "#F2F2F2");
   

document.getElementById("ExpenseItemFilter").style.border = "thin solid #D2D0DD";
//document.getElementById("ExpenseItemFilter").style.width  = "570px";

 document.getElementById('ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff101_ctl00_ctl00_TextField').value = total.format(2);
var amount_requested = $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff71_ctl00_ctl00_TextField']").val();
var total_amnt = parseFloat(total.format(2));

var amount_requested = Number(amount_requested.replace(/[^0-9\.-]+/g,""));

var excess_deficit= amount_requested - total;
// console.log("amount_requested: "+amount_requested);
// console.log("total: "+total);
// console.log("excess_deficit: "+excess_deficit);
document.getElementById('ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff91_ctl00_ctl00_TextField').value = excess_deficit.format(2);

   }

   //This function fires when the query fails
   function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup);
   }







function PreSaveAction()

{


var amount_requested = $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff71_ctl00_ctl00_TextField']").val();
var total_amnt = $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff101_ctl00_ctl00_TextField']").val();;

var amount_requested = Number(amount_requested.replace(/[^0-9\.-]+/g,""));

var total_amnt = Number(total_amnt.replace(/[^0-9\.-]+/g,""));

var excess_deficit= amount_requested - total_amnt;

console.log("excess_deficit: "+excess_deficit);
// console.log("amount_requested: "+amount_requested);
// console.log("total: "+total);
// console.log("excess_deficit: "+excess_deficit);
document.getElementById('ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff91_ctl00_ctl00_TextField').value = excess_deficit.format(2);



if(document.getElementById('ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff131_ctl00_ctl00').checked) {


console.log(immediate_status);
  if(immediate_status == "Rejected"){
$('#ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff151_ctl00_DropDownChoice').empty()
  }else if(fin_status == "For Revision"){
$('#ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff111_ctl00_DropDownChoice').empty()
  }else if($("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff111_ctl00_DropDownChoice']").val() =='For Revision'){
      //$("#ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff131_ctl00_ctl00").prop("checked", false);
  }else if($("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff111_ctl00_DropDownChoice']").val() =='Closed' || $("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff151_ctl00_DropDownChoice']").val()=="Approved"){
    $("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff151_ctl00_DropDownChoice']").removeAttr('disabled');
     $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff131_ctl00_ctl00']").removeAttr('disabled');
  }else if($("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff151_ctl00_DropDownChoice']").val()=="(None)" ||$("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff111_ctl00_DropDownChoice']").val()=="(None)"){

    $("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff151_ctl00_DropDownChoice']").removeAttr('disabled');
    $("select[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff111_ctl00_DropDownChoice']").removeAttr('disabled');
    $("input[id='ctl00_ctl43_g_3376309c_7f05_42a6_b2b2_a248eaca9467_ff131_ctl00_ctl00']").removeAttr('disabled');
  }



}
return true;

 }


</script> ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​<div id='NoteHide'><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i></div>

 <script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var acknowledgeCheckbox = 0;

//get the name of the current user
var context = null;
var web = null;
var currentUser = null;

ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");






//
    function GetUserLoginName() 
    {
      context = new SP.ClientContext.get_current();
      web = context.get_web();
      this._currentUser = web.get_currentUser();
      context.load(this._currentUser);
      context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
      Function.createDelegate(this, this.onFailureMethod));
    }


    function onSuccessMethod(sender, args) 
    {
        var Name = $("div[title='Auditee: Required Field']").text().trim();
        var trimmedName = Name.replace(/[|&;$%@"<>()+,]/g, "");
        var evaluatorName = $("div[title='Auditor: Required Field']").text().trim();
        var trimmedevaluatorName = evaluatorName.replace(/[|&;$%@"<>()+,]/g, "");
        var currentName = this._currentUser.get_title();
        var ckbox = $('#ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff101_ctl00_ctl00');

// if (currentName == trimmedName)
	// {
            	//console.log("trimmedName: "+trimmedName);
  //           if (currentName == trimmedName)
  //           {

  //             // alert("gotcha" + acknowledgeCheckbox);
  //             // //$('#internal_audit_checklist #hide_submission').hide();
  //             //$('#internal_audit_checklist #acknowledgeBy').hide();
  //             //$('#internal_audit_checklist #acknowledgement').show();
  //             console.log("a")

  //             document.getElementById('ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff151_ctl00_ctl00_TextField').value =this._currentUser.get_title();
  //             $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

  //              $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('show', 'show');
  //              $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","show");

  //              if(acknowledgeCheckbox ==0)
  //              {
		// console.log("a.1")
		// $('#acknowledgement').show();
        		
  //              }
  //              else
  //              {
  //              	console.log("a.2")
  //                 document.getElementById("ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff161_ctl00_ctl00").disabled=true;
  //                 $('#internal_audit_checklist #acknowledgeBy').show();
  //                 $('#internal_audit_checklist #acknowledgement').hide();

  //                 $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
  //               $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
  //              }

  //           }
  //           else if (currentName == trimmedevaluatorName || currentName == "Nowmar Calidro" || currentName == "Paulo Quijano")
  //           {
  //           	//alert("OK");
  //           	console.log("aaaa")
  //             $('#internal_audit_checklist #acknowledgement').hide();
  //             $('#internal_audit_checklist #hide_submission').show();
  //             $('#internal_audit_checklist #acknowledgeBy').show();
  //             $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

  //             if(acknowledgeCheckbox == 0)
  //             {
  //               $('#internal_audit_checklist #acknowledgeBy').hide();
  //             }

  //           }
  //           else
  //           {
  //           	console.log("b")

  //              //$('#internal_audit_checklist #acknowledgement').hide();
  //             //$('#internal_audit_checklist #hide_submission').hide();
  //             //$('#internal_audit_checklist #acknowledgeBy').hide();
  //           }


      
    }

    function onFaiureMethod(sender, args)
    {
        alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());
    }



$(document).ready(function()
{
	//alert();
  //.change function checkboxes
  $("input[type='checkbox'][name='ctl00$ctl42$g_c12c2521_5302_4429_8c1c_2f417fe1c205$ff101$ctl00$ctl00']").change(function()
    {
      //alert(chk1);
      if(document.getElementById('ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff161_ctl00_ctl00').checked){
        acknowledgeCheckbox=1;
        //alert(chk1);
      }

    });

  if(document.getElementById('ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff161_ctl00_ctl00').checked){
      acknowledgeCheckbox=1;
      //alert(chk1);
    }

  $('#internal_audit_checklist #acknowledgement').hide();
  $('#internal_audit_checklist #acknowledgeBy').hide();

      var ckbox = $('#ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff101_ctl00_ctl00');

      if (ckbox.is(':checked')) {
            //alert('You have Checked it');
            //$('#internal_audit_checklist #acknowledgement').show();
            
            $('#internal_audit_checklist #acknowledgement').show();
            $('#internal_audit_checklist #acknowledgeBy').show();
            // if(acknowledgeCheckbox == 0)
            // {
            //   $('#internal_audit_checklist #acknowledgeBy').hide();
            // }
            // else
            // {
            //   $('#internal_audit_checklist #acknowledgeBy').show();
            // }

        } else {
            //alert('You Un-Checked it');
            $('#internal_audit_checklist #acknowledgement').hide();
            $('#internal_audit_checklist #acknowledgeBy').hide();
        }

    // $('input').on('click',function () {
    //     if (ckbox.is(':checked')) {
    //         alert('You have Checked it');
    //     } else {
    //         alert('You Un-Checked it');
    //     }
    // });

$('#audited_section2').hide();
//$("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff61_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 //document.getElementById("ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff61_ctl00_ctl00_TextField").style.width = "300px";

/* $("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff301_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff301_ctl00_ctl00_TextField").style.width = "300px";*/
 

  $("input[type='checkbox'][id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff101_ctl00_ctl00']").change(function()
  {
    if(document.getElementById('ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff101_ctl00_ctl00').checked)
    {
      alert("Cannot be edited after submission");
 //------change Save to Submit---------
    var inputcontrols = document.getElementsByTagName("input");
    for(i = 0; i<inputcontrols.length; i++)
    {
      if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
    }
    var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
    ribbonSave.text("Submit");
    }
    else
    {
      //------change Submit to Save---------
    var inputcontrols = document.getElementsByTagName("input");
    for(i = 0; i<inputcontrols.length; i++)
    {
      if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Submit")
        inputcontrols[i].value = "Save";
    }
    var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
    ribbonSave.text("Save");
    }

  });



	RequestStarted();


  $("#ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff11q1_ctl00_DropDownChoice").prop("disabled", true);
  $("#ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff141_ctl00_DropDownChoice").prop("disabled", true);
  $("#ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff131_ctl00_DropDownChoice").prop("disabled", true);
  $("#ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff121_ctl00_Lookup").prop("disabled", true);
//$('#internal_audit_checklist #audited_section1').hide();


// $('#internal_audit_checklist #iso_standard2').hide();
// $('#internal_audit_checklist #audited_section2').hide();





/*document.getElementById("iso_standard1").style.display = 'None';
iso_standard1 = $("select[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff61_ctl00_DropDownChoice']").val();
document.getElementById('iso_standard2').innerHTML=iso_standard1;*/



/*document.getElementById("audited_section1").style.display = 'None';
audited_section1 = $("select[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff41_ctl00_DropDownChoice']").val();
document.getElementById('audited_section2').innerHTML=audited_section1;*/


ExecuteOrDelayUntilScriptLoaded(init,'sp.js');

/*//------change Save to Submit---------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");   */ 
//-------------------------------------

// document.getElementByClass("ms-rtestate-field").css
$(".ms-rtestate-field").css("border-color", "white");


document.getElementById("ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff11_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff11_ctl00_ctl00_TextField").size = "20";

// document.getElementById("ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff21_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
// document.getElementById("ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff21_ctl00_ctl00_TextField").size = "20";

$("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
// $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
//$("select[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff41_ctl00_DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
//$("select[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff61_ctl00_DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');



$("div[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff51_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$("div[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff71_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$( "a[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff51_ctl00_ctl00_UserField_checkNames']" ).empty();
$( "a[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff51_ctl00_ctl00_UserField_browse']" ).empty();
//$("div[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff71_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$( "a[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff71_ctl00_ctl00_UserField_checkNames']" ).empty();
$( "a[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff71_ctl00_ctl00_UserField_browse']" ).empty();


if(document.getElementById('ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff101_ctl00_ctl00').checked){
// alert("t");
      // $('#audited_section2').show();
      // document.getElementById("audited_section1").style.display = 'None';
      // audited_section1 = $("select[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff41_ctl00_DropDownChoice']").val();
      // document.getElementById('audited_section2').innerHTML=audited_section1;

$("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 document.getElementById("ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage").style.width = "0px";
$("select[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDateHours']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
$("select[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDateMinutes']").attr('disabled', 'disabled').css('background-color','#F6F6F6');

$("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff101_ctl00_ctl00']").attr('disabled', 'disabled');

$("div[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff81_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'readonly').css('background-color','#F6F6F6');
		$('#hide_submission').show();

$("label[for='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff101_ctl00_ctl00']").html('Sent to TQM');

 // $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
 // $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
 }
/* else{
// 	//alert("f");

$('#internal_audit_checklist #acknowledgement').show();
                   $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").removeAttr('hidden');
                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");


}*/


})



var userProfileProperties;

var targetUser;
function init(){
  //alert("Init running...");

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));
    


 }

var get_preferredname;
var firstname;
var lastname ;

  function onQuerySucceeded() {

  	var account = targetUser.get_loginName();
//alert(account);
    targetUser_temp = account.substring(account.indexOf("|") +10);
    targetUser = targetUser_temp;
    //alert(targetUser);

SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');

  }

function getUserProperties() {
targetUser = 'hoitcebu\\'+targetUser;

var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
  

    var profilePropertyNames = ["PreferredName","FirstName", "LastName"];
       var userProfilePropertiesForUser = 
        new SP.UserProfiles.UserProfilePropertiesForUser(
            clientContext,
            targetUser,
            profilePropertyNames);

    userProfileProperties = peopleManager.getUserProfilePropertiesFor(
        userProfilePropertiesForUser);

    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);

   

}

function onRequestSuccess() {
    get_preferredname = userProfileProperties[0];
    firstname = userProfileProperties[1];
    lastname =  userProfileProperties[2];

   get_nccar();
    
}



  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}


 function get_nccar(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Internal Audit Checklist');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);

 }

var created_by;

    function onSucceededCallback(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

  		var id = listItem.get_item('ID') 
        
        if(itemId==id){//if

          var arr_lookup_auditee = [];

			created_by= listItem.get_item('Author').get_lookupValue();

			 var lookupVals = listItem.get_item('Auditee_x003a_');
	         var lookuptext='';
	         for(var i = 0;i < lookupVals.length;i++) {
	         //console.log(lookupVals[i].get_lookupValue()); //print Value
	        //console.log(lookupVals[i].get_lookupId());
	         lookuptext+=""+lookupVals[i].get_lookupValue();
           arr_lookup_auditee.push(lookupVals[i].get_lookupValue());
	                 
       }

       console.log("arr_lookup_auditee: "+arr_lookup_auditee);     
       console.log("get_preferredname: "+get_preferredname);     
       console.log("fname: "+firstname);     
       console.log("lname: "+lastname);

       for(var a = 0;a < arr_lookup_auditee.length;a++) {
        
        if (get_preferredname == arr_lookup_auditee[a])

        //if (get_preferredname == "Aivel Jumao-as" || get_preferredname == "Cindy Ortega")
            {


               console.log("get_preferredname: "+get_preferredname)
               console.log("arr_lookup_auditee: "+arr_lookup_auditee[a])
              //alert("gotcha");
              //$('#internal_audit_checklist #hide_submission').hide();
              $('#internal_audit_checklist #acknowledgeBy').hide();
              $('#internal_audit_checklist #acknowledgement').show();
              //alert(get_preferredname);
              document.getElementById('ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff151_ctl00_ctl00_TextField').value = get_preferredname;
              //this._currentUser.get_title();
              $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

               //$("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('show', 'show');
               //$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","show");

               if(acknowledgeCheckbox ==0)
               {
                  $('#internal_audit_checklist #acknowledgement').show();
                   $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").removeAttr('hidden');
                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
                  console.log("aw");
               }
               else
               {
                  document.getElementById("ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff161_ctl00_ctl00").disabled=true;
                  $('#internal_audit_checklist #acknowledgeBy').show();
                  $('#internal_audit_checklist #acknowledgement').hide();

                  $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
               }
            break;
          }else if (get_preferredname == "Artem Soukhomlinov | OffshoringTBOS.com" || get_preferredname == "Artem Soukhomlinov" || firstname == "Artem" || lastname == "Soukhomlinov" || get_preferredname == "System Account"){

        //if (get_preferredname == "Aivel Jumao-as" || get_preferredname == "Cindy Ortega"){


               console.log("get_preferredname: "+get_preferredname)
               console.log("arr_lookup_auditee: "+arr_lookup_auditee[a])
              //alert("gotcha");
              //$('#internal_audit_checklist #hide_submission').hide();
              $('#internal_audit_checklist #acknowledgeBy').hide();
              $('#internal_audit_checklist #acknowledgement').show();
              //alert(get_preferredname);
              document.getElementById('ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff151_ctl00_ctl00_TextField').value = get_preferredname;
              //this._currentUser.get_title();
              $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

               //$("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('show', 'show');
               //$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","show");

               if(acknowledgeCheckbox ==0)
               {
                  $('#internal_audit_checklist #acknowledgement').show();
                   $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").removeAttr('hidden');
                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
                  console.log("aw");
               }
               else
               {
                  document.getElementById("ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff161_ctl00_ctl00").disabled=true;
                  $('#internal_audit_checklist #acknowledgeBy').show();
                  $('#internal_audit_checklist #acknowledgement').hide();

                  $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
               }
            break;
          }else if (get_preferredname == "Victor Surita")
            {
              //alert("OK");
              $('#internal_audit_checklist #acknowledgement').hide();
              $('#internal_audit_checklist #hide_submission').show();
              $('#internal_audit_checklist #acknowledgeBy').show();
              $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

              if(acknowledgeCheckbox == 0)
              {
                $('#internal_audit_checklist #acknowledgeBy').hide();
              }

            }
            else
            {
             // ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff101_ctl00_ctl00
             // if()
             if(document.getElementById('ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff101_ctl00_ctl00').checked)
              {

                 console.log("else");
               $('#internal_audit_checklist #acknowledgement').hide();
            //   $('#internal_audit_checklist #hide_submission').hide();
               $('#internal_audit_checklist #acknowledgeBy').hide();

               $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


              }else{

                   $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").removeAttr('hidden');
                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");

              }

             
             }



       }
        
			

			            
         }//end if
  
        
      }  //end while


	if (get_preferredname!=created_by)
	{
		$("div[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff81_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'readonly').css('background-color','#F6F6F6');
		$('#hide_submission').hide();


 // $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
 //    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
	}



RequestEnded();

  }

    function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

      $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }



function RequestEnded(sender, args) {
  try {
    waitDialog.close();
    waitDialog = null;
  } catch (ex) { }
};

function RequestStarted(sender, args) {
   ExecuteOrDelayUntilScriptLoaded(ShowWaitDialog, "sp.js");
};
var waitDialog;
function ShowWaitDialog() {
   try {
      if (waitDialog == null) {
         waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Processing...', 'Please wait while request is in progress...', 100, 390);
      }
   } catch (ex) { }
};

//<br><h1><span style="color: #ff0000; text-decoration: none solid #ff0000;"><span style="text-decoration: none solid #ff0000;">Maintenance is ongoing! Will be back soon. </span></span></h1>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
function PreSaveAction()
{


    $("input[name$=ctl00]").removeAttr("disabled");
    $("select[name$=Lookup]").removeAttr("disabled");
    $("select[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff11q1_ctl00_DropDownChoice']").removeAttr("disabled");
    $("select[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff131_ctl00_DropDownChoice']").removeAttr("disabled");


//check the checkBoxes
    if(document.getElementById('ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_ff161_ctl00_ctl00').checked){
      acknowledgeCheckbox=1;
      //alert(acknowledgeCheckbox);
    }

    //var approvalStatus = $("Select[Title='Approval Status']").val();
    var Name = $("div[title='Auditee: Required Field']").text().trim();
    var trimmedName = Name.replace(/[|&;$%@"<>()+,]/g, "");
    var currentName = this._currentUser.get_title();

        if(currentName == trimmedName)
        {
            if(acknowledgeCheckbox==0 )
            {
              alert("Please check the acknowledgement to submit");
              return false;      
            }
            else if (acknowledgeCheckbox==1 )
            {
              return true;//true
            }
        }   
        

    return true;//true
}

//------------------------------------------- PRINT PAGE ----------------------------------------------
</script>

<script language="javascript" type="text/javascript">
        function printDiv(divID) {
          $('#internal_audit_checklist #hide_submission').hide();
            //Get the HTML of div
            var divElements = document.getElementById(divID).innerHTML;
            //Get the HTML of whole page
            var oldPage = document.body.innerHTML;
            var concat_table = "<b>"+"Auditor:  "+"</b>"+"<U>"+created_by+"</U>";
            var concat_table2 = "<b>"+"Approved by: "+"</b>"+"<U>"+"Victor Surita"+"</U>";


            //Reset the page's HTML with div's HTML only
            document.body.innerHTML =
              "<html><head><title></title></head><body>" +
              divElements +"<br><br><br><div align='center'><span align='left'><label class='ms-standardheader'>"+concat_table+"</label></span>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <span align='right'><label class='ms-standardheader'>"+concat_table2+"</label></span></div><br></body>";

            //Print Page
            window.print();

            //Restore orignal HTML
            document.body.innerHTML = oldPage;


        }
    </script>
<input value="Print Item" onclick="javascript:printDiv(&#39;printable_div&#39;)" type="image" onmouseover="this.style.backgroundColor=&#39;#d6e1f3&#39;" onmouseout="this.style.backgroundColor=&#39;white&#39;" src="/SiteAssets/print-icon.png" style="color: white; background-color: white; border: white;"/>

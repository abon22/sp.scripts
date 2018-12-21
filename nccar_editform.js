<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var iso_title;
var checked_acknowledge=0;

var userProfileProperties;
//ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;
function get_user() {
  //alert("Init running...");

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));

 }

var get_preferredname;
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


    var profilePropertyNames = ["PreferredName"];
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
   get_nccar();

}


  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());

    $("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}


 function get_nccar(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Non-Conformance Corrective Action Report');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query></View>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);

 }

var auditor;
var auditee;
var ca_remarks_status="";
var arr_auditee=[];

    function onSucceededCallback(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

  		var id = listItem.get_item('ID')

        if(itemId==id){//if

			auditor= listItem.get_item('Auditor').get_lookupValue();
			//auditee= listItem.get_item('Auditee').get_lookupValue();

		var lookupVals = listItem.get_item('Auditee');
         var lookuptext='';
         for(var i = 0;i < lookupVals.length;i++) {
       //  console.log(lookupVals[i].get_lookupValue()); //print Value

         arr_auditee[i]=lookupVals[i].get_lookupValue();

        //console.log(lookupVals[i].get_lookupId());

         //lookuptext+=""+lookupVals[i].get_lookupValue()+", ";
       }

//console.log(arr_auditee);

	for(var c=0;c<=arr_auditee.length;c++){

		//console.log("get_preferredname: "+get_preferredname)
		if(arr_auditee[c]==get_preferredname)
			{
				auditee=arr_auditee[c];
			}

	}

	//console.log("auditee: "+auditee);



        }//end if


      }  //end while
     //alert("Auditor: "+auditor);
     // alert("Auditee: "+auditee);
var concatUsername = "hoitcebu\\"+"victors";
var concatUsername2 = "hoitcebu\\"+"paulm";

// alert(targetUser+ " --------- " +"hoitcebu\\"+"fernandos");
// alert(concatUsername2);

var auditor_acknowledge = $('input[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff131_ctl00_ctl00_TextField]').val();
var ca_remarks = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff291_ctl00_DropDownChoice]').val();
if(document.getElementById('ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff251_ctl00_ctl00').checked)
{


// if (auditee==get_preferredname && ca_remarks=="Invalid")
// {
// 	$("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff291_ctl00_DropDownChoice']").attr('hidden', 'hidden');
// }
// else if (auditee!=get_preferredname && ca_remarks=="Invalid"){
// 	$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
// 	$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

// }



if (arr_auditee==get_preferredname && ca_remarks=="Invalid")
{
	$("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff291_ctl00_DropDownChoice']").attr('hidden', 'hidden');
}
else if (arr_auditee!=get_preferredname && ca_remarks=="Invalid"){
	$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
	$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


}


var follow_of_audit = $('textarea[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff201_ctl00_ctl00_TextField]').val();
var remarks_status = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff221_ctl00_DropDownChoice]').val();

	if(auditor_acknowledge==""){
		console.log("a")
		if(auditor!=get_preferredname && implemented!="No" )
			{
				if(targetUser!=concatUsername && implemented!="No")
				{
					if(targetUser!=concatUsername2 && implemented!="No"){
						if (auditee==get_preferredname && ca_remarks=="Invalid"){
							console.log("1")
						}else{
							console.log("2")

						
						$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
		    			$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


						}



    				}
    			}
			}


	}
  else{
		if(auditor!=get_preferredname)
			{

 				if(targetUser!=concatUsername )
				{
					if(targetUser!=concatUsername2 ){
						//alert("asd");

						if(remarks_status=="Open" && remarks_status!="" )
						{
						$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff251_ctl00_ctl00").removeAttr('checked');
						$('#table_nccar #sign_auditor_date_signed').hide();

						}else if(remarks_status="Closed" && remarks_status!=""){
						$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
		    			$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
						}
    				}
    			}
			}
			else{

				if(remarks_status=="Open" && remarks_status!="" )
						{
							//alert("true");
							$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
		    			$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


						}else if(remarks_status="Closed" && remarks_status!=""){

						}

			}
	}
}


else{ //------------ UPDATED PART 7/18/2017 --------------------------------------------------------------------------------------------------------------------------------------------------------------------
	if(auditee!=get_preferredname)
	{
    $("div[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff151_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

 		$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

    $('#table_nccar #i_acknowledge').hide();
    if(targetUser == "hoitcebu\\"+"paulm" || targetUser == "hoitcebu\\"+"victors" || auditor == get_preferredname)
    {
    // alert("test");
    $("textarea[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff301_ctl00_ctl00_TextField']").removeAttr('readonly').css('background-color','White');;
    $("div[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff121_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'true').css('background-color','White');;

    $("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").removeAttr('hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","visible");

    $('#table_nccar #dept_id').show();
    $('#table_nccar #dept_id2').hide();

    // $('#table_nccar #dept_id2').hide();

   // $("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff51_ctl00_Lookup']").removeAttr('disabled');
    $("div[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff111_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'true').css('background-color','White');

    document.getElementById("classificationid").style.display = '';
    document.getElementById('classificationid2').style.display = 'none';

    }

	}

}

//------------------------------------check for implementation date is auditee------------------------------------------------


var follow_up_date = $('input[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff261_ctl00_ctl00_DateTimeField_DateTimeFieldDate]').val();
var ca_remarks = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff291_ctl00_DropDownChoice]').val();

//------------- i acknowledge by auditee------------------------

 if(document.getElementById('ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff251_ctl00_ctl00').checked){
// 	//alert("check");

		 	$('#table_nccar #correction').hide();
		 	$('#table_nccar #root_cause').show();
		 	$('#table_nccar #corrective_action').show();
			$('#table_nccar #implementation_date').show();
		 	$('#table_nccar #i_acknowledge').hide();




var follow_of_audit = $('textarea[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff201_ctl00_ctl00_TextField]').val();
var remarks_status = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff221_ctl00_DropDownChoice]').val();


if(ca_remarks=="Invalid")
{

}
else
{

	//Alin Request -- - - - -- - - - - -- - - - - - - -- - -- - - 
	$("textarea[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff141_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
		 	$("textarea[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
		 	$("textarea[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
		 	$("div[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff151_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

}

			$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff131_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


		if(ca_remarks=="None"){
			//alert("Empty");
			$('#table_nccar #ca_remarks').show();
			$('#table_nccar #ca_remarks2').show();
			$('#table_nccar #ca_remarks3').hide();
			$('#table_nccar #acknowledge_by').hide();

			$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff171_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
		 	var from_cal2 = document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff171_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
		 	from_cal2.src = "";
		 	from_cal2.alt = "";

      //UPDATED 7/18/2017 ------------------------------------------------------------------------------------------------------------
      if(auditee != get_preferredname)
      {
        $("div[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff151_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
      }
		}
    else if(ca_remarks=="Invalid"){
			//alert("invalid");
			ca_remarks_status="invalid";
		}

		if(auditor_acknowledge=="" && follow_up_date=="" && ca_remarks=="Valid"){
		//alert(follow_up_date);
			if(implemented!="No")
			{
				$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff171_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
		 	var from_cal2 = document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff171_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
		 	from_cal2.src = "";
		 	from_cal2.alt = "";

			$('#table_nccar #acknowledge_by').show();
			$('#table_nccar #ca_remarks').show();
			//$('#table_nccar #ca_remarks2').show();
			$('#table_nccar #ca_remarks3').show();


		//document.getElementById('ca_remarks3').innerHTML=ca_remarks;
		document.getElementById('ca_remarks3').innerHTML="<input type='text' value='"+ca_remarks+"' style='background-color: rgb(246, 246, 246);' readonly/>";

			}
			else
			{

				if(auditee!=get_preferredname)
			{
		 		$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
		    	$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

			}

				$('#table_nccar #acknowledge_by').hide();
				$('#table_nccar #ca_remarks').show();
				$('#table_nccar #ca_remarks3').show();
				document.getElementById('ca_remarks3').innerHTML="<input type='text' value='"+ca_remarks+"' style='background-color: rgb(246, 246, 246);' readonly/>";



			$('#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff271_ctl00_DropDownChoice').html('');

			$('#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff271_ctl00_DropDownChoice').append($('<option>',
		        {
		            value: "None",
		            text : "None"
		        }));

		 $('#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff271_ctl00_DropDownChoice').append($('<option>',
		        {
		            value: "Yes",
		            text : "Yes"
		        }));

		  $('#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff271_ctl00_DropDownChoice').append($('<option>',
		        {
		            value: "No",
		            text : "No"
		        }));
			}

		}

		if(auditor_acknowledge!="" && follow_up_date!=""){

		$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff171_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
		 	var from_cal2 = document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff171_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
		 	from_cal2.src = "";
		 	from_cal2.alt = "";

		$('#table_nccar #acknowledge_by').show();
		$('#table_nccar #ca_remarks').show();
		$('#table_nccar #ca_remarks3').show();

		document.getElementById('ca_remarks3').innerHTML="<input type='text' value='"+ca_remarks+"' style='background-color: rgb(246, 246, 246);' readonly/>";

		$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff261_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
			var from_cal3 = document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff261_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
			from_cal3.src = "";
			from_cal3.alt = "";

		$('#table_nccar #implementedid').show();

		if(implemented=="Yes"){

		document.getElementById("implemented_id").style.display = 'None';
		implemented_id = $("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff271_ctl00_DropDownChoice']").val();
		document.getElementById('implemented_id2').innerHTML=implemented_id;

		$('#table_nccar #follow_of_audit').show();
		$('#table_nccar #remarks_status').show();
		$('#table_nccar #corrective_action').show();

		}

		}

 	}else{
 $('#table_nccar #acknowledge_by').hide();
 	$('#table_nccar #correction').hide();
 	$('#table_nccar #root_cause').hide();
 	$('#table_nccar #corrective_action').hide();
 	$('#table_nccar #implementation_date').hide();
 }
 //-------------------------------------------------------//end if---------------------------------------


 //----------------check implementation date if auditee

RequestEnded();

}

   function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

      $("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }


var implemented;
var nccar_final_status;
var nccar_comments;


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

  $(document).ready(function()
{

/*var div = document.getElementById('ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff151_ctl00_ctl00_TextField_inplacerte');
div.innerHTML = "<table cellspacing='0' class='ms-rteTable-default' style='width: 865px; height: 301px;'> <tbody> <tr class='ms-rteTableHeaderRow-default' style='text-align: center;'> <th class='ms-rteTableHeaderEvenCol-default' rowspan='1' colspan='6' style='width: 1%; text-align: center;'> <span style='color: #191919; text-decoration: none solid #191919;'> <strong style='text-decoration: none solid #191919;'>5 Why&#39;s Diagram​ ​ </strong> <span style='text-decoration: none solid #191919;'>​ ​</span> ​ ​</span></th> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'> <strong>​Measurements</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'> <strong>​Materials</strong></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'> <strong>​Methods</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'> <strong>​Machines</strong></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'> <strong>​Manpower</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'> <strong>​Environment</strong></td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> </tbody></table>";*/

RequestStarted();

	//SP.UI.ModalDialog.showWaitScreenWithNoClose('Loading Title', 'Loading Message Here...');

var skillsSelect = document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff51_ctl00_Lookup");
var selectedText = skillsSelect.options[skillsSelect.selectedIndex].text;
$('#table_nccar #dept_id').hide();
document.getElementById('dept_id2').innerHTML=selectedText;
$('#table_nccar #dept_id2').show();


get_user();
//----Chage Save to Submit------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");

$('#table_nccar #correction').hide();
$('#table_nccar #root_cause').hide();
$('#table_nccar #corrective_action').hide();
$('#table_nccar #implemented_var').hide();


$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff311_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff11_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff11_ctl00_ctl00_TextField").size = "11";

// document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff21_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
// document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff21_ctl00_ctl00_TextField").size = "11";

document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff131_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff131_ctl00_ctl00_TextField").size = "35";

document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff231_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff231_ctl00_ctl00_TextField").size = "35";

document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff141_ctl00_ctl00_TextField").style.width = "820px";
//document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff151_ctl00_ctl00_TextField").style.width = "820px";
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff161_ctl00_ctl00_TextField").style.width = "820px";
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff201_ctl00_ctl00_TextField").style.width = "820px";


document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff301_ctl00_ctl00_TextField").style.width = "820px";

// $("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
var from_cal = document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
from_cal.src = "";
from_cal.alt = "";


//$("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff51_ctl00_Lookup']").attr('disabled', 'disabled');



// document.getElementById("standardid").style.display = 'None';
// standardid = $("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff71_ctl00_DropDownChoice']").val();
// document.getElementById('standardid2').innerHTML=standardid;

/*document.getElementById("clauseid").style.display = 'None';
clauseid1 = $("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff81_ctl00_Lookup'] ").val();
clauseid = $("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff81_ctl00_Lookup'] option[value='"+clauseid1+"']").text();
document.getElementById('clauseid2').innerHTML=clauseid;*/

// document.getElementById("subclauseid").style.display = 'None';
// subclauseid = $("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff91_ctl00_DropDownChoice']").val();
// document.getElementById('subclauseid2').innerHTML=subclauseid;

document.getElementById("classificationid").style.display = 'None';
classificationid = $("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff61_ctl00_DropDownChoice']").val();
document.getElementById('classificationid2').innerHTML=classificationid;

$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff61_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("div[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff101_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$( "a[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff101_ctl00_ctl00_UserField_checkNames']" ).empty();
$( "a[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff101_ctl00_ctl00_UserField_browse']" ).empty();

$("div[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff111_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$( "a[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff111_ctl00_ctl00_UserField_checkNames']" ).empty();
$( "a[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff111_ctl00_ctl00_UserField_browse']" ).empty();

// FIELDS FO ENABLE WHEN NOT YET ACKNOWLEDGED
$("textarea[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff301_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("div[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff121_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

$('#table_nccar #acknowledge_by').hide();
$('#table_nccar #ca_remarks').hide();
$('#table_nccar #ca_remarks2').hide();
$('#table_nccar #implementedid').hide();
$('#table_nccar #follow_of_audit').hide();
$('#table_nccar #remarks_status').hide();
$('#table_nccar #corrective_action').hide();
$('#table_nccar #sign_auditor_date_signed').hide();


var auditor_acknowledge = $('input[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff131_ctl00_ctl00_TextField]').val();
var follow_of_audit = $('textarea[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff201_ctl00_ctl00_TextField]').val();
var sign_auditor = $('input[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff231_ctl00_ctl00_TextField]').val();
var ca_remarks = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff291_ctl00_DropDownChoice]').val();
var follow_up_date = $('input[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff261_ctl00_ctl00_DateTimeField_DateTimeFieldDate]').val();
implemented	 = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff271_ctl00_DropDownChoice]').val();
var remarks_status = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff221_ctl00_DropDownChoice]').val();


nccar_final_status=remarks_status;
nccar_comments=follow_of_audit;


// //------------------confirmed by auditor
if(auditor_acknowledge!="" && follow_of_audit!="" && sign_auditor!="")
{
$('#table_nccar #sign_auditor_date_signed').show();
$("textarea[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

// $("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff211_ctl00_DropDownChoice']").attr('disabled', 'disabled');
// $("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff221_ctl00_DropDownChoice']").attr('disabled', 'disabled');


$('#table_nccar #remarks_hide_text').hide();
$('#table_nccar #remarks_hide_text2').hide();


var temp_remarks0 = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff211_ctl00_DropDownChoice]').val();
var temp_status0 = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff221_ctl00_DropDownChoice]').val();

document.getElementById('remarks_show_text').innerHTML="<input type='text' value='"+temp_remarks0+"' style='background-color: rgb(246, 246, 246);' readonly/>";
document.getElementById('remarks_show_text2').innerHTML="<input type='text' value='"+temp_status0+"' style='background-color: rgb(246, 246, 246);' readonly/>";


$('#table_nccar #remarks_show_text').show();
$('#table_nccar #remarks_show_text2').show();




$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff231_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff241_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
var signed_cal = document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff241_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
signed_cal.src = "";
signed_cal.alt = "";


}


$("input[type='checkbox'][id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff251_ctl00_ctl00']").change(function() {

if(document.getElementById('ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff251_ctl00_ctl00').checked){
	//alert("check");
	checked_acknowledge=1;
	$('#table_nccar #correction').hide();
	$('#table_nccar #root_cause').show();
	$('#table_nccar #corrective_action').show();
	$('#table_nccar #implementation_date').show();

	var div = document.getElementById('ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff151_ctl00_ctl00_TextField_inplacerte');
div.innerHTML = "<table cellspacing='0' class='ms-rteTable-default' style='width: 865px; height: 301px;'> <tbody> <tr class='ms-rteTableHeaderRow-default' style='text-align: center;'> <th class='ms-rteTableHeaderEvenCol-default' rowspan='1' colspan='6' style='width: 1%; text-align: center;'> <span style='color: #191919; text-decoration: none solid #191919;'> <strong style='text-decoration: none solid #191919;'>5 Why&#39;s Diagram​ ​ </strong> <span style='text-decoration: none solid #191919;'>​ ​</span> ​ ​</span></th> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'> <strong>​Measurements</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'> <strong>​Materials</strong></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'> <strong>​Methods</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'> <strong>​Machines</strong></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'> <strong>​Manpower</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'> <strong>​Environment</strong></td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> </tbody></table>"

	}else{
	//alert("uncheck");
checked_acknowledge=0
	$('#table_nccar #correction').hide();
	$('#table_nccar #root_cause').hide();
	$('#table_nccar #corrective_action').hide();
	$('#table_nccar #implementation_date').hide();

}

    });


//------setting var_implemented --------
$("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff271_ctl00_DropDownChoice']").change(function() {
var var_implmnt = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff271_ctl00_DropDownChoice]').val();

if(var_implmnt=="None"){
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff281_ctl00_ctl00_TextField").value = "None";
}else if(var_implmnt=="Yes"){
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff281_ctl00_ctl00_TextField").value = "Yes";
}else if(var_implmnt=="No"){
	document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff281_ctl00_ctl00_TextField").value = "No";
}

    });


//----------Dynamic Select on Dropdown REMARKS----------------------------------
    $("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff211_ctl00_DropDownChoice']").change(function() {
 	var remarks = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff211_ctl00_DropDownChoice]').val();

 		if(remarks=="CA Effective"){
 			$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff221_ctl00_DropDownChoice").val("Closed").attr('selected','selected');
 		}else if(remarks=="None"){
 				$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff221_ctl00_DropDownChoice").val("None").attr('selected','selected');
 		}else
 		{
 			$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff221_ctl00_DropDownChoice").val("Open").attr('selected','selected');
 		}
     });

       $("select[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff221_ctl00_DropDownChoice']").change(function() {
 	var status = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff221_ctl00_DropDownChoice]').val();

 		if(status=="Open"){
 			$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff211_ctl00_DropDownChoice").val("CA Not Effective").attr('selected','selected');
 		}else if(status=="Closed")
 		{
 			$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff211_ctl00_DropDownChoice").val("CA Effective").attr('selected','selected');
 		}else if(status=="None")
 		{
 			$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff211_ctl00_DropDownChoice").val("None").attr('selected','selected');
 		}
     });


});

function PreSaveAction()

{
var correction = $('textarea[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff141_ctl00_ctl00_TextField]').val();
var root_cause = $('textarea[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff151_ctl00_ctl00_TextField]').val();
var corrective_action = $('textarea[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff161_ctl00_ctl00_TextField]').val();
var implementation_date = $('input[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff171_ctl00_ctl00_DateTimeField_DateTimeFieldDate]').val();

var follow_up_date = $('input[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff261_ctl00_ctl00_DateTimeField_DateTimeFieldDate]').val();

var acknowledge_by = $('input[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff131_ctl00_ctl00_TextField]').val();

var auditor_acknowledge = $('input[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff131_ctl00_ctl00_TextField]').val();
var follow_of_audit = $('textarea[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff201_ctl00_ctl00_TextField]').val();
var sign_auditor = $('input[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff231_ctl00_ctl00_TextField]').val();

var remarks = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff211_ctl00_DropDownChoice]').val();
var remarks_status = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff221_ctl00_DropDownChoice]').val();

var implemented_click = $('select[id=ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff271_ctl00_DropDownChoice]').val();


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var today = mm+'/'+dd+'/'+yyyy;

if(nccar_final_status=="Open" && nccar_comments!=""){

if(auditee==get_preferredname){


//document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff171_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value = "";
$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff291_ctl00_DropDownChoice").val("None").attr('selected','selected');
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff261_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value = "";
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff131_ctl00_ctl00_TextField").value = "";
$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff271_ctl00_DropDownChoice").val("None").attr('selected','selected');
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff201_ctl00_ctl00_TextField").value = "";
$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff211_ctl00_DropDownChoice").val("None").attr('selected','selected');
$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff221_ctl00_DropDownChoice").val("None").attr('selected','selected');
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff281_ctl00_ctl00_TextField").value = "";
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff231_ctl00_ctl00_TextField").value = "";
document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff241_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value = "";

}

}

	if(remarks!="None" && remarks_status!="None")
	{

		if(nccar_final_status=="Open" && nccar_comments!=""){

		}else{
			document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff231_ctl00_ctl00_TextField").value = get_preferredname;
		document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff241_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value = today;
		}

	}


	if(ca_remarks_status=="invalid"){
		$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff291_ctl00_DropDownChoice").val("None").attr('selected','selected');
	}

	if( implementation_date!="" && follow_up_date!="" && implemented_click=="None"){
 		document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff131_ctl00_ctl00_TextField").value = get_preferredname;
 	}


 	if( implemented_click=="No")
 	{
 	document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff131_ctl00_ctl00_TextField").value = "";
 	document.getElementById("ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff261_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value = "";

 	}


	/*if(correction=="" && checked_acknowledge==1)
 	{
 	alert("Information, Correction needs a value. Please enter a value.");
 	return false;
 	}else */

 	if(root_cause=="" && checked_acknowledge==1)
 	{
 	alert("Information, Root Cause needs a value. Please enter a value.");
 	return false;
 	}else if(corrective_action==""&& checked_acknowledge==1)
 	{
 	alert("Information, Correction Action needs a value. Please enter a value.");
 	return false;
 	}

 	/*else if(implementation_date=="" && checked_acknowledge==1)
 	{
 	alert("Information, Implementation Date needs a value. Please enter a value.");
 	return false;
 	}*/

 	else if (follow_of_audit=="" && remarks!="None" && remarks_status!="None"){
 	alert("Information, Comments (Follow of Audit) field is required. Please add comments.");
 	return false;
 	}
 	else{

 	return true;
	}


}

</script>
<p>&nbsp;</p>

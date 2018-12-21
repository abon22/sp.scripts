<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>


var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.

ExecuteOrDelayUntilScriptLoaded(init,'sp.js');


  $(document).ready(function()
{

$('#table_ccr #ticketStatus').hide();


if ( $('input[name="ctl00$ctl43$g_1d699530_61ee_4d87_9000_c9d341217b0e$ff201$ctl00$ctl00"]').is(':checked') ) {
console.log("checked");
document.getElementById("ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff201_ctl00_ctl00").disabled=true;
      $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

} 


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



document.getElementById("ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff51_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff51_ctl00_ctl00_TextField").size = "25";

document.getElementById("ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff61_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff61_ctl00_ctl00_TextField").size = "25";

$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 


$("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff31_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff51_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff61_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff41_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
var from_cal = document.getElementById("ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff41_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
from_cal.src = "";
from_cal.alt = "";


$("div[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff81_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

$("div[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff91_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

$("div[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff101_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');


// $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff111_ctl00_ctl00']").attr('disabled', 'disabled');
// $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff111_ctl00_ctl01']").attr('disabled', 'disabled');
// $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff111_ctl00_ctl02']").attr('disabled', 'disabled');
// $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff111_ctl00_ctl03']").attr('disabled', 'disabled');

// $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff111_ctl00_ctl04']").attr('disabled', 'disabled');

$('#table_ccr #request_eval_id').hide();

 if(document.getElementById('ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff111_ctl00_ctl00').checked){

$('#request_eval_show').append("<tr><td><input type='checkbox' checked='checked' disabled>Impacted other department</td></tr>");
}

 if(document.getElementById('ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff111_ctl00_ctl01').checked){
$('#request_eval_show').append("<tr><td><input type='checkbox' checked='checked' disabled>Affected Service Deliverable(s)</td></tr>");
}

 if(document.getElementById('ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff111_ctl00_ctl02').checked){
$('#request_eval_show').append("<tr><td><input type='checkbox' checked='checked' disabled>Affected Process Documentation</td></tr>");
}

 if(document.getElementById('ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff111_ctl00_ctl03').checked){
var own_val = $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff111_ctl00_ctl04']").val();

$('#request_eval_show').append("<tr><td><input type='checkbox' checked='checked' disabled> Specify your own value: <input type='text' maxlenght='225' readonly  value='"+own_val+"' style='background-color: rgb(246, 246, 246);''></td></tr>");

}

document.getElementById("ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff131_ctl00_ctl00_TextField").style.width = "942px";

document.getElementById("ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff151_ctl00_ctl00_TextField").style.width = "942px";



});


var targetUser;

 function init(){

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
//console.log(targetUser);

  var document_approval = $("select[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff121_ctl00_DropDownChoice']").val();
var tqm_approval = $("select[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff161_ctl00_DropDownChoice']").val();
var top_mgmt_approval = $("select[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff141_ctl00_DropDownChoice']").val();

$('#table_ccr #document_approval').show();
$('#table_ccr #document_approval2').hide();
$('#table_ccr #document_approval3').hide();
$('#table_ccr #manager_approval').hide();
$('#table_ccr #manager_approval2').hide();
$('#table_ccr #manager_approval3').hide();
$('#table_ccr #rational_recomendation').hide();
$('#table_ccr #rational_recomendation2').hide();
$('#table_ccr #rational_recomendation3').hide();
//$('#table_ccr #note_id').hide();
//$('#table_ccr #rational_recomendation').hide();
$('#table_ccr #top_mgmt').hide();
$('#table_ccr #top_mgmt2').hide();
$('#table_ccr #top_mgmt3').hide();
$('#table_ccr #special_instruction').hide();
 

    if(document_approval==""){


        if(targetUser=="jossiem" || targetUser=="litoa" || targetUser=="nowmarc" ){
        $('#table_ccr #document_approval').show();
        $('#table_ccr #document_approval2').show();
        $('#table_ccr #note_id').show();

        }else{
        $('#table_ccr #document_approval').show();
        $('#table_ccr #document_approval2').show();
        $('#table_ccr #note_id').show();
         $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

        $("select[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff121_ctl00_DropDownChoice']").attr('disabled', 'disabled');
        $("textarea[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff171_ctl00_ctl00_TextField']").attr('readonly', 'readonly');

            $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
        }


        


    }else if(document_approval!="" && tqm_approval==""){

 if(targetUser=="victors" || targetUser=="litoa" || targetUser=="nowmarc" ){
     //$("select[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff121_ctl00_DropDownChoice']").attr('disabled', 'disabled');
        $('#table_ccr #document_approval').show();
        $('#table_ccr #document_approval3').show();
        $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');



        $('#table_ccr #manager_approval').show();
        $('#table_ccr #manager_approval2').show();
        $('#table_ccr #note_id').show();

        $('#table_ccr #rational_recomendation').show();
        $('#table_ccr #rational_recomendation2').show();
        $('#document_approval3').html("<tr><td>"+document_approval+" <br><br></td></tr>");

    }else{

        $('#table_ccr #document_approval').show();
        $('#table_ccr #document_approval3').show();
        $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


        $('#table_ccr #manager_approval').show();
        $('#table_ccr #manager_approval2').show();
        $('#table_ccr #note_id').show();

        $('#table_ccr #rational_recomendation').show();
        $('#table_ccr #rational_recomendation2').show();
        $('#document_approval3').html("<tr><td>"+document_approval+" <br><br></td></tr>");

        //$("select[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff121_ctl00_DropDownChoice']").attr('disabled', 'disabled');
        $("textarea[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff171_ctl00_ctl00_TextField']").attr('readonly', 'readonly');

        $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
        $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

        $("select[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff161_ctl00_DropDownChoice']").attr('disabled', 'disabled');
        $("textarea[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff131_ctl00_ctl00_TextField']").attr('readonly', 'readonly');
    }


    }else if(document_approval=="Major" && tqm_approval=="Approved" && top_mgmt_approval==""){


 if(targetUser=="mithis" || targetUser=="litoa" || targetUser=="nowmarc" || targetUser=="artems" || targetUser=="aysoukhomlinov" ){

        $('#table_ccr #document_approval').show();
        $('#table_ccr #document_approval3').show();
        $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

       
        $('#document_approval3').html("<tr><td>"+document_approval+" <br><br></td></tr>");

        $('#table_ccr #manager_approval').show();
        $('#table_ccr #manager_approval2').hide();
        $('#table_ccr #manager_approval3').show();

        $('#manager_approval3').html("<tr><td>"+tqm_approval+" <br><br></td></tr>");

        $('#table_ccr #note_id').show();
        $('#table_ccr #rational_recomendation').show();

        $('#table_ccr #top_mgmt').show();
        $('#table_ccr #special_instruction').show();

        $('#table_ccr #ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff171_ctl00_ctl00_TextField').hide();
 
        var rationale = $("textarea[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff131_ctl00_ctl00_TextField']").val();

        $('#table_ccr #rational_recomendation2').hide();
        $('#table_ccr #rational_recomendation3').show();

        $('#rational_recomendation3').html("<tr><td>"+rationale+" </td></tr>");

    }else{

$('#table_ccr #document_approval').show();
         $('#table_ccr #document_approval').show();
        $('#table_ccr #document_approval3').show();
        $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

       
        $('#document_approval3').html("<tr><td>"+document_approval+" <br><br></td></tr>");

        $('#table_ccr #manager_approval').show();
        $('#table_ccr #manager_approval2').hide();
        $('#table_ccr #manager_approval3').show();

        $('#manager_approval3').html("<tr><td>"+tqm_approval+" <br><br></td></tr>");

        $('#table_ccr #note_id').show();
        $('#table_ccr #rational_recomendation').show();

        $('#table_ccr #top_mgmt').show();
        $('#table_ccr #special_instruction').show();

        $('#table_ccr #ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff171_ctl00_ctl00_TextField').hide();
 
        var rationale = $("textarea[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff131_ctl00_ctl00_TextField']").val();

        $('#table_ccr #rational_recomendation').show()
        $('#table_ccr #rational_recomendation2').hide();
        $('#table_ccr #rational_recomendation3').show();

        $('#rational_recomendation3').html("<tr><td>"+rationale+" </td></tr>");
        
        $("select[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff141_ctl00_DropDownChoice']").attr('disabled', 'disabled');
        $("textarea[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly');


        $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
        $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


    }






    }else if(document_approval=="Major" && tqm_approval=="Approved" && top_mgmt_approval!=""){

        $('#table_ccr #document_approval').show();
        $('#table_ccr #document_approval3').show();
        $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

       
        $('#document_approval3').html("<tr><td>"+document_approval+" <br><br></td></tr>");

        $('#table_ccr #manager_approval').show();
        $('#table_ccr #manager_approval2').hide();
        $('#table_ccr #manager_approval3').show();

        $('#manager_approval3').html("<tr><td>"+tqm_approval+" <br><br></td></tr>");

        $('#table_ccr #note_id').show();
        $('#table_ccr #rational_recomendation').show();

        $('#table_ccr #top_mgmt').show();
        $('#table_ccr #special_instruction').show();

        $('#table_ccr #ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff171_ctl00_ctl00_TextField').hide();
 
        var rationale = $("textarea[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff131_ctl00_ctl00_TextField']").val();
            $('#table_ccr #rational_recomendation').show()
        $('#table_ccr #rational_recomendation2').hide();
        $('#table_ccr #rational_recomendation3').show();

        $('#rational_recomendation3').html("<tr><td>"+rationale+" </td></tr>");
        
        $("select[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff141_ctl00_DropDownChoice']").attr('disabled', 'disabled');
        $("textarea[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly');

        console.log("a")
        //$("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
        //$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

        if(targetUser=="jossiem" || targetUser=="litoa" || targetUser=="nowmarc"){

            $('#table_ccr #ticketStatus').show();

        }else{
            $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
        $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
        }



    }
    else if(document_approval=="Minor" && tqm_approval=="Approved"){

       $('#table_ccr #document_approval').show();
        $('#table_ccr #document_approval3').show();
        $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

       
        $('#document_approval3').html("<tr><td>"+document_approval+" <br><br></td></tr>");

        $('#table_ccr #manager_approval').show();
        $('#table_ccr #manager_approval2').hide();
        $('#table_ccr #manager_approval3').show();

        $('#manager_approval3').html("<tr><td>"+tqm_approval+" <br><br></td></tr>");

        $('#table_ccr #note_id').show();
        $('#table_ccr #rational_recomendation').show();

      

        $('#table_ccr #ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff171_ctl00_ctl00_TextField').hide();
 
        var rationale = $("textarea[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff131_ctl00_ctl00_TextField']").val();

        $('#table_ccr #manager_approval').show();
        $('#table_ccr #rational_recomendation2').hide();
        $('#table_ccr #rational_recomendation3').show();

        $('#rational_recomendation3').html("<tr><td>"+rationale+" </td></tr>");
        
      

      


        if(targetUser=="jossiem" || targetUser=="litoa" || targetUser=="nowmarc" ){
console.log("WE'RE ON THE SAME PAGE!");
        }else{
            $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
        $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
        }

        $('#table_ccr #ticketStatus').show();




    }else if(document_approval=="Minor" && tqm_approval=="Rejected"){

       $('#table_ccr #document_approval').show();
        $('#table_ccr #document_approval3').show();
        $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

       
        $('#document_approval3').html("<tr><td>"+document_approval+" <br><br></td></tr>");

         $('#table_ccr #manager_approval').show();
        $('#table_ccr #manager_approval2').hide();
        $('#table_ccr #manager_approval3').show();

        $('#manager_approval3').html("<tr><td>"+tqm_approval+" <br><br></td></tr>");

        $('#table_ccr #note_id').show();
        $('#table_ccr #rational_recomendation').show();

      

        $('#table_ccr #ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff171_ctl00_ctl00_TextField').hide();
 
        var rationale = $("textarea[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff131_ctl00_ctl00_TextField']").val();

        $('#table_ccr #rational_recomendation2').hide();
        $('#table_ccr #rational_recomendation3').show();

        $('#rational_recomendation3').html("<tr><td>"+rationale+" </td></tr>");
        
      

        $("input[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
        $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");






    }

  

    
}

 // This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
    alert("Error: "+args.get_message());
}




</script>

<style>
    .ms-propertysheet{
        display:none;
    }
</style>
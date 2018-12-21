<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/spjs-utility.js"></script<script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>


var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.
var userProfileProperties;
//ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

 function get_user(){


        //------------------------
    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));



 }


var get_preferredname;
function onQuerySucceeded() {

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;
//console.log(targetUser);
    SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');

//var document_approval = $("select[id='ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff121_ctl00_DropDownChoice']").val(); 
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
   get_dcrf();
    
}



  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}


 function get_dcrf(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Document Change Request Form');
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

var department_head;
var concatUsername = "hoitcebu\\"+"jossiem";
var concatUsername2 = "hoitcebu\\"+"victors";
var concatUsername3 = "hoitcebu\\"+"litoa";
var concatUsername4 = "hoitcebu\\"+"nowmarc";

    function onSucceededCallback(sender, args) 
{
         var enumerator = returnedItems.getEnumerator();

         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

        var id = listItem.get_item('ID') 
        
        if(itemId==id){//if

   try {
               department_head= listItem.get_item('Department_x0020_Head').get_lookupValue();  
            
        } catch(err) {
   department_head="";
}  
        
        }//end if
  
        
      }
      //console.log("Query department head:"+department_head);
      //console.log("logined user:"+get_preferredname);
     //console.log("target user:"+targetUser);
var review_by = $('input[id=ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff101_ctl00_ctl00_TextField]').val();
var department_approval = $('select[id=ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff121_ctl00_DropDownChoice]').val();
var tqm_approval = $('select[id=ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff131_ctl00_DropDownChoice]').val();

 //alert(department_head)

if(review_by=="" || tqm_approval==""){

	$('#document_change_table #ticketStatus').hide();
}else{

	$('#document_change_table #ticketStatus').show();
}

if(review_by==""){
// alert("asd");
        if(targetUser==concatUsername || targetUser==concatUsername3 || targetUser==concatUsername4){

        $('#document_change_table #document_comment_id').show();
        
        $('#document_change_table #document_review_by_id').show();
        $("textarea[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff91_ctl00_ctl00_TextField']").removeAttr('readonly').css('background-color','')

            $('#document_change_table #department_approval').hide();
     
      }else{//alert("asd");
                $('#document_change_table #document_comment_id').show();
                $('#document_change_table #document_review_by_id').show();

                $('#document_change_table #department_approval').show();
                $('#document_change_table #department_approval2').show();

                $('#document_change_table #department_approval').show();
               // $('#document_change_table #department_approval2').hide();
                $('#document_change_table #department_approval2').show();
                $('#document_change_table #approval_note_id').show();
                



                $("textarea[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6')
                $("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
      }
}else if(review_by!=""){
// alert("asd");
//start if not empty reviewed by--------------------------------------------------------------------------------------------------
 if(department_head!=""){
  console.log("department_head: "+department_head)
        if(department_approval=="" && review_by!=""){

            if(get_preferredname==department_head ){
                //console.log("department head is login.")
                $('#document_change_table #document_comment_id').show();
                $('#document_change_table #document_review_by_id').show();


                    if(department_approval==""){
                    $('#document_change_table #department_approval').show();
                    $('#document_change_table #department_approval2').show();
                    $('#document_change_table #approval_note_id').show();


                    }

            }else {


                 $('#document_change_table #document_comment_id').show();
                $('#document_change_table #document_review_by_id').show();

                    $('#document_change_table #department_approval').show();
                    $('#document_change_table #department_approval2').show();
                    $('#document_change_table #approval_note_id').show();

                    $('#document_change_table #tqm_approval').show();
                            $('#document_change_table #tqm_approval2').show();

                    $("select[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff121_ctl00_DropDownChoice']").attr('disabled', 'disabled');

                    $("textarea[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6')

                    $("textarea[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6')
                    $("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
                    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

                }
        }else if(department_approval=="Approved"){
            if(tqm_approval==""){

                    if(targetUser==concatUsername2 || targetUser==concatUsername3 || targetUser==concatUsername4){

                        $('#document_change_table #document_comment_id').show();
                        $('#document_change_table #document_review_by_id').show();

                            $('#document_change_table #department_approval').show();
                            $('#document_change_table #department_approval3').show();

                            $('#document_change_table #tqm_approval').show();
                            $('#document_change_table #tqm_approval2').show();

                            $('#document_change_table #approval_note_id').show();

                            document.getElementById("department_approval2").style.display = 'None';
                            department_approval2 = $("select[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff121_ctl00_DropDownChoice']").val();
                            document.getElementById('department_approval3').innerHTML=department_approval2+"<br><br>";



                    }else{
//alert("asd");         
                        $('#document_change_table #document_comment_id').show();


                            $('#document_change_table #department_approval').show();
                            $('#document_change_table #department_approval2').show();
                            $('#document_change_table #approval_note_id').show();

                            $("select[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff121_ctl00_DropDownChoice']").attr('disabled', 'disabled');

                            $("textarea[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6')

                            $("textarea[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6')
                            //alert("asd");
                        
                                $("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
                                
                                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
                           
                            

                    }

                }
                else{
                    //console.log("WE'RE ON THE SAME PAGE!");
                    $('#document_change_table #document_comment_id').show();
                            $('#document_change_table #document_review_by_id').show();
//alert("asd");
                                $('#document_change_table #department_approval').show();
                                $('#document_change_table #department_approval2').hide();
                                $('#document_change_table #department_approval3').show();
                                $('#document_change_table #approval_note_id').show();

                                 $('#document_change_table #tqm_approval').show();
                                $('#document_change_table #tqm_approval2').hide();
                                $('#document_change_table #tqm_approval3').show();


                                document.getElementById("department_approval2").style.display = 'None';
                                department_approval2 = $("select[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff121_ctl00_DropDownChoice']").val();
                                document.getElementById('department_approval3').innerHTML=department_approval2+"<br><br>";

                                document.getElementById("tqm_approval2").style.display = 'None';
                                tqm_approval2 = $("select[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff131_ctl00_DropDownChoice']").val();
                                document.getElementById('tqm_approval3').innerHTML=tqm_approval2+"<br><br>";

                                //$("select[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff121_ctl00_DropDownChoice']").attr('disabled', 'disabled');

                                $("textarea[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6')

                                $("textarea[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6')

                                document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff111_ctl00_ctl00_TextField").style.display = 'None';
                                //alert("test");

                                if(targetUser==concatUsername || targetUser==concatUsername3 || targetUser==concatUsername4){

                             }else{
                                $("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
                                
                                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
                             }

                             //   $("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
                              //  $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

                }
        }else{
            $('#document_change_table #document_comment_id').show();
            $('#document_change_table #document_review_by_id').show();
//alert("ad");
                $('#document_change_table #department_approval').show();
                $('#document_change_table #department_approval2').hide();
                $('#document_change_table #department_approval3').show();
                $('#document_change_table #approval_note_id').show();

                document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff111_ctl00_ctl00_TextField").style.display = 'None';
                document.getElementById("department_approval2").style.display = 'None';
                department_approval2 = $("select[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff121_ctl00_DropDownChoice']").val();
                document.getElementById('department_approval3').innerHTML=department_approval2+"<br><br>";

            $("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
            }

 }
 else if(department_head==""){
      // alert("asd");
        if(tqm_approval==""){
            if(targetUser==concatUsername2 || targetUser==concatUsername3 || targetUser==concatUsername4){
console.log("WE'RE ON THE SAME PAGE!");
                $('#document_change_table #document_comment_id').show();
                $('#document_change_table #document_review_by_id').show();
                $('#document_change_table #tqm_approval').show();
                $('#document_change_table #tqm_approval2').show();
              //$('#document_change_table #tqm_approval3').hide();
               $('#document_change_table #approval_note_id').show();
               $('#document_change_table #ticketStatus').hide();

            }else{
                $('#document_change_table #document_comment_id').show();
                            $('#document_change_table #document_review_by_id').show();

                $('#document_change_table #tqm_approval').show();
                $('#document_change_table #tqm_approval2').show();
                $('#document_change_table #approval_note_id').show();
               
               //condition for idrian
                $("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

                
            }
        


        }else{
          //  alert("asd");
          

                        $('#document_change_table #document_comment_id').show();
                        $('#document_change_table #document_review_by_id').show();
                            $('#document_change_table #approval_note_id').show();

                             $('#document_change_table #tqm_approval').show();
                            $('#document_change_table #tqm_approval2').hide();
                            $('#document_change_table #tqm_approval3').show();
                        

                            document.getElementById("tqm_approval2").style.display = 'None';
                            tqm_approval2 = $("select[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff131_ctl00_DropDownChoice']").val();
                            document.getElementById('tqm_approval3').innerHTML=tqm_approval2+"<br><br>";

                            //$("select[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff121_ctl00_DropDownChoice']").attr('disabled', 'disabled');

                            $("textarea[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6')

                            $("textarea[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6')

                            document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff111_ctl00_ctl00_TextField").style.display = 'None';
                           // alert("test");

                            if(targetUser==concatUsername || targetUser==concatUsername3 || targetUser==concatUsername4){

                             }else{
                                $("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
                                $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
                             }
                            //$("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
                            //$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

        }         
 }

//end if not empty reviewed by------------------------------------------------------------------------------------------------------
}else{

        $('#document_change_table #document_comment_id').show();
        $('#document_change_table #document_review_by_id').show();

        $('#document_change_table #department_approval').show();
        $('#document_change_table #department_approval2').show();
// alert("asd");
        $('#document_change_table #department_approval').show();
       // $('#document_change_table #department_approval2').hide();
        $('#document_change_table #department_approval2').show();
        $('#document_change_table #approval_note_id').show();

        $("textarea[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6')
        $("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
        $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
      }


//alert("aw");

    } 

       function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

      $("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }

 // This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
    alert("Error: "+args.get_message());
}





  $(document).ready(function()
{
//for display:none edit ribbon
setInterval(function(){ $("li[id='Ribbon.EditingTools.CPInsert-title']").hide(); }, 1000);

if ( $('input[name="ctl00$ctl42$g_632f533f_6817_4b27_99ba_874a77fde0d1$ff161$ctl00$ctl00"]').is(':checked') ) {
console.log("checked");
document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff161_ctl00_ctl00").disabled=true;
      $("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

} 

$('#document_change_table #document_comment_id').hide();
$('#document_change_table #document_review_by_id').hide();

$('#document_change_table #department_approval').hide();
$('#document_change_table #department_approval2').hide();
$('#document_change_table #department_approval3').hide();

$('#document_change_table #tqm_approval').hide();
$('#document_change_table #tqm_approval2').hide();
$('#document_change_table #tqm_approval3').hide();

$('#document_change_table #approval_note_id').hide();

$('#document_change_table #change_control_req').hide();


var ccr_reference_no = $('input[id=ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff141_ctl00_ctl00_TextField]').val();

if(ccr_reference_no!=""){
$('#document_change_table #change_control_req').show();
    var substring_id= ccr_reference_no.substring(9);
$("div[id='ccr_reference_link']").html("<a href='https://intranet.houseofit.com.au/Lists/Change%20Control%20Request%20Form/EditFormCopy.aspx?ID="+substring_id+"' title='CCR(Reference No.)' target='_blank'>"+ccr_reference_no+"</a>");
}


get_user();

//------change Save to Submit---------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");   
console.log("DCR") 
//-------------------------------------

//alert($('#change_control_req').text());



document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff11_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff11_ctl00_ctl00_TextField").size = "25";

document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff51_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff51_ctl00_ctl00_TextField").size = "25";

document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff41_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff41_ctl00_ctl00_TextField").size = "25";

$("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

$("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff41_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff51_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("input[id='ctl00_ctl43_g_aa1c98bf_01c9_497c_aca7_d043b070a19a_ff51_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


$("div[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff61_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

var from_cal = document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
from_cal.src = "";
from_cal.alt = "";


$("a[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff61_ctl00_ctl00_UserField_checkNames']").html("");
$("a[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff61_ctl00_ctl00_UserField_browse']").html("");


$("div[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff71_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');


$("div[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff81_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

// document.getElementById("ctl00_ctl43_g_1d699530_61ee_4d87_9000_c9d341217b0e_ff131_ctl00_ctl00_TextField").style.width = "942px";

$("input[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff101_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff101_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff101_ctl00_ctl00_TextField").size = "25";

$("textarea[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


//document.getElementById("department_approval2").style.display = 'None';
       // department_approval2 = $("select[id='ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff121_ctl00_DropDownChoice']").val();
       // document.getElementById('department_approval3').innerHTML=department_approval2;

});

  function PreSaveAction()

{
var document_review_by = $('input[id=ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff101_ctl00_ctl00_TextField]').val();
var document_review_comments = $('textarea[id=ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff91_ctl00_ctl00_TextField]').val();



    if(document_review_comments==""){
    alert("Information, Document Review Comments needs a value. Please enter a value");
    return false;
    }else{

    if(document_review_by=="")
    {
        document.getElementById("ctl00_ctl43_g_632f533f_6817_4b27_99ba_874a77fde0d1_ff101_ctl00_ctl00_TextField").value = get_preferredname;
    }

    return true;
    }

}
</script>
<style>

.ms-propertysheet{
  display:none;
}
</style>
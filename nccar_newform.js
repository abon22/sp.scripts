<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var iso_title;
var temp_clause;

var context = null;
var web = null;
var currentUser = null;
ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");

function GetUserLoginName() {
  context = new SP.ClientContext.get_current();
  web = context.get_web();
  this._currentUser = web.get_currentUser();
  context.load(this._currentUser);
  context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
  Function.createDelegate(this, this.onFailureMethod));
}

function onSuccessMethod(sender, args) {

 //var today = new Date();

document.getElementById('ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff101_ctl00_ctl00_UserField_upLevelDiv').innerHTML=this._currentUser.get_title();
//change the ID here to your people picker field ID. Get the id for this field with the help of IE developer tool.
}

function onFaiureMethod(sender, args) {

 alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());

 }


  $(document).ready(function()
{


$('#ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff81_ctl00_DropDownChoice').html('');

 $('#ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff81_ctl00_DropDownChoice').append($('<option>',
        {
            value: "None",
            text : "None" 
        }));


   $('#ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff91_ctl00_DropDownChoice').html('');
  
 $('#ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff91_ctl00_DropDownChoice').append($('<option>',
        {
            value: "None",
            text : "None" 
        }));





// document.getElementById("ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff21_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
// document.getElementById("ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff21_ctl00_ctl00_TextField").size = "11";

document.getElementById("ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff11_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff11_ctl00_ctl00_TextField").size = "11";

 //$("textarea[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff301_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 document.getElementById("ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff291_ctl00_ctl00_TextField").style.width = "932px";

$("input[id='ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 
// $("input[id='ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff311_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 


//var div = document.getElementById('ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff151_ctl00_ctl00_TextField');
// div.innerHTML = "<table cellspacing='0' class='ms-rteTable-default' style='width: 655px; height: 301px;'> <tbody> <tr class='ms-rteTableHeaderRow-default' style='text-align: center;'> <th class='ms-rteTableHeaderEvenCol-default' rowspan='1' colspan='6' style='width: 1%; text-align: center;'> <span style='color: #191919; text-decoration: none solid #191919;'> <strong style='text-decoration: none solid #191919;'>5 Why&#39;s Diagram​ ​ </strong> <span style='text-decoration: none solid #191919;'>​ ​</span> ​ ​</span></th> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'> <strong>​Measurements</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'> <strong>​Materials</strong></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'> <strong>​Methods</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'> <strong>​Machines</strong></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'> <strong>​Manpower</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'> <strong>​Environment</strong></td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> </tbody></table>";

 
//----Chage Save to Submit------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    

//-----------Selecting ISO Standard---------------------------------------

var iso_standard;
 $('select[id=ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff71_ctl00_DropDownChoice]').change( function() {
   iso_standard= $('select[id=ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff71_ctl00_DropDownChoice]').val();
temp_clause="clause";
   //Get the current context

   if(iso_standard=="ISO 9001:2015"){
     // alert(iso_standard);  
      
       set_client_context("ISO 9001:2015 Title");
         
  }else if(iso_standard=="ISO 27001:2013")
  //alert(iso_standard);
  {
    set_client_context("ISO 27001:2013 Title");
    
}
  
  });
  
//------Selecting Clause----------------------------------------------

 $('select[id=ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff81_ctl00_DropDownChoice]').change( function() {
   iso_title= $('select[id=ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff81_ctl00_DropDownChoice]').val();
   
   temp_clause="subclause";
   //alert(iso_title);
   
  if(iso_standard=="ISO 9001:2015"){
   
 // set_client_context("ISO 9001:2015 Title");
 set_client_context("ISO 9001:2015");
    
   
  }else if(iso_standard=="ISO 27001:2013"){
   
 // set_client_context("ISO 27001:2013 Title");
  set_client_context("ISO 27001:2013");
    
   
  }

   


});


});

function set_client_context(title) {
        var context = new SP.ClientContext.get_current();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle(title);
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

   function onSucceededCallback(sender, args) {
   var enumerator = returnedItems.getEnumerator();

if(temp_clause=="clause"){

  $('#ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff81_ctl00_DropDownChoice').html('');

          
           $('#ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff81_ctl00_DropDownChoice').append($('<option>',
        {
            value: "None",
            text : "None" 
        }));
  while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();
        //alert(listItem.get_item('Title'));
        var i =listItem.get_item('Title');
         $('#ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff81_ctl00_DropDownChoice').append($('<option>',
      {
          value: i,
          text : i 
      }));
    
  }


}else if(temp_clause=="subclause"){
 $('#ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff91_ctl00_DropDownChoice').html('');
 
         
  while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();
        //alert(listItem.get_item('Title'));
        var title = listItem.get_item('Title0').get_lookupValue();
       //alert("ISO TITLE:"+iso_title);
       //alert("TITLE:"+title);


        if(iso_title==title)
        {
        
          var i =listItem.get_item('Title');
          
           $('#ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff91_ctl00_DropDownChoice').append($('<option>',
        {
            value: i,
            text : i 
        }));
      
      }
    
  }

}




}

   //This function fires when the query fails
   function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markupQMS = '<p>The request failed: <br>';
      markupQMS += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markupQMS);
   }






function PreSaveAction()

{

//var iso_standar_field= $('select[id=ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff71_ctl00_DropDownChoice]').val();
var clause_field= $('select[id=ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff281_ctl00_Lookup]').val();
//var subclause_field= $('select[id=ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff91_ctl00_DropDownChoice]').val();
//var auditor_report= $('div[id=ctl00_ctl43_g_968c74e9_d8f3_4066_95f7_9346d05f6475_ff121_ctl00_ctl00_TextField_inplacerte_label]').val();
//alert(auditor_report);
  if (clause_field=="None")
  {
  alert("Information, Clause Field needs a value. Please select a value.");
  return false;
  }
  else
  {
  return true;
  }
}


</script>
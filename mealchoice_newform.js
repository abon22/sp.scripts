<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>


var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.


ExecuteOrDelayUntilScriptLoaded(init,'sp.js');

 $(function() {
document.getElementById("s4-ribbonrow").style.display = "none";
 // console.log("Document_x0020_No_x002e__43f23c1d-1270-4f7c-8851-19b263bd82c0_$TextField")
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


 document.getElementById("ctl00_ctl43_g_80eeda80_d153_4c5d_8adc_cb5ef5bdee7f_ff71_ctl00_ctl00_TextField").style.display='none';
 
  document.getElementById("ctl00_ctl43_g_80eeda80_d153_4c5d_8adc_cb5ef5bdee7f_ff81_ctl00_ctl00_TextField_inplacerte").style.display='none';
  });
 var targetUser;

 function init(){



        //------------------------
    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));

    //-------------------------------------


    //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Lunch Menu');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>1</Value></Eq></Where></Query>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);


    

 }

 //=====================================================================================================================================

 var returnedItems;
var get_deadline;

   function onSucceededCallback(sender, args) {


         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();
        var id = listItem.get_item('ID') 

         if(id==1){//if

        var deadline= listItem.get_item('Deadline');
        var deadline_temp = deadline.format('MM/dd/yyyy hh:ss tt');
        get_deadline = deadline_temp;
         
        }

    }

}
   //This function fires when the query fails
   function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );
   }


//======================================================================================================================
function onQuerySucceeded() {

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;
  
  
    SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
}


function getUserProperties() {



targetUser = 'hoitcebu\\'+targetUser;
    // Replace the placeholder value with the target user's credentials.
     //alert(targetUser);
     
     

    // Get the current client context and PeopleManager instance.
    var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
  

    // Specify the properties to retrieve and target user for the 
    // UserProfilePropertiesForUser object.
    var profilePropertyNames = ["FirstName", "LastName"];
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
var immediate_head_var;
// This function runs if the executeQueryAsync call succeeds.
function onRequestSuccess() {
    var firstname = userProfileProperties[0];
    var lastname =  userProfileProperties[1];
    
    document.getElementById('ctl00_ctl43_g_80eeda80_d153_4c5d_8adc_cb5ef5bdee7f_ff71_ctl00_ctl00_TextField').value = lastname+", "+firstname;
   // document.getElementById('Department_x002f_Section_43486c48-0dc4-4feb-8a8f-275d6be57037_$TextField').value = department;
    //document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField').value = manager;
  
    
}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
    //document.getElementById('Report_x0020_to_x0020_HR_1d241383-ba93-4526-be6b-3d0750b2ea98_$TextField').value = "Error: " + args.get_message();
    //document.getElementById('Department_x002f_Section_43486c48-0dc4-4feb-8a8f-275d6be57037_$TextField').value = "Error: " + args.get_message();
}


function PreSaveAction()

{

var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();

// if(dd<10) {
//     dd='0'+dd
// } 
// if(mm<10) {
//     mm='0'+mm
// } 

// today = mm+'/'+dd+'/'+yyyy;


var formated_today_date = new Date();
var formated_get_deadline = new Date(get_deadline);

//alert(formated_today_date.format('MMM dd, yyyy hh:ss tt')+" : "+formated_get_deadline.format('MMM dd, yyyy hh:ss tt'));

if(formated_today_date>formated_get_deadline){

alert("Staff Meal Choices wont receive entries for now. The deadline for submission was on "+formated_get_deadline.format('MMM dd, yyyy hh:ss tt')+".");
return false;

}else{

    return true;//true
}



}



</script>
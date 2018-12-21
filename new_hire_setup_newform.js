<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function are_cookies_enabled()
{
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled)
    { 
        document.cookie="testcookie";
        cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    return (cookieEnabled);
}



//------------------------------------------------------------------------
 $(document).ready(function()
{

 var cookie_enabled = are_cookies_enabled();
    if(cookie_enabled!=true){
        alert("Please enable cookie in the browsers setting or contact administrator.")
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

SPUtility.HideSPField('Software Application');
SPUtility.HideSPField('Status');

/*document.getElementById("Requestor_x0027_s_x0020_Name_de749a50-f87a-48c9-8261-1d597433c7ab_$TextField").style.border = "none";
document.getElementById("Requestor_x0027_s_x0020_Name_de749a50-f87a-48c9-8261-1d597433c7ab_$TextField").style.borderBottom = "2px solid #1BA1E2";

document.getElementById("Department_x002f_Section_013317a8-c80e-45eb-bbdf-bbb2a9652b3a_$TextField").style.border = "none";
document.getElementById("Department_x002f_Section_013317a8-c80e-45eb-bbdf-bbb2a9652b3a_$TextField").style.borderBottom = "2px solid #1BA1E2";

document.getElementById("Department_x0020_Head_b4a1077a-b49c-4c3f-a3f7-571d5475c0d0_$ClientPeoplePicker").style.border = "none";
document.getElementById("Department_x0020_Head_b4a1077a-b49c-4c3f-a3f7-571d5475c0d0_$ClientPeoplePicker").style.borderBottom = "2px solid #1BA1E2";*/



document.getElementById("Default_x0020_Access_6dacc1de-d6f5-485e-a47b-eb0f421d5164_$TextField").readOnly = true;
document.getElementById("Default_x0020_Access_6dacc1de-d6f5-485e-a47b-eb0f421d5164_$TextField").style.resize = "none";
document.getElementById("Default_x0020_Access_6dacc1de-d6f5-485e-a47b-eb0f421d5164_$TextField").style.border = "none";
document.getElementById("Default_x0020_Access_6dacc1de-d6f5-485e-a47b-eb0f421d5164_$TextField").style.borderBottom = "2px solid #1BA1E2";

document.getElementById("Default_x0020_Applications_59db3ca7-748b-4738-81ab-cdc465521cc7_$TextField").readOnly = true;
document.getElementById("Default_x0020_Applications_59db3ca7-748b-4738-81ab-cdc465521cc7_$TextField").style.resize = "none";
document.getElementById("Default_x0020_Applications_59db3ca7-748b-4738-81ab-cdc465521cc7_$TextField").style.border = "none";
document.getElementById("Default_x0020_Applications_59db3ca7-748b-4738-81ab-cdc465521cc7_$TextField").style.borderBottom = "2px solid #1BA1E2";

document.getElementById("Hardware_x0020_Setup_2ab389f1-0ff8-48f1-a92d-82e2d746f181_$TextField").readOnly = true;
document.getElementById("Hardware_x0020_Setup_2ab389f1-0ff8-48f1-a92d-82e2d746f181_$TextField").style.resize = "none";
document.getElementById("Hardware_x0020_Setup_2ab389f1-0ff8-48f1-a92d-82e2d746f181_$TextField").style.border = "none";
document.getElementById("Hardware_x0020_Setup_2ab389f1-0ff8-48f1-a92d-82e2d746f181_$TextField").style.borderBottom = "2px solid #1BA1E2";

document.getElementById("Default_x0020_Access_6dacc1de-d6f5-485e-a47b-eb0f421d5164_$TextField").readOnly = true;
document.getElementById("Default_x0020_Access_6dacc1de-d6f5-485e-a47b-eb0f421d5164_$TextField").style.resize = "none";
document.getElementById("Default_x0020_Access_6dacc1de-d6f5-485e-a47b-eb0f421d5164_$TextField").style.border = "none";
document.getElementById("Default_x0020_Access_6dacc1de-d6f5-485e-a47b-eb0f421d5164_$TextField").style.borderBottom = "2px solid #1BA1E2";




//$("textarea[id='Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField']").autoResize();
document.getElementById("Default_x0020_Access_6dacc1de-d6f5-485e-a47b-eb0f421d5164_$TextField").value = "PayrollHero," +
"\nEmail Account Setup," +
"\nSharePoint Access," +
"\nRFID," +
"\nBiometrics";




document.getElementById("Default_x0020_Applications_59db3ca7-748b-4738-81ab-cdc465521cc7_$TextField").value = "Adobe Reader DC,"+
"\nGoogle Chrome,"+
"\nMozilla Firefox,"+
"\nSnagit 13,"+
"\nSkype,"+
"\nTeamviewer 11,"+
"\nMS Office (Outlook, Excel, Word, Powerpoint, Visio)," +
"\nSpotify";


document.getElementById("Hardware_x0020_Setup_2ab389f1-0ff8-48f1-a92d-82e2d746f181_$TextField").value = "Monitors," +
"\nNUC,"+
"\nKeyboard,"+
"\nMouse,"+
"\nHeadset";

});

 function autosize(){
  var el = document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField");
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0;';
    // for box-sizing other than "content-box" use:
    el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px;  resize:none; border:none; border-bottom:2px solid rgb(27, 161, 226);';
  },0);

  document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField").readOnly = true;
}


$(function() {


$("select[id='New_x0020_Hire_x0027_s_x0020_Dep_865644e6-0e97-4e45-ba81-8a89d05502c6_$LookupField']").change( function() {

    var dept = document.getElementById("New_x0020_Hire_x0027_s_x0020_Dep_865644e6-0e97-4e45-ba81-8a89d05502c6_$LookupField");
    var dept_val= dept.options[dept.selectedIndex].text;

    var pos = document.getElementById("New_x0020_Hire_x0027_s_x0020_Pos_bf1286de-842d-4ffd-90c3-3fc0ef14a263_$LookupField");
    var pos_val= pos.options[pos.selectedIndex].text;


    if(dept_val == "DMCS"){
        
  

       $("select[id='New_x0020_Hire_x0027_s_x0020_Pos_bf1286de-842d-4ffd-90c3-3fc0ef14a263_$LookupField']").change( function() {
            var pos = document.getElementById("New_x0020_Hire_x0027_s_x0020_Pos_bf1286de-842d-4ffd-90c3-3fc0ef14a263_$LookupField");
            var pos_val= pos.options[pos.selectedIndex].text;

           //console.log("pos_val: "+pos_val);

           if(pos_val == "Web Developer"){
            document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField").value = "Web Developer - Sublime Text";  
            SPUtility.ShowSPField('Software Application');
           }else if(pos_val == "Graphic Designer" || pos_val == "Graphic Artist" ){
            document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField").value = "Graphics - Adobe Photoshop CC," +
            "\nGraphics - Adobe Illustrator CC,"+
            "\nGraphics - Adobe InDesign CC,"+
            "\nGraphics - Adobe Lightroom,"+
            "\nGraphics - Adobe After Effects CC,"+
            "\nGraphics - Adobe Premiere,"+
            "\nGraphics - Adobe Animator,"+
            "\nGraphics - Adobe Audition CC,"+
            "\nGraphics - Adobe Character Animator  CC,"+
            "\nGraphics - Adobe Media Encoder CC,"+
            "\nGraphics - Adobe Camera Raw CC";
            SPUtility.ShowSPField('Software Application');
           }else{
            SPUtility.HideSPField('Software Application');
           }

            autosize();
       });

        
        
        

    }else if(dept_val == "HOIT - BO" ){
        SPUtility.ShowSPField('Software Application');

        document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField").value = "CargoWise One," +
        "\nScreenpresso,"+
        "\nToggl";
        autosize();

    }else if(dept_val == "TBOS"){
        

        $("select[id='New_x0020_Hire_x0027_s_x0020_Pos_bf1286de-842d-4ffd-90c3-3fc0ef14a263_$LookupField']").change( function() {
            var pos = document.getElementById("New_x0020_Hire_x0027_s_x0020_Pos_bf1286de-842d-4ffd-90c3-3fc0ef14a263_$LookupField");
            var pos_val= pos.options[pos.selectedIndex].text;

            if(pos_val == "SQL Developer"){
            document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField").value = "SQL Developer - Microsoft SQL Management Studio,"+
            "\nSQL Developer - Azure Biztalk SDK,"+
            "\nSQL Developer - Microsoft SQL Express 2012,"+
            "\nSQL Developer - Visual Studio Community 2017";
            }else{
            document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField").value = "CargoWise One," +
            "\nScreenpresso,"+
            "\nToggl";
            
            }
            SPUtility.ShowSPField('Software Application');
            autosize();



        });


    }else if(dept_val == "IT"){
 
        
        $("select[id='New_x0020_Hire_x0027_s_x0020_Pos_bf1286de-842d-4ffd-90c3-3fc0ef14a263_$LookupField']").change( function() {
            var pos = document.getElementById("New_x0020_Hire_x0027_s_x0020_Pos_bf1286de-842d-4ffd-90c3-3fc0ef14a263_$LookupField");
            var pos_val= pos.options[pos.selectedIndex].text;

            if(pos_val == "SharePoint Developer"){
            document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField").value = "TeamViewer," +
            "\nSlack,"+
            "\nSharePoint Developer - Sublime Text,"+
            "\nSharePoint Developer - SharePoint Designer";
            }else{
            document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField").value = "TeamViewer," +
            "\nSlack,"+
            "\nIT Technician - Autotask Access,"+
            "\nManage Office - X-Lite,";

            }
            SPUtility.ShowSPField('Software Application');
            autosize();


        });

    }else{
        document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField").value = "";   
        SPUtility.HideSPField('Software Application');
        autosize();
    }


});





  });

//------------------------------------------------------------------------

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
  
  
    SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
}

function onRequestFail(sender, args) {
    alert( "Error: " + args.get_message());
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
    var profilePropertyNames = ["PreferredName", "Department", "Manager"];
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
    var requestorName = userProfileProperties[0];
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];
   // alert(manager);
    document.getElementById('Requestor_x0027_s_x0020_Name_de749a50-f87a-48c9-8261-1d597433c7ab_$TextField').value = requestorName;
   document.getElementById('Department_x002f_Section_013317a8-c80e-45eb-bbdf-bbb2a9652b3a_$TextField').value = department;
    immediate_head_var = manager;
    immediate_head();

}

function immediate_head() {

var immediate_head_temp = immediate_head_var;

var res_immediate = immediate_head_temp.substring(9);
console.log(res_immediate);
var key_var = "i:0#.w|hoitcebu\\"+res_immediate;


ExecuteOrDelayUntilScriptLoaded(function () {
    setTimeout(function () {

        var dispTitle = "Department Head Required Field";
        var pickerDiv = $("[id$='ClientPeoplePicker'][title='" + dispTitle + "']");
        var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[pickerDiv[0].id];
        var usrObj = { 'Key': key_var};
        peoplePicker.AddUnresolvedUser(usrObj,true); 

    }, 500);
}, "clientpeoplepicker.js");


}
/*
function PreSaveAction()

{
    
    //setCookie("send_to_supoort", "", 30);
    return true;

}*/

function PreSaveAction()

{

    var req_name = $("input[id='Requestor_x0027_s_x0020_Name_de749a50-f87a-48c9-8261-1d597433c7ab_$TextField']").val();
    var dept = $("input[id='Department_x002f_Section_013317a8-c80e-45eb-bbdf-bbb2a9652b3a_$TextField']").val();
    var date = $("input[id='Date_x0020_Needed_aa11dac3-ac3d-4177-952d-c627387f2431_$DateTimeFieldDate']").val();
    var new_hire = $("input[id='Name_x0020_of_x0020_New_x0020_Hi_1cabcb5c-1458-4aaa-956d-66eaacf374f8_$TextField']").val();
    var new_hire_dept = $("select[id='New_x0020_Hire_x0027_s_x0020_Dep_865644e6-0e97-4e45-ba81-8a89d05502c6_$LookupField']").val();

    var dept_head = document.getElementById("Department_x0020_Head_b4a1077a-b49c-4c3f-a3f7-571d5475c0d0_$ClientPeoplePicker_HiddenInput").value;
    var new_hire_dept_head = document.getElementById("New_x0020_Hire_x0027_s_x0020_Dep0_ce75b29c-0792-4dfd-9196-5a77278bae7b_$ClientPeoplePicker_HiddenInput").value;

/*    console.log("req_name: "+req_name);
    console.log("dept: "+dept);
    console.log("date: "+date);
    console.log("new_hire: "+new_hire);
    console.log("new_hire_dept: "+new_hire_dept);
    console.log("dept_head: "+dept_head);*/
    console.log(new_hire_dept_head);

    if(req_name!="" && dept!="" && date!="" && new_hire!="" && new_hire_dept!=0 ){
        //console.log("a");
        if( new_hire_dept_head == '[]' || dept_head == '[]' || new_hire_dept_head == ''  || dept_head == ''){
            //if empty people pickers
            alert("Please fill up required fields.")
            return false;
        }else{
            //if not empty people pickers
            setCookie("send_to_supoort", "", 30);
            return true;
        }
    }else{
        
        alert("Please fill up required fields.")
        return false;
        //console.log("b");

    }


}




 
 
 
 
 //---------------------------------------------------------------------------------------------------------------


</script><i><b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to 
      <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i> ​
    


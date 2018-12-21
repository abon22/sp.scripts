
​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script> ​​​<script src="/SiteAssets/Scripts/jquery.timeago.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script type="text/javascript">

//--------Change 'Save' to 'Submit'-----------------
(function ($, undefined)
{
    $("document").ready(function ()
    {
        var inputcontrols = document.getElementsByTagName("input");
        for(i = 0; i<inputcontrols.length; i++)
        {
            if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                inputcontrols[i].value = "Submit";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        ribbonSave.text("Submit");

        document.getElementById("Employee_x0020_Information_x0020").innerText = "";
        document.getElementById("Employee_x0020_Information_x0020").style.border = "none";
        document.getElementById("Employee_x0020_Information_x0020").style.borderBottom = "thin solid black";
        document.getElementById("Employee_x0020_Information_x0020_37081d9f-148b-4ef9-a5fb-8f92b995dd20_$TextField").style.border = "none";
        document.getElementById("Employee_x0020_Information_x0020_37081d9f-148b-4ef9-a5fb-8f92b995dd20_$TextField").style.borderTop = "thin solid black";
     
        document.getElementById("Personal_x0020_Info_x0020_Separa").innerText = "";
        document.getElementById("Personal_x0020_Info_x0020_Separa").style.border = "none";
        document.getElementById("Personal_x0020_Info_x0020_Separa").style.borderBottom = "thin solid black";
        document.getElementById("Personal_x0020_Info_x0020_Separa_37085ef3-790a-4524-a9fd-5f5869f1ca61_$TextField").style.border = "none";
        document.getElementById("Personal_x0020_Info_x0020_Separa_37085ef3-790a-4524-a9fd-5f5869f1ca61_$TextField").style.borderTop = "thin solid black";

        document.getElementById("School_x0020_Information_x0020_S").innerText = "";
        document.getElementById("School_x0020_Information_x0020_S").style.border = "none";
        document.getElementById("School_x0020_Information_x0020_S").style.borderBottom = "thin solid black";        
        document.getElementById("School_x0020_Information_x0020_S_2b43110d-c296-4907-bba8-120e22577a81_$TextField").style.border = "none";
        document.getElementById("School_x0020_Information_x0020_S_2b43110d-c296-4907-bba8-120e22577a81_$TextField").style.borderTop = "thin solid black";

        SPUtility.HideSPField('Name of Spouse');
        SPUtility.HideSPField('Status');

        SPUtility.HideSPField('Department Head Approval');
        SPUtility.HideSPField('HR Approval');
        SPUtility.HideSPField('VP-Philippines Approval');
        SPUtility.HideSPField('Finance Approval');
        SPUtility.HideSPField('CEO Approval');

        SPUtility.HideSPField('Department Head Notes');
        SPUtility.HideSPField('HR Notes');
        SPUtility.HideSPField('Finance Notes');
        SPUtility.HideSPField('VP-Philippines Notes');

        SPUtility.HideSPField('Amount');
        SPUtility.HideSPField('Employee Performance');
        SPUtility.HideSPField('Company Violations');

        SPUtility.GetSPField("Reference Number").MakeReadOnly();

        if(document.getElementById("Civil_x0020_Status_64dbd0ed-40c9-4e0a-8fe8-9c6a0daa4df6_$DropDownChoice").value == "Married"){
            SPUtility.ShowSPField('Name of Spouse');
        }

        document.getElementById("Ribbon.ListForm.Edit.Commit.Publish-Large").style.display = "none";

        if(document.getElementById("Beneficiary_x0020_Type_1d599927-6abe-49d1-b593-01a80b01d44b_$DropDownChoice").value == "New"){
            SPUtility.HideSPField('Liquidation Reference Number');
        }
        else{
            SPUtility.GetSPField("Liquidation Reference Number").MakeReadOnly();
        }

    });
})(jQuery);
//------------------------------------

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;
var targetUser_temp;

//----------------------------------------------------------------------------------------------------------------


 $(function() {
 
    // $('select[id=Civil_x0020_Status_64dbd0ed-40c9-4e0a-8fe8-9c6a0daa4df6_$DropDownChoice]').change( function() {
    // CivilStatus = $('select[id=Civil_x0020_Status_64dbd0ed-40c9-4e0a-8fe8-9c6a0daa4df6_$DropDownChoice]').val();
    // if(CivilStatus == "Married"){
    //     SPUtility.ShowSPField('Name of Spouse');
    // }

    // });

})
  
  
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
    // document.getElementById('Requestor_x0027_s_x0020_Name_830abf27-3b1b-40e4-b667-9c03c1e96781_$TextField').value = "Error: " + args.get_message();
    // document.getElementById('Department_8ce26bfb-1875-42a5-b44d-bacc6b77fd1b_$TextField').value = "Error: " + args.get_message();
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
//alert(userProfileProperties );
    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
}

var immediate_head_var;
// This function runs if the executeQueryAsync call succeeds.
var Requestor;
function onRequestSuccess() {
    var requestorName = userProfileProperties[0];
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];

    Requestor = userProfileProperties[0];
    //alert(manager);
    // document.getElementById('Employee_x0020_Name_a8471726-833a-457e-818c-44dadcf1f810_$TextField').value = requestorName;
    // document.getElementById('Department_33be01e2-a4c1-4def-ba26-a900dd2526cb_$TextField').value = department;

    SPUtility.GetSPField("Employee Name").MakeReadOnly();
    SPUtility.GetSPField('Department').MakeReadOnly();

   immediate_head_var = manager;

   if(document.getElementById("Employee_x0020_Name_a8471726-833a-457e-818c-44dadcf1f810_$TextField").value != Requestor){
    document.getElementById("ctl00_ctl42_g_30a4b450_c0d4_48b6_9885_22ac276b9714_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";
    document.getElementById("Ribbon.ListForm.Edit.Commit.Publish-Large").style.display = "none";   


   }

   ExecuteOrDelayUntilScriptLoaded(Get_ImmediateHead,'sp.js');
}


var immediate_head;

function Get_ImmediateHead(){
    var itemId = GetUrlKeyValue("ID", false, location.href);

    console.log(itemId);

    var context = new SP.ClientContext();
    var list = context.get_web().get_lists().getByTitle('Educational Benefit Form');
    var caml = new SP.CamlQuery();
    caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query></View>");
    returnedItems = list.getItems(caml);
    context.load(returnedItems);
    context.executeQueryAsync(Get_ImmediateHead_Succeeded, Get_ImmediateHead_Failed);

}
function Get_ImmediateHead_Succeeded(){
    var enumerator = returnedItems.getEnumerator();

    var DepartmentHead;
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();  

        DepartmentHead = listItem.get_item('Department_x0020_Head').get_lookupValue(); 
    }

    var status = document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value;

    // alert(document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value);

console.log("DepartmentHead: "+DepartmentHead)
    if(status == "For Department Head Approval"){ // FOR DEPARTMENT HEAD APPROVAL

            SPUtility.GetSPField("Beneficiary Type").MakeReadOnly();
            SPUtility.GetSPField("Liquidation Reference Number").MakeReadOnly();
            SPUtility.GetSPField("Residence/Complete Mailing Address").MakeReadOnly();
            SPUtility.GetSPField("Date of Birth").MakeReadOnly();
            SPUtility.GetSPField("Civil Status").MakeReadOnly();
            SPUtility.GetSPField("Name of Spouse").MakeReadOnly();
            SPUtility.GetSPField("Existing Beneficiary Requirement").MakeReadOnly();
            SPUtility.GetSPField("Name of School").MakeReadOnly();
            SPUtility.GetSPField("Degree").MakeReadOnly();
            SPUtility.GetSPField("Course").MakeReadOnly();
            SPUtility.GetSPField("School Year From").MakeReadOnly();
            SPUtility.GetSPField("School Year To").MakeReadOnly();
            SPUtility.GetSPField("Level").MakeReadOnly();
            SPUtility.GetSPField("Academic Term").MakeReadOnly();


        if(Requestor == DepartmentHead || Requestor == "Lito Abon Jr."){
            SPUtility.ShowSPField('Department Head Approval');
            SPUtility.ShowSPField('Department Head Notes'); 

            document.getElementById("ctl00_ctl42_g_30a4b450_c0d4_48b6_9885_22ac276b9714_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "block";
        }
        else{
            document.getElementById("ctl00_ctl42_g_30a4b450_c0d4_48b6_9885_22ac276b9714_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";

        }
    }
    else if(status == "DEPARTMENT HEAD APPROVED"){ // FOR HR APPROVAL

            SPUtility.GetSPField("Beneficiary Type").MakeReadOnly();
            SPUtility.GetSPField("Liquidation Reference Number").MakeReadOnly();
            SPUtility.GetSPField("Residence/Complete Mailing Address").MakeReadOnly();
            SPUtility.GetSPField("Date of Birth").MakeReadOnly();
            SPUtility.GetSPField("Civil Status").MakeReadOnly();
            SPUtility.GetSPField("Name of Spouse").MakeReadOnly();
            SPUtility.GetSPField("Existing Beneficiary Requirement").MakeReadOnly();
            SPUtility.GetSPField("Name of School").MakeReadOnly();
            SPUtility.GetSPField("Degree").MakeReadOnly();
            SPUtility.GetSPField("Course").MakeReadOnly();
            SPUtility.GetSPField("School Year From").MakeReadOnly();
            SPUtility.GetSPField("School Year To").MakeReadOnly();
            SPUtility.GetSPField("Level").MakeReadOnly();
            SPUtility.GetSPField("Academic Term").MakeReadOnly();


        if(Requestor == "Alfie John Ortiz" || Requestor == "Lito Abon Jr."){

            SPUtility.ShowSPField('Department Head Approval');
            SPUtility.ShowSPField('Department Head Notes');

            SPUtility.GetSPField("Department Head Approval").MakeReadOnly();
            SPUtility.GetSPField("Department Head Notes").MakeReadOnly();

            SPUtility.ShowSPField('HR Approval');
            SPUtility.ShowSPField('HR Notes');

            SPUtility.ShowSPField('Amount');
            SPUtility.ShowSPField('Employee Performance');
            SPUtility.ShowSPField('Company Violations');

            document.getElementById("ctl00_ctl42_g_30a4b450_c0d4_48b6_9885_22ac276b9714_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "block";            
        }
        else{
            SPUtility.ShowSPField('Department Head Approval');
            SPUtility.ShowSPField('Department Head Notes');

            SPUtility.GetSPField("Department Head Approval").MakeReadOnly();
            SPUtility.GetSPField("Department Head Notes").MakeReadOnly();

            document.getElementById("ctl00_ctl42_g_30a4b450_c0d4_48b6_9885_22ac276b9714_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";            
        }
    }
    else if(status == "HR APPROVED"){ // FOR VP APPROVAL

            SPUtility.GetSPField("Beneficiary Type").MakeReadOnly();
            SPUtility.GetSPField("Liquidation Reference Number").MakeReadOnly();
            SPUtility.GetSPField("Residence/Complete Mailing Address").MakeReadOnly();
            SPUtility.GetSPField("Date of Birth").MakeReadOnly();
            SPUtility.GetSPField("Civil Status").MakeReadOnly();
            SPUtility.GetSPField("Name of Spouse").MakeReadOnly();
            SPUtility.GetSPField("Existing Beneficiary Requirement").MakeReadOnly();
            SPUtility.GetSPField("Name of School").MakeReadOnly();
            SPUtility.GetSPField("Degree").MakeReadOnly();
            SPUtility.GetSPField("Course").MakeReadOnly();
            SPUtility.GetSPField("School Year From").MakeReadOnly();
            SPUtility.GetSPField("School Year To").MakeReadOnly();
            SPUtility.GetSPField("Level").MakeReadOnly();
            SPUtility.GetSPField("Academic Term").MakeReadOnly();


        if(Requestor == "Mithi Sandalo" || Requestor == "Lito Abon Jr.")
        {
            SPUtility.ShowSPField('Department Head Approval');
            SPUtility.ShowSPField('Department Head Notes');

            SPUtility.GetSPField("Department Head Approval").MakeReadOnly();
            SPUtility.GetSPField("Department Head Notes").MakeReadOnly();

            SPUtility.ShowSPField('HR Approval');
            SPUtility.ShowSPField('HR Notes');

            SPUtility.GetSPField("HR Approval").MakeReadOnly();
            SPUtility.GetSPField("HR Notes").MakeReadOnly();

            SPUtility.ShowSPField('VP-Philippines Approval');
            SPUtility.ShowSPField('VP-Philippines Notes');

            SPUtility.ShowSPField('Amount');
            SPUtility.ShowSPField('Employee Performance');
            SPUtility.ShowSPField('Company Violations');      
                
            SPUtility.GetSPField("Amount").MakeReadOnly();
            SPUtility.GetSPField("Employee Performance").MakeReadOnly();
            SPUtility.GetSPField("Company Violations").MakeReadOnly();

            document.getElementById("ctl00_ctl42_g_30a4b450_c0d4_48b6_9885_22ac276b9714_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "block";            
        }
        else{
            SPUtility.ShowSPField('Department Head Approval');
            SPUtility.ShowSPField('Department Head Notes');

            SPUtility.GetSPField("Department Head Approval").MakeReadOnly();
            SPUtility.GetSPField("Department Head Notes").MakeReadOnly();

            SPUtility.ShowSPField('HR Approval');
            SPUtility.ShowSPField('HR Notes');

            SPUtility.GetSPField("HR Approval").MakeReadOnly();
            SPUtility.GetSPField("HR Notes").MakeReadOnly();            

            document.getElementById("ctl00_ctl42_g_30a4b450_c0d4_48b6_9885_22ac276b9714_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";            
        }
    }
    else if(status == "VP APPROVED"){ // FOR FINANCE APPROVAL

            SPUtility.GetSPField("Beneficiary Type").MakeReadOnly();
            SPUtility.GetSPField("Liquidation Reference Number").MakeReadOnly();
            SPUtility.GetSPField("Residence/Complete Mailing Address").MakeReadOnly();
            SPUtility.GetSPField("Date of Birth").MakeReadOnly();
            SPUtility.GetSPField("Civil Status").MakeReadOnly();
            SPUtility.GetSPField("Name of Spouse").MakeReadOnly();
            SPUtility.GetSPField("Existing Beneficiary Requirement").MakeReadOnly();
            SPUtility.GetSPField("Name of School").MakeReadOnly();
            SPUtility.GetSPField("Degree").MakeReadOnly();
            SPUtility.GetSPField("Course").MakeReadOnly();
            SPUtility.GetSPField("School Year From").MakeReadOnly();
            SPUtility.GetSPField("School Year To").MakeReadOnly();
            SPUtility.GetSPField("Level").MakeReadOnly();
            SPUtility.GetSPField("Academic Term").MakeReadOnly();


        if(Requestor == "Cherry Yurag" || Requestor == "Lito Abon Jr."){

            SPUtility.ShowSPField('Department Head Approval');
            SPUtility.ShowSPField('Department Head Notes');

            SPUtility.GetSPField("Department Head Approval").MakeReadOnly();
            SPUtility.GetSPField("Department Head Notes").MakeReadOnly();

            SPUtility.ShowSPField('HR Approval');
            SPUtility.ShowSPField('HR Notes');

            SPUtility.GetSPField("HR Approval").MakeReadOnly();
            SPUtility.GetSPField("HR Notes").MakeReadOnly(); 

            SPUtility.ShowSPField('VP-Philippines Approval');
            SPUtility.ShowSPField('VP-Philippines Notes');

            SPUtility.GetSPField("VP-Philippines Approval").MakeReadOnly();
            SPUtility.GetSPField("VP-Philippines Notes").MakeReadOnly();                         

            SPUtility.ShowSPField('Finance Approval');
            SPUtility.ShowSPField('Finance Notes');   

            SPUtility.ShowSPField('Amount');
            SPUtility.ShowSPField('Employee Performance');
            SPUtility.ShowSPField('Company Violations');      
                  
            SPUtility.GetSPField("Amount").MakeReadOnly();
            SPUtility.GetSPField("Employee Performance").MakeReadOnly();
            SPUtility.GetSPField("Company Violations").MakeReadOnly();

            document.getElementById("ctl00_ctl42_g_30a4b450_c0d4_48b6_9885_22ac276b9714_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "block";                    
        }     
        else{
            SPUtility.ShowSPField('Department Head Approval');
            SPUtility.ShowSPField('Department Head Notes');

            SPUtility.GetSPField("Department Head Approval").MakeReadOnly();
            SPUtility.GetSPField("Department Head Notes").MakeReadOnly();

            SPUtility.ShowSPField('HR Approval');
            SPUtility.ShowSPField('HR Notes');

            SPUtility.GetSPField("HR Approval").MakeReadOnly();
            SPUtility.GetSPField("HR Notes").MakeReadOnly();     

            SPUtility.ShowSPField('VP-Philippines Approval');
            SPUtility.ShowSPField('VP-Philippines Notes');

            SPUtility.GetSPField("VP-Philippines Approval").MakeReadOnly();
            SPUtility.GetSPField("VP-Philippines Notes").MakeReadOnly();                         

            document.getElementById("ctl00_ctl42_g_30a4b450_c0d4_48b6_9885_22ac276b9714_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";            
        }

    }
    else if(status == "FINANCE APPROVED"){ // FOR CEO APPROVAL

        console.log("targetUser_temp: "+targetUser_temp);

            SPUtility.GetSPField("Beneficiary Type").MakeReadOnly();
            SPUtility.GetSPField("Liquidation Reference Number").MakeReadOnly();
            SPUtility.GetSPField("Residence/Complete Mailing Address").MakeReadOnly();
            SPUtility.GetSPField("Date of Birth").MakeReadOnly();
            SPUtility.GetSPField("Civil Status").MakeReadOnly();
            SPUtility.GetSPField("Name of Spouse").MakeReadOnly();
            SPUtility.GetSPField("Existing Beneficiary Requirement").MakeReadOnly();
            SPUtility.GetSPField("Name of School").MakeReadOnly();
            SPUtility.GetSPField("Degree").MakeReadOnly();
            SPUtility.GetSPField("Course").MakeReadOnly();
            SPUtility.GetSPField("School Year From").MakeReadOnly();
            SPUtility.GetSPField("School Year To").MakeReadOnly();
            SPUtility.GetSPField("Level").MakeReadOnly();
            SPUtility.GetSPField("Academic Term").MakeReadOnly();


        if(Requestor == "Artem Soukhomlinov" || targetUser_temp =="litoa" ||  targetUser_temp=="artems" || targetUser_temp=="aysoukhomlinov" || targetUser_temp =="nowmarc"){

            SPUtility.ShowSPField('Department Head Approval');
            SPUtility.ShowSPField('Department Head Notes');

            SPUtility.GetSPField("Department Head Approval").MakeReadOnly();
            SPUtility.GetSPField("Department Head Notes").MakeReadOnly();

            SPUtility.ShowSPField('HR Approval');
            SPUtility.ShowSPField('HR Notes');

            SPUtility.GetSPField("HR Approval").MakeReadOnly();
            SPUtility.GetSPField("HR Notes").MakeReadOnly(); 

            SPUtility.ShowSPField('VP-Philippines Approval');
            SPUtility.ShowSPField('VP-Philippines Notes');

            SPUtility.GetSPField("VP-Philippines Approval").MakeReadOnly();
            SPUtility.GetSPField("VP-Philippines Notes").MakeReadOnly();                         

            SPUtility.ShowSPField('Finance Approval');
            SPUtility.ShowSPField('Finance Notes');  

            SPUtility.GetSPField("Finance Approval").MakeReadOnly();
            SPUtility.GetSPField("Finance Notes").MakeReadOnly();  

            SPUtility.ShowSPField('CEO Approval');

            SPUtility.ShowSPField('Amount');
            SPUtility.ShowSPField('Employee Performance');
            SPUtility.ShowSPField('Company Violations');      
                  
            SPUtility.GetSPField("Amount").MakeReadOnly();
            SPUtility.GetSPField("Employee Performance").MakeReadOnly();
            SPUtility.GetSPField("Company Violations").MakeReadOnly();               

            document.getElementById("ctl00_ctl42_g_30a4b450_c0d4_48b6_9885_22ac276b9714_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "block";                             
        }     
        else{
            SPUtility.ShowSPField('Department Head Approval');
            SPUtility.ShowSPField('Department Head Notes');

            SPUtility.GetSPField("Department Head Approval").MakeReadOnly();
            SPUtility.GetSPField("Department Head Notes").MakeReadOnly();

            SPUtility.ShowSPField('HR Approval');
            SPUtility.ShowSPField('HR Notes');

            SPUtility.GetSPField("HR Approval").MakeReadOnly();
            SPUtility.GetSPField("HR Notes").MakeReadOnly();     

            SPUtility.ShowSPField('VP-Philippines Approval');
            SPUtility.ShowSPField('VP-Philippines Notes');

            SPUtility.GetSPField("VP-Philippines Approval").MakeReadOnly();
            SPUtility.GetSPField("VP-Philippines Notes").MakeReadOnly();                         
                   
            document.getElementById("ctl00_ctl42_g_30a4b450_c0d4_48b6_9885_22ac276b9714_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";            
        }

    }
    else if(status == "CEO APPROVED"){ // APPROVED BY THE CEO

            SPUtility.GetSPField("Beneficiary Type").MakeReadOnly();
            SPUtility.GetSPField("Liquidation Reference Number").MakeReadOnly();
            SPUtility.GetSPField("Residence/Complete Mailing Address").MakeReadOnly();
            SPUtility.GetSPField("Date of Birth").MakeReadOnly();
            SPUtility.GetSPField("Civil Status").MakeReadOnly();
            SPUtility.GetSPField("Name of Spouse").MakeReadOnly();
            SPUtility.GetSPField("Existing Beneficiary Requirement").MakeReadOnly();
            SPUtility.GetSPField("Name of School").MakeReadOnly();
            SPUtility.GetSPField("Degree").MakeReadOnly();
            SPUtility.GetSPField("Course").MakeReadOnly();
            SPUtility.GetSPField("School Year From").MakeReadOnly();
            SPUtility.GetSPField("School Year To").MakeReadOnly();
            SPUtility.GetSPField("Level").MakeReadOnly();
            SPUtility.GetSPField("Academic Term").MakeReadOnly();


            SPUtility.ShowSPField('Department Head Approval');
            SPUtility.ShowSPField('Department Head Notes');

            SPUtility.GetSPField("Department Head Approval").MakeReadOnly();
            SPUtility.GetSPField("Department Head Notes").MakeReadOnly();

            SPUtility.ShowSPField('HR Approval');
            SPUtility.ShowSPField('HR Notes');

            SPUtility.GetSPField("HR Approval").MakeReadOnly();
            SPUtility.GetSPField("HR Notes").MakeReadOnly(); 

            SPUtility.ShowSPField('VP-Philippines Approval');
            SPUtility.ShowSPField('VP-Philippines Notes');

            SPUtility.GetSPField("VP-Philippines Approval").MakeReadOnly();
            SPUtility.GetSPField("VP-Philippines Notes").MakeReadOnly();                         

            SPUtility.ShowSPField('Finance Approval');
            SPUtility.ShowSPField('Finance Notes');  

            SPUtility.GetSPField("Finance Approval").MakeReadOnly();
            SPUtility.GetSPField("Finance Notes").MakeReadOnly();  

            SPUtility.ShowSPField('CEO Approval');    
            SPUtility.GetSPField("CEO Approval").MakeReadOnly();   

            SPUtility.ShowSPField('Amount');
            SPUtility.ShowSPField('Employee Performance');
            SPUtility.ShowSPField('Company Violations');      
                  
            SPUtility.GetSPField("Amount").MakeReadOnly();
            SPUtility.GetSPField("Employee Performance").MakeReadOnly();
            SPUtility.GetSPField("Company Violations").MakeReadOnly();


                        document.getElementById("ctl00_ctl42_g_30a4b450_c0d4_48b6_9885_22ac276b9714_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";    
    }                

}
function Get_ImmediateHead_Failed(){
    alert("query failed");
}

 
//---------------------------------------------------------------------------------------------------------------


function PreSaveAction()

{
var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();


    var status = document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value;

    var DEPTHEAD_APPROVAL = document.getElementById("Department_x0020_Head_x0020_Appr_f2af1a6b-1527-4b45-8364-a12a256528c5_$DropDownChoice").value;
    var HR_APPROVAL = document.getElementById("HR_x0020_Approval_6a9c91b7-63fa-4f19-b30d-fdb54c357f7e_$DropDownChoice").value;
    var VP_APPROVAL = document.getElementById("VP_x002d_Philippines_x0020_Appro_359b44f9-7ca1-4e92-a4a4-501153acd24a_$DropDownChoice").value;
    var FINANCE_APPROVAL = document.getElementById("Finance_x0020_Approval_4e0d5ee4-c58b-4652-a226-c5ae6816a953_$DropDownChoice").value;
    var CEO_APPROVAL = document.getElementById("CEO_x0020_Approval_38e019ee-ebbb-4b9a-aad8-0207473581e1_$DropDownChoice").value;

    var EMPLOYEE_PERFORMANCE = document.getElementById("Employee_x0020_Performance_ed078c86-b2e7-4289-a945-604ac376f3b1_$DropDownChoice").value;
    var COMPANY_VIOLATIONS = document.getElementById("Company_x0020_Violations_bbdb0811-4274-466b-9e5c-0feb0e14406e_$DropDownChoice").value;
    var AMOUNT = document.getElementById("Amount_98235630-f547-4215-b2a5-f1aa3c66b95a_$CurrencyField").value;

    var DEPTHEAD_NOTES = document.getElementById("Department_x0020_Head_x0020_Note_d6848cfb-df03-459a-832a-239ce313e21a_$TextField").value;
    var HR_NOTES = document.getElementById("HR_x0020_Notes_f4542fc0-950d-43a6-8a14-135c8f3db59e_$TextField").value;
    var VP_NOTES = document.getElementById("VP_x002d_Philippines_x0020_Notes_d9b8355f-05b2-489a-bfc8-9d10a6045299_$TextField").value;
    var FINANCE_NOTES = document.getElementById("Finance_x0020_Notes_d4a9305d-c977-4115-aca1-5e1b4bf94822_$TextField").value;

    if(status == "For Department Head Approval"){ // FOR DEPARTMENT HEAD APPROVAL

            if(DEPTHEAD_APPROVAL == "" && 
                DEPTHEAD_NOTES == ""){
                alert("Please Approve/Reject to proceed");
                return false;
            }
            else if(DEPTHEAD_APPROVAL != "" && 
                DEPTHEAD_NOTES == ""){
                alert("Please provide notes to proceed");
                return false;
            }
            else if(DEPTHEAD_APPROVAL == "" && 
                DEPTHEAD_NOTES != ""){
                alert("Please Approve/Reject to proceed");
                return false;
            }        
            else if(DEPTHEAD_APPROVAL != "" && 
                DEPTHEAD_NOTES != ""){
                if(document.getElementById("Department_x0020_Head_x0020_Appr_f2af1a6b-1527-4b45-8364-a12a256528c5_$DropDownChoice").value == "Approved"){
                    document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value = "DEPARTMENT HEAD APPROVED";
                    return true;
                }
                else if(document.getElementById("Department_x0020_Head_x0020_Appr_f2af1a6b-1527-4b45-8364-a12a256528c5_$DropDownChoice").value == "Rejected"){
                    document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value = "DEPARTMENT HEAD REJECTED";
                    return true;
                }
            }  
    }
    else if(status == "DEPARTMENT HEAD APPROVED"){ // FOR HR APPROVAL

            if(HR_APPROVAL == "" && 
                HR_NOTES == ""){
                alert("Please Approve/Reject to proceed");
                return false;
            }
            else if(HR_APPROVAL != "" && 
                HR_NOTES == ""){
                alert("Please provide notes to proceed");
                return false;
            }
            else if(HR_APPROVAL == "" && 
                HR_NOTES != ""){
                alert("Please Approve/Reject to proceed");
                return false;
            }        
            else if(HR_APPROVAL != "" && 
                HR_NOTES != "" &&
                EMPLOYEE_PERFORMANCE == "" ||
                COMPANY_VIOLATIONS == "" ||
                AMOUNT == ""){
                alert("Please provide the Employee Performance / Comapany Violations / Amount");
                return false;
            }                
            else if(HR_APPROVAL != "" && 
                HR_NOTES != "" &&
                EMPLOYEE_PERFORMANCE != "" &&
                COMPANY_VIOLATIONS != "" &&
                AMOUNT != ""){
                if(document.getElementById("HR_x0020_Approval_6a9c91b7-63fa-4f19-b30d-fdb54c357f7e_$DropDownChoice").value == "Approved"){
                    document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value = "HR APPROVED";
                    return true;    
                }
                else if(document.getElementById("HR_x0020_Approval_6a9c91b7-63fa-4f19-b30d-fdb54c357f7e_$DropDownChoice").value == "Rejected"){
                    document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value = "HR REJECTED";
                    return true;                    
                }
            }
    }
    else if(status == "HR APPROVED"){ // FOR VP APPROVAL

            if(VP_APPROVAL == "" && 
                VP_NOTES == ""){
                alert("Please Approve/Reject to proceed");
                return false;
            }
            else if(VP_APPROVAL != "" && 
                VP_NOTES == ""){
                alert("Please provide notes to proceed");
                return false;
            }
            else if(VP_APPROVAL == "" && 
                VP_NOTES != ""){
                alert("Please Approve/Reject to proceed");
                return false;
            }        
            else if(VP_APPROVAL != "" && 
                VP_NOTES != ""){
                if(document.getElementById("VP_x002d_Philippines_x0020_Appro_359b44f9-7ca1-4e92-a4a4-501153acd24a_$DropDownChoice").value == "Approved"){
                    document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value = "VP APPROVED";
                    return true;
                }
                else if(document.getElementById("VP_x002d_Philippines_x0020_Appro_359b44f9-7ca1-4e92-a4a4-501153acd24a_$DropDownChoice").value == "Rejected"){
                    document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value = "VP REJECTED";
                    return true;                    
                }
            }         
    }
    else if(status == "VP APPROVED"){ // FOR FINANCE APPROVAL
        
            if(FINANCE_APPROVAL == "" && 
                FINANCE_NOTES == ""){
                alert("Please Approve/Reject to proceed");
                return false;
            }
            else if(FINANCE_APPROVAL != "" && 
                FINANCE_NOTES == ""){
                alert("Please provide notes to proceed");
                return false;
            }
            else if(FINANCE_APPROVAL == "" && 
                FINANCE_NOTES != ""){
                alert("Please Approve/Reject to proceed");
                return false;
            }        
            else if(FINANCE_APPROVAL != "" && 
                FINANCE_NOTES != ""){
                if(document.getElementById("Finance_x0020_Approval_4e0d5ee4-c58b-4652-a226-c5ae6816a953_$DropDownChoice").value == "Approved"){
                    document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value = "FINANCE APPROVED";
                    return true;
                }
                else if(document.getElementById("Finance_x0020_Approval_4e0d5ee4-c58b-4652-a226-c5ae6816a953_$DropDownChoice").value == "Rejected"){
                    document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value = "FINANCE REJECTED";
                    return true;                    
                }
            } 
    }
    else if(status == "FINANCE APPROVED"){ // FOR CEO APPROVAL

            if(CEO_APPROVAL == ""){
                alert("Please Approve/Reject to proceed");
                return false;
            }      
            else if(CEO_APPROVAL != ""){
                if(document.getElementById("CEO_x0020_Approval_38e019ee-ebbb-4b9a-aad8-0207473581e1_$DropDownChoice").value == "Approved"){
                    document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value = "CEO APPROVED";
                    return true;
                }
                else if(document.getElementById("CEO_x0020_Approval_38e019ee-ebbb-4b9a-aad8-0207473581e1_$DropDownChoice").value == "Rejected"){
                    document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value = "CEO REJECTED";
                    return true;                    
                }
            }   
    }

//----------------------------------------------------------------------------------------------------------------------------------------------------




}
</script>

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
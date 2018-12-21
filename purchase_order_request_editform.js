​​​​​​​​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

var purchase_status;
var purchase_temp;
var ceo_temp;


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

  function get_special_request(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Purchase Order Requests');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where><OrderBy><FieldRef Name='ID' Ascending='False' /></OrderBy></Query></View>");
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
         //console.log("enumerator: "+enumerator)
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();



      var id = listItem.get_item('ID') 
        if(itemId==id){

          created_by= listItem.get_item('Author').get_lookupValue();
          immediate_head = listItem.get_item('Immediate_x0020_Head').get_lookupValue();
          console.log("test: "+immediate_head);
        }//end if
      }  //end while

     // console.log("immediate_head: "+immediate_head);


var purchaser_status = $('select[id=Purchasing_x0020_Status_66da1386-157b-417c-b182-a93f1c079ec5_$DropDownChoice]').val();
var ceo_approval = $('select[id=Status_3f277a5c-c7ae-4bbe-9d44-0456fb548f94_$DropDownChoice]').val();
var vp_approval = $('select[id=VP_x0020_Approval_796e19fc-5521-4095-9a9e-49cba1a2d451_$DropDownChoice]').val();
var finance_status = $('select[id=Finance_x0020_Status0_d215dbf7-37c1-494a-be87-a3323944aa37_$DropDownChoice]').val();
var immediate_head_status = $('select[id=Immediate_x0020_Head_x0020_Statu_8309ab09-e41f-43bf-bd8a-b7537cf5c5c9_$DropDownChoice]').val();

 console.log("get_login_preferredname: "+get_login_preferredname);
 console.log("immediate_head: "+immediate_head);



 	if(immediate_head_status==""){

 		if(immediate_head==get_login_preferredname || targetUser=="litoa" || targetUser=="aysoukhomlinov" || targetUser=="artems" || targetUser=="System Account"){
	    SPUtility.GetSPField('Immediate Head Status').MakeEditable();
	    SPUtility.ShowSPField('Immediate Head Status');
	    }else{

	    	if(created_by == get_login_preferredname){
	    		SPUtility.HideSPField('Immediate Head Status');

	    		$("select[id='Item_x0020_Type_74f68560-ae73-4203-8ebb-f8b5f1e7b0a8_$DropDownChoice']").removeAttr('disabled').css('background-color','');

	    		$("diRequest v[id='Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField_inplacerte']").attr('contenteditable','true');
	    		$("div[id='Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField_topDiv']").css('background-color','');

	    		

	    		$("div[id='Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField_inplacerte']").css('background-color','');

	    		$("textarea[id='Purpose_101778ec-05ef-4f72-93ff-3ff19e8ec900_$TextField']").removeAttr('disabled').css('background-color','');

	    		$("input[id='Estimated_x0020_Price_78164cab-7b54-47c5-be4f-de73b9e9542c_$CurrencyField']").removeAttr('readonly').css('background-color','');

	    	}else{
	    		   SPUtility.ShowSPField('Immediate Head Status');
	    $("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    	$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

	    	}

	 
    
	    }

 	}else if(immediate_head_status=="Approved" && purchaser_status=="")//Purchasing Officer | Admin Assistant
    {
    	//$("input[id='Immediate_x0020_Head_x0020_Ackno_0dce4f18-0097-4a0e-9527-95d330dbf719_MultiChoiceOption_0']").attr('disabled', 'disabled')
	   // $("input[id='Immediate_x0020_Head_x0020_Ackno_0dce4f18-0097-4a0e-9527-95d330dbf719_MultiChoiceOption_1']").attr('disabled', 'disabled')
    
	    if(targetUser=="perpieb" || targetUser=="danteb" || targetUser=="litoa" ){
	    SPUtility.GetSPField('Purchaser Status').MakeEditable();
	    SPUtility.ShowSPField('Purchaser Status');
	    SPUtility.ShowSPField('Immediate Head Status');
	    
	    }else{
	    SPUtility.ShowSPField('Purchaser Status');
	    SPUtility.ShowSPField('Immediate Head Status');
	    
	    $("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    	$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

    
	    }
    
    }
    else if(purchaser_status=="For Purchasing"){
    	// $("input[id='Immediate_x0020_Head_x0020_Ackno_0dce4f18-0097-4a0e-9527-95d330dbf719_MultiChoiceOption_0']").attr('disabled', 'disabled')
	    //$("input[id='Immediate_x0020_Head_x0020_Ackno_0dce4f18-0097-4a0e-9527-95d330dbf719_MultiChoiceOption_1']").attr('disabled', 'disabled')
		
		if(finance_status=="" ){

		    if(targetUser=="cherryy"  || targetUser=="jestinel" || targetUser=="saraht"|| targetUser=="ricellel" || targetUser=="litoa"){
		    SPUtility.GetSPField('Finance Status').MakeEditable();
		    SPUtility.GetSPField('Allocation Type').MakeEditable();

		    $("input[id='Actual_x0020_Price_5bdf4225-43c6-4d07-ac1d-5e9da6418954_$CurrencyField']").removeAttr('readonly').css('background-color','');
		
		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Allocation Type');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('Immediate Head Status');
		
		    }else{
		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Allocation Type');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('Immediate Head Status');

		     $("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    	$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
		    }
	    }
	    else if(finance_status=="For CEO"){
	    
	    if(ceo_approval=="" ){

		    if(targetUser=="artems" || targetUser=="aysoukhomlinov" ||  targetUser=="litoa"){
		    SPUtility.GetSPField('CEO Approval').MakeEditable();
			
			
		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Allocation Type');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('Immediate Head Status');
			
		    }else{
		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Allocation Type');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('Immediate Head Status');

		     $("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    	$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
		    }
		    
		    }else if(ceo_approval =="Approved" ) {

	    		if(targetUser=="perpieb" || targetUser=="danteb" || targetUser=="litoa" ){
	    		SPUtility.ShowSPField('Finance Status');
	    		SPUtility.ShowSPField('Allocation Type');
				SPUtility.ShowSPField('Purchaser Status');
				SPUtility.ShowSPField('CEO Approval');
				SPUtility.ShowSPField('VP Approval');
				SPUtility.ShowSPField('Immediate Head Status');
	    		}else{

	    		SPUtility.ShowSPField('Finance Status');
	    		SPUtility.ShowSPField('Allocation Type');
				SPUtility.ShowSPField('Purchaser Status');
				SPUtility.ShowSPField('CEO Approval');
				SPUtility.ShowSPField('VP Approval');
				SPUtility.ShowSPField('Immediate Head Status');
				$("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    			$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

	    		}
		    	
		    }
		    
		    else{

		    	 SPUtility.ShowSPField('Finance Status');
		    	 SPUtility.ShowSPField('Allocation Type');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('VP Approval');
		    SPUtility.ShowSPField('Immediate Head Status');
		    $("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    		$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
		    
		    }
		    
		    
		    
	    }
	    else if(finance_status=="For VP" ){
	    	if(vp_approval=="" ){
	    	
		    if(targetUser=="mithis" || targetUser=="litoa"){
		    SPUtility.GetSPField('VP Approval').MakeEditable();
			
		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Allocation Type');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('VP Approval');
		    SPUtility.ShowSPField('Immediate Head Status');
			
		    }else{
		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Allocation Type');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('VP Approval');
			SPUtility.ShowSPField('Immediate Head Status');

		     $("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    		$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
		    }
		    
		    }
		    
		    else if(vp_approval=="Approved" && ceo_approval =="" ) {
		    
		    if(targetUser=="artems"  || targetUser=="aysoukhomlinov" || targetUser=="litoa"){
		    SPUtility.GetSPField('CEO Approval').MakeEditable();
			
		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Allocation Type');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('VP Approval');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('Immediate Head Status');
			
		    }else{
		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Allocation Type');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('VP Approval');
		    SPUtility.ShowSPField('Immediate Head Status');
		    $("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'hidden');
    		$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
		    }
		    
		    


		    }else if(vp_approval=="Approved" && ceo_approval =="Approved" ) {

	    		if(targetUser=="perpieb" || targetUser=="danteb" || targetUser=="litoa" ){
	    		SPUtility.ShowSPField('Finance Status');
	    		SPUtility.ShowSPField('Allocation Type');
				SPUtility.ShowSPField('Purchaser Status');
				SPUtility.ShowSPField('CEO Approval');
				SPUtility.ShowSPField('VP Approval');
				SPUtility.ShowSPField('Immediate Head Status');
	    		}else{

	    		SPUtility.ShowSPField('Finance Status');
	    		SPUtility.ShowSPField('Allocation Type');
				SPUtility.ShowSPField('Purchaser Status');
				SPUtility.ShowSPField('CEO Approval');
				SPUtility.ShowSPField('VP Approval');
				SPUtility.ShowSPField('Immediate Head Status');
				$("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    			$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

	    		}
		    	
		    }


		    else
			    {
			    SPUtility.ShowSPField('Finance Status');
			    SPUtility.ShowSPField('Allocation Type');
				SPUtility.ShowSPField('Purchaser Status');
				SPUtility.ShowSPField('CEO Approval');
				SPUtility.ShowSPField('VP Approval');
				SPUtility.ShowSPField('Immediate Head Status');
				$("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    			$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

			    }

	    }else{
	    	    		SPUtility.ShowSPField('Finance Status');
	    	    		SPUtility.ShowSPField('Allocation Type');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('VP Approval');
		    SPUtility.ShowSPField('Immediate Head Status');



	$("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

	    }
	    

    

    }else{
    		SPUtility.ShowSPField('Finance Status');
    		SPUtility.ShowSPField('Allocation Type');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('VP Approval');
		    SPUtility.ShowSPField('Immediate Head Status');



	$("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


    }
    
    if(ceo_approval=="Approved" && purchaser_status=="For Purchasing" )//Purchaser to Closed
    {
    
    if(targetUser=="perpieb" || targetUser=="danteb" || targetUser =="litoa"){
    SPUtility.GetSPField('Purchaser Status').MakeEditable();

    SPUtility.ShowSPField('CEO Approval');
    SPUtility.ShowSPField('Purchaser Status');
    SPUtility.ShowSPField('Immediate Head Status');

    }else{
    SPUtility.ShowSPField('CEO Approval');
    SPUtility.ShowSPField('Purchaser Status');
    SPUtility.ShowSPField('Immediate Head Status');
    }
    
    }

    else if(purchaser_status=="Closed")
    {


    SPUtility.ShowSPField('CEO Approval');
    SPUtility.ShowSPField('Purchaser Status');
    SPUtility.ShowSPField('Immediate Head Status');

    $("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

    console.log("closed");
    console.log("get_login_preferredname: "+get_login_preferredname);

    if(created_by == get_login_preferredname || get_login_preferredname == 'Lito Abon Jr.' ){
    	//SPUtility.ShowSPField('Acknowledgement');
    	if($('#Acknowledgement_82c2ba4c-f6ac-48ac-83e9-b864ca67ab29_MultiChoiceOption_0').is(':checked')){
			//console.log("true");
			SPUtility.ShowSPField('Acknowledgement');

			$("input[id='Acknowledgement_82c2ba4c-f6ac-48ac-83e9-b864ca67ab29_MultiChoiceOption_0']").attr('disabled', 'disabled');

			$("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    		$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
		}else{
			//console.log("true");
			SPUtility.ShowSPField('Acknowledgement');
			$("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('disabled');
    		$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
			

		}

    


    }
    //Acknowledgement_82c2ba4c-f6ac-48ac-83e9-b864ca67ab29_MultiChoiceOption_0
    
		


    }

     if(ceo_approval==""){
 	if(created_by==get_login_preferredname){
 		console.log("in");
 		$("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('disabled');
    	$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
    	
    	
    	


 	}else{
 		console.log("out");
 	}
 }

    



}



    function onFailedCallback2(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

      $("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
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
	get_special_request();

    get_login_preferredname = userProfileProperties[0];
   // console.log("get_login_preferredname: "+get_login_preferredname);

}



  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}


 
 function onQuerySucceeded() {

// document.getElementById("Document_x0020_No_x002e__0b5ff8ac-373c-464c-81a4-c6381d04c98c_$TextField").className = "ms-input ms-spellcheck-true ";
// document.getElementById("Document_x0020_No_x002e__0b5ff8ac-373c-464c-81a4-c6381d04c98c_$TextField").size = "11";
// $("input[id='Document_x0020_No_x002e__0b5ff8ac-373c-464c-81a4-c6381d04c98c_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;

SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');



     
  
 
}

function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_5195b1d5_5210_4820_a525_7e708c21a05e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}





$(function() {

SPUtility.HideSPField('Acknowledgement');

SPUtility.GetSPField('CEO Approval').MakeReadOnly();
SPUtility.HideSPField('CEO Approval');

SPUtility.GetSPField('Purchaser Status').MakeReadOnly();
SPUtility.HideSPField('Purchaser Status');

SPUtility.GetSPField('Immediate Head Status').MakeReadOnly();
SPUtility.HideSPField('Immediate Head Status');

SPUtility.GetSPField('Finance Status').MakeReadOnly();
SPUtility.HideSPField('Finance Status');

SPUtility.GetSPField('Allocation Type').MakeReadOnly();
SPUtility.HideSPField('Allocation Type');

SPUtility.GetSPField('Reference Number').MakeReadOnly();


SPUtility.GetSPField('VP Approval').MakeReadOnly();
SPUtility.HideSPField('VP Approval');

//document.getElementById("Document_x0020_No_x002e__78659a11-17f8-4bbc-9ff1-e64724e0d837_$TextField").className = "ms-input ms-spellcheck-true ";
//document.getElementById("Document_x0020_No_x002e__78659a11-17f8-4bbc-9ff1-e64724e0d837_$TextField").size = "11";

//$("input[id='Document_x0020_No_x002e__78659a11-17f8-4bbc-9ff1-e64724e0d837_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

//$("input[id='Revision_4164c288-82cd-443a-9023-c69454b0274c_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 



//------change Save to Submit---------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    



document.getElementById("Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField_inplacerte").contentEditable = false;
$("div[id='Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField_inplacerte']").css('background-color','#F6F6F6');
$("div[id='Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField_topDiv']").css('background-color','#F6F6F6');

//-------------------------------------


// var from_cal = document.getElementById("Date_x0020_Needed_d6318437-329e-4e68-8ddd-e76d1afde60e_$DateTimeFieldDateDatePickerImage");
// from_cal.src = "";
// from_cal.alt = "";

SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Date and Time Created');

SPUtility.GetSPField('Time Ago').MakeReadOnly();
SPUtility.HideSPField('Time Ago');

//SPUtility.GetSPField('Finance Approval').MakeReadOnly();
//SPUtility.HideSPField('Finance Approval');

purchase_status= $('select[id=Purchasing_x0020_Status_66da1386-157b-417c-b182-a93f1c079ec5_$DropDownChoice]').val();

  $('select[id=Purchasing_x0020_Status_66da1386-157b-417c-b182-a93f1c079ec5_$DropDownChoice]').change( function() {
   purchase_status= $('select[id=Purchasing_x0020_Status_66da1386-157b-417c-b182-a93f1c079ec5_$DropDownChoice]').val();
   
  if(purchase_status=="For Purchasing" ){
  SPUtility.ShowSPField('Actual Price');
  
  }else if(purchase_status=="Closed" && ceo_temp ==""){
  SPUtility.HideSPField('Actual Price');
  
  
  }else if(purchase_status=="Closed" && ceo_temp=="Approved"){
  SPUtility.ShowSPField('Actual Price');
  
  }else if(purchase_status==""){
  SPUtility.HideSPField('Actual Price');
  
  }
  
  });


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

var ref_no;
 $(document).ready(function()
{



SPUtility.HideSPField('Actual Price');
SPUtility.HideSPField('CEO Approval');


//=============================================================================================================================================================================


  purchase_temp= $('select[id=Purchasing_x0020_Status_66da1386-157b-417c-b182-a93f1c079ec5_$DropDownChoice]').val();
  ceo_temp= $('select[id=Status_3f277a5c-c7ae-4bbe-9d44-0456fb548f94_$DropDownChoice]').val();
  //console.log(purchase_temp);
if(purchase_temp=="For Purchasing" || ceo_temp== "Approved" || ceo_temp== "Reject" ){
  SPUtility.ShowSPField('Actual Price');
$("input[id='Actual_x0020_Price_5bdf4225-43c6-4d07-ac1d-5e9da6418954_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
  }
  
  if(purchase_temp=="For Purchasing" && ceo_temp == "" ){
  //SPUtility.ShowSPField('CEO Approval');
//$("select[id='Purchasing_x0020_Status_66da1386-157b-417c-b182-a93f1c079ec5_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
  }
  
if(purchase_temp=="For Purchasing" && ceo_temp == "Approved" ){
  //SPUtility.ShowSPField('CEO Approval');
  
  //$("select[id='Status_3f277a5c-c7ae-4bbe-9d44-0456fb548f94_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
 
}

if(purchase_temp=="For Purchasing" && ceo_temp == "Rejected" ){
 // SPUtility.ShowSPField('CEO Approval');
  
 // $("select[id='Purchasing_x0020_Status_66da1386-157b-417c-b182-a93f1c079ec5_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
 // $("select[id='Status_3f277a5c-c7ae-4bbe-9d44-0456fb548f94_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
 
}

if(purchase_temp=="Closed" && ceo_temp == "Approved" ){
 // SPUtility.ShowSPField('CEO Approval');
  
 // $("select[id='Purchasing_x0020_Status_66da1386-157b-417c-b182-a93f1c079ec5_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
 // $("select[id='Status_3f277a5c-c7ae-4bbe-9d44-0456fb548f94_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
 
}



//===============================================================================================================================================


//ref_no= $("input[id='Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField']").val();
//------------------------------------------------------------------------------------
//$("input[id='Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
//document.getElementById("Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField").className = "ms-short ms-spellcheck-true";

$("input[id='Requestor_x0027_s_x0020_Name_30d25d7d-3b0b-4327-9c87-c374627e9e99_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Department_x002f_Section_05179162-b3ed-4d46-9c53-830f84c98ab4_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


$("textarea[id='Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("textarea[id='Purpose_101778ec-05ef-4f72-93ff-3ff19e8ec900_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Estimated_x0020_Price_78164cab-7b54-47c5-be4f-de73b9e9542c_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
//$("input[id='Date_x0020_Needed_d6318437-329e-4e68-8ddd-e76d1afde60e_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("select[id='Priority_a8eb573e-9e11-481a-a8c9-1104a54b2fbd_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');

$("select[id='Item_x0020_Type_74f68560-ae73-4203-8ebb-f8b5f1e7b0a8_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');

$("select[id='Request_x0020_Type_0b80067f-1a9e-473f-8a81-475c072bb8a8_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');

$("input[id='Cheque_x002f_Cash_x0020_Issued_x_0ebc2503-9478-4106-82e9-7aec0592d2ce_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');




 
 

})


function PreSaveAction()
{

var created_date_time = $("input[title='Date and Time Created']").val();
var timeAgo = jQuery.timeago(new Date(created_date_time)); 

document.getElementById('Time_x0020_Ago_30634b7d-15cb-4e00-bb27-65b002a55419_$TextField').value = timeAgo;
//document.getElementById('Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField').value = ref_no;

//var immediate_status = $("select[id='Immediate_x0020_Head_x0020_Statu_8309ab09-e41f-43bf-bd8a-b7537cf5c5c9_$DropDownChoice']").val();

	//if(immediate_status == ""){
	//	alert("Information , please indicate Immediate Head Status!")
	//}else{
 		//console.log("c");
 		//return true; //true
 	//}

return true;//true
/*if($('#Acknowledgement_82c2ba4c-f6ac-48ac-83e9-b864ca67ab29_MultiChoiceOption_0').is(':checked')){
return true;//true
}else{

alert("Information, Please tick the acknowledgement before submitting.")
return false;

}*/

}

</script>​​​​​​​​​​​​​​​​​

<style>

.sp-peoplepicker-delImage{

display:none;

}
.ms-propertysheet{

display:none;

}
.sp-peoplepicker-editorInput{

display:none;

}

</style>
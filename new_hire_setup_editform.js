<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;


//------------------------------------------------------------------------
 $(document).ready(function()
{


SPUtility.GetSPField("Requestor's Name").MakeReadOnly();
SPUtility.GetSPField("Department/Section").MakeReadOnly();
SPUtility.GetSPField("Date Needed").MakeReadOnly();
SPUtility.GetSPField("Name of New Hire").MakeReadOnly();
SPUtility.GetSPField("New Hire's Department").MakeReadOnly();
SPUtility.GetSPField("New Hire's Position").MakeReadOnly();

document.getElementById("Department_x0020_Head_b4a1077a-b49c-4c3f-a3f7-571d5475c0d0_$ClientPeoplePicker_EditorInput").readOnly = true;

document.getElementById("Default_x0020_Access_6dacc1de-d6f5-485e-a47b-eb0f421d5164_$TextField").readOnly = true;

document.getElementById("Default_x0020_Applications_59db3ca7-748b-4738-81ab-cdc465521cc7_$TextField").readOnly = true;

document.getElementById("Hardware_x0020_Setup_2ab389f1-0ff8-48f1-a92d-82e2d746f181_$TextField").readOnly = true;

document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField").readOnly = true;

autosize();


document.getElementById("Notes_3e8de82b-7478-48eb-ad0c-b74c9a8acd4a_$TextField").readOnly = true;

});

 function autosize(){
  var el = document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField");
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0;';
    // for box-sizing other than "content-box" use:
    el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px;';
  },0);

  document.getElementById("Software_x0020_Application_22328186-7414-4a2d-a2c0-c468dc013ffb_$TextField").readOnly = true;
}


$(function() {


/*$("select[id='New_x0020_Hire_x0027_s_x0020_Dep_865644e6-0e97-4e45-ba81-8a89d05502c6_$LookupField']").change( function() {

    var dept = document.getElementById("New_x0020_Hire_x0027_s_x0020_Dep_865644e6-0e97-4e45-ba81-8a89d05502c6_$LookupField");
    var dept_val= dept.options[dept.selectedIndex].text;

});*/





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

    console.log("targetUser: "+targetUser);

    var status = $("select[id='Status_48e65d96-e58e-4534-9233-888de0cf43e4_$DropDownChoice']").val();

    if(status == "In Progress"){

        if(targetUser == "litoa" || targetUser == "ninoc" || targetUser == "jeannem" || targetUser == "diannag" ){

        }else{
            SPUtility.GetSPField("Status").MakeReadOnly();
            $("input[id='ctl00_ctl43_g_7ddfa0ae_a8f6_42d2_a5c3_d51e36b8628a_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
        }

    }else{
            SPUtility.GetSPField("Status").MakeReadOnly();
            $("input[id='ctl00_ctl43_g_7ddfa0ae_a8f6_42d2_a5c3_d51e36b8628a_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    }

}


function PreSaveAction()

{

    var status = $("select[id='Status_48e65d96-e58e-4534-9233-888de0cf43e4_$DropDownChoice']").val();

    if(status == "Completed"){
        window.open('https://intranet.houseofit.com.au/SitePages/Employee%20Information.aspx?');
        return true;
    }else{
        return true;
    }

    
}


/*$(function () { 
    var button = $("input[id$=SaveItem]");
    // change redirection behavior
    button.removeAttr("onclick");
    button.click(function() {

        var elementName = $(this).attr("name");
        var aspForm = $("form[id='aspnetForm']");
        var oldPostbackUrl = aspForm.get(0).action;
        var currentSourceValue = GetUrlKeyValue("Source", true, oldPostbackUrl);
        var newPostbackUrl = oldPostbackUrl.replace(currentSourceValue, "https://intranet.houseofit.com.au/SitePages/Employee%20Information.aspx");

        if (!PreSaveItem()) return false;
        WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(elementName, "", true, "", newPostbackUrl, false, true));
    });
});
 */
 
 
 
 //---------------------------------------------------------------------------------------------------------------


</script>

<style>

.sp-peoplepicker-delImage{

display:none;

}
.sp-peoplepicker-editorInput{

display:none;

}

</style>
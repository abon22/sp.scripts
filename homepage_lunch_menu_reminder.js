​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script type="text/javascript" src="/_layouts/15/sp.js"></script><script type="text/javascript" src="/_layouts/15/SP.UserProfiles.js"></script><script type="text/javascript">


   function OnScrollDiv (div) {
    //console.log(div.scrollTop);
      if (div.scrollTop > 100) {
         $('.actionbutton').css("opacity", "1");
      } else {
        $('.actionbutton').css("opacity", "0");
      }
  }


function openDialog() {
   var e = document.getElementById('d10');
   var options = {
    title: "Staff Meal Choices",
    width: 455,
    height: 95,
    html: e
   };
   SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
}


var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
ExecuteOrDelayUntilScriptLoaded(expandCal, "sp.ui.applicationpages.calendar.js");
var targetUser;

function expandCal() {
  setInterval(expandCalCheck, 300);
}
function expandCalCheck() {
  var a=$("a.ms-cal-nav", $("div.ms-acal-rootdiv:last>div")).get(0);
  if (a) {
    for (var r=0; r<6; r++) {
      var a=$("a.ms-cal-nav", $("div.ms-acal-rootdiv:last>div").get(r)).get(0);
      if (a)
        if (a.innerText.indexOf("more") >= 0)
          a.click();
    }
  }
}


function init(){

  retrieveListItems();


//scriptWPQ4

        //------------------------
    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));

    //-------------------------------------




 }

 //=====================================================================================================================================

 var returnedItems;
var get_author;
var temp_fname_lname;
var check_user_for_choices="no";


var returnedItems2;

var get_deadline;




   function onSucceededCallback(sender, args) {

    //Get the current context
         var context2 = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list2 = context2.get_web().get_lists().getByTitle('Lunch Menu');
         //Create a new CAML query
         var caml2 = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml2.set_viewXml("<Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>1</Value></Eq></Where></Query>");
         //Specify the query and load the list oject
        returnedItems2 = list2.getItems(caml2);
         context2.load(returnedItems2);
         //Run the query asynchronously, passing the functions to call when a response arrives
         //context2.executeQueryAsync(onSucceededCallback2, onFailedCallback2);

            context2.executeQueryAsync(
        Function.createDelegate(this,
function (sender, args) { 
         var enumerator2 = returnedItems2.getEnumerator();
         while (enumerator2.moveNext()) {

        var listItem2 = enumerator2.get_current();
        var id2 = listItem2.get_item('ID') 

         if(id2==1){//if

        var deadline2= listItem2.get_item('Deadline');
        var deadline_temp2 = deadline2.format('MM/dd/yyyy hh:ss tt');
        get_deadline = deadline_temp2;
        //alert("Menu Choices Deadline: "+get_deadline);
         
        }

    }

    var formated_today_date = new Date();
var formated_get_deadline = new Date(get_deadline);
//alert("Date Today: "+formated_today_date);
//alert("Formated Date Deadline: "+formated_get_deadline);

if(formated_today_date>formated_get_deadline){


}
    else{

    var enumerator = returnedItems.getEnumerator();
    while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();
        var get_author = listItem.get_item('Author').get_lookupValue();


//alert(get_author);
         if(get_author==temp_fname_lname){//if
        //alert(get_author);
        //alert(temp_fname_lname);
        check_user_for_choices="yes";
        }else if(temp_fname_lname=="Artem Soukhomlinov" || temp_fname_lname=="Scott Osgood" || temp_fname_lname=="Craig Meldrum"){//if
        //alert(get_author);
      //  alert(temp_fname_lname);
        check_user_for_choices="yes";
        }



    }//end while

       if(check_user_for_choices=="no")
    {
        openDialog();

    }


}

    //alert(check_user_for_choices);

 

}),
Function.createDelegate(this,
function (sender, args) { 

      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

})

        );






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
    
    // alert(targetUser);
    // console.log(targetUser);
  
    SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');

    Employee_Username = targetUser_temp;
    // alert(Employee_Username);
    
    // if(Employee_Username != "artems" && 
    //   Employee_Username != "mithis" && 
    //   Employee_Username != "scotto" && 
    //   Employee_Username != "jeannem" && 
    //   Employee_Username != "ninoc" && 
    //   Employee_Username != "diannag" && 
    //   Employee_Username != "aysoukhomlinov"){
    //   ExecuteOrDelayUntilScriptLoaded(get_username_from_EmployeeProfile, "sp.js");
    // }
}

// FERN CODE -----------------------------------------------------------<><><><><><><><><><><><><><><>

var emp_targetListItem;
var EmployeeInformation_ItemID = -1;
// var Employee_Username;
function get_username_from_EmployeeProfile(){
      // alert(Employee_Username);
      var clientContext = new SP.ClientContext('https://intranet.houseofit.com.au/');
      var oList = clientContext.get_web().get_lists().getByTitle('Employee Profile');
      var camlQuery = new SP.CamlQuery();
      camlQuery.set_viewXml('<View><Query><Where><Eq><FieldRef Name=\'LI_Username\'/>' + 
        '<Value Type=\'Text\'>'+Employee_Username+'</Value></Eq></Where></Query><RowLimit>1</RowLimit></View>');
        this.emp_targetListItem = oList.getItems(camlQuery);
      clientContext.load(emp_targetListItem);
      clientContext.executeQueryAsync(Function.createDelegate(this, this.get_username_from_EmployeeProfile_Succeeded), Function.createDelegate(this, this.onQueryFailed));
}
function get_username_from_EmployeeProfile_Succeeded(){
    var enumerator = emp_targetListItem.getEnumerator();
    // var Ref_ID;
    var fillup_status;
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();  
        // Ref_ID = listItem.get_item('Title'); 
        EmployeeInformation_ItemID = listItem.get_item("ID");
        fillup_status = listItem.get_item("LI_FilledUpStatus");
    }
    if(EmployeeInformation_ItemID != -1){
      // alert(EmployeeInformation_ItemID);
      // alert("EmployeeInformation_ItemID = "+EmployeeInformation_ItemID + "\n"+fillup_status);
      // alert(Employee_Username);
      if(fillup_status == "HR Initial Fillup"){
        window.open("https://intranet.houseofit.com.au/SitePages/Employee%20Information%20Employee%20Form.aspx","_self")
      }
    }
    // else{
    //   // alert(targetUser);
    //   alert("targetUser = "+Employee_Username);
    // } 

}
function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

// FERN CODE ------------------------------------------------------------<><><><><><><><><><><><><><>


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

    temp_fname_lname = firstname+" "+lastname;
    
    //document.getElementById('ctl00_ctl42_g_80eeda80_d153_4c5d_8adc_cb5ef5bdee7f_ff71_ctl00_ctl00_TextField').value = lastname+", "+firstname;

    //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Staff Meal Choice');
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

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup);

}


$(document).ready(function() {
     console.log("")


$("#s4-workspace").scroll(function() {
    OnScrollDiv(this);
}); 

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

modal.onclick = function() { 
    modal.style.display = "none";
}

// $( "#s4-workspace" ).append( "<div class='img-container-bg'></div>" );

 $('p img').click(function() {


  // var img = $(this);
  // img.attr("class", 'is-active');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

       modal.style.display = "block";
       modalImg.src = this.src;
       modalImg.alt = this.alt;
       // captionText.innerHTML = this.nextElementSibling.innerHTML;


  // $(".img-container-bg").show();

 });


// var IMAGES = document.querySelectorAll("p img");
//   var imageActive = false;
//   var normalImage = void 0;
//   var bigImage = void 0;

//   IMAGES.forEach(function (image) {
//     return image.addEventListener("click", function () {
//       handleImage(image);
//     });
//   });

//   var handleImage = function handleImage(image) {
//     if (!imageActive) openImage(image);else if (imageActive) closeImage(image);
//   };

//   var openImage = function openImage(image) {
//     imageActive = true;
//     image.classList.add("is-active");
    
//     $(".img-container-bg").css("visibility", "visible");
//   };

//   var closeImage = function closeImage(image) {
//     imageActive = false;
//     image.classList.remove("is-active");

//     $(".img-container-bg").css("visibility", "hidden");
//   };



 $('.actionbutton').click(function() {
    $('#s4-workspace').animate({
      scrollTop: 0
    }, 500);
    return true;
  });

 $(".cookieConsent").fadeIn(1000);

 setTimeout(function(){  $(".cookieConsent").fadeOut(1000); }, 10000);


})






function retrieveListItems() {
    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Company Events');

    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><Query><Where><Or><Eq><FieldRef Name='Post_x0020_Permanently'/><Value Type='Boolean'>1</Value></Eq><And><Eq><FieldRef Name='Post_x0020_Anouncement'/><Value Type='Boolean'>1</Value></Eq><And><Leq><FieldRef Name='EventDate'/><Value IncludeTimeValue='FALSE' Type='DateTime'><Today/></Value></Leq><Geq><FieldRef Name='EndDate'/><Value IncludeTimeValue='FALSE' Type='DateTime'><Today/></Value></Geq></And></And></Or></Where><OrderBy><FieldRef Name='Created' Ascending='False'/></OrderBy></Query></View>");
    this.collListItem = oList.getItems(camlQuery);

    clientContext.load(collListItem);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded2), 
        Function.createDelegate(this, this.onQueryFailed2)
    ); 
}
var obj={}
function onQuerySucceeded2(sender, args) {
    var listItemInfo = '';
    var listItemEnumerator = collListItem.getEnumerator();


    while (listItemEnumerator.moveNext()) {
          var oListItem = listItemEnumerator.get_current();
          var get_id = oListItem.get_item('ID');
          var get_title = oListItem.get_item('Title');
         // console.log(get_title);
          var created_by = oListItem.get_item('Author').get_lookupValue();
          var created_by_2 = oListItem.get_item('Author').get_lookupId();
          var created = oListItem.get_item('Created');
        //  console.log(created_by_2);
          //console.log("get_id: "+get_id+" || created_by: "+created_by+" || created:"+created)

          obj[get_id]={"created_by":created_by,"created":created};
          var time_ago  = jQuery.timeago(created);
          
          // $("tr[id*=',"+get_id+"'] ").children('.ms-vb-lastCell.ms-cellstyle.ms-vb2.ms-vb-lastCell').children('.ms-rtestate-field').prepend( "<div class='ui feed'> <div class='event'> <div class='label'> <img src='/SiteAssets/Image/Untitled-1-512.png'> </div> <div class='content'>  <div class='summary'> <a href='https://intranet.houseofit.com.au/_layouts/listform.aspx?PageType=4&ListId={04A4EE63-F94C-43A5-9F35-BF9D68B6E744}&ID="+created_by_2+"' target='_blank'>"+created_by+"</a> posted </div><div class='date'> "+time_ago+" ago </div> </div> </div> </div>" );

          $("tr[id*=',"+get_id+"'] ").children('.ms-vb-lastCell.ms-cellstyle.ms-vb2.ms-vb-lastCell').children('.ms-rtestate-field').prepend( "<div class='ui feed'> <div class='event'> <div class='label'> <img src='/SiteAssets/Image/Untitled-1-512.png'> </div> <div class='content'>  <div class='summary'> <a style='text-decoration:none; outline:none'>HR</a> posted <a style='text-decoration:none; outline:none'>"+get_title+"</a></div><div class='date'> "+time_ago+" ago </div></div> <a ms-jsgrid-click-passthrough='true' class='ms-lstItmLinkAnchor ms-ellipsis-a' style='margin-top: 14px;margin-right: 14px;'href='#' ><img class='ms-ellipsis-icon' src='/_catalogs/theme/Themed/4ED2C6B2/spcommon-B35BB0A9.themedpng?ctag=13' alt='Open Menu'></a> </div> </div> </div>" );

        
      }

}

function onQueryFailed2(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}


// @media only screen
// and (max-width: 1800px){
//     .ms-wiki-columnSpacing{display: none;}

// }

// @media only screen
// and (min-width: 1801px){
//     .ms-wiki-columnSpacing{display: table-cell!important;}

// }
/*

<div class="cookieConsent" >
    <div class="closeCookieConsent"></div>
    Please let us know if you encounter any problem with sharepoint.&nbsp;&nbsp;&nbsp;<a href="https://intranet.houseofit.com.au/Lists/IssueReport/USER_NewForm.aspx" target="_self">Submit a report</a>. <a class="cookieConsentOK">Ok</a>

  </div>

*/


// p > img{
//   width: 99% !important;
//   height: auto !important;
// /*min-width: 878px!important;*/
// }

// p > img.is-active {
//   position: relative;
//   z-index: 999;
//   transform: scale(1.5);
//   max-width: 100%;
//   height: auto;
//   margin-left:220px!important;
// }

// p > img {
//   position: relative;
//   cursor: pointer;
//   transform: scale(1);
//   transition: transform 250ms ease-in-out;
// }

// .img-container-bg {
//   opacity: 1;
//   visibility: hidden;
//   position: fixed;
//   z-index: 9;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   transition-property: opacity, visibility;
//   transition-duration: 350ms;
//   transition-timing-function: linear;
// }



</script>

<style>



p > img{
  cursor: zoom-in;
}

/* The Modal (background) */
.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 999;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: black;
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9);
  /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
 /* width: 80%;*/
  /*max-width: 700px;*/
  max-width: 1200px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content, #caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@keyframes zoom {
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
}
/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}




.ms-Icon--ellipsis {
    content: '\e045 ';
}

body {
  /*font-size: 13px;*/
}




.arrow:before,
.arrow:after {
  background: white;
  content: '';
  display: block;
  height: 3px;
  position: absolute;
  top: 26px;
  left: 13px;
  width: 20px;
}

.arrow:before {
  transform: rotate(45deg) translateX(95%);
  transform-origin: center;
}

.arrow:after {
  transform: rotate(135deg) translateX(100%);
  transform-origin: 86% 140%;
}



.ui.feed>.event>.label img {
    width: 100%;
    height: auto;
    border-radius: 500rem;
    border-style: none;
    vertical-align: middle;
    margin-top: 8px;
}

.ui.feed>.event>.label {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 2.5em;
    height: auto;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    text-align: left;
}

.ui.feed>.event:last-child {
    padding-bottom: 0;
}
.ui.feed>.event:first-child {
    border-top: 0;
    padding-top: 6px;
}

.ui.feed>.event {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 100%;
    padding: .21428571rem 0;
    margin: 0;
    background: 0 0;
    border-top: none;
}


.ui.feed:last-child {
    margin-bottom: 0;
}

.ui.feed {
    font-size: 0.945rem;
}
.ui.feed {
    margin: 0.6em 0.89em;

}

.ui.feed>.event:last-child>.content {
    padding-bottom: 0;
}

.ui.feed>.event>.label+.content {
    margin: .5em 0 .35714286em 0.94285714em;
}

.ui.feed>.event>.content {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    text-align: left;
    word-wrap: break-word;





</style> 
<br/>


<div style="display:none">
   <div id="d10">
       <h1 class="ms-core-pageTitle">Lunch Menu is now available.</h1><br>
       <div class="ms-textLarge">You can now select your preferred <a id="ms-PersonalSiteChangePhotoLink"  href="https://intranet.houseofit.com.au/Lists/Staff%20Meal%20Choice/NewFormCopy.aspx">meal choices</a>.</div>

   </div>
</div>

 <div style=" cursor:pointer;position: fixed;right: 23px;bottom: 23px;padding-top: 15px;margin-bottom: 0;z-index: 10">
<div class="actionbutton arrow" style=" border-radius: 50%;opacity:0;color: #fff;background: #1BA1E2;width: 60px;height: 60px;font-weight: 300;display: flex;justify-content: center;align-items: center;box-shadow:0 0 8px #202020;"></div>
</div>


<div class="cookieConsent" >
    <div class="closeCookieConsent"></div>
    Please let us know if you encounter any problem with <b><a>SharePoint</a></b>. <a href="https://intranet.houseofit.com.au/Lists/IssueReport/USER_NewForm.aspx" target="_self" class="cookieConsentOK">Submit a report</a>

  </div>



<div id="myModal" class="modal">
  <span class="close">×</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>
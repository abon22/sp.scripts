<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/semantic.min.css">

<script type="text/javascript" src="/SiteAssets/Scripts/js/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/semantic.min.js"></script>
<script src="/SiteAssets/Scripts/spjs-utility.js"></script>
<script  type="text/javascript">

//SiteAssets/Scripts/New Hire Setup/new_hire_setup.js



//------------------------------------

// List GUID or list display name of the current list
var thisListGuid = '{5438C379-149B-4E6F-9788-A5E11BA2DE46}';

/********************************************
  Do not modify anything below this line
*********************************************/
function getLastItemID(){ 
  var queryBuffer = [];
    queryBuffer.push("<Where><Eq><FieldRef Name='Author' LookupId='TRUE' /><Value Type='User'>"+_spPageContextInfo.userId+"</Value></Eq></Where>");
    queryBuffer.push("<OrderBy><FieldRef Name='ID' Ascending='FALSE' /></OrderBy>");
  var res = spjs_QueryItems({listName:thisListGuid,query:queryBuffer.join(''),viewFields:['ID'],rowLimit:1});
  
  if(res.count<0){
    alert("An error occurred. Most likely the parameter \"thisListGuid\" is wrong.");
  }else if(res.count>0){
    return res.items[0].ID;
  }else{
    return '';
  }
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return ;
}

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


function sendEmail(from, to, body, subject) {
    //Get the relative url of the site
    //_spPageContextInfo.webAbsoluteUrl
    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    //var appweburl = decodeURIComponent(getQueryStringParameter('SPAppWebUrl'));
    var urlTemplate = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
    $.ajax({
        contentType: 'application/json',
        url: urlTemplate,
        type: "POST",
        data: JSON.stringify({
            'properties': {
                '__metadata': {
                    'type': 'SP.Utilities.EmailProperties'
                },
                'From': from,
                'To': {
                    'results': to
                },
                'Body': body,
                'Subject': subject
            }
        }),
        headers: {
            "Accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
        },
        success: function(data) {
            setCookie("send_to_supoort", "done", 30)

            document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><div class='header'><i class='check circle icon'></i>Email Successfully Sent! </div><p>Email has been sent to <b>support@houseofit.com.au.</b></p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);

        },
        error: function(err) {
            console.log(JSON.stringify(err));
            alert(JSON.stringify(err));
        }
    });
}


function getItems(lastID) {


  if(lastID==""){
      lastID=0;
  }else{
      lastID = lastID;
  }

  console.log("lastID:"+lastID);

var urlForAllItems = "/_api/Web/Lists/GetByTitle('New Hire Setup')/Items?$select=Title, Requestor_x0027_s_x0020_Name, Department_x0020_Head/Title, Date_x0020_Needed, Name_x0020_of_x0020_New_x0020_Hi, New_x0020_Hire_x0027_s_x0020_Dep/Title, New_x0020_Hire_x0027_s_x0020_Pos/Title, Author/EMail, New_x0020_Hire_x0027_s_x0020_Dep0/Title, Default_x0020_Access, Default_x0020_Applications, Software_x0020_Application, Status, ID, Notes, Hardware_x0020_Setup,Department_x002f_Section&$expand=Department_x0020_Head&$expand=New_x0020_Hire_x0027_s_x0020_Pos&$expand=New_x0020_Hire_x0027_s_x0020_Dep&$expand=New_x0020_Hire_x0027_s_x0020_Dep0&$expand=Author&$OrderBy=ID asc&$filter=ID eq "+lastID+" ";

    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + urlForAllItems,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {

        dataRes = data.d.results;
        console.log(dataRes);

        for (a=0; a< dataRes.length; a++) {
          //var db_year = moment(dataRes[a].Date).format("YYYY");
          //var employee_name = dataRes[a].Department_x002f_Section;
          //console.log(employee_name);

          var created_by_email = dataRes[a].Author.EMail;
          var query_id_db = dataRes[a].ID;
          var requestor_name = dataRes[a].Requestor_x0027_s_x0020_Name;
          var ref_no = dataRes[a].Title;
          var name_of_new_hire = dataRes[a].Name_x0020_of_x0020_New_x0020_Hi;
          var new_hire_department = dataRes[a].New_x0020_Hire_x0027_s_x0020_Dep.Title;
          var new_hire_pos = dataRes[a].New_x0020_Hire_x0027_s_x0020_Pos.Title;
          var new_hire_department_head = dataRes[a].New_x0020_Hire_x0027_s_x0020_Dep0.Title;
          var default_access = dataRes[a].Default_x0020_Access;
          var default_applications = dataRes[a].Default_x0020_Applications;
          var hardware_setup = dataRes[a].Hardware_x0020_Setup;
          var software_app = dataRes[a].Software_x0020_Application;
          var notes = dataRes[a].Notes;
          //console.log(name_of_new_hire);

       /*   var to = ["support@houseofit.com.au", "aivelj@houseofit.com.au", "angelinej@houseofit.com.au", "CindyO@houseofit.com.au", "elizabethd@houseofit.com.au", "geraldc@houseofit.com.au", "gweny@houseofit.com.au", "jaharal@houseofit.com.au", "joshm@houseofit.com.au", "judya@houseofit.com.au", "JulietoA@houseofit.com.au", "kristinaa@houseofit.com.au", "leahm@houseofit.com.au", "maria.v@houseofit.com.au", "maryjoya@houseofit.com.au", "maryrosem@houseofit.com.au", "mattm@houseofit.com.au", "michael.lao@houseofit.com.au", "rachelleq@houseofit.com.au", "scotto@houseofit.com.au"]; // real email*/

           //var to = ["support_mailbox@houseofit.com.au"]; // real email
           var to = ["support@houseofit.com.au"]; // real email
          

          //var to = ["sptest@houseofit.com.au"]; //test email
          var from = created_by_email;
          var subject = "New Hire Setup ("+name_of_new_hire+")";
          var body = "<html><body>"+
                    "<p>Hi IT Technicians,</p>"+
                    "<p>Good day.</p>"+
                    "<p>A new New Hire Setup has been submitted.</p>"+
                    "<p><b>Note: 'Please send me the email address for this new hire once done.'</b></p>"+
                    "<p>Please see request details below:</p>"+
                    "<p><b>ID No:</b> "+query_id_db+"</p>"+
                    "<p><b>Name of New Hire:</b> "+name_of_new_hire+"</p>"+
                    "<p><b>New Hire's Department:</b> "+new_hire_department+"</p>"+
                    "<p><b>New Hire's Position:</b> "+new_hire_pos+"</p>"+
                    "<p><b>New Hire's Department Head:</b> "+new_hire_department_head+"</p>"+
                    "<p><b>Default Access:</b> "+default_access+"</p>"+
                    "<p><b>Default Applications:</b> "+default_applications+"</p>"+
                    "<p><b>Hardware Setup:</b> "+hardware_setup+"</p>"+
                    "<p><b>Software Application:</b> "+software_app+"</p>"+
                    "<p><b>Notes:</b> "+notes+"</p>"+
                    "<p>Go to <a>https://intranet.houseofit.com.au/Lists/New%20Hire%20Setup/EditForm.aspx?ID="+query_id_db+"</a></p>"+
                    "<p>In behalf of,</p>"+
                    "<p><b>Sharepoint Team</b></p>"+
                    "</body></html>";

         sendEmail(from, to, body, subject);

        }
        

        },//end sucesss
        error: function (error) {
            
            alert(JSON.stringify(error));

            RequestEnded();
        }
    });//end ajax request
}//end function



$(document).ready(function () {
/*var to = ["support@houseofit.com.au"];
var from = "sptest@houseofit.com.au";

  sendEmail(from, to, "body", "subject");*/


    var cookie_enabled = are_cookies_enabled();
    if(cookie_enabled!=true){
        alert("Please enable cookie in the browsers setting or contact administrator.")
    }

var send_to_supoort_cookie=getCookie("send_to_supoort");
//console.log("cookie_me: "+cookie_me);

    if(send_to_supoort_cookie == ""){
      
        var lastID = getLastItemID();

        getItems(lastID);
        console.log("sending email");
        
    }else{
      //var lastID = getLastItemID();
      //getItems(18);
        console.log("done sending email");
        //setCookie("query_id", "", 30);
    }  


});


</script>
<style>
body {
    font-size: 1.0295em!important;
}


</style>

<div  id ="message_success_id" style="position: fixed;right: 23px;padding-top: 0px;z-index: 10"></div>

<br>

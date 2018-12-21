ExecuteOrDelayUntilScriptLoaded(init, 'sp.js');
var currentUser;

function init() {
    this.clientContext = new SP.ClientContext.get_current();
    this.oWeb = clientContext.get_web();
    currentUser = this.oWeb.get_currentUser();
    this.clientContext.load(currentUser);
    this.clientContext.executeQueryAsync(Function.createDelegate(this, this.onLoad));
}
var targetUser;
function onLoad() {
    document.getElementById('userLoginName').innerHTML = '';
    document.getElementById('userId').innerHTML = '';
    document.getElementById('userTitle').value = currentUser.get_title();
    document.getElementById('userEmail').innerHTML = '';

    var account = currentUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;

    SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');

    // document.getElementsByName("Department").value = userDepartment;
    // console.log(userDepartment)
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

function onRequestSuccess() {
    var requestorName = userProfileProperties[0];
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];

     $('input[id="Department"]').val(department);

}

function onRequestFail(sender, args) {
    alert("Error: " + args.get_message());
} 

function addUSERItems() {
    // var tipo = document.getElementsByName("priority");
    var tipo = $("input[name='priority']:checked").val();
/*    for (var i = 0; i < tipo.length; i++) {
        if (tipo[i].checked)
            resultado = tipo[i].value;
    }*/
    // var radio = document.getElementById('priority').value;
    var $fileUpload = $("input[type='file']");
    var title = document.getElementById('title').value;
    var userTitle = document.getElementById('userTitle').value;
    var dept = document.getElementById('Department').value;
    var description = document.getElementById('description').value;
    // var department = document.getElementById('department').value;
    if (title == "" || userTitle == "" || description == "") {
        alert("All fields are required");
        return false;
    }
    // ==========================Validation for Attachment=======================================//
    if (parseInt($fileUpload.get(0).files.length) > 3) {
        alert("Upload only a maximum of 3 files");
        return false;
    }
    // ==========================END of Validation for Attachment=======================================//
    var data = {
        __metadata: { 'type': 'SP.Data.IssueReportListItem' },
        "Priority": tipo,
        "Title0": title,
        "Requester_x0020_Name": userTitle,
        "Description": description,
        "Department": dept
    };
    UserList("IssueReport", data).then(function(data) {
        if (document.getElementById("inputFile").files.length === 0) {
            window.location.assign('https://intranet.houseofit.com.au/Lists/IssueReport/USER_AllItems.aspx');
        } else {
            //File Upload
            var itemId = data.d.ID;
            var fileInput = $('#inputFile');
            var fileCount = fileInput[0].files.length;
            var fileArray = [];
            for (var i = 0; i < fileCount; i++) {
                fileArray.push(fileInput[0].files[i]);
            }
            uploadFile("IssueReport", itemId, fileArray, fileCount);
        }
    });
}

function UserList(listName, data) {
    $('#loader_show_hide').show();
    // $('#loader_show_hide').show();
    return $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('" + listName + "')/items",
        type: "POST",
        headers: {
            "accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "content-Type": "application/json;odata=verbose"
        },
        data: JSON.stringify(data),
        success: function(data) {},
        error: function(data) {
            console.log(JSON.stringify(data));
        }
    });
}

function getFileBuffer(file) {
    var deferred = $.Deferred();
    var reader = new FileReader();
    reader.onload = function(e) {
        deferred.resolve(e.target.result);
    }
    reader.onerror = function(e) {
        deferred.reject(e.target.error);
    }
    reader.readAsArrayBuffer(file);
    return deferred.promise();
}

function uploadFile(listName, id, fileArray, fileCount) {
    // oLoader = SP.UI.ModalDialog.showWaitScreenWithNoClose("Working on it", "Updating SharePoint IssueReport Report..."); 
    var FilesCount = 0;
    var deferred = $.Deferred();
    var uploadStatus = "";
    var file = fileArray[0];
    var getFile = getFileBuffer(file);

    getFile.done(function(buffer, status, xhr) {
        var bytes = new Uint8Array(buffer);
        var content = new SP.Base64EncodedByteArray();
        var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/lists/GetByTitle('" + listName + "')/items(" + id + ")/AttachmentFiles/add(FileName='" + file.name + "')";
        var uploadCount = 0;
        $.ajax({
            url: queryUrl,
            type: "POST",
            processData: false,
            contentType: "application/json;odata=verbose",
            data: buffer,
            headers: {
                "accept": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val()
            },
            success: function(data) {
                FilesCount++;
                uploadStatus = FilesCount;
                fileArray.shift();
                if (fileArray.length > 0) {
                    uploadFile("IssueReport", id, fileArray, fileArray.length);

                } else {
                    $('#loader_show_hide').hide(); // window.location.assign('https://intranet.houseofit.com.au/Lists/IssueReport/NewForm.aspx');
                    swal({
                        title: "Awesome!",
                        text: "Your report has been created.",
                        type: "success",
                        confirmButtonText: "Ok"
                    }, function() { window.location = 'https://intranet.houseofit.com.au/Lists/IssueReport/USER_AllItems.aspx' });
                }
            },
            error: function(err) {
                alert("Some of your files failed to save, please try again.");
                window.location.assign('https://intranet.houseofit.com.au/Lists/IssueReport/USER_AllItems.aspx');
            }
        });
        deferred.resolve(uploadStatus);
    });
    getFile.fail(function(err) {
        deferred.reject(err);
    });
    return deferred.promise();
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}
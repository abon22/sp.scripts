
 ExecuteOrDelayUntilScriptLoaded(init, 'sp.js');

    var currentUser;

    function init() {
        this.clientContext = new SP.ClientContext.get_current();
        this.oWeb = clientContext.get_web();
        currentUser = this.oWeb.get_currentUser();
        this.clientContext.load(currentUser);
        this.clientContext.executeQueryAsync(Function.createDelegate(this, this.onLoad));
    }

    function onLoad() {
        document.getElementById('userLoginName').innerHTML = '';
        document.getElementById('userId').innerHTML = '';
        document.getElementById('userTitle').value = currentUser.get_title();
        document.getElementById('userEmail').innerHTML = '';
    }

    function addItem() {
     
          //Radio Button
        var tipo = document.getElementsByName("priority");
        for (var i = 0; i < tipo.length; i++) {
            if (tipo[i].checked)
                resultado = tipo[i].value;        
        }
        var radio = document.getElementById('priority').value;
        var $fileUpload = $("input[type='file']");
        var title = document.getElementById('title').value;
        var userTitle = document.getElementById('userTitle').value;
        var description = document.getElementById('description').value;
        var department = document.getElementById('department').value;

                    if (title == "" || userTitle == "" || description == "" || department == ""){
                alert("All fields are required");
                return false;
            }
// ==========================Validation for Attachment=======================================//
        //     if (parseInt($fileUpload.get(0).files.length)>5  || parseInt($fileUpload.get(0).files.length) == 0){
        // alert("Choose atleast 1 file or upload only a maximum of 5 files");
        // return false;       
        // }
// ==========================END of Validation for Attachment=======================================//
    var data = {
        __metadata: { 'type': 'SP.Data.BUGSListListItem' },
        "Priority":resultado,
        "Title0":title,
        "Requester_x0020_Name":userTitle,
        "Description":description,
        "Department":department

    };



    addListItem("BUGSList",data).then(function(data){

         if (document.getElementById("inputFile").files.length === 0) {      
                     
                    window.location.assign('https://intranet.houseofit.com.au/Lists/BUGSList/AllItems.aspx'); 
           }       
           else
           {
               //File Upload
                var itemId =  data.d.ID;   
                var fileInput = $('#inputFile');
                var fileCount = fileInput[0].files.length;  
                var fileArray = [];

                for(var i=0;i<fileCount;i++)
                {
                    fileArray.push(fileInput[0].files[i]);
                }                             
                uploadFileSP("BUGSList", itemId, fileArray, fileCount);
           }
        });
    }

function addListItem(listName, data) {  
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
    success: function (data){

    },
    error: function (data){
        console.log(JSON.stringify(data));
        
    }

});
}

function getFileBuffer(file) {
var deferred = $.Deferred();
var reader = new FileReader();
reader.onload = function (e) {
    deferred.resolve(e.target.result);
}
reader.onerror = function (e) {
    deferred.reject(e.target.error);
}
reader.readAsArrayBuffer(file);
return deferred.promise();
}

function uploadFileSP(listName, id, fileArray, fileCount) {

 // oLoader = SP.UI.ModalDialog.showWaitScreenWithNoClose("Working on it", "Updating SharePoint BUGSList Report..."); 

var FilesCount = 0;
var deferred = $.Deferred();
var uploadStatus = "";
var file = fileArray[0];
var getFile = getFileBuffer(file);


getFile.done(function (buffer, status, xhr) {
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
        success: function (data) {
            FilesCount++;
            uploadStatus = FilesCount;
            fileArray.shift();
            if (fileArray.length > 0) {
                uploadFileSP("BUGSList", id, fileArray, fileArray.length);
                
            }
            else { 
                    $('#loader_show_hide').hide();     // window.location.assign('https://intranet.houseofit.com.au/Lists/BUGSList/NewForm.aspx');
                swal({
                title: "Awesome!",
                text: "Your report has been created.",
                type: "success",
                confirmButtonText: "Ok"
                },function(){window.location='https://intranet.houseofit.com.au/Lists/BUGSList/NewForm.aspx'});


                             
            // window.location.assign('https://intranet.houseofit.com.au/Lists/BUGSList/NewForm.aspx');
            // swal({
            //     type: "success",
            //     title: "SharePoint BUGSList Report Successfully created",
            //     showConfirmButton: false,
            //     timer: 9000
            //     }); 

            }
          
        },

        error: function (err) {
        alert("Some of your files failed to save, please try again.");
        window.location.assign('https://intranet.houseofit.com.au/Lists/BUGSList/NewForm.aspx');                       
        }

    });

    deferred.resolve(uploadStatus);
});

getFile.fail(function (err) {
    deferred.reject(err);
});
return deferred.promise();
}

    function onQueryFailed(sender, args) {
        alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
    }
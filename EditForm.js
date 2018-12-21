var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init, 'sp.js');
var targetUser;



function getItemVersions(itemId)
{
    var listId = _spPageContextInfo.pageListId;

    var versionsUrl = _spPageContextInfo.webAbsoluteUrl + '/_layouts/versions.aspx?list=' + listId + '&ID=' + itemId;  
    $.get( versionsUrl, function( data ) {
      var versionEntries = parseVersionList(data);
      //success(versionEntries);
    //  console.log(versionEntries);
    // console.log(Object.keys(versionEntries).length);
//var requestor_temp="";
$("#Comment_id").html('');
for(var i = 1; i <= Object.keys(versionEntries).length; i++){
        //$("#Comment_id").append("")
        var temp = i+".0";
        //console.log(versionEntries[temp]);
        
            //var requestor_temp = versionEntries[temp]['Requester Name'];



            if(versionEntries[temp]['Comments']){
                var mod_date = versionEntries[temp]['Modified'];
                var mod_by = versionEntries[temp]['Modified By'];
                var comments = versionEntries[temp]['Comments'];

                var html_append = "<p>"+mod_by+" <a>("+mod_date+")</a>: "+comments+"</p>";
                $("#Comment_id").prepend(html_append);
            }else{

                $("#Comment_id").html('<p style="color:#63B5EA;">No existing entries.</p>');
            }

            



        }


    });
}

function parseVersionList(data){

   var entries = {};
   var versionList = $(data).find('table.ms-settingsframe');


   //var reference_no_temp = "";
   versionList.find('> tbody > tr').each(function(i){

     if(i > 0 && (i-1) % 2 == 0) {
      ////////console.log(versionList.find('td:eq(1) ').html());
        var verRow = $(this); //get version row
       // //////console.log(verRow);
        var propsRow = verRow.next(); //get properties row
        ////////console.log(verRow.find('td:eq(1) > table > tbody > tr > td > a').html().trim());
        var modified_date= verRow.find('td:eq(1) > table > tbody > tr > td > a').html().trim();
        var modified_by= verRow.find('td:last').html().trim();
        //console.log("modified_by: "+modified_by);
        var versionLabel = verRow.find('td:first').html().trim();

        
        
        if(versionLabel.length > 0) {
          entries[versionLabel] = {};
              //extract item version properties
              propsRow.find('tr').each(function(i){

                var pName = $(this).find('td:nth-child(1)').text().trim();
                var pVal = $(this).find('td:nth-child(2)').text().trim();

                
                entries[versionLabel][pName] = pVal; 
                
                
                entries[versionLabel]['Modified'] = modified_date; 
                entries[versionLabel]['Modified By'] = modified_by; 

                

            });

          } 

      }

  });   
    ////////console.log("reference_no_temp: "+reference_no_temp);

    return entries;

}

function Edit(value) {

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;



    $.ajax({
        async: true,
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('IssueReport')/GetItemByID(" + value + ")",
        method: "GET",

        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        },

        success: function(data) {


            if (targetUser == "junreyd" || targetUser == "litoa") {

                $("div #form-group1").show();
                $("div #form-group2").show();

            } else {
                $("div.form-group1").hide();
                $("div.form-group2").hide();
            }
            $('#ref').val(data.d.Title);
            $('#uuid').val(data.d.ID);
            $('#user').val(data.d.Requester_x0020_Name);
            $('#depart').val(data.d.Department);
            $('#titl').val(data.d.Title0);
            $("input[name=priority][value='" + data.d.Priority + "']").prop('checked', 'checked');
            $('#descrip').val(data.d.Description);
            // $('#commen').val(data.d.Comments);
            // $("#issuestat option:selected").val(data.d.Issue_x0020_Status);
            $('#issuestat').val(data.d.Issue_x0020_Status);
            $('#assigned').val(data.d.Assigned_x0020_To);

            getItemVersions(value);


            getAttachment_to_delete(data.d.AttachmentFiles.__deferred.uri, data.d.ID);

        },

        error: function(error) {
            console.log(JSON.stringify(error));
        }
    })
    uId = value;
}

function UpdateListItem(data) {

    var UId = $('#uuid').val();

    $.ajax({

        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('IssueReport')/items(" + UId + ")",
        method: "POST",
        data: JSON.stringify(data),
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*",
            "X-HTTP-Method": "MERGE"
        },
        success: function(data) {

            if (document.getElementById("input_edit").files.length === 0) {
                $('#loader_show_hide').hide();
                window.location.assign('https://intranet.houseofit.com.au/Lists/IssueReport/AllItems.aspx');
            } else {
                //File Upload 
                var fileInput = $('#input_edit');
                var fileCount = fileInput[0].files.length;
                var fileArray = [];

                for (var i = 0; i < fileCount; i++) {
                    fileArray.push(fileInput[0].files[i]);

                    if (fileCount - 1 === i) {
                        uploadFileSP_v2(fileArray, fileCount);





                    }
                }

            }
        },
        error: function(error) {
            console.log(JSON.stringify(error));
        }
    });
}

function btnUpdate() {


    var radio = document.getElementsByName('priority');
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked)
            resultado = radio[i].value;
    }

    var reference = $('#ref').val();
    var requester = $('#user').val();
    var dept = $('#depart').val();
    var tit = $('#titl').val();
    // var resultado = $('#priority').val();  
    var desc = $('#descrip').val();
    var comm = document.getElementById('commen').value;
    // var comm = $('#commen').val();
    var issue = $('#issuestat').val();
    var assign = $('#assigned').val();


    var data = {
        '__metadata': {
            'type': 'SP.Data.IssueReportListItem'
        },
        'Title': reference,
        'Requester_x0020_Name': requester,
        'Department': dept,
        'Title0': tit,
        'Priority': resultado,
        'Description': desc,
        'Comments': comm,
        'Issue_x0020_Status': issue,
        'Assigned_x0020_To': assign

    }

    UpdateListItem(data);




}

function uploadFileSP_v2(fileArray, fileCount) {
    oLoader = SP.UI.ModalDialog.showWaitScreenWithNoClose("Working on it", "Updating SharePoint IssueReport Report...");
    var UId = $('#uuid').val();


    var FilesCount = 0;
    var deferred = $.Deferred();
    var uploadStatus = "";
    var file = fileArray[0];
    //console.log(file);
    var getFile = getFileBuffer(file);


    getFile.done(function(buffer, status, xhr) {


        var bytes = new Uint8Array(buffer);
        var content = new SP.Base64EncodedByteArray();
        var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/lists/GetByTitle('IssueReport')/items(" + UId + ")/AttachmentFiles/add(FileName='" + file.name + "')";
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
                    uploadFileSP_v2(fileArray, fileArray.length);
                } else {
                    // $('#loader_show_hide').hide();
                    window.location.assign('https://intranet.houseofit.com.au/Lists/IssueReport/AllItems.aspx');
                }
            },
            error: function(err) {
                alert("Succes, but files failed save. Check your files with the same fomat e.g .word, .png, .jpeg and try again.");
                window.location.assign('https://intranet.houseofit.com.au/Lists/IssueReport/AllItems.aspx');
            }
        });
        deferred.resolve(uploadStatus);
    });

    getFile.fail(function(err) {
        deferred.reject(err);
    });

    return deferred.promise();

}

function getFileBuffer(file) {
    //  console.log('----------------------')
    //  console.log(file)
    //  console.log('----------------------')

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




//     function edit_attachment() {

//          var UId = $('#uuid').val();  

//                 if ($("#input_edit")[0].files.length > 0) {
//                 var file = $("#input_edit")[0].files[0];
//                 getFileBuffer(file).then(function (buffer) {

//                 $.ajax({

//                 url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('IssueReport')/items(" + UId + ")/AttachmentFiles/add(FileName='" + file.name + "')",  
//                 method: "POST",                   
//                 data: buffer,
//                 headers: {  
//                     "accept": "application/json;odata=verbose",  
//                     "content-type": "application/json;odata=verbose", 
//                     "X-RequestDigest": $("#__REQUESTDIGEST").val(),
//                     "IF-MATCH": "*",  
//                     "X-HTTP-Method": "MERGE"  
//                 },  
//                 success: function(data) {
//             }
//         });
//     });
// }
// }

function DeleteItemAttachment(item) {

    $(item).parent().remove();
    var Dfd = $.Deferred();
    var temp_item_id = $(item).attr('data-id')
    var temp_file_title = $(item).attr('data-title')
    var Url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('IssueReport')/GetItemById(" + temp_item_id + ")/AttachmentFiles/getByFileName('" + temp_file_title + "')";

    $.ajax({
        url: Url,
        type: 'DELETE',
        contentType: 'application/json;odata=verbose',
        headers: {
            'X-RequestDigest': $('#__REQUESTDIGEST').val(),
            'X-HTTP-Method': 'DELETE',
            'Accept': 'application/json;odata=verbose'
        },
        success: function(data) {
            Dfd.resolve(data);
        },
        error: function(error) {
            Dfd.reject(JSON.stringify(error));
        }
    });
    return Dfd.promise();
}

function getAttachment_to_delete(Attachmenturl, dataID) {

    var files = "";

    $.ajax({
        url: Attachmenturl,
        type: "GET",
        headers: { "ACCEPT": "application/json;odata=verbose" },

        success: function(data) {

            $.each(data.d.results, function(i, item) {
                var title = item.FileName;
                files += "<p><a href='#' onClick='DeleteItemAttachment(this)' data-id='" + dataID + "' data-title='" + title + "' class='remove' style='color: red;'> x </a><a href='https://intranet.houseofit.com.au/" + item.ServerRelativeUrl + "'>" + item.FileName + "</a><br></p>"

                $('#attach_id_delete').html(files);

            })
        },
        error: function() {
            alert("Error getting the Marketplace Items");
        }
    });
}

// function getComment_to_delete(Attachmenturl, dataID) {

//     var files = "";

//     $.ajax({
//         url: Attachmenturl,
//         type: "GET",
//         headers: { "ACCEPT": "application/json;odata=verbose" },

//         success: function(data) {

//             $.each(data.d.results, function(i, item) {
//                 var title = item.FileName;
//                 files += "<p><a href='#' onClick='DeleteItemAttachment(this)' data-id='" + dataID + "' data-title='" + title + "' class='remove' style='color: red;'> x </a><a href='https://intranet.houseofit.com.au/" + item.ServerRelativeUrl + "'>" + item.FileName + "</a><br></p>"

//                 $('#attach_id_delete').html(files);

//             })
//         },
//         error: function() {
//             alert("Error getting the Marketplace Items");
//         }
//     });
// }
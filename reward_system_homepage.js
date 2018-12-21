// $(function () {
function start_load() {


    console.log(targetUser);





    $('#cancel_modal').on('click', function (e) {
        $('.ui.modal').modal('hide');
    });






    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Rewards_List')/items",
        method: "GET",
        headers: {
            "Accept": "application/json; odata=verbose"
        },
        success: function (data) {

            rewards_list_result = data.d.results;


            //         for (var i = 0; i < rewards_list_result.length; i++) {

            //             $.ajax({
            //                 url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Rewards_List')/items('" + rewards_list_result[i].ID + "')/AttachmentFiles",
            //                 method: "GET",
            //                 headers: {
            //                     "Accept": "application/json; odata=verbose"
            //                 },
            //                 success: function (data) {
            //                     url_for_image = data.d.results;

            //                     // console.log(`${_spPageContextInfo.webAbsoluteUrl}${url_for_image[0].ServerRelativeUrl}`)

            //                     console.log(rewards_list_result[i]);


            //                     // $('#LIST_REWARDS').append(`
            //                     // <div class="item">

            //                     // <img class = "ui avatar tiny circular image"
            //                     // src = "${_spPageContextInfo.webAbsoluteUrl}${url_for_image[0].ServerRelativeUrl}"
            //                     // style = "margin: 15px; width: 111px;" >
            //                     // <div class="content">
            //                     // <div class="ui center aligned fluid basic segment" style = "margin-top: 25px; margin-left: 10px;">
            //                     // <div class="header">${rewards_list_result[i].Reward_Indication}</div>
            //                     // <br>
            //                     // ${rewards_list_result[i].Reward_Name}
            //                     // </div>
            //                     // </div>

            //                     // </div>
            //                     // `)

            //                 },
            //                 error: function (error) {
            //                     alert(JSON.stringify(error));
            //                 }
            //             });
            //         }

            $.each(rewards_list_result, function (key, value) {

                $.ajax({
                    url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Rewards_List')/items('" + value.ID + "')/AttachmentFiles",
                    method: "GET",
                    headers: {
                        "Accept": "application/json; odata=verbose"
                    },
                    success: function (data) {
                        url_for_image = data.d.results;

                        $('#LIST_REWARDS').append(`
                <div class="item">

                
                <img class = "ui avatar tiny circular image"
                src = "${_spPageContextInfo.webAbsoluteUrl}${url_for_image[0].ServerRelativeUrl}"
                style = "margin: 15px; width: 111px;" >
                <div class="content">
                <div class="ui center aligned fluid basic segment" style = "margin-top: 25px; margin-left: 10px;">
                <div class="header">${value.Reward_Indication}</div>
                <br>
                ${value.Reward_Name}
                </div>
                </div>
                <div class="ui bars dropdown" style="float: right;"><i class="bars icon"></i>
                <div class="menu">
                <div class="item" data-value="remove">Remove</div>
                <div class="item" onclick="update_reward(${value.ID});" data-value="edit">Edit</div>
                </div>
                </div>
                </div>
                `)

                        $('.ui.bars.dropdown')
                            .dropdown({
                                action: 'hide'
                            });

                    },
                    error: function (error) {
                        alert(JSON.stringify(error));
                    }
                });

            });



            if (targetUser === "junreyd") {

                $('.disabled').removeAttr("href");
                $('a').removeAttr("onClick");
            } else {
                console.log("else");

            }



        },
        error: function (error) {
            alert(JSON.stringify(error));
        }


    });



    // $.ajax({
    //     url: _spPageContextInfo.webAbsoluteUrl + "/it/_api/Web/Lists/getbytitle('IT Members')/items?$filter=Status eq 'Active'",
    //     method: "GET",
    //     headers: {
    //         "Accept": "application/json; odata=verbose"
    //     },
    //     success: function (data) {

    //         itmembers_list_result = data.d.results;

    //         for (var i = 0; i < itmembers_list_result.length; i++) {

    //             $('#LIST_ITMEMBERS').append(`

    //                 <div class="card">
    //                 <div class="image"><img src="https://intranet.houseofit.com.au/SiteAssets/Image/Untitled-1-512.png"></div>
    //                 <div class="content">
    //                 <div class="header">${itmembers_list_result[i].Title}</div>
    //                 <div class="meta">
    //                 <a>Friends</a>
    //                 </div>
    //                     <div class="description">
    //                         Matthew is an interior designer living in New York.
    //                     </div>
    //                 </div>
    //                 </div>
    //                 `)
    //         }
    //     },
    //     error: function (error) {
    //         alert(JSON.stringify(error));
    //     }
    // });



}






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

    var account = currentUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;

    SP.SOD.executeOrDelayUntilScriptLoaded(start_load, 'SP.UserProfiles.js');

}

function getUserProperties() {



    if (targetUser == "junreyd") {

        $('#check_user').unbind('click');
        console.log("disabled");
    } else {
        console.log("else");

    }

}



function addreward() {
    $('.ui.dropdown').dropdown();
    $('.addreward').modal('show');
}


function addreward_cancel() {
    $('.addreward').modal('hide');
}



function update_reward(id) {
    console.log(id);


    $('.editreward').modal('show');







    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Rewards_List')/GetItemByID(" + id + ")",
        method: "GET",

        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        },

        success: function (data) {

            $('#reward_name_edit').val(data.d.Reward_Name);

            $('#required_points_edit').val(data.d.Required_Points);



            $('#reward_indication_edit').dropdown('get value');


            // $('#uuid').val(data.d.ID);
            // $('#user').val(data.d.Requester_x0020_Name);data.d.Reward_Indication
            // $('#depart').val(data.d.Department);
            // $('#titl').val(data.d.Title0);
            // $("input[name=priority][value='" + data.d.Priority + "']").prop('checked', 'checked');
            // $('#descrip').val(data.d.Description);


            // $('#issuestat').val(data.d.Issue_x0020_Status);
            // $('#assigned').val(data.d.Assigned_x0020_To);


            // getAttachment_to_delete(data.d.AttachmentFiles.__deferred.uri, data.d.ID);

        },

        error: function (error) {
            console.log(JSON.stringify(error));
        }
    });
    // uId = value;
}







function addreward_submit() {


    // if (document.getElementById("inputFile").files.length === 0) {
    //     $('#rewardImage_validation').show();
    //     console.log("oko");
    //     return false;
    // } else {

    var $fileUpload = $("input[type='file']");

    var reward_name = $('#reward_name').val();
    var reward_indication = $('#reward_indication').val();
    var required_points = $('#required_points').val();

    // var fileUpload = $("input[type='file']");

    var data = {
        '__metadata': {
            'type': 'SP.Data.Rewards_x005f_ListListItem'
        },
        'Reward_Name': reward_name,
        'Reward_Indication': reward_indication,
        'Required_Points': required_points
        // 'Reward_Image': fileinput
    };

    addreward_submit_validation(data).then(function (data) {
        if (document.getElementById("inputFile").files.length === 0) {
            $('#rewardImage_validation').show();
        } else {

            var itemId = data.d.ID;
            var fileInput = $('#inputFile');
            var fileCount = fileInput[0].files.length;
            var fileArray = [];
            for (var i = 0; i < fileCount; i++) {
                fileArray.push(fileInput[0].files[i]);
            }
            upload_file(itemId, fileArray, fileCount);
        }
    });
}






function addreward_submit_validation(data) {

    return $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Rewards_List')/items",
        method: "POST",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        data: JSON.stringify(data),
        success: function (data) {
            console.log("Item created successfully", "success");
        },
        error: function (error) {
            console.log(JSON.stringify(error));

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





function upload_file(itemId, fileArray, fileCount) {

    // console.log("data");

    var FilesCount = 0;
    var deferred = $.Deferred();
    var uploadStatus = "";
    var file = fileArray[0];
    var getFile = getFileBuffer(file);

    getFile.done(function (buffer, status, xhr) {
        var bytes = new Uint8Array(buffer);
        var content = new SP.Base64EncodedByteArray();
        var queryUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/lists/GetByTitle('Rewards_List')/items(" + itemId + ")/AttachmentFiles/add(FileName='" + file.name + "')";
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
                    upload_file(itemId, fileArray, fileArray.length);

                } else {
                    console.log("Successfully Sumbitted");
                }
            },




            error: function (err) {
                alert("Some of your files failed to save, please try again.");
                window.location.assign('https://intranet.houseofit.com.au/SitePages/Reward%20System.aspx');
            }
        });
        deferred.resolve(uploadStatus);

    });
    getFile.fail(function (err) {
        deferred.reject(err);
    });
    return deferred.promise();
}
$(document).ready(function() {

    getUserListItems();
});

function getUserListItems() {
    var currentUser = _spPageContextInfo.userId;

    $.ajax({

        async: true,
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('IssueReport')/items?$select=ID,Title,Requester_x0020_Name,Department,Title0,Priority,Description,Comments,Issue_x0020_Status,Assigned_x0020_To,Author/Id&$filter=substringof('" + currentUser + "',Author/Id)&$expand=Author/Id",
        method: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        },
        success: function(data) {
            data = data.d.results;
            $.each(data, function(index, value) {
                var assigned = (value.Assigned_x0020_To === null) ? "..." : value.Assigned_x0020_To;
                var comments = (value.Comments === null) ? "..." : value.Comments;
                var dep = (value.Department === null) ? "..." : value.Department;
                var requester = (value.Requester_x0020_Name === null) ? "..." : value.Requester_x0020_Name;
                // var issueStat = (value.Issue_x0020_Status === null) ? '<span style="color: blue;">TQM evaluating</span>' : value.Issue_x0020_Status;

                var html = "<tr class='content'><td>" + '<a href="' + _spPageContextInfo.webAbsoluteUrl + '/Lists/IssueReport/DispForm.aspx?ID='+value.Id+'">' + value.Title + '</a>' +
                    "</td><td>" + requester +
                    "</td><td>" + dep +
                    "</td><td>" + value.Title0 +
                    "</td><td>" + value.Priority +
                    "</td><td>" + value.Description +
                    "</td><td>" + comments +
                    "</td><td>" + value.Issue_x0020_Status +
                    "</td><td>" + assigned +
                    "</td><td>" + "<a href='#' class='edit' onclick='Edit(" + value.Id + ")' data-target='#editEmployeeModal' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='Edit'>&#xE254;</i></a>" +
                    "<a href='#' class='delete' onclick='Delete(" + value.Id + ")' ><i class='material-icons' data-toggle='tooltip' title='Deleting this item cannot be restore.'>&#xE872;</i></a>" +
                    "</td></tr>";

                $('#TABLE_ITEMStr').append(html);
            });

            $('#TABLE_ITEMS').dataTable({

                // "ordering": [[false]],
                // "info": [[false]],
               
                 "order": [[0, "desc"]],
                columnDefs: [{
                    targets: 4,
                    render: function(data, type, row) {
                        var color = 'black';
                        if (data == "Low") {
                            color = 'green';
                        }
                        if (data == "Normal") {
                            color = '#D25400';
                        }
                        if (data == "High") {
                            color = 'red';
                        }
                        return '<span style="color:' + color + '">' + data + '</span>';
                    }
                }]
            });
        },
        error: function(error) {
            console.log(JSON.stringify(error));

        }

    })


}

function filterTextv2() {
    var rex = new RegExp($('#filterTextid').val());
    if (rex == "/all/") { clearFilter() } else {
        $('.content').hide();
        $('.content').filter(function() {
            return rex.test($(this).text());
        }).show();
    }
}

function clearFilter() {
    $('.filterText').val('');
    $('.content').show();
}

$('.delete').click(function(e){
    e.preventDefault();
})
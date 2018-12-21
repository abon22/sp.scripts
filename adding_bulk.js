<script src="https://code.jquery.com/jquery-2.1.4.js"></script>
<script type="text/javascript">

//https://intranet.houseofit.com.au/_api/web/lists/getbytitle('Reimbursements%20Form')?$select=ListItemEntityTypeFullName

function add_bulk_ListItem() {
    //var kpi_select_pos_val = $("#filter_position_id").val(); 
    var kra_title = "";
    var item = {
        "__metadata": { "type": "SP.List" },
        "Title": kra_title,
    };
    $.ajax({
       // url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Travel Benefit Request')/items",
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: JSON.stringify(item),
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: function (data) {
            console.log("success");

            

        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}




$(document).ready(function() {

//Create_rbf_ListItem();
var add_how_many_entry = 65;
for(c=0; c<add_how_many_entry; c++){
    console.log("c: "+c);
   //add_bulk_ListItem();
   //console.log("adding");
}

})


</script>
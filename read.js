// $(document).ready(function () { ExecuteOrDelayUntilScriptLoaded(Read, "sp.js"); });

// function Read()
// {

// var clientContext = new SP.ClientContext.get_current();
// var web = clientContext.get_web();
// var oList = web.get_lists().getByTitle('BUGSList');
// var camlQuery = new SP.CamlQuery();
// var Query="<View><Query/><ViewFields><FieldRef Name='LinkTitle' /><FieldRef Name='Requester_x0020_Name' /><FieldRef Name='Department' /><FieldRef Name='Title0' /><FieldRef Name='Priority' /><FieldRef Name='Description' /><FieldRef Name='Comments' /><FieldRef Name='Issue_x0020_Status' /><FieldRef Name='Assigned_x0020_To' /><FieldRef Name='Attachments' /></ViewFields><QueryOptions/></View>";
// camlQuery.set_viewXml(Query);
// this.collListItem = oList.getItems(camlQuery);
// clientContext.load(collListItem);
// clientContext.executeQueryAsync(Function.createDelegate(this, QuerySucceeded), Function.createDelegate(this, this.QueryFailed));
// }
// function QuerySucceeded()
// {

// var listItemEnumerator = collListItem.getEnumerator();


// 	$("#TBODY_ITEMS").empty();

// 	while(listItemEnumerator.moveNext())

// 	{
// 		var oListItem = listItemEnumerator.get_current();
// 		var id = oListItem.get_item("ID");

// 		var reference=oListItem.get_item('Title');
// 		var requester=oListItem.get_item('Requester_x0020_Name');
// 		var department=oListItem.get_item('Department');
// 		var title=oListItem.get_item('Title0');
// 		var priority=oListItem.get_item('Priority');
// 		var description=oListItem.get_item('Description');
// 		var comments=oListItem.get_item('Comments');
// 		var issuestatus=oListItem.get_item('Issue_x0020_Status');
// 		var assignedto=oListItem.get_item('Assigned_x0020_To');
// 		var attachment=oListItem.get_item('Attachments');

// var html = "<tr><td>"+"<span class='custom-checkbox'>"+
// 			"<input type='checkbox' id="+oListItem.get_item('ID')+" value="+oListItem.get_item('ID')+">"+
// 			"<label for="+oListItem.get_item('ID')+"></label>"+
// 			"</span>"+"</td><td>"+reference+
// 			"</td>+<td>"+requester+
// 			"</td>+<td>"+department+
// 			"</td>+<td>"+title+
// 			"</td>+<td>"+priority+
// 			"</td>+<td>"+description+
// 			"</td>+<td>"+comments+
// 			"</td>+<td>"+issuestatus+
// 			"</td>+<td>"+assignedto+
// 			"</td>+<td>"+attachment+
// 			"</td>+<td>"+"<a href='#' class='edit' data-target='#editEmployeeModal' data-toggle='modal'><i class='material-icons' id="+ id +" data-toggle='tooltip' title='Edit'>&#xE254;</i></a>" +
//           	"<a href='#' class='delete' onclick='Delete(" + id + ");' ><i class='material-icons' data-toggle='tooltip' title='Delete'>&#xE872;</i></a>"+
//           	"</td></tr>";

// 						$('.table tbody').append(html);
// 	}


// 						table = $('#TABLE_ITEMS').DataTable;
// 		}
// 			function QueryFailed(sender, args)
// 		{
// 			alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
// 		}
//++++++++++++++++++++++++++++++++++++++++++++("CSOM Version")+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
$(document).ready(function() {  
 

    //Read();  
    GetCurrentUsername()

   
  
});
var userName ;
function GetCurrentUsername()
{
    var ctxt = new SP.ClientContext.get_current();
    this.website = ctxt.get_web();
    this.currentUser = website.get_currentUser();
    ctxt.load(currentUser);
    ctxt.executeQueryAsync(Function.createDelegate(this, function (sender, args){
       // console.log(currentUser.get_loginName().substring(16));
        userName = currentUser.get_loginName().substring(16);
        Read(userName);
    }), Function.createDelegate(this, function(sender, args){
        alert('request failed ' + args.get_message() + '\n'+ args.get_stackTrace());
    }));
}



  var currentUser_2;
function Read(userName) {  

    console.log("userName:"+userName);

     //var currentUser = _spPageContextInfo;
     /*currentUser_2 =  new SP.ClientContext.get_current();*/


    $.ajax({  
  
        async: true,  
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('BUGSList')/items",  
        method: "GET",   
        headers: {  
            "accept": "application/json;odata=verbose",  
            "content-type": "application/json;odata=verbose"    
        },  
        success: function(data) {  
            data = data.d.results;
            // console.log(data);  
            $.each(data, function(index, value) {  
            var assigned = (value.Assigned_x0020_To === null)?"...": value.Assigned_x0020_To;
            var comments = (value.Comments === null)?"...": value.Comments;
  
  var html = "<tr><td>"+"<a href='#' onclick='View1(" + value.Id + ")' data-target='#viewreport' data-toggle='modal'>"+value.Title+
			"</td>+<td>"+value.Requester_x0020_Name+
			"</td>+<td>"+value.Department+
			"</td>+<td>"+value.Title0+
			"</td>+<td>"+value.Priority+
			"</td>+<td>"+value.Description+
			"</td>+<td>"+comments+
			"</td>+<td>"+value.Issue_x0020_Status+
			"</td>+<td>"+assigned+
            "</td><td>"+"<a href='#' class='edit' onclick='Edit("+ value.Id +")' data-target='#editEmployeeModal' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='Edit'>&#xE254;</i></a>" +
            "<a href='#' class='delete' onclick='Delete(" + value.Id + ")' ><i class='material-icons' data-toggle='tooltip' title='Delete'>&#xE872;</i></a>"+
            "</td></tr>";
			// "</td>+<td>"+value.Attachments+

//             //|| userName == "junreyd"
// 			"</td>"+
//             "<td>"+((userName=="litoa" )?
//                 "<a href='#' class='edit' onclick='Edit("+ value.Id +")' data-target='#editEmployeeModal' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='Edit'>&#xE254;</i></a><a href='#' class='delete' onclick='Delete(" + value.Id + ")' ><i class='material-icons' data-toggle='tooltip' title='Delete'>&#xE872;</i></a>"//true
//                 :
//                 "")//false
// /*
//             "<a href='#' class='edit' onclick='Edit("+ value.Id +")' disabled data-target='#editEmployeeModal' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='Edit'>&#xE254;</i></a>" +
//           	"<a href='#' class='delete' onclick='Delete(" + value.Id + ")' ><i class='material-icons' data-toggle='tooltip' title='Delete'>&#xE872;</i></a>"+*/
          	

//             "</td>"+

//             "</tr>";

                $('#TABLE_ITEMStr').append(html); 
            });

           $('#TABLE_ITEMS').dataTable();



       //+"<a href='#' data-target='#' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='View'>visibility</a>"
        },  
        error: function(error) {  
            console.log(JSON.stringify(error));  
  
        }  
  
    })  
  
  
}  
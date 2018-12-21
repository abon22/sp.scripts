 <link rel="stylesheet" type="text/css" href="/SiteAssets/Scripts/CEO Dashboard/statistic.css">
 <link rel="stylesheet" type="text/css" href="/SiteAssets/Scripts/CEO Dashboard/statistic.min.css">

<script type="text/javascript" src="/SiteAssets/Scripts/js/jquery.min.js"></script>
<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="/_layouts/15/sp.js"></script>

<script type="text/javascript">

/*document.write('<div id="loader" style="display:table; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10000; background: #fff;">'
    + '<div style="display:table-cell; vertical-align:middle; text-align: center;">'
    + 'loading…<br /><img src="icon.load.gif" />'
    + '</div></div>');

$(window).load(function(){
    $('#loader').fadeOut(500);
});
*/
//-----------------STATISTICS------------------------------------------------------------------------------

   function OnScrollDiv (div) {
   // console.log(div.scrollTop);
      if (div.scrollTop > 267) {
         $('.actionbutton').css("opacity", "1");
      } else {
        $('.actionbutton').css("opacity", "0");
      }
  }




function getItems(listName,listQuery){
    var request={};
    request.listName=listName;
    var ctx = new SP.ClientContext();
    var list = ctx.get_web().get_lists().getByTitle(request.listName);
    request.query=new SP.CamlQuery();
    request.query.set_viewXml(listQuery);
    request.itemCollection=list.getItems(request.query);
    ctx.load(request.itemCollection);
    ctx.executeQueryAsync(  processItems.bind(request)  ,failure);
}

var count_list_array = [];
function processItems() {
    var received=this;//received 'request' from Caller
    //console.log(this)
    received.items=[];
    var listEnumerator = received.itemCollection.getEnumerator();
    var count=0;
    while (listEnumerator.moveNext()) {
        var listitem = listEnumerator.get_current();
        received.items.push(listitem.get_id());
        count++;
    }
    //console.info(received.listName,'has',received.items.length,'items IDs:',received.items);

   // console.log("Listname: "+received.listName+" Count: "+count);

    //var label_ofe = Number($('#val_ofe').text());


    if(received.listName == "Payments/CA Request"){
        var label_pca = Number($('#val_pca_v3').text());
        label_pca = label_pca + count;
        $('#val_pca_v3').html(label_pca);
    }


    if(received.listName == "Purchase Order Requests"){
        var label_por = Number($('#val_por_v3').text());
        label_por = label_por + count;
        $('#val_por_v3').html(label_por);
    }


    if(received.listName == "Credit Card Purchase"){
        var label_ccp = Number($('#val_ccp').text());
        label_ccp = label_ccp + count;
        $('#val_ccp').html(label_ccp);
    }

    if(received.listName == "IT Purchasing Request"){
        var label_itpr = Number($('#val_itpr').text());
        label_itpr = label_itpr + count;
        $('#val_itpr').html(label_itpr);
    }

    if(received.listName == "Salary/Device Loan Benefits"){
        var label_sdl = Number($('#val_sdl').text());
        label_sdl = label_sdl + count;
        $('#val_sdl').html(label_sdl);
    }

    if(received.listName == "Salary or Device Loan Benefits"){
        var label_sdl_v2 = Number($('#val_sdl_v2').text());
        label_sdl_v2 = label_sdl_v2 + count;
        $('#val_sdl_v2').html(label_sdl_v2);
    }

    if(received.listName == "Manpower Requests"){
        var label_mrf = Number($('#val_mrf').text());
        label_mrf = label_mrf + count;
        $('#val_mrf').html(label_mrf);
    }

    if(received.listName == "Liquidation Form"){
        var label_lqf = Number($('#val_lqf').text());
        label_lqf = label_lqf + count;
        $('#val_lqf').html(label_lqf);
    }

    if(received.listName == "Forecasted Budget Plan"){
        var label_fbp = Number($('#val_fbp').text());
        label_fbp = label_fbp + count;
        $('#val_fbp').html(label_fbp);
    }


    if(received.listName == "Reimbursements Form"){
        var label_rbf = Number($('#val_rbf_v3').text());
        label_rbf = label_rbf + count;
        $('#val_rbf_v3').html(label_rbf);
    }


    if(received.listName == "Travel Benefit"){
        var label_tbr = Number($('#val_tbr').text());
        label_tbr = label_tbr + count;
        $('#val_tbr').html(label_tbr);
    }

    if(received.listName == "Travel Benefit Request"){
        var label_tbr_v2 = Number($('#val_tbr_v2').text());
        label_tbr_v2 = label_tbr_v2 + count;
        $('#val_tbr_v2').html(label_tbr_v2);
    }

    if(received.listName == "Educational Benefit"){
        var label_ebf = Number($('#val_ebf').text());
        label_ebf = label_ebf + count;
        $('#val_ebf').html(label_ebf);
    }

    if(received.listName == "Educational Benefit Form"){
        var label_ebf_v2 = Number($('#val_ebf_v2').text());
        label_ebf_v2 = label_ebf_v2 + count;
        $('#val_ebf_v2').html(label_ebf_v2);
    }

   if(received.listName == "Project Resources Purchasing Request"){
        var label_prp = Number($('#val_prp').text());
        label_prp = label_prp + count;
        $('#val_prp').html(label_prp);
    }

    if(received.listName == "Process Change Request"){
        var label_pcr = Number($('#val_pcr').text());
        label_pcr = label_pcr + count;
        $('#val_pcr').html(label_pcr);
    }


}
function failure(sender, args){
    console.error(args.get_message());
}
//-----------------STATISTICS------------------------------------------------------------------------------

function ceoactionsalarydevice(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Executive_x0020_Status', 'Approve');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoactionsalarydevice2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Executive_x0020_Status', 'Reject');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediateheadsalarydevice(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approve');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


function immediateheadsalarydevice2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Reject');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//------------------------------------------------SDL V2--------------------------------------------------------
function ceoactionsalarydevice_v2(thisid) {
   //console.log("SDV V2: "+thisid);
    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Executive_x0020_Status', 'Approve');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoactionsalarydevice2_v2(thisid) {
    //console.log("SDV V2: "+thisid);
    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Executive_x0020_Status', 'Reject');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediateheadsalarydevice_v2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approve');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


function immediateheadsalarydevice2_v2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Reject');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}
//------------------------------------------------SDL V2--------------------------------------------------------

//========================================================================================================================================================================================

function ceoaction_travel_benefit(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoaction_travel_benefit2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediatehead_travel_benefit(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


function immediatehead_travel_benefit2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}
//------------------------------------------------------TBR V2---------------------------------------------------------------------------
function ceoaction_travel_benefit_v2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoaction_travel_benefit2_v2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediatehead_travel_benefit_v2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


function immediatehead_travel_benefit2_v2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}
//------------------------------------------------------TBR V2---------------------------------------------------------------------------

//========================================================================================================================================================================================


function ceoaction_liquidation(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Liquidation Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Status', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoaction_liquidation2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Liquidation Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Status', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


//----------------------------------------------------------------------------------------------------------------------

function ceoaction_budget_plan(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Forecasted Budget Plan');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}



//========================================================================================================================================================================================

function immediate_pca_action(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediate_pca_action2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================

function immediate_pca_action_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediate_pca_action2_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================

function immediate_purchase_order(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediate_purchase_order2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================

function immediate_purchase_order_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediate_purchase_order2_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


//========================================================================================================================================================================================


function ceo_purchase_order(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceo_purchase_order2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================


function ceo_purchase_order_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceo_purchase_order2_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}




//========================================================================================================================================================================================

function ceo_pca_action(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceo_pca_action2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================

function ceo_pca_action_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceo_pca_action2_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


//===============================================================================================================================================================================================

function ceoactioncreditcard(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Credit Card Purchase');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status0', 'Approve');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoactioncreditcard2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Credit Card Purchase');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status0', 'Reject');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//===============================================================================================================================================================================================

function ceoitpurchase(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('IT Purchasing Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoitpurchase2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('IT Purchasing Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//===============================================================================================================================================================================================

function ceoactionmanpower(thisid) {

   var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Manpower Requests');

    this.oListItem = oList.getItemById(thisid);

     oListItem.set_item('CEO_x0020_Approval', 'Approved');

     oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));
}

function ceoactionmanpower2(thisid) {

   var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Manpower Requests');

     this.oListItem = oList.getItemById( thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Rejected');

     oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


//========================================================================================================================================================================================

function ceo_rbf_action(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Status', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceo_rbf_action2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Status', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================

function ceo_rbf_action_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Status', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceo_rbf_action2_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Status', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================

function immediate_rbf_action(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediate_rbf_action2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


//========================================================================================================================================================================================

function immediate_rbf_action_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediate_rbf_action2_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}



//===============================================================================================================================================================================================

function ceoactioneducbenefit(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Approved');

    oListItem.set_item('Status', 'CEO APPROVED');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoactioneducbenefit2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Rejected');

    oListItem.set_item('Status', 'CEO REJECTED');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//---------------------------------------------------------------------EBF V2--------------------------------------------------------------------------
function ceoactioneducbenefit_v2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoactioneducbenefit2_v2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


function immediateheadactioneducbenefit_v2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Department_x0020_Head_x0020_Appr', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediateheadactioneducbenefit2_v2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Department_x0020_Head_x0020_Appr', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}
//---------------------------------------------------------------------EBF V2--------------------------------------------------------------------------

//===============================================================================================================================================================================================


function ceoactionprojectresources(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Project Resources Purchasing Request');

    this.oListItem = oList.getItemById(thisid);

    //oListItem.set_item('CEO_x0020_Approval', 'Approved');
    oListItem.set_item('Approval_Stage', 'Approved');
    oListItem.set_item('Approval', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoactionprojectresources2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Project Resources Purchasing Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Approval_Stage', 'Rejected');
    oListItem.set_item('Approval', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//===============================================================================================================================================================================================

function ceo_pcr_action(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Process Change Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Top_x0020__x0020_Management_x002', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceo_pcr_action2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Process Change Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Top_x0020__x0020_Management_x002', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


//===============================================================================================================================================================================================




//--------------PAYMENT/CA REQUEST(CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_pca_immediate_approve_btn="<a onclick='pca_immediate_cb_approve()' id='pca_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected PCA)</a>";

var html_pca_immediate_approve_btn2="<input type='checkbox' id='pca_select_all_imm' name='Select All'  title='Select All' '/> <label for='pca_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='pca_immediate_cb_approve_test()'  id='pca_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected PCA)</a>"+
    "<a onclick='pca_immediate_cb_reject_test()' id='pca_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected PCA)</a>";

var pca_immediate_ids=[];
function pca_immediate_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");
    
var elem = document.getElementById("pca_immediate_action_button");
var elem2 = document.getElementById("pca_immediate_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = pca_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    pca_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(pca_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected PCA)";
    elem2.innerHTML = "Reject (Selected PCA)";
    }else{
    elem.innerHTML = "Approve (Selected PCA: "+pca_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected PCA: "+pca_immediate_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";

  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = pca_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {pca_immediate_ids.splice(i, 1);}
    if(pca_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected PCA)";
    elem2.innerHTML = "Reject (Selected PCA)";
    }else{
    elem.innerHTML = "Approve (Selected PCA: "+pca_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected PCA: "+pca_immediate_ids.length+")";


    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
  }
  console.log(pca_immediate_ids);
}
function pca_immediate_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids.length-1; i++){ 
    console.log(pca_immediate_ids[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function pca_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids.length-1; i++){ 
    console.log(pca_immediate_ids[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function pca_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids.length-1; i++){ 
    console.log(pca_immediate_ids[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------PAYMENT/CA REQUEST(CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------PAYMENT/CA REQUEST V3(CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_pca_immediate_approve_btn_v3="<a onclick='pca_immediate_cb_approve_v3()' id='pca_immediate_action_button_v3'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected PCA)</a>";

var html_pca_immediate_approve_btn2_v3="<input type='checkbox' id='pca_select_all_imm_v3' name='Select All'  title='Select All' '/> <label for='pca_select_all_imm_v3' style='margin-right: 15px;'>Select All </label> <a onclick='pca_immediate_cb_approve_test_v3()'  id='pca_immediate_action_button_v3'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected PCA)</a>"+
    "<a onclick='pca_immediate_cb_reject_test_v3()' id='pca_immediate_action_button2_v3'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected PCA)</a>";

var pca_immediate_ids_v3=[];
function pca_immediate_check_item_v3(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");
    
var elem = document.getElementById("pca_immediate_action_button_v3");
var elem2 = document.getElementById("pca_immediate_action_button2_v3");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = pca_immediate_ids_v3.indexOf(needle);
    if(isInArray== -1){
    pca_immediate_ids_v3.push(document.getElementById(check_item.id).value);
    }
    if(pca_immediate_ids_v3.length==0){
    elem.innerHTML = "Approve (Selected PCA)";
    elem2.innerHTML = "Reject (Selected PCA)";
    }else{
    elem.innerHTML = "Approve (Selected PCA: "+pca_immediate_ids_v3.length+")";
    elem2.innerHTML = "Reject (Selected PCA: "+pca_immediate_ids_v3.length+")";

    
    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = pca_immediate_ids_v3.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {pca_immediate_ids_v3.splice(i, 1);}
    if(pca_immediate_ids_v3.length==0){
    elem.innerHTML = "Approve (Selected PCA)";
    elem2.innerHTML = "Reject (Selected PCA)";
    }else{
    elem.innerHTML = "Approve (Selected PCA: "+pca_immediate_ids_v3.length+")";
    elem2.innerHTML = "Reject (Selected PCA: "+pca_immediate_ids_v3.length+")";

    
    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
  }
  console.log(pca_immediate_ids_v3);
}
function pca_immediate_cb_approve_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids_v3.length-1; i++){ 
    console.log(pca_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function pca_immediate_cb_approve_test_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids_v3.length-1; i++){ 
    console.log(pca_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function pca_immediate_cb_reject_test_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids_v3.length-1; i++){ 
    console.log(pca_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------PAYMENT/CA REQUEST V3(CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------PAYMENT/CA REQUEST(CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_pca_approve_btn="<a onclick='pca_cb_approve()' id='pca_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected PCA)</a>";

var html_pca_approve_btn2="<input type='checkbox' id='pca_select_all_ceo' name='Select All'  title='Select All' '/> <label for='pca_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='pca_cb_approve_test()'  id='pca_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected PCA)</a>"+
    "<a onclick='pca_cb_reject_test()' id='pca_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected PCA)</a>";

var pca_ids=[];
function pca_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("pca_action_button");
var elem2 = document.getElementById("pca_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = pca_ids.indexOf(needle);
    if(isInArray== -1){
    pca_ids.push(document.getElementById(check_item.id).value);
    }
    if(pca_ids.length==0){
    elem.innerHTML = "Approve (Selected PCA)";
    elem2.innerHTML = "Reject (Selected PCA)";
    }else{
    elem.innerHTML = "Approve (Selected PCA: "+pca_ids.length+")";
    elem2.innerHTML = "Reject (Selected PCA: "+pca_ids.length+")";

    
    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = pca_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {pca_ids.splice(i, 1);}
    if(pca_ids.length==0){
    elem.innerHTML = "Approve (Selected PCA)";
    elem2.innerHTML = "Reject (Selected PCA)";
    }else{
    elem.innerHTML = "Approve (Selected PCA: "+pca_ids.length+")";
    elem2.innerHTML = "Reject (Selected PCA: "+pca_ids.length+")";

    
    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
  }
  console.log(pca_ids);
}
function pca_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_ids.length-1; i++){ 
    console.log(pca_ids[i]);  
    var oListItem = oList.getItemById(pca_ids[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}

function pca_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_ids.length-1; i++){ 
    console.log(pca_ids[i]);  
    var oListItem = oList.getItemById(pca_ids[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}

function pca_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_ids.length-1; i++){ 
    console.log(pca_ids[i]);  
    var oListItem = oList.getItemById(pca_ids[i]);  
    oListItem.set_item('Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------PAYMENT/CA REQUEST(CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------PAYMENT/CA REQUEST V3(CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_pca_approve_btn_v3="<a onclick='pca_cb_approve_v3()' id='pca_action_button_v3'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected PCA)</a>";

var html_pca_approve_btn2_v3="<input type='checkbox' id='pca_select_all_ceo_v3' name='Select All'  title='Select All' '/> <label for='pca_select_all_ceo_v3' style='margin-right: 15px;'>Select All </label> <a onclick='pca_cb_approve_test_v3()'  id='pca_action_button_v3'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected PCA)</a>"+
    "<a onclick='pca_cb_reject_test_v3()' id='pca_action_button2_v3'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected PCA)</a>";

var pca_ids_v3=[];
function pca_check_item_v3(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("pca_action_button_v3");
var elem2 = document.getElementById("pca_action_button2_v3");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = pca_ids_v3.indexOf(needle);
    if(isInArray== -1){
    pca_ids_v3.push(document.getElementById(check_item.id).value);
    }
    if(pca_ids_v3.length==0){
    elem.innerHTML = "Approve (Selected PCA)";
    elem2.innerHTML = "Reject (Selected PCA)";
    }else{
    elem.innerHTML = "Approve (Selected PCA: "+pca_ids_v3.length+")";
    elem2.innerHTML = "Reject (Selected PCA: "+pca_ids_v3.length+")";

    
    }
    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    console.log("bulk_total_approval: "+bulk_total_approval);
    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = pca_ids_v3.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {pca_ids_v3.splice(i, 1);}
    if(pca_ids_v3.length==0){
    elem.innerHTML = "Approve (Selected PCA)";
    elem2.innerHTML = "Reject (Selected PCA)";
    }else{
    elem.innerHTML = "Approve (Selected PCA: "+pca_ids_v3.length+")";
    elem2.innerHTML = "Reject (Selected PCA: "+pca_ids_v3.length+")";

    
    }
    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    console.log("bulk_total_approval: "+bulk_total_approval);
    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";

  }
  console.log(pca_ids_v3);
}
function pca_cb_approve_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');//Modify this
    for(var i = 0; i<= pca_ids_v3.length-1; i++){ 
    console.log(pca_ids_v3[i]);  
    var oListItem = oList.getItemById(pca_ids_v3[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}

function pca_cb_approve_test_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');//Modify this
    for(var i = 0; i<= pca_ids_v3.length-1; i++){ 
    console.log(pca_ids_v3[i]);  
    var oListItem = oList.getItemById(pca_ids_v3[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}

function pca_cb_reject_test_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');//Modify this
    for(var i = 0; i<= pca_ids_v3.length-1; i++){ 
    console.log(pca_ids_v3[i]);  
    var oListItem = oList.getItemById(pca_ids_v3[i]);  
    oListItem.set_item('Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------PAYMENT/CA REQUEST V3(CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------PURCHASE ORDER REQUEST (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_por_immediate_approve_btn="<a onclick='por_immediate_cb_approve()' id='por_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected POR)</a>";

var html_por_immediate_approve_btn2="<input type='checkbox' id='por_select_all_imm' name='Select All'  title='Select All' '/> <label for='por_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='por_immediate_cb_approve_test()'  id='por_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected POR)</a>"+
    "<a onclick='por_immediate_cb_reject_test()' id='por_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected POR)</a>";

var por_immediate_ids=[];
function por_immediate_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("por_immediate_action_button");
var elem2 = document.getElementById("por_immediate_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = por_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    por_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(por_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected POR)";
    elem2.innerHTML = "Reject (Selected POR)";
    }else{
    elem.innerHTML = "Approve (Selected POR: "+por_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected POR: "+por_immediate_ids.length+")";
 
    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
   
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = por_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {por_immediate_ids.splice(i, 1);}
    if(por_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected POR)";
    elem2.innerHTML = "Reject (Selected POR)";
    }else{
    elem.innerHTML = "Approve (Selected POR: "+por_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected POR: "+por_immediate_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(por_immediate_ids);
}
function por_immediate_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_immediate_ids.length-1; i++){ 
    console.log(por_immediate_ids[i]);  
    var oListItem = oList.getItemById(por_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function por_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_immediate_ids.length-1; i++){ 
    console.log(por_immediate_ids[i]);  
    var oListItem = oList.getItemById(por_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function por_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_immediate_ids.length-1; i++){ 
    console.log(por_immediate_ids[i]);  
    var oListItem = oList.getItemById(por_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------PURCHASE ORDER REQUEST (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------PURCHASE ORDER REQUEST V3 (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_por_immediate_approve_btn_v3="<a onclick='por_immediate_cb_approve_v3()' id='por_immediate_action_button_v3'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected POR)</a>";

var html_por_immediate_approve_btn2_v3="<input type='checkbox' id='por_select_all_imm_v3' name='Select All'  title='Select All' '/> <label for='por_select_all_imm_v3' style='margin-right: 15px;'>Select All </label> <a onclick='por_immediate_cb_approve_test_v3()'  id='por_immediate_action_button_v3'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected POR)</a>"+
    "<a onclick='por_immediate_cb_reject_test_v3()' id='por_immediate_action_button2_v3'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected POR)</a>";

var por_immediate_ids_v3=[];
function por_immediate_check_item_v3(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("por_immediate_action_button_v3");
var elem2 = document.getElementById("por_immediate_action_button2_v3");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = por_immediate_ids_v3.indexOf(needle);
    if(isInArray== -1){
    por_immediate_ids_v3.push(document.getElementById(check_item.id).value);
    }
    if(por_immediate_ids_v3.length==0){
    elem.innerHTML = "Approve (Selected POR)";
    elem2.innerHTML = "Reject (Selected POR)";
    }else{
    elem.innerHTML = "Approve (Selected POR: "+por_immediate_ids_v3.length+")";
    elem2.innerHTML = "Reject (Selected POR: "+por_immediate_ids_v3.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = por_immediate_ids_v3.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {por_immediate_ids_v3.splice(i, 1);}
    if(por_immediate_ids_v3.length==0){
    elem.innerHTML = "Approve (Selected POR)";
    elem2.innerHTML = "Reject (Selected POR)";
    }else{
    elem.innerHTML = "Approve (Selected POR: "+por_immediate_ids_v3.length+")";
    elem2.innerHTML = "Reject (Selected POR: "+por_immediate_ids_v3.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(por_immediate_ids_v3);
}
function por_immediate_cb_approve_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');//Modify this
    for(var i = 0; i<= por_immediate_ids_v3.length-1; i++){ 
    console.log(por_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(por_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function por_immediate_cb_approve_test_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');//Modify this
    for(var i = 0; i<= por_immediate_ids_v3.length-1; i++){ 
    console.log(por_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(por_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function por_immediate_cb_reject_test_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');//Modify this
    for(var i = 0; i<= por_immediate_ids_v3.length-1; i++){ 
    console.log(por_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(por_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------PURCHASE ORDER REQUEST V3 (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------PURCHASE ORDER REQUEST (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------

var html_por_approve_btn="<a onclick='por_cb_approve()' id='por_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected por)</a>";

var html_por_approve_btn2="<input type='checkbox' id='por_select_all_ceo' name='Select All'  title='Select All' '/> <label for='por_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='por_cb_approve_test()'  id='por_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected POR)</a>"+
    "<a onclick='por_cb_reject_test()' id='por_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected POR)</a>";


var por_ids_2=[];
function por_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("por_action_button");
var elem2 = document.getElementById("por_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = por_ids_2.indexOf(needle);
    if(isInArray== -1){
    por_ids_2.push(document.getElementById(check_item.id).value);
    }
    if(por_ids_2.length==0){
    elem.innerHTML = "Approve (Selected POR)";
    elem2.innerHTML = "Reject (Selected POR)";
    }else{
    elem.innerHTML = "Approve (Selected POR: "+por_ids_2.length+")";
    elem2.innerHTML = "Reject (Selected POR: "+por_ids_2.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = por_ids_2.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {por_ids_2.splice(i, 1);}
    if(por_ids_2.length==0){
    elem.innerHTML = "Approve (Selected POR)";
    elem2.innerHTML = "Reject (Selected POR)";
    }else{
    elem.innerHTML = "Approve (Selected POR: "+por_ids_2.length+")";
    elem2.innerHTML = "Reject (Selected POR: "+por_ids_2.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(por_ids_2);
}
function por_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_ids_2.length-1; i++){ 
    var oListItem = oList.getItemById(por_ids_2[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

}
function por_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_ids_2.length-1; i++){ 
    var oListItem = oList.getItemById(por_ids_2[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

}
function por_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_ids_2.length-1; i++){ 
    var oListItem = oList.getItemById(por_ids_2[i]);  
    oListItem.set_item('Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

}
//--------------PURCHASE ORDER REQUEST (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------PURCHASE ORDER REQUEST V3 (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------

var html_por_approve_btn_v3="<a onclick='por_cb_approve_v3()' id='por_action_button_v3'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected por)</a>";

var html_por_approve_btn2_v3="<input type='checkbox' id='por_select_all_ceo_v3' name='Select All'  title='Select All' '/> <label for='por_select_all_ceo_v3' style='margin-right: 15px;'>Select All </label> <a onclick='por_cb_approve_test_v3()'  id='por_action_button_v3'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected POR)</a>"+
    "<a onclick='por_cb_reject_test_v3()' id='por_action_button2_v3'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected POR)</a>";


var por_ids_2_v3=[];
function por_check_item_v3(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("por_action_button_v3");
var elem2 = document.getElementById("por_action_button2_v3");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = por_ids_2_v3.indexOf(needle);
    if(isInArray== -1){
    por_ids_2_v3.push(document.getElementById(check_item.id).value);
    }
    if(por_ids_2_v3.length==0){
    elem.innerHTML = "Approve (Selected POR)";
    elem2.innerHTML = "Reject (Selected POR)";
    }else{
    elem.innerHTML = "Approve (Selected POR: "+por_ids_2_v3.length+")";
    elem2.innerHTML = "Reject (Selected POR: "+por_ids_2_v3.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = por_ids_2_v3.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {por_ids_2_v3.splice(i, 1);}
    if(por_ids_2_v3.length==0){
    elem.innerHTML = "Approve (Selected POR)";
    elem2.innerHTML = "Reject (Selected POR)";
    }else{
    elem.innerHTML = "Approve (Selected POR: "+por_ids_2_v3.length+")";
    elem2.innerHTML = "Reject (Selected POR: "+por_ids_2_v3.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(por_ids_2_v3);
}
function por_cb_approve_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');//Modify this
    for(var i = 0; i<= por_ids_2_v3.length-1; i++){ 
    var oListItem = oList.getItemById(por_ids_2_v3[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

}
function por_cb_approve_test_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');//Modify this
    for(var i = 0; i<= por_ids_2_v3.length-1; i++){ 
    var oListItem = oList.getItemById(por_ids_2_v3[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

}
function por_cb_reject_test_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');//Modify this
    for(var i = 0; i<= por_ids_2_v3.length-1; i++){ 
    var oListItem = oList.getItemById(por_ids_2_v3[i]);  
    oListItem.set_item('Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

}
//--------------PURCHASE ORDER REQUEST V3 (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------CREDIT CARD PURCHASE (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_ccp_approve_btn="<a onclick='ccp_cb_approve()' id='ccp_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected CCP)</a>";

var html_ccp_approve_btn2="<input type='checkbox' id='ccp_select_all_ceo' name='Select All'  title='Select All' '/> <label for='ccp_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='ccp_cb_approve_test()'  id='ccp_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected CCP)</a>"+
    "<a onclick='ccp_cb_reject_test()' id='ccp_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected CCP)</a>";


var ccp_ids=[];
function ccp_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("ccp_action_button");
var elem2 = document.getElementById("ccp_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = ccp_ids.indexOf(needle);
    if(isInArray== -1){
    ccp_ids.push(document.getElementById(check_item.id).value);
    }
    if(ccp_ids.length==0){
    elem.innerHTML = "Approve (Selected CCP)";
    elem2.innerHTML = "Reject (Selected CCP)";
    }else{
    elem.innerHTML = "Approve (Selected CCP: "+ccp_ids.length+")";
    elem2.innerHTML = "Reject (Selected CCP: "+ccp_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = ccp_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {ccp_ids.splice(i, 1);}
    if(ccp_ids.length==0){
    elem.innerHTML = "Approve (Selected CCP)";
    elem2.innerHTML = "Reject (Selected CCP)";
    }else{
    elem.innerHTML = "Approve (Selected CCP: "+ccp_ids.length+")";
    elem2.innerHTML = "Reject (Selected CCP: "+ccp_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(ccp_ids);
}
function ccp_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Credit Card Purchase');//Modify this
    for(var i = 0; i<= ccp_ids.length-1; i++){ 
    var oListItem = oList.getItemById(ccp_ids[i]);  
    oListItem.set_item('Status0', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function ccp_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Credit Card Purchase');//Modify this
    for(var i = 0; i<= ccp_ids.length-1; i++){ 
    var oListItem = oList.getItemById(ccp_ids[i]);  
    oListItem.set_item('Status0', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function ccp_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Credit Card Purchase');//Modify this
    for(var i = 0; i<= ccp_ids.length-1; i++){ 
    var oListItem = oList.getItemById(ccp_ids[i]);  
    oListItem.set_item('Status0', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//-------------CREDIT CARD PURCHASE (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------IT PURCHASING REQUEST (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_itpr_approve_btn="<a onclick='itpr_cb_approve()' id='itpr_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected ITPR)</a>";

var html_itpr_approve_btn2="<input type='checkbox' id='itpr_select_all_ceo' name='Select All'  title='Select All' '/> <label for='itpr_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='itpr_cb_approve_test()'  id='itpr_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected ITPR)</a>"+
    "<a onclick='itpr_cb_reject_test()' id='itpr_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected ITPR)</a>";

var itpr_ids=[];
function itpr_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("itpr_action_button");
var elem2 = document.getElementById("itpr_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = itpr_ids.indexOf(needle);
    //console.log(isInArray);
    if(isInArray== -1){
    itpr_ids.push(document.getElementById(check_item.id).value);
    }
    if(itpr_ids.length==0){
    elem.innerHTML = "Approve (Selected ITPR)";
    elem2.innerHTML = "Reject (Selected ITPR)";
    }else{
    elem.innerHTML = "Approve (Selected ITPR: "+itpr_ids.length+")";
    elem2.innerHTML = "Reject (Selected ITPR: "+itpr_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    

  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = itpr_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {itpr_ids.splice(i, 1);}
    if(itpr_ids.length==0){
    elem.innerHTML = "Approve (Selected ITPR)";
    elem2.innerHTML = "Reject (Selected ITPR)";
    }else{
    elem.innerHTML = "Approve (Selected ITPR: "+itpr_ids.length+")";
    elem2.innerHTML = "Reject (Selected ITPR: "+itpr_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(itpr_ids);
}
function itpr_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('IT Purchasing Request');//Modify this
    for(var i = 0; i<= itpr_ids.length-1; i++){ 
    var oListItem = oList.getItemById(itpr_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function itpr_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('IT Purchasing Request');//Modify this
    for(var i = 0; i<= itpr_ids.length-1; i++){ 
    var oListItem = oList.getItemById(itpr_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function itpr_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('IT Purchasing Request');//Modify this
    for(var i = 0; i<= itpr_ids.length-1; i++){ 
    var oListItem = oList.getItemById(itpr_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//-------------IT PURCHASING REQUEST (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------SALARY / DEVICE LOAN (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_sdl_immediate_approve_btn="<a onclick='sdl_immediate_cb_approve()' id='sdl_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected SDL)</a>";

var html_sdl_immediate_approve_btn2="<input type='checkbox' id='sdl_select_all_imm' name='Select All'  title='Select All' '/> <label for='sdl_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='sdl_immediate_cb_approve_test()'  id='sdl_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected SDL)</a>"+
    "<a onclick='sdl_immediate_cb_reject_test()' id='sdl_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected SDL)</a>";

var sdl_immediate_ids=[];
function sdl_immediate_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("sdl_immediate_action_button");
var elem2 = document.getElementById("sdl_immediate_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = sdl_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    sdl_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(sdl_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected SDL)";
    elem2.innerHTML = "Reject (Selected SDL)";
    }else{
    elem.innerHTML = "Approve (Selected SDL: "+sdl_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected SDL: "+sdl_immediate_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = sdl_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {sdl_immediate_ids.splice(i, 1);}
    if(sdl_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected SDL)";
    elem2.innerHTML = "Reject (Selected SDL)";
    }else{
    elem.innerHTML = "Approve (Selected SDL: "+sdl_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected SDL: "+sdl_immediate_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(sdl_immediate_ids);
}
function sdl_immediate_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids.length-1; i++){ 
    console.log(sdl_immediate_ids[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sdl_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids.length-1; i++){ 
    console.log(sdl_immediate_ids[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sdl_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids.length-1; i++){ 
    console.log(sdl_immediate_ids[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------SALARY / DEVICE LOAN (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------SALARY / DEVICE LOAN (CEO IMMEDIATE HEAD APPROVAL) V2--------------------------------------------------------------------------------------------------------------------------
var html_sdl_immediate_approve_btn_v2="<a onclick='sdl_immediate_cb_approve_v2()' id='sdl_immediate_action_button_v2'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected SDL)</a>";

var html_sdl_immediate_approve_btn2_v2="<input type='checkbox' id='sdl_select_all_imm_v2' name='Select All'  title='Select All' '/> <label for='sdl_select_all_imm_v2' style='margin-right: 15px;'>Select All </label> <a onclick='sdl_immediate_cb_approve_test_v2()'  id='sdl_immediate_action_button_v2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected SDL)</a>"+
    "<a onclick='sdl_immediate_cb_reject_test_v2()' id='sdl_immediate_action_button2_v2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected SDL)</a>";

var sdl_immediate_ids_v2=[];
function sdl_immediate_check_item_v2(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("sdl_immediate_action_button_v2");
var elem2 = document.getElementById("sdl_immediate_action_button2_v2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = sdl_immediate_ids_v2.indexOf(needle);
    if(isInArray== -1){
    sdl_immediate_ids_v2.push(document.getElementById(check_item.id).value);
    }
    if(sdl_immediate_ids_v2.length==0){
    elem.innerHTML = "Approve (Selected SDL)";
    elem2.innerHTML = "Reject (Selected SDL)";
    }else{
    elem.innerHTML = "Approve (Selected SDL: "+sdl_immediate_ids_v2.length+")";
    elem2.innerHTML = "Reject (Selected SDL: "+sdl_immediate_ids_v2.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = sdl_immediate_ids_v2.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {sdl_immediate_ids_v2.splice(i, 1);}
    if(sdl_immediate_ids_v2.length==0){
    elem.innerHTML = "Approve (Selected SDL)";
    elem2.innerHTML = "Reject (Selected SDL)";
    }else{
    elem.innerHTML = "Approve (Selected SDL: "+sdl_immediate_ids_v2.length+")";
    elem2.innerHTML = "Reject (Selected SDL: "+sdl_immediate_ids_v2.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(sdl_immediate_ids_v2);
}
function sdl_immediate_cb_approve_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids_v2.length-1; i++){ 
    console.log(sdl_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids_v2[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sdl_immediate_cb_approve_test_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids_v2.length-1; i++){ 
    console.log(sdl_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids_v2[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sdl_immediate_cb_reject_test_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids_v2.length-1; i++){ 
    console.log(sdl_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids_v2[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------SALARY / DEVICE LOAN (CEO IMMEDIATE HEAD APPROVAL) V2 --------------------------------------------------------------------------------------------------------------------------

//--------------SALARY / DEVICE LOAN (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_sdl_approve_btn="<a onclick='sdl_cb_approve()' id='sdl_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected SDL)</a>";

var html_sdl_approve_btn2="<input type='checkbox' id='sdl_select_all_ceo' name='Select All'  title='Select All' '/> <label for='sdl_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='sdl_cb_approve_test()'  id='sdl_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected SDL)</a>"+
    "<a onclick='sdl_cb_reject_test()' id='sdl_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected SDL)</a>";

var sdl_ids=[];
function sdl_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("sdl_action_button");
var elem2 = document.getElementById("sdl_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = sdl_ids.indexOf(needle);
    if(isInArray== -1){
    sdl_ids.push(document.getElementById(check_item.id).value);
    }
    if(sdl_ids.length==0){
    elem.innerHTML = "Approve (Selected SDL)";
    elem2.innerHTML = "Reject (Selected SDL)";
    }else{
    elem.innerHTML = "Approve (Selected SDL: "+sdl_ids.length+")";
    elem2.innerHTML = "Reject (Selected SDL: "+sdl_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = sdl_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {sdl_ids.splice(i, 1);}
    if(sdl_ids.length==0){
    elem.innerHTML = "Approve (Selected SDL)";
    elem2.innerHTML = "Reject (Selected SDL)";
    }else{
    elem.innerHTML = "Approve (Selected SDL: "+sdl_ids.length+")";
    elem2.innerHTML = "Reject (Selected SDL: "+sdl_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(sdl_ids);
}
function sdl_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids.length-1; i++){ 
    //console.log(sdl_ids[i]);  
    var oListItem = oList.getItemById(sdl_ids[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sdl_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids.length-1; i++){ 
    //console.log(sdl_ids[i]);  
    var oListItem = oList.getItemById(sdl_ids[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sdl_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids.length-1; i++){ 
    //console.log(sdl_ids[i]);  
    var oListItem = oList.getItemById(sdl_ids[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------SALARY / DEVICE LOAN (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------SALARY / DEVICE LOAN (CEO PENDING APPROVAL) V2--------------------------------------------------------------------------------------------------------------------------
var html_sdl_approve_btn_v2="<a onclick='sdl_cb_approve_v2()' id='sdl_action_button_v2'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected SDL)</a>";

var html_sdl_approve_btn2_v2="<input type='checkbox' id='sdl_select_all_ceo_v2' name='Select All'  title='Select All' '/> <label for='sdl_select_all_ceo_v2' style='margin-right: 15px;'>Select All </label> <a onclick='sdl_cb_approve_test_v2()'  id='sdl_action_button_v2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected SDL)</a>"+
    "<a onclick='sdl_cb_reject_test_v2()' id='sdl_action_button2_v2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected SDL)</a>";

var sdl_ids_v2=[];
function sdl_check_item_v2(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("sdl_action_button_v2");
var elem2 = document.getElementById("sdl_action_button2_v2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = sdl_ids_v2.indexOf(needle);
    if(isInArray== -1){
    sdl_ids_v2.push(document.getElementById(check_item.id).value);
    }
    if(sdl_ids_v2.length==0){
    elem.innerHTML = "Approve (Selected SDL)";
    elem2.innerHTML = "Reject (Selected SDL)";
    }else{
    elem.innerHTML = "Approve (Selected SDL: "+sdl_ids_v2.length+")";
    elem2.innerHTML = "Reject (Selected SDL: "+sdl_ids_v2.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = sdl_ids_v2.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {sdl_ids_v2.splice(i, 1);}
    if(sdl_ids_v2.length==0){
    elem.innerHTML = "Approve (Selected SDL)";
    elem2.innerHTML = "Reject (Selected SDL)";
    }else{
    elem.innerHTML = "Approve (Selected SDL: "+sdl_ids_v2.length+")";
    elem2.innerHTML = "Reject (Selected SDL: "+sdl_ids_v2.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(sdl_ids_v2);
}
function sdl_cb_approve_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids_v2.length-1; i++){ 
    //console.log(sdl_ids_v2[i]);  
    var oListItem = oList.getItemById(sdl_ids_v2[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sdl_cb_approve_test_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids_v2.length-1; i++){ 
    console.log(sdl_ids_v2[i]);  
    var oListItem = oList.getItemById(sdl_ids_v2[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sdl_cb_reject_test_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids_v2.length-1; i++){ 
    console.log(sdl_ids_v2[i]);  
    var oListItem = oList.getItemById(sdl_ids_v2[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------SALARY / DEVICE LOAN (CEO PENDING APPROVAL) V2--------------------------------------------------------------------------------------------------------------------------


//--------------MANPOWER REQUEST (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_mrf_approve_btn="<a onclick='mrf_cb_approve()' id='mrf_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected MRF)</a>";

var html_mrf_approve_btn2="<input type='checkbox' id='mrf_select_all_ceo' name='Select All'  title='Select All' '/> <label for='mrf_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='mrf_cb_approve_test()'  id='mrf_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected MRF)</a>"+
    "<a onclick='mrf_cb_reject_test()' id='mrf_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected MRF)</a>";

var mrf_ids=[];
function mrf_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("mrf_action_button");
var elem2 = document.getElementById("mrf_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = mrf_ids.indexOf(needle);
    if(isInArray== -1){
    mrf_ids.push(document.getElementById(check_item.id).value);
    }
    if(mrf_ids.length==0){
    elem.innerHTML = "Approve (Selected MRF)";
    elem2.innerHTML = "Reject (Selected MRF)";
    }else{
    elem.innerHTML = "Approve (Selected MRF: "+mrf_ids.length+")";
    elem2.innerHTML = "Reject (Selected MRF: "+mrf_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = mrf_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {mrf_ids.splice(i, 1);}
    if(mrf_ids.length==0){
    elem.innerHTML = "Approve (Selected MRF)";
    elem2.innerHTML = "Reject (Selected MRF)";
    }else{
    elem.innerHTML = "Approve (Selected MRF: "+mrf_ids.length+")";
    elem2.innerHTML = "Reject (Selected MRF: "+mrf_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(mrf_ids);
}
function mrf_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Manpower Requests');//Modify this
    for(var i = 0; i<= mrf_ids.length-1; i++){ 
    console.log(mrf_ids[i]);  
    var oListItem = oList.getItemById(mrf_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function mrf_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Manpower Requests');//Modify this
    for(var i = 0; i<= mrf_ids.length-1; i++){ 
    //console.log(mrf_ids[i]);  
    var oListItem = oList.getItemById(mrf_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function mrf_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Manpower Requests');//Modify this
    for(var i = 0; i<= mrf_ids.length-1; i++){ 
    //console.log(mrf_ids[i]);  
    var oListItem = oList.getItemById(mrf_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------MANPOWER REQUEST(CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//-------------LIQUIDATION FORM (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_lqf_immediate_approve_btn="<a onclick='lqf_immediate_cb_approve()' id='lqf_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected LQF)</a>";

var html_lqf_immediate_approve_btn2="<input type='checkbox' id='lqf_select_all_imm' name='Select All'  title='Select All' '/> <label for='lqf_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='lqf_immediate_cb_approve_test()'  id='lqf_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected LQF)</a>"+
    "<a onclick='lqf_immediate_cb_reject_test()' id='lqf_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected LQF)</a>";

var lqf_immediate_ids=[];
function lqf_immediate_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("lqf_immediate_action_button");
var elem2 = document.getElementById("lqf_immediate_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = lqf_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    lqf_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(lqf_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected LQF)";
    elem.innerHTML = "Reject (Selected LQF)";
    }else{
    elem.innerHTML = "Approve (Selected LQF: "+lqf_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected LQF: "+lqf_immediate_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = lqf_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {lqf_immediate_ids.splice(i, 1);}
    if(lqf_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected LQF)";
    elem2.innerHTML = "Reject (Selected LQF)";
    }else{
    elem.innerHTML = "Approve (Selected LQF: "+lqf_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected LQF: "+lqf_immediate_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(lqf_immediate_ids);
}
function lqf_immediate_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Liquidation Form');//Modify this
    for(var i = 0; i<= lqf_immediate_ids.length-1; i++){ 
    console.log(lqf_immediate_ids[i]);  
    var oListItem = oList.getItemById(lqf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function lqf_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Liquidation Form');//Modify this
    for(var i = 0; i<= lqf_immediate_ids.length-1; i++){ 
    console.log(lqf_immediate_ids[i]);  
    var oListItem = oList.getItemById(lqf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function lqf_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Liquidation Form');//Modify this
    for(var i = 0; i<= lqf_immediate_ids.length-1; i++){ 
    console.log(lqf_immediate_ids[i]);  
    var oListItem = oList.getItemById(lqf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------LIQUIDATION FORM (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//-------------FORECASTED (CEO APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_fbp_approve_btn="<a onclick='fbp_cb_approve()' id='fbp_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected FBP)</a>";
/*
var html_fbp_approve_btn2="<input type='checkbox' id='fbp_select_all_ceo' name='Select All'  title='Select All' '/> <label for='fbp_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='fbp_cb_approve_test()'  id='fbp_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected FBP)</a>"+
    "<a onclick='fbp_cb_reject_test()' id='fbp_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected FBP)</a>";*/

    var html_fbp_approve_btn2="<input type='checkbox' id='fbp_select_all_ceo' name='Select All'  title='Select All' '/> <label for='fbp_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='fbp_cb_approve_test()'  id='fbp_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected FBP)</a>";



var fbp_ids=[];
function fbp_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("fbp_action_button");
var elem2 = document.getElementById("fbp_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = fbp_ids.indexOf(needle);
    if(isInArray== -1){
    fbp_ids.push(document.getElementById(check_item.id).value);
    }
    if(fbp_ids.length==0){
    elem.innerHTML = "Approve (Selected FBP)";
    elem2.innerHTML = "Reject (Selected FBP)";
    }else{
    elem.innerHTML = "Approve (Selected FBP: "+fbp_ids.length+")";
    elem2.innerHTML = "Reject (Selected FBP: "+fbp_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = fbp_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {fbp_ids.splice(i, 1);}
    if(fbp_ids.length==0){
    elem.innerHTML = "Approve (Selected FBP)";
    elem2.innerHTML = "Reject (Selected FBP)";
    }else{
    elem.innerHTML = "Approve (Selected FBP: "+fbp_ids.length+")";
    elem2.innerHTML = "Reject (Selected FBP: "+fbp_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(fbp_ids);
}
function fbp_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Forecasted Budget Plan');//Modify this
    for(var i = 0; i<= fbp_ids.length-1; i++){ 
    console.log(fbp_ids[i]);  
    var oListItem = oList.getItemById(fbp_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function fbp_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Forecasted Budget Plan');//Modify this
    for(var i = 0; i<= fbp_ids.length-1; i++){ 
    console.log(fbp_ids[i]);  
    var oListItem = oList.getItemById(fbp_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function fbp_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Forecasted Budget Plan');//Modify this
    for(var i = 0; i<= fbp_ids.length-1; i++){ 
    console.log(fbp_ids[i]);  
    var oListItem = oList.getItemById(fbp_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------FORECASTED(CEO APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------Reimbursement Form (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_rbf_immediate_approve_btn="<a onclick='rbf_immediate_cb_approve()' id='rbf_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected RBF)</a>";

var html_rbf_immediate_approve_btn2="<input type='checkbox' id='rbf_select_all_imm' name='Select All'  title='Select All' '/> <label for='rbf_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='rbf_immediate_cb_approve_test()'  id='rbf_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected RBF)</a>"+
    "<a onclick='rbf_immediate_cb_reject_test()' id='rbf_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected RBF)</a>";

var rbf_immediate_ids=[];
function rbf_immediate_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("rbf_immediate_action_button");
var elem2 = document.getElementById("rbf_immediate_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = rbf_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    rbf_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(rbf_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected RBF)";
    elem2.innerHTML = "Reject (Selected RBF)";
    }else{
    elem.innerHTML = "Approve (Selected RBF: "+rbf_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected RBF: "+rbf_immediate_ids.length+")";

    console.log("log");

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = rbf_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {rbf_immediate_ids.splice(i, 1);}
    if(rbf_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected RBF)";
    elem2.innerHTML = "Reject (Selected RBF)";
    }else{
    elem.innerHTML = "Approve (Selected RBF: "+rbf_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected RBF: "+rbf_immediate_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(rbf_immediate_ids);
}
function rbf_immediate_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids.length-1; i++){ 
    console.log(rbf_immediate_ids[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function rbf_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids.length-1; i++){ 
    console.log(rbf_immediate_ids[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function rbf_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids.length-1; i++){ 
    console.log(rbf_immediate_ids[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------Reimbursement Form (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------Reimbursement Form V3 (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_rbf_immediate_approve_btn_v3="<a onclick='rbf_immediate_cb_approve_v3()' id='rbf_immediate_action_button_v3'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected RBF)</a>";

var html_rbf_immediate_approve_btn2_v3="<input type='checkbox' id='rbf_select_all_imm_v3' name='Select All'  title='Select All' '/> <label for='rbf_select_all_imm_v3' style='margin-right: 15px;'>Select All </label> <a onclick='rbf_immediate_cb_approve_test_v3()'  id='rbf_immediate_action_button_v3'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected RBF)</a>"+
    "<a onclick='rbf_immediate_cb_reject_test_v3()' id='rbf_immediate_action_button2_v3'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected RBF)</a>";

var rbf_immediate_ids_v3=[];
function rbf_immediate_check_item_v3(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("rbf_immediate_action_button_v3");
var elem2 = document.getElementById("rbf_immediate_action_button2_v3");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = rbf_immediate_ids_v3.indexOf(needle);
    if(isInArray== -1){
    rbf_immediate_ids_v3.push(document.getElementById(check_item.id).value);
    }
    if(rbf_immediate_ids_v3.length==0){
    elem.innerHTML = "Approve (Selected RBF)";
    elem2.innerHTML = "Reject (Selected RBF)";
    }else{
    elem.innerHTML = "Approve (Selected RBF: "+rbf_immediate_ids_v3.length+")";
    elem2.innerHTML = "Reject (Selected RBF: "+rbf_immediate_ids_v3.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = rbf_immediate_ids_v3.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {rbf_immediate_ids_v3.splice(i, 1);}
    if(rbf_immediate_ids_v3.length==0){
    elem.innerHTML = "Approve (Selected RBF)";
    elem2.innerHTML = "Reject (Selected RBF)";
    }else{
    elem.innerHTML = "Approve (Selected RBF: "+rbf_immediate_ids_v3.length+")";
    elem2.innerHTML = "Reject (Selected RBF: "+rbf_immediate_ids_v3.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(rbf_immediate_ids_v3);
}
function rbf_immediate_cb_approve_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids_v3.length-1; i++){ 
    console.log(rbf_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function rbf_immediate_cb_approve_test_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids_v3.length-1; i++){ 
    console.log(rbf_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function rbf_immediate_cb_reject_test_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids_v3.length-1; i++){ 
    console.log(rbf_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------Reimbursement Form V3 (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------Reimbursement Form (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_rbf_approve_btn="<a onclick='rbf_cb_approve()' id='rbf_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected RBF)</a>";

var html_rbf_approve_btn2="<input type='checkbox' id='rbf_select_all_ceo' name='Select All'  title='Select All' '/> <label for='rbf_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='rbf_cb_approve_test()'  id='rbf_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected RBF)</a>"+
    "<a onclick='rbf_cb_reject_test()' id='rbf_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected RBF)</a>";

var rbf_ids=[];
function rbf_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("rbf_action_button");
var elem2 = document.getElementById("rbf_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = rbf_ids.indexOf(needle);
    if(isInArray== -1){
    rbf_ids.push(document.getElementById(check_item.id).value);
    }
    if(rbf_ids.length==0){
    elem.innerHTML = "Approve (Selected RBF)";
    elem2.innerHTML = "Reject (Selected RBF)";
    }else{
    elem.innerHTML = "Approve (Selected RBF: "+rbf_ids.length+")";
    elem2.innerHTML = "Reject (Selected RBF: "+rbf_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = rbf_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {rbf_ids.splice(i, 1);}
    if(rbf_ids.length==0){
    elem.innerHTML = "Approve (Selected RBF)";
    elem2.innerHTML = "Reject (Selected RBF)";
    }else{
    elem.innerHTML = "Approve (Selected RBF: "+rbf_ids.length+")";
    elem2.innerHTML = "Reject (Selected RBF: "+rbf_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(rbf_ids);
}
function rbf_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_ids.length-1; i++){ 
    //console.log(rbf_ids[i]);  
    var oListItem = oList.getItemById(rbf_ids[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function rbf_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_ids.length-1; i++){ 
    //console.log(rbf_ids[i]);  
    var oListItem = oList.getItemById(rbf_ids[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function rbf_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_ids.length-1; i++){ 
    //console.log(rbf_ids[i]);  
    var oListItem = oList.getItemById(rbf_ids[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------Reimbursement Form (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------Reimbursement Form V3 (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_rbf_approve_btn_v3="<a onclick='rbf_cb_approve_v3()' id='rbf_action_button_v3'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected RBF)</a>";

var html_rbf_approve_btn2_v3="<input type='checkbox' id='rbf_select_all_ceo_v3' name='Select All'  title='Select All' '/> <label for='rbf_select_all_ceo_v3' style='margin-right: 15px;'>Select All </label> <a onclick='rbf_cb_approve_test_v3()'  id='rbf_action_button_v3'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected RBF)</a>"+
    "<a onclick='rbf_cb_reject_test_v3()' id='rbf_action_button2_v3'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected RBF)</a>";

var rbf_ids_v3=[];
function rbf_check_item_v3(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("rbf_action_button_v3");
var elem2 = document.getElementById("rbf_action_button2_v3");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = rbf_ids_v3.indexOf(needle);
    if(isInArray== -1){
    rbf_ids_v3.push(document.getElementById(check_item.id).value);
    }
    if(rbf_ids_v3.length==0){
    elem.innerHTML = "Approve (Selected RBF)";
    elem2.innerHTML = "Reject (Selected RBF)";
    }else{
    elem.innerHTML = "Approve (Selected RBF: "+rbf_ids_v3.length+")";
    elem2.innerHTML = "Reject (Selected RBF: "+rbf_ids_v3.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = rbf_ids_v3.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {rbf_ids_v3.splice(i, 1);}
    if(rbf_ids_v3.length==0){
    elem.innerHTML = "Approve (Selected RBF)";
    elem2.innerHTML = "Reject (Selected RBF)";
    }else{
    elem.innerHTML = "Approve (Selected RBF: "+rbf_ids_v3.length+")";
    elem2.innerHTML = "Reject (Selected RBF: "+rbf_ids_v3.length+")";
 
    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
   
  }
  console.log(rbf_ids_v3);
}
function rbf_cb_approve_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');//Modify this
    for(var i = 0; i<= rbf_ids_v3.length-1; i++){ 
    //console.log(rbf_ids[i]);  
    var oListItem = oList.getItemById(rbf_ids_v3[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function rbf_cb_approve_test_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');//Modify this
    for(var i = 0; i<= rbf_ids_v3.length-1; i++){ 
    //console.log(rbf_ids[i]);  
    var oListItem = oList.getItemById(rbf_ids_v3[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function rbf_cb_reject_test_v3() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');//Modify this
    for(var i = 0; i<= rbf_ids_v3.length-1; i++){ 
    //console.log(rbf_ids[i]);  
    var oListItem = oList.getItemById(rbf_ids_v3[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------Reimbursement Form V3 (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------TRAVEL BENEFIT (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_tbr_immediate_approve_btn="<a onclick='tbr_immediate_cb_approve()' id='tbr_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected TBR)</a>";

var html_tbr_immediate_approve_btn2="<input type='checkbox' id='tbr_select_all_imm' name='Select All'  title='Select All' '/> <label for='tbr_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='tbr_immediate_cb_approve_test()'  id='tbr_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected TBR)</a>"+
    "<a onclick='tbr_immediate_cb_reject_test()' id='tbr_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected TBR)</a>";

var tbr_immediate_ids=[];
function tbr_immediate_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("tbr_immediate_action_button");
var elem2 = document.getElementById("tbr_immediate_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = tbr_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    tbr_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(tbr_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected TBR)";
    elem2.innerHTML = "Reject (Selected TBR)";
    }else{
    elem.innerHTML = "Approve (Selected TBR: "+tbr_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected TBR: "+tbr_immediate_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = tbr_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {tbr_immediate_ids.splice(i, 1);}
    if(tbr_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected TBR)";
    elem2.innerHTML = "Reject (Selected TBR)";
    }else{
    elem.innerHTML = "Approve (Selected TBR: "+tbr_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected TBR: "+tbr_immediate_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(tbr_immediate_ids);
}
function tbr_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');//Modify this
    for(var i = 0; i<= tbr_immediate_ids.length-1; i++){ 
    console.log(tbr_immediate_ids[i]);  
    var oListItem = oList.getItemById(tbr_immediate_ids[i]);  
    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function tbr_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');//Modify this
    for(var i = 0; i<= tbr_immediate_ids.length-1; i++){ 
    console.log(tbr_immediate_ids[i]);  
    var oListItem = oList.getItemById(tbr_immediate_ids[i]);  
    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------TRAVEL BENEFIT (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------TRAVEL BENEFIT (CEO IMMEDIATE HEAD APPROVAL) V2--------------------------------------------------------------------------------------------------------------------------
var html_tbr_immediate_approve_btn_v2="<a onclick='tbr_immediate_cb_approve_v2()' id='tbr_immediate_action_button_v2'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected TBR)</a>";

var html_tbr_immediate_approve_btn2_v2="<input type='checkbox' id='tbr_select_all_imm_v2' name='Select All'  title='Select All' '/> <label for='tbr_select_all_imm_v2' style='margin-right: 15px;'>Select All </label> <a onclick='tbr_immediate_cb_approve_test_v2()'  id='tbr_immediate_action_button_v2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected TBR)</a>"+
    "<a onclick='tbr_immediate_cb_reject_test_v2()' id='tbr_immediate_action_button2_v2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected TBR)</a>";

var tbr_immediate_ids_v2=[];
function tbr_immediate_check_item_v2(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("tbr_immediate_action_button_v2");
var elem2 = document.getElementById("tbr_immediate_action_button2_v2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = tbr_immediate_ids_v2.indexOf(needle);
    if(isInArray== -1){
    tbr_immediate_ids_v2.push(document.getElementById(check_item.id).value);
    }
    if(tbr_immediate_ids_v2.length==0){
    elem.innerHTML = "Approve (Selected TBR)";
    elem2.innerHTML = "Reject (Selected TBR)";
    }else{
    elem.innerHTML = "Approve (Selected TBR: "+tbr_immediate_ids_v2.length+")";
    elem2.innerHTML = "Reject (Selected TBR: "+tbr_immediate_ids_v2.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = tbr_immediate_ids_v2.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {tbr_immediate_ids_v2.splice(i, 1);}
    if(tbr_immediate_ids_v2.length==0){
    elem.innerHTML = "Approve (Selected TBR)";
    elem2.innerHTML = "Reject (Selected TBR)";
    }else{
    elem.innerHTML = "Approve (Selected TBR: "+tbr_immediate_ids_v2.length+")";
    elem2.innerHTML = "Reject (Selected TBR: "+tbr_immediate_ids_v2.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(tbr_immediate_ids_v2);
}
function tbr_immediate_cb_approve_test_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit Request');//Modify this
    for(var i = 0; i<= tbr_immediate_ids_v2.length-1; i++){ 
    console.log(tbr_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(tbr_immediate_ids_v2[i]);  
    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function tbr_immediate_cb_reject_test_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit Request');//Modify this
    for(var i = 0; i<= tbr_immediate_ids_v2.length-1; i++){ 
    console.log(tbr_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(tbr_immediate_ids_v2[i]);  
    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------TRAVEL BENEFIT (CEO IMMEDIATE HEAD APPROVAL) V2--------------------------------------------------------------------------------------------------------------------------

//--------------TRAVEL BENEFIT (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_tbr_approve_btn="<a onclick='tbr_cb_approve()' id='tbr_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected TBR)</a>";

var html_tbr_approve_btn2="<input type='checkbox' id='tbr_select_all_ceo' name='Select All'  title='Select All' '/> <label for='tbr_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='tbr_cb_approve_test()'  id='tbr_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected TBR)</a>"+
    "<a onclick='tbr_cb_reject_test()' id='tbr_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected TBR)</a>";

var tbr_ids=[];
function tbr_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("tbr_action_button");
var elem2 = document.getElementById("tbr_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = tbr_ids.indexOf(needle);
    if(isInArray== -1){
    tbr_ids.push(document.getElementById(check_item.id).value);
    }
    if(tbr_ids.length==0){
    elem.innerHTML = "Approve (Selected TBR)";
    elem2.innerHTML = "Reject (Selected TBR)";
    }else{
    elem.innerHTML = "Approve (Selected TBR: "+tbr_ids.length+")";
    elem2.innerHTML = "Reject (Selected TBR: "+tbr_ids.length+")";


    }
    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = tbr_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {tbr_ids.splice(i, 1);}
    if(tbr_ids.length==0){
    elem.innerHTML = "Approve (Selected TBR)";
    elem2.innerHTML = "Reject (Selected TBR)";
    }else{
    elem.innerHTML = "Approve (Selected TBR: "+tbr_ids.length+")";
    elem2.innerHTML = "Reject (Selected TBR: "+tbr_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(tbr_ids);
}

function tbr_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');//Modify this
    for(var i = 0; i<= tbr_ids.length-1; i++){ 
    //console.log(tbr_ids[i]);  
    var oListItem = oList.getItemById(tbr_ids[i]);  
    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function tbr_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');//Modify this
    for(var i = 0; i<= tbr_ids.length-1; i++){ 
    //console.log(tbr_ids[i]);  
    var oListItem = oList.getItemById(tbr_ids[i]);  
    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------TRAVEL BENEFIT (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------TRAVEL BENEFIT (CEO PENDING APPROVAL) V2--------------------------------------------------------------------------------------------------------------------------
var html_tbr_approve_btn_v2="<a onclick='tbr_cb_approve_v2()' id='tbr_action_button_v2'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected TBR)</a>";

var html_tbr_approve_btn2_v2="<input type='checkbox' id='tbr_select_all_ceo_v2' name='Select All'  title='Select All' '/> <label for='tbr_select_all_ceo_v2' style='margin-right: 15px;'>Select All </label> <a onclick='tbr_cb_approve_test_v2()'  id='tbr_action_button_v2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected TBR)</a>"+
    "<a onclick='tbr_cb_reject_test_v2()' id='tbr_action_button2_v2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected TBR)</a>";

var tbr_ids_v2=[];
function tbr_check_item_v2(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("tbr_action_button_v2");
var elem2 = document.getElementById("tbr_action_button2_v2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = tbr_ids_v2.indexOf(needle);
    if(isInArray== -1){
    tbr_ids_v2.push(document.getElementById(check_item.id).value);
    }
    if(tbr_ids_v2.length==0){
    elem.innerHTML = "Approve (Selected TBR)";
    elem2.innerHTML = "Reject (Selected TBR)";
    }else{
    elem.innerHTML = "Approve (Selected TBR: "+tbr_ids_v2.length+")";
    elem2.innerHTML = "Reject (Selected TBR: "+tbr_ids_v2.length+")";


    }
    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = tbr_ids_v2.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {tbr_ids_v2.splice(i, 1);}
    if(tbr_ids_v2.length==0){
    elem.innerHTML = "Approve (Selected TBR)";
    elem2.innerHTML = "Reject (Selected TBR)";
    }else{
    elem.innerHTML = "Approve (Selected TBR: "+tbr_ids_v2.length+")";
    elem2.innerHTML = "Reject (Selected TBR: "+tbr_ids_v2.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(tbr_ids_v2);
}

function tbr_cb_approve_test_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit Request');//Modify this
    for(var i = 0; i<= tbr_ids_v2.length-1; i++){ 
    //console.log(tbr_ids_v2[i]);  
    var oListItem = oList.getItemById(tbr_ids_v2[i]);  
    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function tbr_cb_reject_test_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit Request');//Modify this
    for(var i = 0; i<= tbr_ids_v2.length-1; i++){ 
    //console.log(tbr_ids_v2[i]);  
    var oListItem = oList.getItemById(tbr_ids_v2[i]);  
    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------TRAVEL BENEFIT (CEO PENDING APPROVAL) V2--------------------------------------------------------------------------------------------------------------------------


//--------------EDUCATIONAL BENEFIT (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_ebf_approve_btn="<a onclick='ebf_cb_approve()' id='ebf_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected EBF)</a>";

var html_ebf_approve_btn2="<input type='checkbox' id='ebf_select_all_ceo' name='Select All'  title='Select All' '/> <label for='ebf_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='ebf_cb_approve_test()'  id='ebf_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected EBF)</a>"+
    "<a onclick='ebf_cb_reject_test()' id='ebf_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected EBF)</a>";

var ebf_ids=[];
function ebf_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("ebf_action_button");
var elem2 = document.getElementById("ebf_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = ebf_ids.indexOf(needle);
    if(isInArray== -1){
    ebf_ids.push(document.getElementById(check_item.id).value);
    }
    if(ebf_ids.length==0){
    elem.innerHTML = "Approve (Selected EBF)";
    elem2.innerHTML = "Reject (Selected EBF)";
    }else{
    elem.innerHTML = "Approve (Selected EBF: "+ebf_ids.length+")";
    elem2.innerHTML = "Reject (Selected EBF: "+ebf_ids.length+")";


    }
    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = ebf_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {ebf_ids.splice(i, 1);}
    if(ebf_ids.length==0){
    elem.innerHTML = "Approve (Selected EBF)";
    elem2.innerHTML = "Reject (Selected EBF)";
    }else{
    elem.innerHTML = "Approve (Selected EBF: "+ebf_ids.length+")";
    elem2.innerHTML = "Reject (Selected EBF: "+ebf_ids.length+")";


    }
    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(ebf_ids);
}

function ebf_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit');//Modify this
    for(var i = 0; i<= ebf_ids.length-1; i++){ 
    //console.log(ebf_ids[i]);  
    var oListItem = oList.getItemById(ebf_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.set_item('Status', 'CEO APPROVED');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function ebf_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit');//Modify this
    for(var i = 0; i<= ebf_ids.length-1; i++){ 
    //console.log(ebf_ids[i]);  
    var oListItem = oList.getItemById(ebf_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    oListItem.set_item('Status', 'CEO REJECTED');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------EDUCATIONAL BENEFIT (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------EDUCATIONAL BENEFIT (CEO PENDING APPROVAL) V2--------------------------------------------------------------------------------------------------------------------------
var html_ebf_approve_btn_v2="<a onclick='ebf_cb_approve_v2()' id='ebf_action_button_v2'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected EBF)</a>";

var html_ebf_approve_btn2_v2="<input type='checkbox' id='ebf_select_all_ceo_v2' name='Select All'  title='Select All' '/> <label for='ebf_select_all_ceo_v2' style='margin-right: 15px;'>Select All </label> <a onclick='ebf_cb_approve_test_v2()'  id='ebf_action_button_v2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected EBF)</a>"+
    "<a onclick='ebf_cb_reject_test_v2()' id='ebf_action_button2_v2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected EBF)</a>";

var ebf_ids_v2=[];
function ebf_check_item_v2(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("ebf_action_button_v2");
var elem2 = document.getElementById("ebf_action_button2_v2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = ebf_ids_v2.indexOf(needle);
    if(isInArray== -1){
    ebf_ids_v2.push(document.getElementById(check_item.id).value);
    }
    if(ebf_ids_v2.length==0){
    elem.innerHTML = "Approve (Selected EBF)";
    elem2.innerHTML = "Reject (Selected EBF)";
    }else{
    elem.innerHTML = "Approve (Selected EBF: "+ebf_ids_v2.length+")";
    elem2.innerHTML = "Reject (Selected EBF: "+ebf_ids_v2.length+")";


    }
    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = ebf_ids_v2.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {ebf_ids_v2.splice(i, 1);}
    if(ebf_ids.length==0){
    elem.innerHTML = "Approve (Selected EBF)";
    elem2.innerHTML = "Reject (Selected EBF)";
    }else{
    elem.innerHTML = "Approve (Selected EBF: "+ebf_ids_v2.length+")";
    elem2.innerHTML = "Reject (Selected EBF: "+ebf_ids_v2.length+")";


    }
    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(ebf_ids_v2);
}

function ebf_cb_approve_test_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');//Modify this
    for(var i = 0; i<= ebf_ids_v2.length-1; i++){ 
    //console.log(ebf_ids_v2[i]);  
    var oListItem = oList.getItemById(ebf_ids_v2[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
   // oListItem.set_item('Status', 'CEO APPROVED');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function ebf_cb_reject_test_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');//Modify this
    for(var i = 0; i<= ebf_ids_v2.length-1; i++){ 
    //console.log(ebf_ids_v2[i]);  
    var oListItem = oList.getItemById(ebf_ids_v2[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    //oListItem.set_item('Status', 'CEO REJECTED');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------EDUCATIONAL BENEFIT (CEO PENDING APPROVAL) V2--------------------------------------------------------------------------------------------------------------------------

//--------------EDUCATIONAL BENEFIT (CEO IMMEDIATE HEAD APPROVAL) V2--------------------------------------------------------------------------------------------------------------------------
var html_ebf_immediate_approve_btn_v2="<a onclick='ebf_immediate_cb_approve_v2()' id='ebf_immediate_action_button_v2'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected EBF)</a>";

var html_ebf_immediate_approve_btn2_v2="<input type='checkbox' id='ebf_select_all_imm_v2' name='Select All'  title='Select All' '/> <label for='ebf_select_all_imm_v2' style='margin-right: 15px;'>Select All </label> <a onclick='ebf_immediate_cb_approve_test_v2()'  id='ebf_immediate_action_button_v2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected EBF)</a>"+
    "<a onclick='ebf_immediate_cb_reject_test_v2()' id='ebf_immediate_action_button2_v2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected EBF)</a>";

var ebf_immediate_ids_v2=[];
function ebf_immediate_check_item_v2(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("ebf_immediate_action_button_v2");
var elem2 = document.getElementById("ebf_immediate_action_button2_v2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = ebf_immediate_ids_v2.indexOf(needle);
    if(isInArray== -1){
    ebf_immediate_ids_v2.push(document.getElementById(check_item.id).value);
    }
    if(ebf_immediate_ids_v2.length==0){
    elem.innerHTML = "Approve (Selected EBF)";
    elem2.innerHTML = "Reject (Selected EBF)";
    }else{
    elem.innerHTML = "Approve (Selected EBF: "+ebf_immediate_ids_v2.length+")";
    elem2.innerHTML = "Reject (Selected EBF: "+ebf_immediate_ids_v2.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = ebf_immediate_ids_v2.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {ebf_immediate_ids_v2.splice(i, 1);}
    if(ebf_immediate_ids_v2.length==0){
    elem.innerHTML = "Approve (Selected EBF)";
    elem2.innerHTML = "Reject (Selected EBF)";
    }else{
    elem.innerHTML = "Approve (Selected EBF: "+ebf_immediate_ids_v2.length+")";
    elem2.innerHTML = "Reject (Selected EBF: "+ebf_immediate_ids_v2.length+")";

    }

    var bulk_total_approval = pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(ebf_immediate_ids_v2);
}
function ebf_immediate_cb_approve_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');//Modify this
    for(var i = 0; i<= ebf_immediate_ids_v2.length-1; i++){ 
    console.log(ebf_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(ebf_immediate_ids_v2[i]);  
    oListItem.set_item('Department_x0020_Head_x0020_Appr', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function ebf_immediate_cb_approve_test_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');//Modify this
    for(var i = 0; i<= ebf_immediate_ids_v2.length-1; i++){ 
    console.log(ebf_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(ebf_immediate_ids_v2[i]);  
    oListItem.set_item('Department_x0020_Head_x0020_Appr', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function ebf_immediate_cb_reject_test_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');//Modify this
    for(var i = 0; i<= ebf_immediate_ids_v2.length-1; i++){ 
    console.log(ebf_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(ebf_immediate_ids_v2[i]);  
    oListItem.set_item('Department_x0020_Head_x0020_Appr', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------EDUCATIONAL BENEFIT (CEO IMMEDIATE HEAD APPROVAL) V2 --------------------------------------------------------------------------------------------------------------------------

//--------------Project Resources Purchasing Request(CEO Pending Approval)--------------------------------------------------------------------------------------------------------------------------
var html_prp_approve_btn="<a onclick='prp_cb_approve()' id='prp_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected PRP)</a>";

var html_prp_approve_btn2="<input type='checkbox' id='prp_select_all_ceo' name='Select All'  title='Select All' '/> <label for='prp_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='prp_cb_approve_test()'  id='prp_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected PRP)</a>"+
    "<a onclick='prp_cb_reject_test()' id='prp_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected PRP)</a>";

var prp_ids=[];
function prp_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("prp_action_button");
var elem2 = document.getElementById("prp_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = prp_ids.indexOf(needle);
    if(isInArray== -1){
    prp_ids.push(document.getElementById(check_item.id).value);
    }
    if(prp_ids.length==0){
    elem.innerHTML = "Approve (Selected PRP)";
    elem2.innerHTML = "Reject (Selected PRP)";
    }else{
    elem.innerHTML = "Approve (Selected PRP: "+prp_ids.length+")";
    elem2.innerHTML = "Reject (Selected PRP: "+prp_ids.length+")";

    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = prp_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {prp_ids.splice(i, 1);}
    if(prp_ids.length==0){
    elem.innerHTML = "Approve (Selected PRP)";
    elem2.innerHTML = "Reject (Selected PRP)";
    }else{
    elem.innerHTML = "Approve (Selected PRP: "+prp_ids.length+")";
    elem2.innerHTML = "Reject (Selected PRP: "+prp_ids.length+")";


    }
    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    //var bulk_total_approval = pca_immediate_ids.length+pca_immediate_ids_v3.length+pca_ids.length+pca_ids_v3.length+por_immediate_ids.length+por_immediate_ids_v3.length+por_ids_2.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids.length+rbf_immediate_ids_v3.length+rbf_ids.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+prp_ids.length;

    //var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
    
  }
  console.log(prp_ids);
}

function prp_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Project Resources Purchasing Request');//Modify this
    for(var i = 0; i<= prp_ids.length-1; i++){ 
    //console.log(prp_ids[i]);  
    var oListItem = oList.getItemById(prp_ids[i]);  
   // oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    //oListItem.set_item('Approval_Stage', 'Approved');//Modify this
    oListItem.set_item('Approval_Stage', 'Approved');
    oListItem.set_item('Approval', 'Approved');
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function prp_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Project Resources Purchasing Request');//Modify this
    for(var i = 0; i<= prp_ids.length-1; i++){ 
    //console.log(prp_ids[i]);  
    var oListItem = oList.getItemById(prp_ids[i]);  
    //oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    //oListItem.set_item('Approval_Stage', 'Rejected');//Modify this
    oListItem.set_item('Approval_Stage', 'Rejected');
    oListItem.set_item('Approval', 'Rejected');
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}

//--------------Project Resources Purchasing Request (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------






//--------------Process Change Request(CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_pcr_approve_btn="<a onclick='pcr_cb_approve()' id='pcr_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected PCR)</a>";

var html_pcr_approve_btn2="<input type='checkbox' id='pcr_select_all_ceo' name='Select All'  title='Select All' '/> <label for='pcr_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='pcr_cb_approve_test()'  id='pcr_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected PCR)</a>"+
    "<a onclick='pcr_cb_reject_test()' id='pcr_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected PCR)</a>";

var pcr_ids=[];
function pcr_check_item(check_item){

var elem_bulk_btn_approve = document.getElementById("bulk_approval_button");
var elem_bulk_btn_reject = document.getElementById("bulk_approval_button2");

var elem = document.getElementById("pcr_action_button");
var elem2 = document.getElementById("pcr_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = pcr_ids.indexOf(needle);
    if(isInArray== -1){
    pcr_ids.push(document.getElementById(check_item.id).value);
    }
    if(pcr_ids.length==0){
    elem.innerHTML = "Approve (Selected PCR)";
    elem2.innerHTML = "Reject (Selected PCR)";
    }else{
    elem.innerHTML = "Approve (Selected PCR: "+pcr_ids.length+")";
    elem2.innerHTML = "Reject (Selected PCR: "+pcr_ids.length+")";

    
    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = pcr_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {pcr_ids.splice(i, 1);}
    if(pcr_ids.length==0){
    elem.innerHTML = "Approve (Selected PCR)";
    elem2.innerHTML = "Reject (Selected PCR)";
    }else{
    elem.innerHTML = "Approve (Selected PCR: "+pcr_ids.length+")";
    elem2.innerHTML = "Reject (Selected PCR: "+pcr_ids.length+")";

    
    }

    var bulk_total_approval =pca_immediate_ids_v3.length+pca_ids_v3.length+por_immediate_ids_v3.length+por_ids_2_v3.length+ccp_ids.length+itpr_ids.length+sdl_immediate_ids.length+sdl_immediate_ids_v2.length+sdl_ids.length+sdl_ids_v2.length+mrf_ids.length+lqf_immediate_ids.length+fbp_ids.length+rbf_immediate_ids_v3.length+rbf_ids_v3.length+tbr_immediate_ids.length+tbr_immediate_ids_v2.length+tbr_ids.length+tbr_ids_v2.length+ebf_ids.length+ebf_ids_v2.length+ebf_immediate_ids_v2.length+prp_ids.length+pcr_ids.length;

    elem_bulk_btn_approve.innerHTML = "Approve (Selected Item/s: "+bulk_total_approval+")";
    elem_bulk_btn_reject.innerHTML = "Reject (Selected Item/s: "+bulk_total_approval+")";
  }
  console.log(pcr_ids);
}
function pcr_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Process Change Request');//Modify this
    for(var i = 0; i<= pcr_ids.length-1; i++){ 
    console.log(pcr_ids[i]);  
    var oListItem = oList.getItemById(pcr_ids[i]);  
    oListItem.set_item('Top_x0020__x0020_Management_x002', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}

function pcr_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Process Change Request');//Modify this
    for(var i = 0; i<= pcr_ids.length-1; i++){ 
    console.log(pcr_ids[i]);  
    var oListItem = oList.getItemById(pcr_ids[i]);  
    oListItem.set_item('Top_x0020__x0020_Management_x002', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}

function pcr_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Process Change Request');//Modify this
    for(var i = 0; i<= pcr_ids.length-1; i++){ 
    console.log(pcr_ids[i]);  
    var oListItem = oList.getItemById(pcr_ids[i]);  
    oListItem.set_item('Top_x0020__x0020_Management_x002', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------Process Change Request(CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------




//--------------BULK APPROVAL--------------------------------------------------------------------------------------------------------------------------

function pca_immediate_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids.length-1; i++){ 
    console.log("pca_immediate_ids:"+pca_immediate_ids[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function pca_immediate_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids.length-1; i++){ 
    console.log("pca_immediate_ids:"+pca_immediate_ids[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}


//=================================================================================================
function pca_immediate_cb_approve_test_v3_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids_v3.length-1; i++){ 
    console.log("pca_immediate_ids_v3:"+pca_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function pca_immediate_cb_reject_test_v3_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids_v3.length-1; i++){ 
    console.log("pca_immediate_ids_v3:"+pca_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function pca_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_ids.length-1; i++){ 
    console.log("pca_ids:"+pca_ids[i]);  
    var oListItem = oList.getItemById(pca_ids[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}

function pca_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_ids.length-1; i++){ 
    console.log("pca_ids:"+pca_ids[i]);  
    var oListItem = oList.getItemById(pca_ids[i]);  
    oListItem.set_item('Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function pca_cb_approve_test_v3_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');//Modify this
    for(var i = 0; i<= pca_ids_v3.length-1; i++){ 
    console.log("pca_ids_v3:"+pca_ids_v3[i]);  
    var oListItem = oList.getItemById(pca_ids_v3[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}

function pca_cb_reject_test_v3_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payments/CA Request');//Modify this
    for(var i = 0; i<= pca_ids_v3.length-1; i++){ 
    console.log("pca_ids_v3:"+pca_ids_v3[i]);  
    var oListItem = oList.getItemById(pca_ids_v3[i]);  
    oListItem.set_item('Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function por_immediate_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_immediate_ids.length-1; i++){ 
    console.log("por_immediate_ids:"+por_immediate_ids[i]);  
    var oListItem = oList.getItemById(por_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function por_immediate_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_immediate_ids.length-1; i++){ 
    console.log("por_immediate_ids:"+por_immediate_ids[i]);  
    var oListItem = oList.getItemById(por_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function por_immediate_cb_approve_test_v3_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');//Modify this
    for(var i = 0; i<= por_immediate_ids_v3.length-1; i++){ 
    console.log("por_immediate_ids_v3:"+por_immediate_ids_v3[i]); 
    var oListItem = oList.getItemById(por_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function por_immediate_cb_reject_test_v3_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');//Modify this
    for(var i = 0; i<= por_immediate_ids_v3.length-1; i++){ 
    console.log("por_immediate_ids_v3:"+por_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(por_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function por_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_ids_2.length-1; i++){ 
    console.log("por_ids_2:"+por_ids_2[i]); 
    var oListItem = oList.getItemById(por_ids_2[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);

}
function por_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_ids_2.length-1; i++){ 
    console.log("por_ids_2:"+por_ids_2[i]); 
    var oListItem = oList.getItemById(por_ids_2[i]);  
    oListItem.set_item('Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);

}
//=================================================================================================
function por_cb_approve_test_v3_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');//Modify this
    for(var i = 0; i<= por_ids_2_v3.length-1; i++){ 
    console.log("por_ids_2_v3:"+por_ids_2_v3[i]); 
    var oListItem = oList.getItemById(por_ids_2_v3[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);

}
function por_cb_reject_test_v3_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');//Modify this
    for(var i = 0; i<= por_ids_2_v3.length-1; i++){ 
    console.log("por_ids_2_v3:"+por_ids_2_v3[i]); 
    var oListItem = oList.getItemById(por_ids_2_v3[i]);  
    oListItem.set_item('Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);

}
//=================================================================================================
function ccp_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Credit Card Purchase');//Modify this
    for(var i = 0; i<= ccp_ids.length-1; i++){ 
    console.log("ccp_ids:"+ccp_ids[i]);   
    var oListItem = oList.getItemById(ccp_ids[i]);  
    oListItem.set_item('Status0', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function ccp_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Credit Card Purchase');//Modify this
    for(var i = 0; i<= ccp_ids.length-1; i++){
    console.log("ccp_ids:"+ccp_ids[i]);   
    var oListItem = oList.getItemById(ccp_ids[i]);  
    oListItem.set_item('Status0', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function itpr_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('IT Purchasing Request');//Modify this
    for(var i = 0; i<= itpr_ids.length-1; i++){ 
    console.log("itpr_ids:"+itpr_ids[i]);  
    var oListItem = oList.getItemById(itpr_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function itpr_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('IT Purchasing Request');//Modify this
    for(var i = 0; i<= itpr_ids.length-1; i++){ 
    console.log("itpr_ids:"+itpr_ids[i]);  
    var oListItem = oList.getItemById(itpr_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function sdl_immediate_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids.length-1; i++){ 
    console.log("sdl_immediate_ids:"+sdl_immediate_ids[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function sdl_immediate_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids.length-1; i++){ 
    console.log("sdl_immediate_ids:"+sdl_immediate_ids[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
//SDL V2
function sdl_immediate_cb_approve_test_bulk_approval_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids_v2.length-1; i++){ 
    console.log("sdl_immediate_ids_v2:"+sdl_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids_v2[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function sdl_immediate_cb_reject_test_bulk_approval_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids_v2.length-1; i++){ 
    console.log("sdl_immediate_ids_v2:"+sdl_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids_v2[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//SDL V2
//=================================================================================================
function sdl_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids.length-1; i++){ 
    console.log("sdl_ids:"+sdl_ids[i]);  
    var oListItem = oList.getItemById(sdl_ids[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function sdl_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids.length-1; i++){ 
    console.log("sdl_ids:"+sdl_ids[i]);  
    var oListItem = oList.getItemById(sdl_ids[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
//SDL V2
function sdl_cb_approve_test_bulk_approval_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids_v2.length-1; i++){ 
    console.log("sdl_ids_v2:"+sdl_ids_v2[i]);  
    var oListItem = oList.getItemById(sdl_ids_v2[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function sdl_cb_reject_test_bulk_approval_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary or Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids_v2.length-1; i++){ 
    console.log("sdl_ids_v2:"+sdl_ids_v2[i]);  
    var oListItem = oList.getItemById(sdl_ids_v2[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//SDL V2
//=================================================================================================
function mrf_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Manpower Requests');//Modify this
    for(var i = 0; i<= mrf_ids.length-1; i++){ 
    console.log("mrf_ids:"+mrf_ids[i]);  
    var oListItem = oList.getItemById(mrf_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function mrf_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Manpower Requests');//Modify this
    for(var i = 0; i<= mrf_ids.length-1; i++){ 
    console.log("mrf_ids:"+mrf_ids[i]);  
    var oListItem = oList.getItemById(mrf_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function lqf_immediate_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Liquidation Form');//Modify this
    for(var i = 0; i<= lqf_immediate_ids.length-1; i++){ 
    console.log("lqf_immediate_ids:"+lqf_immediate_ids[i]);  
    var oListItem = oList.getItemById(lqf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function lqf_immediate_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Liquidation Form');//Modify this
    for(var i = 0; i<= lqf_immediate_ids.length-1; i++){ 
    console.log("lqf_immediate_ids:"+lqf_immediate_ids[i]);  
    var oListItem = oList.getItemById(lqf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function fbp_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Forecasted Budget Plan');//Modify this
    for(var i = 0; i<= fbp_ids.length-1; i++){ 
    console.log("fbp_ids:"+fbp_ids[i]);  
    var oListItem = oList.getItemById(fbp_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function fbp_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Forecasted Budget Plan');//Modify this
    for(var i = 0; i<= fbp_ids.length-1; i++){ 
    console.log("fbp_ids:"+fbp_ids[i]);  
    var oListItem = oList.getItemById(fbp_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function rbf_immediate_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids.length-1; i++){ 
    console.log("rbf_immediate_ids:"+rbf_immediate_ids[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function rbf_immediate_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids.length-1; i++){ 
    console.log("rbf_immediate_ids:"+rbf_immediate_ids[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function rbf_immediate_cb_approve_test_v3_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids_v3.length-1; i++){ 
    console.log("rbf_immediate_ids_v3:"+rbf_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function rbf_immediate_cb_reject_test_v3_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids_v3.length-1; i++){ 
    console.log("rbf_immediate_ids_v3:"+rbf_immediate_ids_v3[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids_v3[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function rbf_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_ids.length-1; i++){ 
    console.log("rbf_ids:"+rbf_ids[i]);  
    var oListItem = oList.getItemById(rbf_ids[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function rbf_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_ids.length-1; i++){ 
    console.log("rbf_ids:"+rbf_ids[i]);  
    var oListItem = oList.getItemById(rbf_ids[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function rbf_cb_approve_test_v3_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');//Modify this
    for(var i = 0; i<= rbf_ids_v3.length-1; i++){ 
    console.log("rbf_ids_v3:"+rbf_ids_v3[i]); 
    var oListItem = oList.getItemById(rbf_ids_v3[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function rbf_cb_reject_test_v3_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursements Form');//Modify this
    for(var i = 0; i<= rbf_ids_v3.length-1; i++){ 
    console.log("rbf_ids_v3:"+rbf_ids_v3[i]); 
    var oListItem = oList.getItemById(rbf_ids_v3[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
function tbr_immediate_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');//Modify this
    for(var i = 0; i<= tbr_immediate_ids.length-1; i++){ 
    console.log("tbr_immediate_ids:"+tbr_immediate_ids[i]);  
    var oListItem = oList.getItemById(tbr_immediate_ids[i]);  
    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function tbr_immediate_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');//Modify this
    for(var i = 0; i<= tbr_immediate_ids.length-1; i++){ 
    console.log("tbr_immediate_ids:"+tbr_immediate_ids[i]);  
    var oListItem = oList.getItemById(tbr_immediate_ids[i]);  
    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
//TBR V2
function tbr_immediate_cb_approve_test_bulk_approval_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit Request');//Modify this
    for(var i = 0; i<= tbr_immediate_ids_v2.length-1; i++){ 
    console.log("tbr_immediate_ids_v2:"+tbr_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(tbr_immediate_ids_v2[i]);  
    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function tbr_immediate_cb_reject_test_bulk_approval_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit Request');//Modify this
    for(var i = 0; i<= tbr_immediate_ids_v2.length-1; i++){ 
    console.log("tbr_immediate_ids_v2:"+tbr_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(tbr_immediate_ids_v2[i]);  
    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//TBR V2
//=================================================================================================
function tbr_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');//Modify this
    for(var i = 0; i<= tbr_ids.length-1; i++){ 
    console.log("tbr_ids:"+tbr_ids[i]);  
    var oListItem = oList.getItemById(tbr_ids[i]);  
    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function tbr_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');//Modify this
    for(var i = 0; i<= tbr_ids.length-1; i++){ 
    console.log("tbr_ids:"+tbr_ids[i]);  
    var oListItem = oList.getItemById(tbr_ids[i]);  
    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
//TBR V2
function tbr_cb_approve_test_bulk_approval_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit Request');//Modify this
    for(var i = 0; i<= tbr_ids_v2.length-1; i++){ 
    console.log("tbr_ids_v2:"+tbr_ids_v2[i]);  
    var oListItem = oList.getItemById(tbr_ids_v2[i]);  
    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function tbr_cb_reject_test_bulk_approval_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit Request');//Modify this
    for(var i = 0; i<= tbr_ids_v2.length-1; i++){ 
    console.log("tbr_ids_v2:"+tbr_ids_v2[i]);  
    var oListItem = oList.getItemById(tbr_ids_v2[i]);  
    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//TBR V2
//=================================================================================================
function ebf_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit');//Modify this
    for(var i = 0; i<= ebf_ids.length-1; i++){ 
    console.log("ebf_ids:"+ebf_ids[i]);  
    var oListItem = oList.getItemById(ebf_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.set_item('Status', 'CEO APPROVED');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function ebf_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit');//Modify this
    for(var i = 0; i<= ebf_ids.length-1; i++){ 
    console.log("ebf_ids:"+ebf_ids[i]);  
    var oListItem = oList.getItemById(ebf_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    oListItem.set_item('Status', 'CEO REJECTED');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
//=================================================================================================
//EBF V2
function ebf_cb_approve_test_bulk_approval_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');//Modify this
    for(var i = 0; i<= ebf_ids_v2.length-1; i++){ 
    console.log("ebf_ids_v2:"+ebf_ids_v2[i]);  
    var oListItem = oList.getItemById(ebf_ids_v2[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    //oListItem.set_item('Status', 'CEO APPROVED');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function ebf_cb_reject_test_bulk_approval_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');//Modify this
    for(var i = 0; i<= ebf_ids_v2.length-1; i++){ 
    console.log("ebf_ids_v2:"+ebf_ids_v2[i]);  
    var oListItem = oList.getItemById(ebf_ids_v2[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    //oListItem.set_item('Status', 'CEO REJECTED');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}

function ebf_immediate_cb_approve_test_bulk_approval_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');//Modify this
    for(var i = 0; i<= ebf_immediate_ids_v2.length-1; i++){ 
    console.log("ebf_immediate_ids_v2:"+ebf_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(ebf_immediate_ids_v2[i]);  
    oListItem.set_item('Department_x0020_Head_x0020_Appr', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function ebf_immediate_cb_reject_test_bulk_approval_v2() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Educational Benefit Form');//Modify this
    for(var i = 0; i<= ebf_immediate_ids_v2.length-1; i++){ 
    console.log("ebf_immediate_ids_v2:"+ebf_immediate_ids_v2[i]);  
    var oListItem = oList.getItemById(ebf_immediate_ids_v2[i]);  
    oListItem.set_item('Department_x0020_Head_x0020_Appr', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}

//EBF V2
//=================================================================================================

function prp_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Project Resources Purchasing Request');//Modify this
    for(var i = 0; i<= prp_ids.length-1; i++){ 
    console.log("prp_ids:"+prp_ids[i]);  
    var oListItem = oList.getItemById(prp_ids[i]);  
    //oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    //oListItem.set_item('Approval_Stage', 'Approved');//Modify this

    oListItem.set_item('Approval_Stage', 'Approved');
    oListItem.set_item('Approval', 'Approved');

    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}
function prp_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Project Resources Purchasing Request');//Modify this
    for(var i = 0; i<= prp_ids.length-1; i++){ 
    console.log("prp_ids:"+prp_ids[i]);  
    var oListItem = oList.getItemById(prp_ids[i]);  
    //oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    //oListItem.set_item('Approval_Stage', 'Rejected');//Modify this

    oListItem.set_item('Approval_Stage', 'Rejected');
    oListItem.set_item('Approval', 'Rejected');
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}

//=================================================================================================

function pcr_cb_approve_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Process Change Request');//Modify this
    for(var i = 0; i<= pcr_ids.length-1; i++){ 
    console.log("pcr_ids:"+pcr_ids[i]);  
    var oListItem = oList.getItemById(pcr_ids[i]);  
    oListItem.set_item('Top_x0020__x0020_Management_x002', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}

function pcr_cb_reject_test_bulk_approval() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Process Change Request');//Modify this
    for(var i = 0; i<= pcr_ids.length-1; i++){ 
    console.log("pcr_ids:"+pcr_ids[i]);  
    var oListItem = oList.getItemById(pcr_ids[i]);  
    oListItem.set_item('Top_x0020__x0020_Management_x002', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded_bulk_approval, onQueryFailed);
}


//=================================================================================================
var bulk_counter =0;
function onQuerySucceeded_bulk_approval() {
    console.log('All Checked Request Items Updated');
    bulk_counter++;
    console.log("bulk_counter: "+bulk_counter);

    if(bulk_counter == 24){
        console.log("Reloading");
        //$('#loader').fadeOut(500);
        document.location.reload(true); 
    }

}

function reload_page() {
    setInterval(function(){ 
        document.location.reload(true); 
    }, 3000);
}




function bulk_btn_approve() {
    $('#loader_show_hide').show();
        $('#loader').fadeIn(500);

    //if(pca_immediate_ids.length!=0){
     //   pca_immediate_cb_approve_test_bulk_approval();
    //}

    //if(pca_immediate_ids_v3.length!=0){
        pca_immediate_cb_approve_test_v3_bulk_approval();
    //}
    //-------------------------------------------------
    //if(pca_ids.length!=0){
     //   pca_cb_approve_test_bulk_approval();
    //}

    //if(pca_ids_v3.length!=0){
        pca_cb_approve_test_v3_bulk_approval();
    //}
    //-------------------------------------------------
    //if(por_immediate_ids.length!=0){
      //  por_immediate_cb_approve_test_bulk_approval();
    //}

    //if(por_immediate_ids_v3.length!=0){
        por_immediate_cb_approve_test_v3_bulk_approval();
    //}
    //-------------------------------------------------
    //if(por_ids_2.length!=0){
        //por_cb_approve_test_bulk_approval();
    //}
    
   // if(por_ids_2_v3.length!=0){
        por_cb_approve_test_v3_bulk_approval();
    //}
    //-------------------------------------------------
    //if(ccp_ids.length!=0){
        ccp_cb_approve_test_bulk_approval();
    //}
    //-------------------------------------------------
    //if(itpr_ids.length!=0){
        itpr_cb_approve_test_bulk_approval();
    //}
    //-------------------------------------------------
    //if(sdl_immediate_ids.length!=0){
        sdl_immediate_cb_approve_test_bulk_approval();
    //}

        sdl_immediate_cb_approve_test_bulk_approval_v2();

    //if(sdl_ids.length!=0){
        sdl_cb_approve_test_bulk_approval();
    //}

        sdl_cb_approve_test_bulk_approval_v2();
    //-------------------------------------------------
    //if(mrf_ids.length!=0){
        mrf_cb_approve_test_bulk_approval();
    //}
    //-------------------------------------------------
   // if(lqf_immediate_ids.length!=0){
        lqf_immediate_cb_approve_test_bulk_approval();
    //}
    //-------------------------------------------------
    //if(fbp_ids.length!=0){
        fbp_cb_approve_test_bulk_approval();
   // }
    //-------------------------------------------------
    //if(rbf_immediate_ids.length!=0){
       // rbf_immediate_cb_approve_test_bulk_approval();
    //}

    //if(rbf_immediate_ids_v3.length!=0){
        rbf_immediate_cb_approve_test_v3_bulk_approval();
    //}
    //-------------------------------------------------
    //if(rbf_ids.length!=0){
       // rbf_cb_approve_test_bulk_approval();
    //}
    
    //if(rbf_ids_v3.length!=0){
        rbf_cb_approve_test_v3_bulk_approval();
    //}
    //-------------------------------------------------
    //if(tbr_immediate_ids.length!=0){
        tbr_immediate_cb_approve_test_bulk_approval();
    //}

        tbr_immediate_cb_approve_test_bulk_approval_v2();
    
    //if(tbr_ids.length!=0){
        tbr_cb_approve_test_bulk_approval();
    //}
        tbr_cb_approve_test_bulk_approval_v2();
    //-------------------------------------------------
    //if(ebf_ids.length!=0){
        ebf_cb_approve_test_bulk_approval();

        ebf_cb_approve_test_bulk_approval_v2();
    //}
        ebf_immediate_cb_approve_test_bulk_approval_v2();
    //-------------------------------------------------
    //if(prp_ids.length!=0){
        prp_cb_approve_test_bulk_approval();
    //}
    //-------------------------------------------------


    pcr_cb_approve_test_bulk_approval()




}

function bulk_btn_reject() {
    $('#loader_show_hide').show();
    $('#loader').fadeIn(500);

    //if(pca_immediate_ids.length!=0){
        //pca_immediate_cb_reject_test_bulk_approval();
    //}

    //if(pca_immediate_ids_v3.length!=0){
        pca_immediate_cb_reject_test_v3_bulk_approval();
    //}
    //-------------------------------------------------
    //if(pca_ids.length!=0){
       // pca_cb_reject_test_bulk_approval();
    //}

    //if(pca_ids_v3.length!=0){
        pca_cb_reject_test_v3_bulk_approval();
    //}
    //-------------------------------------------------
   // if(por_immediate_ids.length!=0){
       // por_immediate_cb_reject_test_bulk_approval();
    //}

    //if(por_immediate_ids_v3.length!=0){
        por_immediate_cb_reject_test_v3_bulk_approval();
    //}
    //-------------------------------------------------
    //if(por_ids_2.length!=0){
       // por_cb_reject_test_bulk_approval();
    //}
    
    //if(por_ids_2_v3.length!=0){
        por_cb_reject_test_v3_bulk_approval();
    //}
    //-------------------------------------------------
    //if(ccp_ids.length!=0){
        ccp_cb_reject_test_bulk_approval();
    //}
    //-------------------------------------------------
    //if(itpr_ids.length!=0){
        itpr_cb_reject_test_bulk_approval();
    //}
    //-------------------------------------------------
    //if(sdl_immediate_ids.length!=0){
        sdl_immediate_cb_reject_test_bulk_approval();
    //}

        sdl_immediate_cb_reject_test_bulk_approval_v2();

    //if(sdl_ids.length!=0){
        sdl_cb_reject_test_bulk_approval();
    //}
        sdl_cb_reject_test_bulk_approval_v2();
    //-------------------------------------------------
    //if(mrf_ids.length!=0){
        mrf_cb_reject_test_bulk_approval();
    //}
    //-------------------------------------------------
    //if(lqf_immediate_ids.length!=0){
        lqf_immediate_cb_reject_test_bulk_approval();
    //}
    //-------------------------------------------------
    //if(fbp_ids.length!=0){
        fbp_cb_reject_test_bulk_approval();
    //}
    //-------------------------------------------------
    //if(rbf_immediate_ids.length!=0){
       // rbf_immediate_cb_reject_test_bulk_approval();
    //}

    //if(rbf_immediate_ids_v3.length!=0){
        rbf_immediate_cb_reject_test_v3_bulk_approval();
    //}
    //-------------------------------------------------
    //if(rbf_ids.length!=0){
       // rbf_cb_reject_test_bulk_approval();
    //}
    
    //if(rbf_ids_v3.length!=0){
        rbf_cb_reject_test_v3_bulk_approval();
    //}
    //-------------------------------------------------
    //if(tbr_immediate_ids.length!=0){
        tbr_immediate_cb_reject_test_bulk_approval();
    //}

        tbr_immediate_cb_reject_test_bulk_approval_v2();
    
    //if(tbr_ids.length!=0){
        tbr_cb_reject_test_bulk_approval();
    //}
        tbr_cb_reject_test_bulk_approval_v2();
    //-------------------------------------------------
    //if(ebf_ids.length!=0){
        ebf_cb_reject_test_bulk_approval();
    //}
        ebf_cb_reject_test_bulk_approval_v2();

        ebf_immediate_cb_reject_test_bulk_approval_v2();
    //-------------------------------------------------
    //if(prp_ids.length!=0){
        prp_cb_reject_test_bulk_approval();

    //}
    //-------------------------------------------------

        pcr_cb_reject_test_bulk_approval();
}

//--------------BULK APPROVAL--------------------------------------------------------------------------------------------------------------------------



function onQuerySucceeded() {
    console.log('Items Updated');
    document.location.reload(true);
    }
function onQueryFailed(sender, args) {alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());}




$(document).ready(function() {

$("#s4-workspace").scroll(function() {
    OnScrollDiv(this);
}); 



//----------------STATISTICS UI------------------------------------------------------------------------------------

$(document).ready(function() {
    console.log("Version 3.2");
/*$('#loader').fadeIn(500);
 $('#loader').fadeOut(500);*/

    //getItems('Office Furniture & Equipment',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    //getItems('Special Requests',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    //getItems('Special Requests',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><IsNull><FieldRef Name='Purchasing_x0020_Status'/></IsNull></And></And></Where></Query></View>");//IMM

    //getItems('Payment/CA Request',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull></And></Where></Query></View>");//IMM

   // getItems('Payment/CA Request',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO



    getItems('Payments/CA Request',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull></And></Where></Query></View>");//IMM

    getItems('Payments/CA Request',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>For CEO</Value></Eq></And><And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>For VP</Value></Eq></And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    //---------------------------------------------------------------------------


   // getItems('Purchase Order Request',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull></And></Where></Query></View>");//IMM

    //getItems('Purchase Order Request',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO



    getItems('Purchase Order Requests',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull></And></Where></Query></View>");//IMM

    getItems('Purchase Order Requests',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>For CEO</Value></Eq></And><And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>For VP</Value></Eq></And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    //==========================================================================================================================================

    //getItems('Office Supplies',"<View><Query><Where><Or><And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    getItems('Credit Card Purchase',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><Eq><FieldRef Name='Status0'/><Value Type='Text'>In Progress</Value></Eq></Where></Query></View>");//CEO

    getItems('IT Purchasing Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='CSO_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull></And></Where></Query></View>");//CEO

    //==========================================================================================================================================

    getItems('Salary/Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><And><And><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/><Value Type='Text'>Approve</Value></Eq><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And><Eq><FieldRef Name='HR_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And><Eq><FieldRef Name='VP_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Salary/Device Loan Benefits',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><IsNull><FieldRef Name='Finance_x0020_Status'/></IsNull></And></And></Where></Query></View>");//IMM

    //-----------------------------SDL V2------------------------------------------------------
    getItems('Salary or Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Or><And><And><Eq><FieldRef Name='Next_x0020_Approver'/><Value Type='Text'>For VP</Value></Eq><Eq><FieldRef Name='VP_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull></And><Eq><FieldRef Name='Next_x0020_Approver'/><Value Type='Text'>For CEO</Value></Eq></Or><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Salary or Device Loan Benefits',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><IsNull><FieldRef Name='Finance_x0020_Status'/></IsNull></And></And></Where></Query></View>");//IMM
    //-----------------------------SDL V2------------------------------------------------------

    //==========================================================================================================================================

    getItems('Manpower Requests',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='HR_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq></And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Liquidation Form',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><And><Eq><FieldRef Name='Immediate_x0020_Status'/><Value Type='Choice'>(None)</Value></Eq><IsNotNull><FieldRef Name='Total_x0020_Amount'/></IsNotNull></And></And></Where></Query></View>");//IMM

    getItems('Forecasted Budget Plan',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Text'>Reviewed</Value></Eq><Eq><FieldRef Name='CEO_x0020_Approval'/><Value Type='Text'>(None)</Value></Eq></And></Where></Query></View>");//CEO

    //==========================================================================================================================================

   // getItems('Reimbursement Form',"<View><Query><Where><Or><And><Eq><FieldRef Name='CEO_x0020_Status'/><Value Type='Text'>(None)</Value></Eq><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><Eq><FieldRef Name='CEO_x0020_Status'/><Value Type='Text'>(None)</Value></Eq><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><Eq><FieldRef Name='CEO_x0020_Status'/><Value Type='Text'>(None)</Value></Eq><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

   // getItems('Reimbursement Form',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Appro'/><Value Type='Text'>(None)</Value></Eq></And></Where></Query></View>");//IMM



    getItems('Reimbursements Form',"<View><Query><Where><Or><And><Eq><FieldRef Name='CEO_x0020_Status'/><Value Type='Text'>(None)</Value></Eq><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Choice'>For CEO</Value></Eq></And><And><And><Eq><FieldRef Name='CEO_x0020_Status'/><Value Type='Text'>(None)</Value></Eq><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Choice'>For VP</Value></Eq></And><And><Eq><FieldRef Name='CEO_x0020_Status'/><Value Type='Text'>(None)</Value></Eq><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    getItems('Reimbursements Form',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Appro'/><Value Type='Text'>(None)</Value></Eq></And></Where></Query></View>");//IMM


    //==========================================================================================================================================

    getItems('Travel Benefit',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Status_x0020__x0028_Executive_x0'/></IsNull><Eq><FieldRef Name='Status_x0020__x0028_VP_x0020_App'/><Value Type='Text'>Approved</Value></Eq></And></Where></Query></View>");//CEO

    getItems('Travel Benefit',"<View><Query><Where><And><IsNull><FieldRef Name='Status_x0020__x0028_Immediate_x0'/></IsNull><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains></And></Where></Query></View>");//IMM

    //-----------------------------TBR V2-------------------------------------------------------
    getItems('Travel Benefit Request',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Or><And><And><Eq><FieldRef Name='Next_x0020_Approver'/><Value Type='Text'>For VP</Value></Eq><Eq><FieldRef Name='Status_x0020__x0028_VP_x0020_App'/><Value Type='Text'>Approved</Value></Eq></And><IsNull><FieldRef Name='Status_x0020__x0028_Executive_x0'/></IsNull></And><Eq><FieldRef Name='Next_x0020_Approver'/><Value Type='Text'>For CEO</Value></Eq></Or><IsNull><FieldRef Name='Status_x0020__x0028_Executive_x0'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Travel Benefit Request',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><And><IsNull><FieldRef Name='Status_x0020__x0028_Immediate_x0'/></IsNull><IsNull><FieldRef Name='Status_x0020__x0028_Finance_x002'/></IsNull></And></And></Where></Query></View>");//IMM
    //-----------------------------TBR V2-------------------------------------------------------

    //==========================================================================================================================================

    getItems('Educational Benefit',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><And><And><And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull><Eq><FieldRef Name='Department_x0020_Head_x0020_Appr'/><Value Type='Text'>Approved</Value></Eq></And><Eq><FieldRef Name='HR_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq></And><Eq><FieldRef Name='VP_x002d_Philippines_x0020_Appro'/><Value Type='Text'>Approved</Value></Eq></And><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq></And><Eq><FieldRef Name='Status'/><Value Type='Text'>FINANCE APPROVED</Value></Eq></And></Where></Query></View>");

    //----------------------EBF V2------------------------------------------
    getItems('Educational Benefit Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Or><And><And><Eq><FieldRef Name='Next_x0020_Approver'/><Value Type='Text'>For VP</Value></Eq><Eq><FieldRef Name='VP_x002d_Philippines_x0020_Appro'/><Value Type='Text'>Approved</Value></Eq></And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull></And><Eq><FieldRef Name='Next_x0020_Approver'/><Value Type='Text'>For CEO</Value></Eq></Or><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull></And></Where></Query></View>");

    getItems('Educational Benefit Form',"<View><Query> <Where> <And> <Contains> <FieldRef Name='Department_x0020_Head' /> <Value Type='User'>artem</Value> </Contains> <IsNull> <FieldRef Name='Department_x0020_Head_x0020_Appr' /> </IsNull> </And> </Where></Query></View>");
    //----------------------EBF V2------------------------------------------

    //==========================================================================================================================================

   // getItems('Project Resources Purchasing Request',"<View><Query><Where><Eq><FieldRef Name='Approval_Stage'/><Value Type='Text'>CEO Approval</Value></Eq></Where></Query></View>");
   
  getItems('Project Resources Purchasing Request',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='Approval_Stage'/><Value Type='Text'>Approval_Stage</Value></Eq><Neq><FieldRef Name='Finance_x0020_Status'/><Value Type='Text'>Closed</Value></Neq></And><Eq><FieldRef Name='Set_x0020_Approver'/><Value Type='Text'>CEO</Value></Eq></And></Where></Query></View>");


  getItems('Process Change Request',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='Document_x0020_Control_x0020_App'/><Value Type='Text'>Major</Value></Eq><Eq><FieldRef Name='TQM_x0020_Manger_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq></And><IsNull><FieldRef Name='Top_x0020_management_x0020_appro'/></IsNull></And></Where></Query></View>");



 $('.actionbutton').click(function() {
    $('#s4-workspace').animate({
      scrollTop: 0
    }, 500);
    return true;
  });



  $('#val_pca_v3').click(function() {
    var div_scroll = $("#div_ce91c557-03df-4f1c-a456-6e90269a8378").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });


  $('#val_por_v3').click(function() {
    var div_scroll = $("#div_3148f6e4-a22d-450b-a181-3235ba43bbfd").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });



  $('#val_ccp').click(function() {
    var div_scroll = $("#div_bc03c099-68b2-4cd0-b5ac-3f08063a5468").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_itpr').click(function() {
    var div_scroll = $("#div_d1604bee-d3ff-4047-afd6-070bdb4877e5").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_sdl').click(function() {
    var div_scroll = $("#div_3653d32f-1f3b-49fa-a3ff-281ee7d27114").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_sdl_v2').click(function() {
    var div_scroll = $("#div_bf6ade17-69f8-425b-a14c-7a6e10d4b4b5").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_mrf').click(function() {
    var div_scroll = $("#div_413aeb1b-4151-4121-a309-53ea0c7f6512").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_lqf').click(function() {
    var div_scroll = $("#div_d42773b2-cb1f-42dd-a62c-fe1a6ca7a553").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_fbp').click(function() {
    var div_scroll = $("#div_c73a5a60-3337-40f2-a7d3-1204628e20a5").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });



   $('#val_rbf_v3').click(function() {
    var div_scroll = $("#div_cc35895a-5c8b-40e6-a0b7-2d2db7c16c3c").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_tbr').click(function() {
    var div_scroll = $("#div_52189284-f929-4a25-b136-d6c55267c9f8").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_tbr_v2').click(function() {
    var div_scroll = $("#div_38ab07ea-bd11-4de6-911b-b493b7aa2cf3").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_ebf').click(function() {
    var div_scroll = $("#div_b77b1190-63d8-4f9f-b7a7-8e3337b27c5a").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_ebf_v2').click(function() {
    var div_scroll = $("#div_ea2878e9-72ad-431c-be8c-f3b712885927").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_prp').click(function() {
    var div_scroll = $("#div_64f6ed3e-e8d3-4fed-a5d3-c0fc764cd71b").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_pcr').click(function() {
    var div_scroll = $("#div_7eec043f-49a1-42f2-9456-813dece6dfe3").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });





});

//----------------STATISTICS UI------------------------------------------------------------------------------------

  $('.BTN_EDIT_ITEM').hide();
  $('.BTN_DELETE_ITEM').hide();
  $('.CenterTextInSpan.TD_ACTION').hide();
  $('.BTN_OPEN_ITEM_FORM').hide();

    $("#TABLE_ITEMS th:last-child").remove();


$("#div_adf38fc9-7897-4228-a1f6-56a500a102f9").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_d95abbfb-3bb9-42ae-8b76-2f7a59a59e17").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_ce91c557-03df-4f1c-a456-6e90269a8378").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_f45e16c2-551f-4a22-a15f-d4ab455a3cb4").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_3148f6e4-a22d-450b-a181-3235ba43bbfd").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_bc03c099-68b2-4cd0-b5ac-3f08063a5468").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_d1604bee-d3ff-4047-afd6-070bdb4877e5").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_3653d32f-1f3b-49fa-a3ff-281ee7d27114").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_413aeb1b-4151-4121-a309-53ea0c7f6512").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_d42773b2-cb1f-42dd-a62c-fe1a6ca7a553").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_c73a5a60-3337-40f2-a7d3-1204628e20a5").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_c524c19f-499b-49da-b87f-3cca4679265e").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_cc35895a-5c8b-40e6-a0b7-2d2db7c16c3c").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_52189284-f929-4a25-b136-d6c55267c9f8").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_b77b1190-63d8-4f9f-b7a7-8e3337b27c5a").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_517420fa-576c-41c5-8f6c-d85b25344627").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_c0a5ffc4-28a2-4c2b-aa88-9bc0b22c5b42").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_0af54718-d937-43eb-8ec3-4857046f334b").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_7c1f9f3f-302c-4016-a26b-cd1c2d5889f4").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_f36f05e0-d5c4-413a-95ee-0cb70ff2557d").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_e7985a6e-0224-4c91-806c-91a7ff397d93").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_ac9634eb-3250-4090-882a-601a7743cc25").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_64f6ed3e-e8d3-4fed-a5d3-c0fc764cd71b").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_bf6ade17-69f8-425b-a14c-7a6e10d4b4b5").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_1b67c984-2c82-4cba-a580-e7ea35d9ff1c").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_38ab07ea-bd11-4de6-911b-b493b7aa2cf3").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_b7454cfd-57ea-49ab-a4bd-d524150711b7").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_ea2878e9-72ad-431c-be8c-f3b712885927").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_75d68412-a2b1-4e0c-9d1d-312ce3583dbc").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_7eec043f-49a1-42f2-9456-813dece6dfe3").css("box-shadow", "3px 3px 5px 6px #ccc");




//start------------------------------------------------------------------------------------------------------------------

//$('#WebPartTitleWPQ3').append("<br>"+html_pca_immediate_approve_btn2);//pca_immediate
//$('#WebPartTitleWPQ4').append("<br>"+html_pca_approve_btn2);//pca_ceo

$("[title='Payments/CA Request V3 (Immediate Head Pending)']").append("<br>"+html_pca_immediate_approve_btn2_v3);//pca_immediate
$("[title='Payments/CA Request V3 (CEO Pending Approval)']").append("<br>"+html_pca_approve_btn2_v3);//pca_ceo

//end------------------------------------------------------------------------------------------------------------------


//start------------------------------------------------------------------------------------------------------------------

//$('#WebPartTitleWPQ7').append("<br>"+html_por_immediate_approve_btn2);
//$('#WebPartTitleWPQ8').append("<br>"+html_por_approve_btn2);

$("[title='Purchase Order Requests V3 (Immediate Head Pending)']").append("<br>"+html_por_immediate_approve_btn2_v3);
$("[title='Purchase Order Requests V3 (CEO Pending Approval)']").append("<br>"+html_por_approve_btn2_v3);
//end------------------------------------------------------------------------------------------------------------------


//start------------------------------------------------------------------------------------------------------------------
$("[title='Credit Card Purchase (CEO Pending Request)']").append("<br>"+html_ccp_approve_btn2);//ccp_ceo
//end------------------------------------------------------------------------------------------------------------------


//start------------------------------------------------------------------------------------------------------------------
$("[title='IT Purchasing Request (CEO Pending Approval)']").append("<br>"+html_itpr_approve_btn2);//itpr_ceo
//end------------------------------------------------------------------------------------------------------------------


//start------------------------------------------------------------------------------------------------------------------
$("[title='Salary/Device Loan Benefits(Pending Approval)']").append("<br>"+html_sdl_approve_btn2);//sdl_ceo --Done Test
$("[title='Salary/Device Loan Benefits (Immediate Head Pending)']").append("<br>"+html_sdl_immediate_approve_btn2);//sdl_ceo
//end------------------------------------------------------------------------------------------------------------------

//start------------------------------------------------------------------------------------------------------------------
$("[title='Salary or Device Loan Benefits (CEO Pending Approval) V2']").append("<br>"+html_sdl_approve_btn2_v2);//sdl_ceo --Done Test
$("[title='Salary or Device Loan Benefits(Immediate Head Pending) V2']").append("<br>"+html_sdl_immediate_approve_btn2_v2);//sdl_ceo
//end------------------------------------------------------------------------------------------------------------------


//start------------------------------------------------------------------------------------------------------------------
$("[title='Manpower Requests']").append("<br>"+html_mrf_approve_btn2);//mrf_ceo
//end------------------------------------------------------------------------------------------------------------------


//start------------------------------------------------------------------------------------------------------------------
$("[title='Liquidation Form (Immediate Head Pending Approval)']").append("<br>"+html_lqf_immediate_approve_btn2);//lqf_immediate
//end------------------------------------------------------------------------------------------------------------------


//start------------------------------------------------------------------------------------------------------------------
$("[title='Forecasted Budget Plan (CEO Pending Approval)']").append("<br>"+html_fbp_approve_btn2);//fbp_ceo 
//end------------------------------------------------------------------------------------------------------------------

//start------------------------------------------------------------------------------------------------------------------
//$('#WebPartTitleWPQ18').append("<br>"+html_rbf_approve_btn2);//sdl_ceo
//$('#WebPartTitleWPQ19').append("<br>"+html_rbf_immediate_approve_btn2);//rbf_immediate

$("[title='Reimbursements Form V3 (CEO Pending Approval)']").append("<br>"+html_rbf_approve_btn2_v3);//sdl_ceo
$("[title='Reimbursements Form V3 (Immediate Head Pending)']").append("<br>"+html_rbf_immediate_approve_btn2_v3);//rbf_immediate
//end------------------------------------------------------------------------------------------------------------------

//start------------------------------------------------------------------------------------------------------------------

$("[title='Travel Benefit (CEO Pending Approval)']").append("<br>"+html_tbr_approve_btn2);//sdl_ceo --Done Test
$("[title='Travel Benefit (Immediate Head Pending)']").append("<br>"+html_tbr_immediate_approve_btn2);//sdl_ceo

$("[title='Travel Benefit Request (CEO Pending) V2']").append("<br>"+html_tbr_approve_btn2_v2);//sdl_ceo --Done Test
$("[title='Travel Benefit Request (Immediate Head Pending) V2']").append("<br>"+html_tbr_immediate_approve_btn2_v2);//sdl_ceo
//end------------------------------------------------------------------------------------------------------------------


//start------------------------------------------------------------------------------------------------------------------
$("[title='Educational Benefit (CEO Pending Approval)']").append("<br>"+html_ebf_approve_btn2);//ebf_ceo

$("[title='Educational Benefit Form (CEO Pending) V2']").append("<br>"+html_ebf_approve_btn2_v2);//ebf_ceo

$("[title='Educational Benefit Form (Immediate Head Pending )V2']").append("<br>"+html_ebf_immediate_approve_btn2_v2);//ebf_imm
//end------------------------------------------------------------------------------------------------------------------


//start------------------------------------------------------------------------------------------------------------------
$("[title='Project Resources Purchasing Request (CEO Pending Approval)']").append("<br>"+html_prp_approve_btn2);//prp_ceo
//end------------------------------------------------------------------------------------------------------------------


$("[title='Process Change Request (Top Management Pending Approval)']").append("<br>"+html_pcr_approve_btn2);//pca_ceo


//----------------PCA IMM V3-----------------------------------------------
// One checkbox to check them all
            $('#pca_select_all_imm_v3').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='pca_checkbox_imm_v3']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='pca_checkbox_imm_v3']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------PCA IMM V3-----------------------------------------------



//----------------PCA CEO V3-----------------------------------------------
// One checkbox to check them all
            $('#pca_select_all_ceo_v3').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='pca_checkbox_ceo_v3']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='pca_checkbox_ceo_v3']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------PCA CEO V3-----------------------------------------------



//----------------POR IMM V3-----------------------------------------------
// One checkbox to check them all
            $('#por_select_all_imm_v3').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='por_checkbox_imm_v3']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='por_checkbox_imm_v3']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------POR IMM V3-----------------------------------------------


//----------------POR CEO V3-----------------------------------------------
// One checkbox to check them all
            $('#por_select_all_ceo_v3').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='por_checkbox_ceo_v3']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='por_checkbox_ceo_v3']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------POR CEO V3-----------------------------------------------


//----------------CCP CEO-----------------------------------------------
// One checkbox to check them all
            $('#ccp_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='ccp_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='ccp_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------CCP CEO-----------------------------------------------

//----------------ITPR CEO-----------------------------------------------
// One checkbox to check them all
            $('#itpr_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='itpr_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='itpr_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------ITPR CEO-----------------------------------------------


//----------------SDL CEO-----------------------------------------------
// One checkbox to check them all
            $('#sdl_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='sdl_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='sdl_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------SDL CEO-----------------------------------------------

//----------------SDL CEO V2-----------------------------------------------
// One checkbox to check them all
            $('#sdl_select_all_ceo_v2').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='sdl_checkbox_ceo_v2']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='sdl_checkbox_ceo_v2']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------SDL CEO V2-----------------------------------------------

//----------------SDL IMM-----------------------------------------------
// One checkbox to check them all
            $('#sdl_select_all_imm').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='sdl_checkbox_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='sdl_checkbox_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------SDL IMM-----------------------------------------------

//----------------SDL IMM V2-----------------------------------------------
// One checkbox to check them all
            $('#sdl_select_all_imm_v2').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='sdl_checkbox_imm_v2']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='sdl_checkbox_imm_v2']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------SDL IMM V2-----------------------------------------------

//----------------ITPR CEO-----------------------------------------------
// One checkbox to check them all
            $('#mrf_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='mrf_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='mrf_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------ITPR CEO-----------------------------------------------

//----------------LQF IMM-----------------------------------------------
// One checkbox to check them all
            $('#lqf_select_all_imm').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='lqf_checkbox_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='lqf_checkbox_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------LQF IMM-----------------------------------------------

//----------------FBP CEO-----------------------------------------------
// One checkbox to check them all
            $('#fbp_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='fbp_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='fbp_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------FBP CEO-----------------------------------------------

//----------------LQF IMM-----------------------------------------------
// One checkbox to check them all
            $('#rbf_select_all_imm').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='rbf_checkbox_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='rbf_checkbox_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------LQF IMM-----------------------------------------------

//----------------LQF IMM V3-----------------------------------------------
// One checkbox to check them all
            $('#rbf_select_all_imm_v3').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='rbf_checkbox_imm_v3']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='rbf_checkbox_imm_v3']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------LQF IMM V3-----------------------------------------------

//----------------FBP CEO-----------------------------------------------
// One checkbox to check them all
            $('#rbf_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='rbf_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='rbf_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------FBP CEO-----------------------------------------------

//----------------FBP CEO V3-----------------------------------------------
// One checkbox to check them all
            $('#rbf_select_all_ceo_v3').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='rbf_checkbox_ceo_v3']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='rbf_checkbox_ceo_v3']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------FBP CEO V3-----------------------------------------------

//----------------TBR CEO-----------------------------------------------
// One checkbox to check them all
            $('#tbr_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='tbr_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='tbr_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------TBR CEO-----------------------------------------------

//----------------TBR CEO V2-----------------------------------------------
// One checkbox to check them all
            $('#tbr_select_all_ceo_v2').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='tbr_checkbox_ceo_v2']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='tbr_checkbox_ceo_v2']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------TBR CEO V2-----------------------------------------------

//----------------TBR IMM-----------------------------------------------
// One checkbox to check them all
            $('#tbr_select_all_imm').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='tbr_checkbox_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='tbr_checkbox_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------TBR IMM-----------------------------------------------

//----------------TBR IMM V2-----------------------------------------------
// One checkbox to check them all
            $('#tbr_select_all_imm_v2').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='tbr_checkbox_imm_v2']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='tbr_checkbox_imm_v2']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------TBR IMM V2-----------------------------------------------


//----------------EBF CEO-----------------------------------------------
// One checkbox to check them all
            $('#ebf_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='ebf_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='ebf_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------EBF CEO-----------------------------------------------

//----------------EBF CEO V2-----------------------------------------------
// One checkbox to check them all
            $('#ebf_select_all_ceo_v2').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='ebf_checkbox_ceo_v2']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='ebf_checkbox_ceo_v2']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------EBF CEO V2-----------------------------------------------

//----------------EBF IMM V2-----------------------------------------------
// One checkbox to check them all
            $('#ebf_select_all_imm_v2').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='ebf_checkbox_imm_v2']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='ebf_checkbox_imm_v2']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------EBF IMM V2-----------------------------------------------

//----------------PRP CEO-----------------------------------------------
// One checkbox to check them all
           $('#prp_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='prp_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='prp_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------PRP CEO-----------------------------------------------


//----------------PCR CEO-----------------------------------------------
// One checkbox to check them all
            $('#pcr_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='pcr_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='pcr_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------PCR CEO-----------------------------------------------



$("#div_bulk_approval").css("box-shadow", "3px 3px 5px 6px #ccc");

var html_bulk_approval_btn="<input type='checkbox' id='bulk_approve_select_all' name='Select All'  title='Select All' '/> <label for='bulk_approve_select_all' style='margin-right: 15px;'>Select All Requests </label> <a onclick='bulk_btn_approve()'  id='bulk_approval_button'   style='text-decoration: none;display: inline;width: 160px;height: 30px;background: #4E9CAF;padding: 10px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected Item/s)</a>"+
    "<a onclick='bulk_btn_reject()' id='bulk_approval_button2'   style='text-decoration: none;display: inline;width: 160px;height: 30px;background: #4E9CAF;padding: 10px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected Item/s)</a>";

$('#div_bulk_approval').append("<br>"+html_bulk_approval_btn+"<br><br>");//bulk_btn_approval





//----------------BULK APPROVAL-----------------------------------------------
// One checkbox to check them all
           $('#bulk_approve_select_all').on('change', function () {
                if ($(this).prop('checked')) {

                    /*$("input[id='pca_select_all_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });*/

                    /*$("input[id='pca_select_all_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });*/

                    $("input[id='pca_select_all_imm_v3']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    $("input[id='pca_select_all_ceo_v3']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    /*$("input[id='por_select_all_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });*/

                    /*$("input[id='por_select_all_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });*/

                    $("input[id='por_select_all_imm_v3']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    $("input[id='por_select_all_ceo_v3']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    $("input[id='ccp_select_all_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    $("input[id='itpr_select_all_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    $("input[id='sdl_select_all_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    $("input[id='sdl_select_all_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    //----------SDL V2--------------------------
                    $("input[id='sdl_select_all_ceo_v2']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    $("input[id='sdl_select_all_imm_v2']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                    //----------SDL V2--------------------------

                    $("input[id='mrf_select_all_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    $("input[id='lqf_select_all_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    $("input[id='fbp_select_all_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    /*$("input[id='rbf_select_all_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });*/

                    /*$("input[id='rbf_select_all_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });*/


                    $("input[id='rbf_select_all_ceo_v3']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });


                    $("input[id='rbf_select_all_imm_v3']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });


                    $("input[id='tbr_select_all_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });


                    $("input[id='tbr_select_all_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    //----------TBR V2----------------------
                    $("input[id='tbr_select_all_ceo_v2']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });


                    $("input[id='tbr_select_all_imm_v2']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                    //----------TBR V2----------------------


                    $("input[id='ebf_select_all_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    //----------EBF V2---------------
                    $("input[id='ebf_select_all_ceo_v2']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });

                    $("input[id='ebf_select_all_imm_v2']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                    //----------EBF V2---------------


                    $("input[id='prp_select_all_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });


                    $("input[id='pcr_select_all_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });


                } else {
                    /*$("input[id='pca_select_all_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });*/

                    /*$("input[id='pca_select_all_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });*/

                    $("input[id='pca_select_all_imm_v3']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    $("input[id='pca_select_all_ceo_v3']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    /*$("input[id='por_select_all_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });*/

                    /*$("input[id='por_select_all_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });*/

                    $("input[id='por_select_all_imm_v3']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    $("input[id='por_select_all_ceo_v3']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    $("input[id='ccp_select_all_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    $("input[id='itpr_select_all_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    $("input[id='sdl_select_all_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    $("input[id='sdl_select_all_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    //----------SDL V2--------------------------
                    $("input[id='sdl_select_all_ceo_v2']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    $("input[id='sdl_select_all_imm_v2']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                    //----------SDL V2--------------------------

                    $("input[id='mrf_select_all_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    $("input[id='lqf_select_all_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    $("input[id='fbp_select_all_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    /*$("input[id='rbf_select_all_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });*/

                    /*$("input[id='rbf_select_all_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });*/


                    $("input[id='rbf_select_all_ceo_v3']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });


                    $("input[id='rbf_select_all_imm_v3']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });


                    $("input[id='tbr_select_all_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });


                    $("input[id='tbr_select_all_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    //----------TBR V2----------------------
                    $("input[id='tbr_select_all_ceo_v2']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });


                    $("input[id='tbr_select_all_imm_v2']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                    //----------TBR V2----------------------


                    $("input[id='ebf_select_all_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    //----------EBF V2---------------
                    $("input[id='ebf_select_all_ceo_v2']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });

                    $("input[id='ebf_select_all_imm_v2']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                    //----------EBF V2---------------


                    $("input[id='prp_select_all_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });


                    $("input[id='pcr_select_all_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------BULK APPROVAL-----------------------------------------------

});//end document ready

</script>

<style>
.mfShowSidebar{
    display:none!important;
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

    #TABLE_ITEMS{
            width: 100%;
    background: #fff;
    margin: 1em 0;
    border: 1px solid rgba(34,36,38,.15);
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: .28571429rem;
    text-align: left;
    color: rgba(0,0,0,.87);
    border-collapse: separate;
    border-spacing: 0;
    }


 table #TABLE_ITEMS th{
    cursor: auto;
    background: #f9fafb;
    text-align: inherit;
    color: rgba(0,0,0,.87);
    padding: .92857143em .78571429em;
    vertical-align: inherit;
    font-style: none;
    font-weight: 700;
    text-transform: none;
    border-bottom: 1px solid rgba(34,36,38,.1);
    border-left: none;
}
 table #TABLE_ITEMS td{
    width: 20%;
    padding: .78571429em .78571429em;
    border-top: 1px solid rgba(34,36,38,.1);
}

.loading {
  max-width: 50%;
  line-height: 1.4;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.loading__author {
  font-weight: normal;
  font-size: 0.9rem;
  color: #bdbdbd;
  margin: 0.6rem 0 2rem 0;
  display: block;
}

.loading__anim {
  width: 35px;
  height: 35px;
  display: inline-block;
  border: 5px solid rgba(189, 189, 189, 0.25);
  border-left-color: #039be5;
  border-top-color: #039be5;
  border-radius: 50%;
  animation: rotate 600ms infinite linear;
}

@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}

@media only screen 
and (max-width: 2970px){

     #siteIcon{display: none!important;}
    #s4-ribbonrow{display: none !important;}
    #sideNavBox{display: none!important;}
    #contentBox{margin-left: 16px!important;}
}


@media only screen 
and (max-width: 1210px){

.ms-mpSearchBox.ms-floatRight{display: none;}

}

@media only screen 
and (max-width: 2770px){

.noindex.ms-wpContentDivSpace  {overflow-x: auto!important;width: 95vw!important;}
.ms-WPBody.noindex.ms-wpContentDivSpace {overflow-x: hidden!important;overflow-y: hidden!important;width: auto!important;}
    
}

@media only screen 
and (max-width: 1920px){
    .noindex.ms-wpContentDivSpace  {overflow-x: auto!important;width: 95vw!important;}
    .ms-WPBody.noindex.ms-wpContentDivSpace {overflow-x: hidden!important;overflow-y: hidden!important;width: auto!important;}

}





</style> 

<div class="ui statistics" >

  <div class="yellow statistic" >
    <div class="value">
    <label id="val_pca_v3" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PCA V3
    </div>
  </div>

  <div class="olive statistic" >
    <div class="value">
    <label id="val_por_v3" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      POR V3
    </div>
  </div>

  <div class="teal statistic" >
    <div class="value">
    <label id="val_ccp" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      CCP
    </div>
  </div>

  <div class="blue statistic" >
    <div class="value">
    <label id="val_itpr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      ITPR
    </div>
  </div>

  <div class="violet statistic" >
    <div class="value">
    <label id="val_sdl" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      SDL
    </div>
  </div>

  <div class="violet statistic" >
    <div class="value">
    <label id="val_sdl_v2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      SDL V2
    </div>
  </div>


  <div class="purple statistic" >
    <div class="value">
    <label id="val_mrf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      MRF
    </div>
  </div>

  <div class="pink statistic" >
    <div class="value">
    <label id="val_lqf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      LQF
    </div>
  </div>
  
  <div class="brown statistic" >
    <div class="value">
    <label id="val_fbp" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      FBP
    </div>
  </div>


  <div class="grey statistic" >
    <div class="value">
    <label id="val_rbf_v3" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      RBF V3
    </div>
  </div>

  <div class="red statistic" >
    <div class="value">
    <label id="val_tbr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      TBR
    </div>
  </div>

  <div class="red statistic" >
    <div class="value">
    <label id="val_tbr_v2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      TBR V2
    </div>
  </div>

  <div class="orange statistic" >
    <div class="value">
    <label id="val_ebf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      EBF
    </div>
  </div>

  <div class="orange statistic" >
    <div class="value">
    <label id="val_ebf_v2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      EBF V2
    </div>
  </div>

  <div class="teal statistic" >
    <div class="value">
    <label id="val_prp" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PRP
    </div>
  </div>

  <div class="blue statistic" >
    <div class="value">
    <label id="val_pcr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PCR
    </div>
  </div>



</div>

 <div style=" cursor:pointer;position: fixed;right: 23px;bottom: 23px;padding-top: 15px;margin-bottom: 0;z-index: 10">
<div class="actionbutton arrow" style=" border-radius: 50%;opacity:0;color: #fff;background: #1BA1E2;width: 60px;height: 60px;font-weight: 300;display: flex;justify-content: center;align-items: center;box-shadow:0 0 8px #202020;"></div>

      </div>

<div id="loader_show_hide" style="display:none">
      <div id="loader" style="display:table; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 10000; background: #fff; opacity: 0.8;"><div style="display:table-cell; vertical-align:middle; text-align: center;">
<span class="loading__anim"></span><br><h2>Loading</h2></div></div></div>


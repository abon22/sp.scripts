 <link rel="stylesheet" type="text/css" href="/SiteAssets/Scripts/CEO Dashboard/statistic.css">
 <link rel="stylesheet" type="text/css" href="/SiteAssets/Scripts/CEO Dashboard/statistic.min.css">

<script type="text/javascript" src="/SiteAssets/Scripts/js/jquery.min.js"></script>
<script type="text/javascript" src="_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="_layouts/15/sp.js"></script>

<script type="text/javascript">





  //-----------------STATISTICS------------------------------------------------------------------------------

   function OnScrollDiv (div) {
   // console.log(div.scrollTop);
      if (div.scrollTop > 267) {
         $('.actionbutton').css("opacity", "1");
      } else {
        $('.actionbutton').css("opacity", "0");
      }
  }

function getItems(listName,listQuery,set_stats){
    var request={};
    request.listName=listName;
    request.set_stats=set_stats;
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

   // console.log(received.set_stats);
    if(received.set_stats == "Document Change Request Form Process Engr"){
        var label_dcr_pe= Number($('#val_dcr_pe').text());
        label_dcr_pe = label_dcr_pe + count;
        $('#val_dcr_pe').html(label_dcr_pe);
    }

    if(received.set_stats == "Document Change Request Form TQM Manager"){
        var label_dcr_tqm_mgr= Number($('#val_dcr_tqn_mgr').text());
        label_dcr_tqm_mgr = label_dcr_tqm_mgr + count;
        $('#val_dcr_tqn_mgr').html(label_dcr_tqm_mgr);
    }

    if(received.set_stats == "Document Change Request Form Closed"){
        var label_dcr_closed= Number($('#val_dcr_for_closed').text());
        label_dcr_closed = label_dcr_closed + count;
        $('#val_dcr_for_closed').html(label_dcr_closed);
    }

     if(received.set_stats == "Process Change Request Process Engr"){
        var label_pcr_pe= Number($('#val_pcr_pe').text());
        label_pcr_pe = label_pcr_pe + count;
        $('#val_pcr_pe').html(label_pcr_pe);
    }

     if(received.set_stats == "Process Change Request TQM Manager"){
        var label_pcr_tqm_mgr= Number($('#val_pcr_tqn_mgr').text());
        label_pcr_tqm_mgr = label_pcr_tqm_mgr + count;
        $('#val_pcr_tqn_mgr').html(label_pcr_tqm_mgr);
    }

    if(received.set_stats == "Process Change Request Closed"){
        var label_pcr_closed= Number($('#val_pcr_closed').text());
        label_pcr_closed = label_pcr_closed + count;
        $('#val_pcr_closed').html(label_pcr_closed);
    }

    if(received.set_stats == "QA Project Checklist"){
        var label_qpc_tqm_mgr= Number($('#val_qpc_tqn_mgr').text());
        label_qpc_tqm_mgr = label_qpc_tqm_mgr + count;
        $('#val_qpc_tqn_mgr').html(label_qpc_tqm_mgr);
    }


}

function failure(sender, args){
    console.error(args.get_message());
}
//-----------------STATISTICS------------------------------------------------------------------------------


$(document).ready(function() {
	$("#s4-workspace").scroll(function() {
    	OnScrollDiv(this);
	}); 


	getItems('Document Change Request Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Or><And><IsNull><FieldRef Name='Department_x0020_Head'/></IsNull><IsNull><FieldRef Name='Document_x0020_Reviewed_x0020_by'/></IsNull></And><IsNotNull><FieldRef Name='Department_x0020_Head'/></IsNotNull></Or><IsNull><FieldRef Name='Document_x0020_Reviewed_x0020_by'/></IsNull></And></Where></Query></View>","Document Change Request Form Process Engr");

	getItems('Document Change Request Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><IsNotNull><FieldRef Name='Document_x0020_Reviewed_x0020_by'/></IsNotNull><IsNull><FieldRef Name='TQM_x0020_Manager_x0020_Approval'/></IsNull></And></Where></Query></View>","Document Change Request Form TQM Manager");

	getItems('Document Change Request Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><Neq><FieldRef Name='Ticket_x0020_Status'/><Value Type='Text'>Close</Value></Neq><Eq><FieldRef Name='TQM_x0020_Manager_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq></And><Geq><FieldRef Name='Created'/><Value Type='DateTime'>2018-08-22T00:00:00Z</Value></Geq></And></Where></Query></View>","Document Change Request Form Closed");
	
	getItems('Process Change Request',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><IsNull><FieldRef Name='Document_x0020_Control_x0020_App'/></IsNull></Where></Query></View>","Process Change Request Process Engr");

	getItems('Process Change Request',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><IsNotNull><FieldRef Name='Document_x0020_Control_x0020_App'/></IsNotNull><IsNull><FieldRef Name='TQM_x0020_Manger_x0020_Approval'/></IsNull></And></Where></Query></View>","Process Change Request TQM Manager");

  getItems('Process Change Request',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='TQM_x0020_Manger_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq><IsNull><FieldRef Name='Ticket_x0020_Status'/></IsNull></And><Geq><FieldRef Name='Created'/><Value Type='DateTime'>2018-08-22T00:00:00Z</Value></Geq></And></Where></Query></View>","Process Change Request Closed");
	

  getItems('QA Project Checklist',"<View><Query><Where><IsNull><FieldRef Name='Approved_x0020_by'/></IsNull></Where></Query></View>","QA Project Checklist");


	$('.actionbutton').click(function() {
	    $('#s4-workspace').animate({
	      scrollTop: 0
	    }, 500);
	    return true;
	 });

	 $('#val_dcr_pe').click(function() {
	    var div_scroll = $("#div_96a4de56-213e-4590-81c9-05d0fec0d12b").position();
	    
	    $('#s4-workspace').animate({
	      scrollTop: div_scroll.top-9
	    }, 500);
	    return true;
	  });

	 $('#val_dcr_tqn_mgr').click(function() {
	    var div_scroll = $("#div_25584d6e-77be-4ff0-948a-ba024fdb7ac7").position();
	    
	    $('#s4-workspace').animate({
	      scrollTop: div_scroll.top-9
	    }, 500);
	    return true;
	  });

	 $('#val_dcr_for_closed').click(function() {
	    var div_scroll = $("#div_70e48bc1-3c1a-45f1-9da8-80bb29d5f997").position();
	    
	    $('#s4-workspace').animate({
	      scrollTop: div_scroll.top-9
	    }, 500);
	    return true;
	  });

	 $('#val_pcr_pe').click(function() {
	    var div_scroll = $("#div_673b834e-dd6e-4140-8c26-c1d84d3f4c99").position();
	    
	    $('#s4-workspace').animate({
	      scrollTop: div_scroll.top-9
	    }, 500);
	    return true;
	  });

	 $('#val_pcr_tqn_mgr').click(function() {
	    var div_scroll = $("#div_ed217cef-edf6-4071-a0d5-416e4a150b98").position();
	    
	    $('#s4-workspace').animate({
	      scrollTop: div_scroll.top-9
	    }, 500);
	    return true;
	  });

	 $('#val_pcr_closed').click(function() {
	    var div_scroll = $("#div_ff11ac62-b00f-4ee6-adb8-cea84622e7b9").position();
	    
	    $('#s4-workspace').animate({
	      scrollTop: div_scroll.top-9
	    }, 500);
	    return true;
	  });

   $('#val_qpc_tqn_mgr').click(function() {
      var div_scroll = $("#div_71154ecc-7e70-4073-a216-84a886723d1b").position();
      
      $('#s4-workspace').animate({
        scrollTop: div_scroll.top-9
      }, 500);
      return true;
    });

})


  </script>

<style>

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


</style> 

  <div class="ui statistics" >
  

<div class="orange statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_dcr_pe" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      DCR <br><i>(Process Engr)</i>
    </div>
  </div>

  <div class="yellow statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_dcr_tqn_mgr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      DCR <br> <i>(TQM Manager)</i>
    </div>
  </div>

  <div class="olive statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_dcr_for_closed" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      DCR <br> <i>(For Closed)</i>
    </div>
  </div>


  <div class="green statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_pcr_pe" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PCR <br><i>(Process Engr)</i>
    </div>
  </div>

  <div class="teal statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_pcr_tqn_mgr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PCR <br> <i>(TQM Manager)</i>
    </div>
  </div>

  <div class="blue statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_pcr_closed" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PCR <br> <i>(For Closed)</i>
    </div>
  </div>

  <div class="purple statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_qpc_tqn_mgr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      QPC <br> <i>(TQM Manager)</i>
    </div>
  </div>




</div>

 <div style=" cursor:pointer;position: fixed;right: 23px;bottom: 23px;padding-top: 15px;margin-bottom: 0;z-index: 10">
<div class="actionbutton arrow" style=" border-radius: 50%;opacity:0;color: #fff;background: #1BA1E2;width: 60px;height: 60px;font-weight: 300;display: flex;justify-content: center;align-items: center;box-shadow:0 0 8px #202020;"></div>

      </div>
 <link rel="stylesheet" type="text/css" href="/SiteAssets/Scripts/CEO Dashboard/statistic.css">
 <link rel="stylesheet" type="text/css" href="/SiteAssets/Scripts/CEO Dashboard/statistic.min.css">

<script type="text/javascript" src="/SiteAssets/Scripts/js/jquery.min.js"></script>
<script type="text/javascript" src="_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="_layouts/15/sp.js"></script>


<script type="text/javascript">


//-----------------STATISTICS------------------------------------------------------------------------------

   function OnScrollDiv (div) {
    //console.log(div.scrollTop);
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


    if(received.listName == "Special Requests"){
        var label_spr = Number($('#val_spr').text());
        label_spr = label_spr + count;
        //console.log(label_spr);
        $('#val_spr').html(label_spr);
    }

    if(received.listName == "Payment/CA Request"){
        var label_pca = Number($('#val_pca').text());
        label_pca = label_pca + count;
        $('#val_pca').html(label_pca);
    }

    if(received.listName == "Payments/CA Request"){
        var label_pca = Number($('#val_pca_2').text());
        label_pca = label_pca + count;
        $('#val_pca_2').html(label_pca);
    }

    if(received.listName == "Purchase Order Request"){
        var label_por = Number($('#val_por').text());
        label_por = label_por + count;
        $('#val_por').html(label_por);
    }

    if(received.listName == "Salary/Device Loan Benefits"){
        var label_sdl = Number($('#val_sdl').text());
        label_sdl = label_sdl + count;
        $('#val_sdl').html(label_sdl);
    }

    if(received.listName == "Liquidation Form"){
        var label_lqf = Number($('#val_lqf').text());
        label_lqf = label_lqf + count;
        $('#val_lqf').html(label_lqf);
    }


    if(received.listName == "Reimbursement Form"){
        var label_rbf = Number($('#val_rbf').text());
        label_rbf = label_rbf + count;
        $('#val_rbf').html(label_rbf);
    }

    if(received.listName == "Reimbursements Form"){
        var label_rbf = Number($('#val_rbf_2').text());
        label_rbf = label_rbf + count;
        $('#val_rbf_2').html(label_rbf);
    }


    if(received.listName == "Travel Benefit"){
        var label_tbr = Number($('#val_tbr').text());
        label_tbr = label_tbr + count;
       // console.log(label_tbr);
        $('#val_tbr').html(label_tbr);
    }

    if(received.listName == "Employee Performance Evaluation Form"){
        var label_epe = Number($('#val_epe').text());
        label_epe = label_epe + count;
        //console.log(label_epe);
        $('#val_epe').html(label_epe);
    }


    if(received.listName == "Educational Benefit"){
        var label_ebf = Number($('#val_ebf').text());
        label_ebf = label_ebf + count;
        $('#val_ebf').html(label_ebf);
    }
}
function failure(sender, args){
    console.error(args.get_message());
}
//-----------------STATISTICS------------------------------------------------------------------------------

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

        getItems('Special Requests',"<View><Query><GroupBy Collapse='TRUE' GroupLimit='30'><FieldRef Name='Immediate_x0020_Head'/></GroupBy><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And><IsNull><FieldRef Name='Purchasing_x0020_Status'/></IsNull></And><IsNull><FieldRef Name='Status'/></IsNull></And></Where></Query></View>");

        getItems('Payment/CA Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");
        
        getItems('Payments/CA Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

        getItems('Purchase Order Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><IsNull><FieldRef Name='Purchasing_x0020_Status'/></IsNull></And><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

        getItems('Salary/Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

        getItems('Liquidation Form',"<View><Query><GroupBy Collapse='TRUE' GroupLimit='30'><FieldRef Name='Immediate_x0020_Head'/></GroupBy><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><IsNotNull><FieldRef Name='Acknowledgment'/></IsNotNull><Eq><FieldRef Name='Immediate_x0020_Status'/><Value Type='Text'>(None)</Value></Eq></And><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

        getItems('Reimbursement Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><IsNotNull><FieldRef Name='Submit'/></IsNotNull><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Appro'/><Value Type='Text'>(None)</Value></Eq></And><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

        getItems('Reimbursements Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><IsNotNull><FieldRef Name='Submit'/></IsNotNull><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Appro'/><Value Type='Text'>(None)</Value></Eq></And><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

        getItems('Travel Benefit',"<View><Query><Where><And><IsNull><FieldRef Name='Status_x0020__x0028_Immediate_x0'/></IsNull><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

        //getItems('Employee Performance Evaluation Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><Eq><FieldRef Name='Evaluator_x0020_Name'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></Where></Query></View>");

        getItems('Educational Benefit',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Status'/><Value Type='Text'>For Department Head Approval</Value></Eq><Eq><FieldRef Name='Department_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");


 $('.actionbutton').click(function() {
    $('#s4-workspace').animate({
      scrollTop: 0
    }, 500);
    return true;
  });

 $('#val_spr').click(function() {
    var div_scroll = $("#div_44c79a07-8780-49b7-b3a2-a3ce550a2125").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_pca').click(function() {
    var div_scroll = $("#div_113d2500-aa72-4c32-9df8-c819a5a366b1").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_pca_2').click(function() {
    var div_scroll = $("#div_e72c34fc-a4f6-4b42-bbc7-06d4a0a16bb4").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_por').click(function() {
    var div_scroll = $("#div_d72f2d84-5ac8-4645-a6be-9e33bf125f70").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_sdl').click(function() {
    var div_scroll = $("#div_f3b95e15-32fa-48b2-938d-a4782471a9a8").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_lqf').click(function() {
    var div_scroll = $("#div_5870607b-dfae-403e-b477-cb458fa395df").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });


   $('#val_rbf').click(function() {
    var div_scroll = $("#div_abba6c0e-cc05-46b2-b00d-0d718b74ff71").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_rbf_2').click(function() {
    var div_scroll = $("#div_6146e74a-0901-4eef-9330-4c9800ab44c3").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_tbr').click(function() {
    var div_scroll = $("#div_1d03a853-f076-4c92-9646-8d2a406f26fb").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_epe').click(function() {
    var div_scroll = $("#div_8fec9e7d-136b-41a9-9249-1f548ae3e158").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_ebf').click(function() {
    var div_scroll = $("#div_fe5abea6-e94b-424e-9651-49c07d75319d").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

    });

 //----------------STATISTICS UI------------------------------------------------------------------------------------


});//end document ready

</script>


<div class="ui statistics" >

  <div class="orange statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_spr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      SPR
    </div>
  </div>

  <div class="yellow statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_pca" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PCA
    </div>
  </div>

  <div class="yellow statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_pca_2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PCA
    </div>
  </div>

  <div class="olive statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_por" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      POR
    </div>
  </div>

  <div class="violet statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_sdl" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      SDL
    </div>
  </div>

  <div class="pink statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_lqf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      LQF
    </div>
  </div>

  <div class="grey statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_rbf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      RBF
    </div>
  </div>

  <div class="grey statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_rbf_2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      RBF
    </div>
  </div>

  <div class="red statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_tbr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      TBR
    </div>
  </div>

  <div class="orange statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_ebf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      EBF
    </div>
  </div>


</div>


  <div style=" cursor:pointer;position: fixed;right: 23px;bottom: 23px;padding-top: 15px;margin-bottom: 0;z-index: 10">
<div class="actionbutton" style="opacity:0;color: #fff;background: #1BA1E2;width: 50px;height: 50px;font-weight: 300;display: flex;justify-content: center;align-items: center;box-shadow:0 0 8px #202020;"><p style="font-size:23px;margin: 0px 0px 0px 0px!important;">Top</p></div>

      </div>

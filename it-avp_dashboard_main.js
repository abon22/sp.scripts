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


  /*  if(received.listName == "Special Requests"){
        var label_spr = Number($('#val_spr').text());
        label_spr = label_spr + count;
        $('#val_spr').html(label_spr);
    }*/


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

    if(received.listName == "Project Resources Purchasing Request"){
        var label_prp = Number($('#val_prp').text());
        label_prp = label_prp + count;
        $('#val_prp').html(label_prp);
    }

    if(received.listName == "Mobile Device Authorization Form"){
        var label_mda = Number($('#val_mda').text());
        label_mda = label_mda + count;
        $('#val_mda').html(label_mda);
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

    getItems('IT Purchasing Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='CSO_x0020_Approval'/></IsNull><Eq><FieldRef Name='Status'/><Value Type='Text'>In Progress</Value></Eq></And></Where></Query></View>");//CEO

    getItems('Salary/Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>Scott Osgood</Value></Eq><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull></And></Where></Query></View>");//CEO

    // getItems('Special Requests',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>Scott Osgood</Value></Eq><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull></And><IsNull><FieldRef Name='Purchasing_x0020_Status'/></IsNull></And></Where></Query></View>");//IMM

    getItems('Project Resources Purchasing Request',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><IsNull><FieldRef Name='Approval'/></IsNull></Where></Query></View>");//IMM


    // getItems('Mobile Device Authorization Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><IsNull><FieldRef Name='CSO_x0020_Approval'/></IsNull></Where></Query></View>");//IMM
    getItems('Mobile Device Authorization Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Or><And><IsNull><FieldRef Name='CSO_x0020_Approval'/></IsNull><Eq><FieldRef Name='Ownership'/><Value Type='Text'>Employee Owned</Value></Eq></And><Eq><FieldRef Name='Ownership'/><Value Type='Text'>Company Asset</Value></Eq></Or><IsNull><FieldRef Name='CSO_x0020_Approval'/></IsNull></And></Where></Query></View>");//IMM


 $('.actionbutton').click(function() {
    $('#s4-workspace').animate({
      scrollTop: 0
    }, 500);
    return true;
  });


  $('#val_spr').click(function() {
    var div_scroll = $("#div_75bf56d4-fd41-49bb-b018-7b446fa73606").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_itpr').click(function() {
    var div_scroll = $("#div_243aabdd-7076-4163-949e-09d430a33692").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_sdl').click(function() {
    var div_scroll = $("#div_f45fa056-0986-4223-895a-ac7203382682").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_prp').click(function() {
    var div_scroll = $("#div_96ba8b07-d965-4f0b-82b9-026e38268aca").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });


  $('#val_mda').click(function() {
    var div_scroll = $("#div_0bf72867-9aca-4bf5-937a-73deb151e987").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });



});

//----------------STATISTICS UI------------------------------------------------------------------------------------



});//end document ready

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

  <div class="blue statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_itpr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      ITPR
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


  <div class="green statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_prp" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PRP
    </div>
  </div>


  <div class="pink statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_mda" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      MDA
    </div>
  </div>

</div>

 <div style=" cursor:pointer;position: fixed;right: 23px;bottom: 23px;padding-top: 15px;margin-bottom: 0;z-index: 10">
<div class="actionbutton arrow" style=" border-radius: 50%;opacity:0;color: #fff;background: #1BA1E2;width: 60px;height: 60px;font-weight: 300;display: flex;justify-content: center;align-items: center;box-shadow:0 0 8px #202020;"></div>

      </div>

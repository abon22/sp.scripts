
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.min.js"></script>
<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js"></script>

<link href="/SiteAssets/Scripts/Purchase Order Request V3/css/table.css" rel="stylesheet" type="text/css" />
<link href="/SiteAssets/Scripts/Purchase Order Request V3/css/menu.css" rel="stylesheet" type="text/css" />
<link href="/SiteAssets/Scripts/Purchase Order Request V3/css/dropdown.min.css" rel="stylesheet" type="text/css" />
<link href="/SiteAssets/Scripts/Purchase Order Request V3/css/progress.css" rel="stylesheet" type="text/css" />
<link href="/SiteAssets/Scripts/Purchase Order Request V3/css/icon.css" rel="stylesheet" type="text/css" />
<link href="/SiteAssets/Scripts/Purchase Order Request V3/css/transition.min.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/SiteAssets/Scripts/Purchase Order Request V3/js/progress.js"></script>
<script type="text/javascript" src="/SiteAssets/Scripts/Purchase Order Request V3/js/tablesort.js"></script>
<script type="text/javascript" src="/SiteAssets/Scripts/Purchase Order Request V3/js/dropdown.min.js"></script>
<script type="text/javascript" src="/SiteAssets/Scripts/Purchase Order Request V3/js/transition.min.js"></script>

<script src="/SiteAssets/Scripts/Purchase Order Request V3/js/pagination.js"></script>

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

  .c-dropdown {
    position: relative;
    display: inline-block;
    text-align: left;
  }
  .c-dropdown__list {
    margin: 5px 0 0 0;
    padding: 6px 0;
    list-style: none;
    position: absolute;
    top: 125%;
    left: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    border-radius: 10px;
    background: #fcfcfc;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: opacity 0.25s linear, top 0.25s linear;
  }
  .c-dropdown.is-open .c-dropdown__list {
    opacity: 1;
    visibility: visible;
    top: 100%;
  }
  .c-dropdown__item {
    padding: 6px 12px;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    color: #434a54;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background-color 0.25s linear;
  }
  .c-dropdown__item:hover {
    background-color: #e6e9ed;
  }
  /**
   * Component: Button
   * --------------------------------------------------
   */
  .c-button {
    -webkit-appearance: none;
    margin: 0;
    border: 0;
    overflow: visible;
    font: inherit;
    text-transform: none;
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    user-select: none;
  }
  .c-button:hover, .c-button:focus {
    outline: none;
    text-decoration: none;
  }
  .c-button:not(:disabled) {
    cursor: pointer;
  }
  /**
   * Component: Button
   * Modifier: Dropdown
   * --------------------------------------------------
   */
  .c-button--dropdown {
    padding: 6px 34px 6px 12px;
    background-color: #1BA1E2;
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    min-height: 32px;
    border-radius: 3px;
    transition: background-color 0.2s linear;
  }
  .c-button--dropdown:hover {
    background-color: #46bbf2;
  }
  .c-button--dropdown:after {
    content: "";
    position: absolute;
    top: 14px;
    right: 11px;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: #e6e9ed;
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




  }
</style>



<script type="text/javascript" > 

/**, *:before, *:after {
    box-sizing: border-box;
  }

*/

/*<link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" rel="stylesheet" type="text/css" />*/
//require moment library

//declare dates as moment objects, passing as a second parameter the format they're in

function workingHoursBetweenDates(startDate,endDate) {


    // Store minutes worked
    var minutesWorked = 0;
    //console.log("startDate: "+startDate); //for_QA
    //console.log("endDate: "+endDate); // for_QA
    // Validate input
    if (endDate <= startDate) { return 0; }
    
    // Loop from your Start to End dates (by hour)
    var current = startDate;

    // Define work range
    var workHoursStart = 8;//8am
    var workHoursEnd = 17;//5pm
    var notIncludeWeekends = true;
    //console.log("workHoursStart: "+ workHoursStart);

    // Loop while currentDate is less than end Date (by minutes)

    while(current <= endDate){  
    //console.log("includeWeekends: "+includeWeekends)  
      //console.log("while: "+current <= endDate)  
        // Is the current time within a work day (and if it occurs on a weekend or not)             
        var currentTime = current.getHours() + (current.getMinutes() / 60);
        if(currentTime >= workHoursStart && currentTime < workHoursEnd && (notIncludeWeekends ? current.getDay() !== 0 && current.getDay() !== 6 : true)){
              // Increment the number of minutes worked
              minutesWorked++;
              //console.log("in")
        }
         
        // Increment current time
        current.setTime(current.getTime() + 1000 * 60);
    }

    // Return the number of hours
    return Math.round(minutesWorked / 60 * 100) / 100;
}



var temp_perPage=10;


//Usage
var webUrl = _spPageContextInfo.webAbsoluteUrl;
var listId = _spPageContextInfo.pageListId;
//var listItemId = 224;//233
var global_versionEntries;

var por_object=[];

function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }


var arr_month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']





$(document).ready(function() {

$('#numRows_dropdown').dropdown('set selected', temp_perPage);

  //var fromDate = moment('09/07/2018 08:00 am', dateFormat);// mm/dd/yyyy
  //var toDate   = moment('09/10/2018 08:30 am', dateFormat);// mm/dd/yyyy
  //var duration = moment('09/10/2018 08:00 am', dateFormat).workingDiff(moment('09/07/2018 08:00 am', dateFormat), 'hours', true).toFixed(2);
  //console.log(duration);

  //var startDate = new Date('9/07/2018 08:00 am'); // mm/dd/yyyy hh:mm a //for_QA
  //var endDate = new Date('9/10/2018 08:00 am');  // mm/dd/yyyy hh:mm a //for_QA
  //console.log(working_end);
  // Output the number of hours worked
  //console.log(workingHoursBetweenDates(startDate,endDate).toFixed(2)); //for_QA


  	//$('#table_id').tablesort();
    $('.ui.dropdown')
    .dropdown()
  ;

  $('#numRows_dropdown')
  .dropdown({
    action: 'hide',
    onChange: function(value, text, $selectedItem) {
      //console.log(value)
      temp_perPage = value;
     $('#numRows_dropdown').dropdown('set selected', value);
        $('#tbody_id').pageMe({
          pagerSelector:'#myPager',
          activeColor: 'blue',
          prevText:'Prev',
          nextText:'Next',
          showPrevNext:true,
          hidePageNumbers:false,
          perPage:value
        });
    }
  })
;

  var currentTime = new Date()
  var current_year = currentTime.getFullYear();
  var current_month = currentTime.getMonth();
  $('#loader_show_hide').show();
    $('#loader').fadeIn(500);
    
  $('#title_paragh').html("<h1> Purchase Order Cycle Time ("+arr_month[current_month] +" - "+current_year+")</h1>");
  	GetPORListItem(current_year,arr_month[current_month]);

    
    


});






var res_count=0;
var c=0;
var z=1;
var res_count_temp=0;
function GetPORListItem(selected_year, selected_month)  
{
  res_count=0;
  c=0;
  z=1;
 

	$.ajax({
		url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Purchase Order Requests')/items?$select=Title, Created, ID &$OrderBy=Title desc&$top=9999",
		method: "GET",
		headers: { "Accept": "application/json; odata=verbose" },
		success: function (data) {

		  var datares = data.d.results;
		 
		  ////////console.log(datares)
		 
		 for (var i = 0; i < datares.length; i++) {
      //var por_id = 214;
		 	var por_id = datares[i].ID;
		 	//////console.log(por_id);

       var date = datares[i].Created;

      var check = moment(date);

      var month = check.format('MM');
      var temp_month = check.format('MMM');
      var day   = check.format('DD');
      var year  = check.format('YYYY');

      

      if(selected_year == year && selected_month == temp_month){
         res_count ++;
          //res_count  += res_count_temp;
      //  console.log("selected_year: "+selected_year +" || year:"+year);
     // console.log("selected_month: "+selected_month +" || temp_month:"+temp_month);
        getItemVersions(webUrl,listId,por_id,function(versionEntries){
        global_versionEntries=versionEntries;
        //console.log(global_versionEntries);
        return_value(selected_year, selected_month);
        })
      }else{
        $('#loader_show_hide').show();
        $('#loader').fadeIn(500);
      }

		 	



		 }

     var var_year=[];

          for (a=0; a< datares.length; a++) {
            var db_year = moment(datares[a].Created).format("YYYY");
            if(db_year){
              var_year.push(db_year);
            }
          }
           arr_year = var_year.filter(onlyUnique).sort();

           var year_div = document.getElementById('year_append_id');
          var year_list="";

          for (a=0; a< arr_year.length; a++) {

            if(selected_year!=arr_year[a]){
              year_list += "<li class='c-dropdown__item' data-dropdown-value='"+arr_year[a]+"'>"+arr_year[a]+"</li>";
            }

           }

          year_div.innerHTML=" Select Year: <input type='hidden' name='Year' id='Year' class='js-dropdown__input' value='"+selected_year+"'><span class='c-button c-button--dropdown js-dropdown__current' style='box-sizing: border-box;'>"+selected_year+"</span><ul class='c-dropdown__list'>"+year_list+"</ul>";


          var var_month=[];
         var arr_month=[];

         for (b=0; b< datares.length; b++) {
          var db_month = moment(datares[b].Created).format("MMM");
          var db_year = moment(datares[b].Created).format("YYYY");


            if(selected_year==db_year){
              var_month.push(db_month);
              ////////console.log(db_month);
            }

        }

        arr_month = var_month.filter(onlyUnique);
        ////console.log(arr_month);

          var month_div = document.getElementById('month_append_id');
          var month_list="";


          for (a=0; a<arr_month.length; a++) {
            if(selected_month!=arr_month[a]){
                month_list += "<li class='c-dropdown__item' data-dropdown-value='"+arr_month[a]+"'>"+arr_month[a]+"</li>";
            }

            var last_month = "";
            last_month = arr_month[a];
          }

          if(selected_month){
             last_month = selected_month;
          }else{
            last_month = last_month;
          }

          month_div.innerHTML = "Select Month: <input type='hidden' name='Month' id='Month' class='js-dropdown__input2' value='"+last_month+"'><span class='c-button c-button--dropdown js-dropdown__current2'  style='box-sizing: border-box;' >"+last_month+"</span><ul class='c-dropdown__list'>"+month_list+"</ul>"








		},
		error: function (error) {
		    alert(JSON.stringify(error));
		}
	});

}








function getItemVersions(url,listId,itemId,success)
{
   var versionsUrl = url + '/_layouts/versions.aspx?list=' + listId + '&ID=' + itemId;  
   $.get( versionsUrl, function( data ) {
      var versionEntries = parseVersionList(data);
      success(versionEntries);

   });
}
var arr_data_table =[];
var por_average_object = {}
function parseVersionList(data){

  /*var timeAgo = jQuery.timeago(new Date("8/27/2018 12:40 PM")); 
   //////console.log(timeAgo);*/


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
        var versionLabel = verRow.find('td:first').html().trim();

        
        
        if(versionLabel.length > 0) {
              entries[versionLabel] = {};
              //extract item version properties
              propsRow.find('tr').each(function(i){

                var pName = $(this).find('td:nth-child(1)').text().trim();
                var pVal = $(this).find('td:nth-child(2)').text().trim();

                if(pName == "Purchaser Status"){
                  if(pVal == 'For Purchasing'){
                    entries[versionLabel][pName+" For Purchasing"] = pVal; 
                  }else if(pVal == 'Closed'){
                    entries[versionLabel][pName+" Closed"] = pVal; 
                  }
                }else{
                  entries[versionLabel][pName] = pVal; 
                }
                
                entries[versionLabel]['Modified'] = modified_date; 

                

              });

            } 

     }

   });   
    ////////console.log("reference_no_temp: "+reference_no_temp);



   return entries;



}



//run this
/*getItemVersions(webUrl,listId,listItemId,function(versionEntries){
  global_versionEntries=versionEntries;
  //////console.log(versionEntries);

  return_value();

});*/




 function return_value(selected_year, selected_month){



	////console.log("call: "+(c++));

 var itemsProcessed = 0;


var ref_no_temp;


var set_modified_date_requestor="";
var set_modified_date_immediate_head="";
var set_modified_date_purchaser_for_purchasing="";
var set_modified_date_finance="";
var set_modified_date_vp="";
var set_modified_date_ceo="";
var set_modified_date_purchaser_closed="";

var arr_keyToFind = [];
var arr_findThis = ['Reference Number', 'Immediate Head Status', 'Purchaser Status For Purchasing', 'Finance Status', 'VP Approval', 'CEO Approval', 'Purchaser Status Closed']




  var val_temp;
  var val_modified_date;
  
  var objectKeys_arr = Object.keys(global_versionEntries).sort();
 //console.log(objectKeys_arr);
 

 //for (var a = 0; a < objectKeys_arr.length; a++) {
  var a=0;

  objectKeys_arr.forEach(item =>{
        
var b=0;
    arr_findThis.forEach(item2 =>{
    // for (var b = 0; b < arr_findThis.length; b++) {
      //await delay();
      
      if(global_versionEntries[item][item2]){



          arr_keyToFind[b] = [item2];

          val_temp = global_versionEntries[item][item2];
          val_modified_date = global_versionEntries[item]['Modified'];

            if(arr_keyToFind[b] == "Reference Number"){
              ////////console.log(arr_keyToFind[b]);
              por_object[val_temp]={}
              ref_no_temp = val_temp;
              por_object[val_temp]['Date'] = val_modified_date;
              set_modified_date_requestor = val_modified_date;

            }else if(arr_keyToFind[b] == "Immediate Head Status"){
              ////////console.log(arr_keyToFind[b]);
              if(ref_no_temp){
              por_object[ref_no_temp]['01_Immediate_Head'] ={[arr_keyToFind[b]]: val_temp, "Modified": val_modified_date};
            }
            set_modified_date_immediate_head = val_modified_date;

            //////console.log("Cycle Time Request - Immediate Head: "+set_modified_date_requestor+" - "+set_modified_date_immediate_head);

            //----------------------------------------------------------------------
            

            //var date1 = moment(set_modified_date_requestor, 'MM/DD/YYYY h:mm A'),
            //date2 = moment(set_modified_date_immediate_head, 'MM/DD/YYYY h:mm A');

            //var duration = moment.duration(date2.diff(date1));
            //duration = duration.asHours().toFixed(2);

            //startDate = new Date(set_modified_date_requestor);
            //endDate = new Date(set_modified_date_immediate_head);
           
           //console.log("moment: "+duration) //for_QA
           //console.log("workinghours: "+workingHoursBetweenDates(startDate,endDate).toFixed(2)); //for_QA

           //console.log("===============================") //for_QA

            startDate = new Date(set_modified_date_requestor);
            endDate = new Date(set_modified_date_immediate_head);
            duration = workingHoursBetweenDates(startDate,endDate).toFixed(2);
            if(ref_no_temp){
            por_object[ref_no_temp]['01_Immediate_Head_Cycle_Time'] = duration;
            }
            //////console.log("Cycle Time Request - Immediate Head duration: "+duration);
            //////console.log("=========================================================")

            //----------------------------------------------------------------------


            }else if(arr_keyToFind[b] == "Purchaser Status For Purchasing"){
              if(ref_no_temp){
              por_object[ref_no_temp]['02_Purchaser_Status_For_Purchased'] = {[arr_keyToFind[b]]: val_temp, "Modified": val_modified_date};
              ////////console.log("a");
            }

              //----------------------------------------------------------------------

              set_modified_date_purchaser_for_purchasing = val_modified_date;

              //////console.log("Cycle Time Immediate - Purchaser(For Purchasing: "+set_modified_date_immediate_head+" - "+set_modified_date_purchaser_for_purchasing);
              

             // var date1 = moment(set_modified_date_immediate_head, 'MM/DD/YYYY h:mm A'),
            //date2 = moment(set_modified_date_purchaser_for_purchasing, 'MM/DD/YYYY h:mm A');

            //var duration = moment.duration(date2.diff(date1));
            //duration = duration.asHours().toFixed(2);

            startDate = new Date(set_modified_date_immediate_head);
            endDate = new Date(set_modified_date_purchaser_for_purchasing);
            duration = workingHoursBetweenDates(startDate,endDate).toFixed(2);

            if(ref_no_temp){
            por_object[ref_no_temp]['02_Purchaser_Status_For_Purchased_Cycle_Time'] = duration;
          }
            //////console.log("Cycle Time Immediate - Purchaser(For Purchasing) duration: "+duration);
            //////console.log("=========================================================")

             //----------------------------------------------------------------------



          }else if(arr_keyToFind[b] == "Finance Status"){
            if(ref_no_temp){
            por_object[ref_no_temp]['03_Finance_Status'] ={[arr_keyToFind[b]]: val_temp, "Modified": val_modified_date};
          }
             //----------------------------------------------------------------------

              set_modified_date_finance = val_modified_date;

              //////console.log("Cycle Time Purchaser - Finance: "+set_modified_date_purchaser_for_purchasing+" - "+set_modified_date_finance);
              

              //var date1 = moment(set_modified_date_purchaser_for_purchasing, 'MM/DD/YYYY h:mm A'),
           // date2 = moment(set_modified_date_finance, 'MM/DD/YYYY h:mm A');

            //var duration = moment.duration(date2.diff(date1));
            //duration = duration.asHours().toFixed(2);

            startDate = new Date(set_modified_date_purchaser_for_purchasing);
            endDate = new Date(set_modified_date_finance);
            duration = workingHoursBetweenDates(startDate,endDate).toFixed(2);
            if(ref_no_temp){
            por_object[ref_no_temp]['03_Finance_Status_Cycle_Time'] = duration;
          }
            //////console.log("Cycle Time Purchser - Finance duration: "+duration);
            //////console.log("=========================================================")

             //----------------------------------------------------------------------


          }else if(arr_keyToFind[b] == "VP Approval"){
            if(ref_no_temp){
            por_object[ref_no_temp]['04_VP_Approval'] ={[arr_keyToFind[b]]: val_temp, "Modified": val_modified_date};
          }
            //----------------------------------------------------------------------

              set_modified_date_vp = val_modified_date;

              //////console.log("Cycle Time Finance - VP: "+set_modified_date_finance+" - "+set_modified_date_vp);
              

             /* var date1 = moment(set_modified_date_finance, 'MM/DD/YYYY h:mm A'),
            date2 = moment(set_modified_date_vp, 'MM/DD/YYYY h:mm A');

            var duration = moment.duration(date2.diff(date1));
            duration = duration.asHours().toFixed(2);*/

            startDate = new Date(set_modified_date_finance);
            endDate = new Date(set_modified_date_vp);
            duration = workingHoursBetweenDates(startDate,endDate).toFixed(2);

            if(ref_no_temp){
            por_object[ref_no_temp]['04_VP_Status_Cycle_Time'] = duration;
          }
            //////console.log("Cycle Time Finance - VP duration: "+duration);
            //////console.log("=========================================================")

             //----------------------------------------------------------------------

          }else if(arr_keyToFind[b] == "CEO Approval"){
            if(ref_no_temp){
            por_object[ref_no_temp]['05_CEO_Approval'] ={[arr_keyToFind[b]]: val_temp, "Modified": val_modified_date};
          }
            //----------------------------------------------------------------------

            

              set_modified_date_ceo = val_modified_date;

              if(set_modified_date_vp){

                //////console.log("Cycle Time VP - CEO: "+set_modified_date_vp+" - "+set_modified_date_ceo);
              

                /*var date1 = moment(set_modified_date_vp, 'MM/DD/YYYY h:mm A'),
                date2 = moment(set_modified_date_ceo, 'MM/DD/YYYY h:mm A');

                var duration = moment.duration(date2.diff(date1));
                duration = duration.asHours().toFixed(2);*/

                startDate = new Date(set_modified_date_vp);
                endDate = new Date(set_modified_date_ceo);
                duration = workingHoursBetweenDates(startDate,endDate).toFixed(2);
                if(ref_no_temp){
                por_object[ref_no_temp]['05_CEO_Status_Cycle_Time'] = duration;
              }
                //////console.log("Cycle Time VP - CEO duration: "+duration);
                //////console.log("=========================================================")


              }else{

                //////console.log("Cycle Time Finance - CEO: "+set_modified_date_finance+" - "+set_modified_date_ceo);
              

                /*var date1 = moment(set_modified_date_finance, 'MM/DD/YYYY h:mm A'),
                date2 = moment(set_modified_date_ceo, 'MM/DD/YYYY h:mm A');

                var duration = moment.duration(date2.diff(date1));
                duration = duration.asHours().toFixed(2);*/

                startDate = new Date(set_modified_date_finance);
                endDate = new Date(set_modified_date_ceo);
                duration = workingHoursBetweenDates(startDate,endDate).toFixed(2);
                if(ref_no_temp){
                por_object[ref_no_temp]['05_CEO_Status_Cycle_Time'] = duration;
              }
                //////console.log("Cycle Time Finance - CEO duration: "+duration);
                //////console.log("=========================================================")

              }

              

             //----------------------------------------------------------------------

          }else if(arr_keyToFind[b] == "Purchaser Status Closed"){
            if(ref_no_temp){
              por_object[ref_no_temp]['06_Purchaser_Status_For_Closed'] = {[arr_keyToFind[b]]: val_temp, "Modified": val_modified_date};
              ////////console.log("b");
            }
              set_modified_date_purchaser_closed = val_modified_date;

              //----------------------------------------------------------------------
              if(set_modified_date_ceo){
                //if have set_modified_date_ceo
                

                //////console.log("Cycle Time CEO - Purchaser(Closed): "+set_modified_date_ceo+" - "+set_modified_date_purchaser_closed);
                
                /*var date1 = moment(set_modified_date_ceo, 'MM/DD/YYYY h:mm A'),
                date2 = moment(set_modified_date_purchaser_closed, 'MM/DD/YYYY h:mm A');

                var duration = moment.duration(date2.diff(date1));
                duration = duration.asHours().toFixed(2);*/

                startDate = new Date(set_modified_date_ceo);
                endDate = new Date(set_modified_date_purchaser_closed);
                duration = workingHoursBetweenDates(startDate,endDate).toFixed(2);

            if(ref_no_temp){

                por_object[ref_no_temp]['06_Purchaser_Status_Closed_Cycle_Time'] = duration;
              }
                //////console.log("Cycle Time CEO - Purchaser(Closed) duration: "+duration);
                //////console.log("=========================================================")

              }else{
                //if no set_modified_date_ceo

                //////console.log("Cycle Time Immediate - Purchaser Closed: "+set_modified_date_immediate_head+" - "+set_modified_date_purchaser_closed);
                
                /*var date1 = moment(set_modified_date_immediate_head, 'MM/DD/YYYY h:mm A'),
                date2 = moment(set_modified_date_purchaser_closed, 'MM/DD/YYYY h:mm A');

                var duration = moment.duration(date2.diff(date1));
                duration = duration.asHours().toFixed(2);*/


                startDate = new Date(set_modified_date_immediate_head);
                endDate = new Date(set_modified_date_purchaser_closed);
                duration = workingHoursBetweenDates(startDate,endDate).toFixed(2);
            if(ref_no_temp){

                por_object[ref_no_temp]['06_Purchaser_Status_Closed_Cycle_Time'] = duration;
              }
                //////console.log("Cycle Time Immediate - Purchaser Closed duration: "+duration);
                //////console.log("=========================================================")

              }

              

             //----------------------------------------------------------------------


          }







        


          }else{
            ////////console.log("aq")
          }
          b++;
    });//second loop

      
      

    if(Object.keys(global_versionEntries).length - 1 === a) {
      //console.log("aw");
      callback(selected_year, selected_month);
      //c++;
      //////console.log("c: "+c);
    }
a++;

});//first loop



}//end function

/*function callback () { 
c++;
////console.log("c: "+c);
  //////console.log(por_object); 
  ////console.log(Object.keys(por_object).length); 
var z=0;
  for (var i = 0; i < Object.keys(por_object).length; i++) {
  	var date = por_object[Object.keys(por_object)[i]]['Date'];
  	var ref_no = Object.keys(por_object)[i];
  	var immediate_head = por_object[Object.keys(por_object)[i]]['01_Immediate_Head_Cycle_Time'];
  	var admin_purchasing = por_object[Object.keys(por_object)[i]]['02_Purchaser_Status_For_Purchased_Cycle_Time'];
  	var finance = por_object[Object.keys(por_object)[i]]['03_Finance_Status_Cycle_Time'];
  	var vp = por_object[Object.keys(por_object)[i]]['04_VP_Status_Cycle_Time'];
  	var ceo = por_object[Object.keys(por_object)[i]]['05_CEO_Status_Cycle_Time'];
  	var admin_closed = por_object[Object.keys(por_object)[i]]['06_Purchaser_Status_Closed_Cycle_Time'];

z++;
////console.log("Z: "+z);
  	//arr_data_table.push([date, ref_no, immediate_head, admin_purchasing, finance, vp, ceo, admin_closed])
  	//////console.log(arr_data_table);
  };


}*/



var total_immediate_head=0, total_admin_purchasing=0, total_finance=0, total_vp=0, total_ceo=0, total_admin_closed=0, total_cycle_time_temp=0 ;

function callback (selected_year, selected_month) { 
////console.log("c: "+c);
  //////console.log(por_object.sort()); 
  //////console.log("length:"+Object.keys(por_object).length); 
//console.log("z: "+z+" || res_count: "+res_count);
//////console.log("res_count: "+res_count);
////console.log("z: "+z);
  if(z==res_count) {


    total_immediate_head=0;
    total_admin_purchasing=0;
    total_finance=0;
    total_vp=0;
    total_ceo=0;
    total_admin_closed=0;
    total_cycle_time_temp=0;

    $('#tbody_id').html("");
    $('#tfoot_id').html("");

  //por_object.sort();
   // ////console.log(Object.keys(por_object).sort() );
   
   var object_key_por = Object.keys(por_object).sort();
  //console.log(por_object);

 
  	var tbody_append;
  		for (var i = object_key_por.length-1; i >=0; i--) {
        

		  var date = por_object[object_key_por[i]]['Date'];
		  var check = moment(date, 'MM/DD/YYYY h:mm A');

      var month = check.format('MM');
			var temp_month = check.format('MMM');
			var day   = check.format('DD');
			var year  = check.format('YYYY');
      ////console.log(month)

      //console.log(selected_year+" || "+selected_month);



			var date_temp = month+"/"+day+"/"+year;

		  	var ref_no = object_key_por[i];
        var substring_id= ref_no.substring(9);

        //////console.log(substring_id);

   if(selected_year == year && selected_month == temp_month){
          ////console.log(date_temp)
        

        var immediate_head = por_object[object_key_por[i]]['01_Immediate_Head_Cycle_Time'] || '';

		  	var immediate_head_status = '';
        if( typeof por_object[object_key_por[i]]['01_Immediate_Head'] === "undefined"){
          immediate_head_status = "";
        }else{
          immediate_head_status = por_object[object_key_por[i]]['01_Immediate_Head']['Immediate Head Status'];
          //immediate_head_status = "Rejected";
        }

		  	var admin_purchasing = por_object[object_key_por[i]]['02_Purchaser_Status_For_Purchased_Cycle_Time'] || '';
		  	var finance = por_object[object_key_por[i]]['03_Finance_Status_Cycle_Time'] || '';
        var vp = por_object[object_key_por[i]]['04_VP_Status_Cycle_Time'] || '';

        var finance_status='';

        if( typeof por_object[object_key_por[i]]['03_Finance_Status'] === "undefined"){
          finance_status = "";
        }else{
          finance_status =  por_object[object_key_por[i]]['03_Finance_Status']['Finance Status'];
        }


		  	var vp_status = '';
        if( typeof por_object[object_key_por[i]]['04_VP_Approval'] === "undefined"){
          vp_status = "N/A";
        }else{
          vp_status = por_object[object_key_por[i]]['04_VP_Approval']['VP Approval'];
        }

        var ceo = por_object[object_key_por[i]]['05_CEO_Status_Cycle_Time'] || '';

		  	var ceo_status = '' ;
        if( typeof por_object[object_key_por[i]]['05_CEO_Approval'] === "undefined"){
          ceo_status = "N/A";
        }else{
          ceo_status = por_object[object_key_por[i]]['05_CEO_Approval']['CEO Approval'];
        }

		  	var admin_closed = por_object[object_key_por[i]]['06_Purchaser_Status_Closed_Cycle_Time'] || '';
		  	var total_cycle_time = Number(immediate_head) + Number(admin_purchasing) + Number(finance) + Number(vp) + Number(ceo) + Number(admin_closed)  ;

		  	total_immediate_head+=Number(immediate_head);
		  	total_admin_purchasing+=Number(admin_purchasing);
		  	total_finance+=Number(finance);
		  	total_vp+=Number(vp);
		  	total_ceo+=Number(ceo);
		  	total_admin_closed+=Number(admin_closed);
		  	total_cycle_time_temp+=Number(total_cycle_time);


			//////console.log("push");
			//////console.log("Z: "+z);


			  	//arr_data_table.push([date_temp, ref_no, immediate_head, admin_purchasing, finance, vp, ceo, admin_closed])
			  	//////console.log(ref_no+" :"+immediate_head);
          
			  	/*$('#tbody_id').append("<tr>"+
			  		"<td>"+date_temp +"</td>"+
			  		"<td><a href='https://intranet.houseofit.com.au/Lists/Purchase%20Order%20Requests/DispForm.aspx?ID="+substring_id+"' target='_blank'>"+ref_no+"</a></td>"+
			  		"<td data-sort-value='"+immediate_head+"' >"+((immediate_head == '' ) ? '' : moment.duration(Number(immediate_head), "hours").humanize() )+"</td>"+
			  		"<td data-sort-value='"+admin_purchasing+"' >"+((admin_purchasing == '' ) ? '' : moment.duration(Number(admin_purchasing), "hours").humanize() )+"</td>"+
			  		"<td data-sort-value='"+finance+"' >"+((finance == '' ) ? '' : moment.duration(Number(finance), "hours").humanize() )+"</td>"+
			  		"<td data-sort-value='"+vp+"' >"+((vp == '' ) ? '' : moment.duration(Number(vp), "hours").humanize() )+"</td>"+
			  		"<td data-sort-value='"+ceo+"' >"+((ceo == '' ) ? '' : moment.duration(Number(ceo), "hours").humanize() )+"</td>"+
			  		"<td data-sort-value='"+admin_closed+"' >"+((admin_closed == '' ) ? '' : moment.duration(Number(admin_closed), "hours").humanize() )+"</td>"+
			  		"<td data-sort-value='"+total_cycle_time+"' >"+((total_cycle_time == '' ) ? '' : moment.duration(Number(total_cycle_time), "hours").humanize() )+"</td>"+
			  		"</tr>"); */

           // console.log("immediate_head_status: "+immediate_head_status);
            $('#tbody_id').append("<tr>"+
            "<td>"+date_temp +"</td>"+
            "<td><a href='https://intranet.houseofit.com.au/Lists/Purchase%20Order%20Requests/DispForm.aspx?ID="+substring_id+"' target='_blank'>"+ref_no+"</a></td>"+
            "<td "+((immediate_head_status == 'Approved') ? "class='positive'" : ((immediate_head_status == '') ? '' : "class='negative'") )+" >"+((immediate_head == '' ) ? '' : Number(immediate_head).toFixed(2) )+"</td>"+
            "<td "+((admin_purchasing == '' ) ? ((immediate_head_status == 'Approved') ? ((admin_closed != '') ? "class='disabled'" : '' ) : "class='disabled'") : '')+" >"+((admin_purchasing == '' ) ? ((immediate_head_status == 'Approved') ? ((admin_closed != '') ? '<i>N/A</i>' : '' ) : '<i>N/A</i>') : Number(admin_purchasing).toFixed(2) )+"</td>"+
            "<td "+((finance == '' ) ? ((admin_purchasing == '') ? ((admin_closed == '') ? ((immediate_head_status=="Approved")? '' : "class='disabled'" ) : "class='disabled'") : '' ): '')+" >"+((finance == '' ) ? ((admin_purchasing == '') ? ((admin_closed == '') ? ((immediate_head_status=="Approved")? '' : '<i>N/A</i>' ) : '<i>N/A</i>' ) : '' ) : Number(finance).toFixed(2) )+"</td>"+
            "<td "+((vp_status == 'Approved') ? "class='positive'" : ((vp_status == 'N/A') ? ((finance == '') ? ((admin_closed == '')? ((immediate_head_status == "Approved") ? '' : "class='disabled'" ):"class='disabled'"  ) : ((finance_status =="For CEO")? "class='disabled'" : '')) : "class='negative'" ) )+" >"+((vp_status == 'Approved') ? Number(vp).toFixed(2) : ((vp_status == 'N/A') ? ((finance == '') ? ((admin_closed == '')? ((immediate_head_status == "Approved") ? '' : '<i>N/A</i>' ):'<i>N/A</i>'  ) : ((finance_status =="For CEO")? '<i>N/A</i>' : '')) : Number(vp).toFixed(2) ) )+"</td>"+
            "<td "+((ceo_status == 'Approved') ? "class='positive'" : ((ceo_status == 'N/A') ? ((vp_status == '' || vp_status == 'N/A')? ((admin_closed == '')? ((immediate_head_status == 'Approved')? '' : "class='disabled'") : "class='disabled'" ):"class='disabled'" ) : "class='negative'")  )+" >"+
            ((ceo_status == 'Approved') ? Number(ceo).toFixed(2) : ((ceo_status == 'N/A') ? ((vp_status == '' || vp_status == 'N/A')? ((admin_closed == '')? ((immediate_head_status == 'Approved')? '' : '<i>N/A</i>') : '<i>N/A</i>' ) : '<i>N/A</i>' ) :  Number(ceo).toFixed(2))  )+"</td>"+
            "<td "+((admin_closed == '' ) ? ((ceo_status == 'N/A' ) ? ((admin_purchasing == '')? ((immediate_head_status == 'Approved')? '' : "class='disabled'") : ((ceo_status == 'N/A')?  ((ceo_status=='Rejected') ? "class='disabled'": ((vp_status=='Rejected')? "class='disabled'" : '' ) ) : '') ) : '' ) : '')+" >"+((admin_closed == '' ) ? ((ceo_status == 'N/A' ) ? ((admin_purchasing == '')? ((immediate_head_status == 'Approved')? '' : '<i>N/A</i>') : ((ceo_status == 'N/A')?  ((ceo_status=='Rejected') ? '<i>N/A</i>': ((vp_status=='Rejected')? '<i>N/A</i>' : '' ) ) : '') ) : '' ) : Number(admin_closed).toFixed(2))+"</td>"+
            "<td>"+((total_cycle_time == '' ) ? '' : Number(total_cycle_time).toFixed(2) )+"</td>"+
            "</tr>");

            
//"class='disabled'"

      }//end else


			  	
	 	}//end for loop
	 	//////console.log(arr_data_table);
	 	//////console.log("total_immediate_head: "+total_immediate_head);
	 	//////console.log("res_count: "+res_count);
    //console.log(total_cycle_time_temp);
	 	var avg_immediate_head = total_immediate_head/res_count;
	 	var avg_admin_purchasing = total_admin_purchasing/res_count;
	 	var avg_finance = total_finance/res_count;
	 	var avg_vp = total_vp/res_count;
	 	var avg_ceo = total_ceo/res_count;
	 	var avg_admin_closed = total_admin_closed/res_count;
    //var avg_cycle_time_temp = (avg_immediate_head + avg_admin_purchasing + avg_finance + avg_vp + avg_ceo + avg_admin_closed)/6
	 	var avg_cycle_time_temp = total_cycle_time_temp/res_count;


    //console.log(avg_immediate_head);

/*    $('#tfoot_id').append("<tr><td colspan='9' style='border-top: 1px solid rgba(34, 36, 38, 0.1)!important;'></td></tr><tr>"+
            "<th colspan='2'><b>Total Avg Cycle Time</b></th>"+
            "<th><b>"+((avg_immediate_head == 0 ) ? '' :moment.duration(Number(avg_immediate_head), "hours").humanize() )+"</b></th>"+
            "<th><b>"+((avg_admin_purchasing == 0 ) ? '' :moment.duration(Number(avg_admin_purchasing), "hours").humanize() )+"</b></th>"+
            "<th><b>"+((avg_finance == 0 ) ? '' :moment.duration(Number(avg_finance), "hours").humanize() )+"</b></th>"+
            "<th><b>"+((avg_vp == 0 ) ? '' :moment.duration(Number(avg_vp), "hours").humanize() )+"</b></th>"+
            "<th><b>"+((avg_ceo == 0 ) ? '' :moment.duration(Number(avg_ceo), "hours").humanize() )+"</b></th>"+
            "<th><b>"+((avg_admin_closed == 0 ) ? '' :moment.duration(Number(avg_admin_closed), "hours").humanize() )+"</b></th>"+
            "<th><b>"+((avg_cycle_time_temp == 0 ) ? '' :moment.duration(Number(avg_cycle_time_temp), "hours").humanize() )+"</b></th>"+
            "</tr>"+
            "<tr><th colspan='9'>"+((avg_cycle_time_temp != 0 ) ? "<div class='ui right floated pagination menu' id='myPager'></div>" : '' )+"<div style='text-align:left; width:100%; margin:0 auto;' id='total_reg'></div></th></tr>"); 
*/

	 	$('#tfoot_id').append("<tr><td colspan='9' style='border-top: 1px solid rgba(34, 36, 38, 0.1)!important;'></td></tr><tr>"+
				    "<th colspan='2'><b>Total Avg Cycle Time (hr/s)</b></th>"+
				    "<th><b>"+((avg_immediate_head == 0 ) ? '' : Number(avg_immediate_head).toFixed(2) )+"</b></th>"+
				    "<th><b>"+((avg_admin_purchasing == 0 ) ? '' : Number(avg_admin_purchasing).toFixed(2) )+"</b></th>"+
				    "<th><b>"+((avg_finance == 0 ) ? '' :Number(avg_finance).toFixed(2) )+"</b></th>"+
				    "<th><b>"+((avg_vp == 0 ) ? '' : Number(avg_vp).toFixed(2) )+"</b></th>"+
				    "<th><b>"+((avg_ceo == 0 ) ? '' : Number(avg_ceo).toFixed(2) )+"</b></th>"+
				    "<th><b>"+((avg_admin_closed == 0 ) ? '' : Number(avg_admin_closed).toFixed(2) )+"</b></th>"+
				    "<th><b>"+((avg_cycle_time_temp == 0 ) ? '' : Number(avg_cycle_time_temp).toFixed(2) )+"</b></th>"+
			  		"</tr>"+
            "<tr><th colspan='9'>"+((avg_cycle_time_temp != 0 ) ? "<div class='ui right floated pagination menu' id='myPager'></div>" : '' )+"<div style='text-align:left; width:100%; margin:0 auto;' id='total_reg'></div></th></tr>"); 

// ////console.log(moment.duration(Number(avg_immediate_head), "hours").humanize()+" || "+avg_immediate_head);
 //////console.log(moment.duration(Number(avg_admin_purchasing), "hours").humanize()+" || "+avg_admin_purchasing);
    $('#tbody_id').pageMe({
          pagerSelector:'#myPager',
          activeColor: 'blue',
          prevText:'Prev',
          nextText:'Next',
          showPrevNext:true,
          hidePageNumbers:false,
          perPage:temp_perPage
        });

    // console.log("load");
    //     var numOfVisibleRows = $('#tbody_id tr:visible').length;
    //     console.log(numOfVisibleRows);

    $('#loader_show_hide').hide();
    $('#loader').fadeOut(500);




  }//end if

  z++;


}//end function

var $html = $('html');
    
    $html.on('click.ui.dropdown', '.js-dropdown', function(e) {
      e.preventDefault();
      $(this).toggleClass('is-open');
    });
    
    $html.on('click.ui.dropdown', '.js-dropdown [data-dropdown-value]', function(e) {
      e.preventDefault();
      var $item = $(this);
      var $dropdown = $item.parents('.js-dropdown');
      $dropdown.find('.js-dropdown__input').val($item.data('dropdown-value'));
      $dropdown.find('.js-dropdown__current').text($item.text());

      var selected_year = $item.data('dropdown-value');

    });
    
    $html.on('click.ui.dropdown', function(e) {
      var $target = $(e.target);
      if (!$target.parents().hasClass('js-dropdown')) {
        $('.js-dropdown').removeClass('is-open');
        //////////////////////////////console.log("b");
      }
    });


       //------------------------------------MONTH------------------------------------------------
//html
    var $html2 = $('html');
    $html2.on('click.ui.dropdown', '.js-dropdown2', function(e) {
      e.preventDefault();
      $(this).toggleClass('is-open');
    });

     $html2.on('click.ui.dropdown', '.js-dropdown2 [data-dropdown-value]', function(e) {
      e.preventDefault();
      var $item = $(this);
      var $dropdown = $item.parents('.js-dropdown2');
      $dropdown.find('.js-dropdown__input2').val($item.data('dropdown-value'));
      $dropdown.find('.js-dropdown__current2').text($item.text());

      var selected_month = $item.data('dropdown-value');
      //////////////////////////console.log("selected_month: "+selected_month);
      var get_selected_year = $("#Year").val();

      $('#loader_show_hide').show();
      $('#loader').fadeIn(500);
     GetPORListItem(get_selected_year,selected_month);
     $('#title_paragh').html("<h1> Purchase Order Cycle Time ("+selected_month +" - "+get_selected_year+")</h1>");

    });

       $html2.on('click.ui.dropdown', function(e) {
      var $target = $(e.target);
      if (!$target.parents().hasClass('js-dropdown2')) {
        $('.js-dropdown2').removeClass('is-open');
      }
    });

//html




</script>

</head>


<body>



<div id="loader_show_hide" style="display:none">
      <div id="loader" style="display:table; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 10000; background: #fff; opacity: 0.8;"><div style="display:table-cell; vertical-align:middle; text-align: center;">
<span class="loading__anim"></span><br><h2>Loading</h2></div></div></div>

<div id="id_div_fixed" style=" box-sizing: border-box;">
    <div class="c-dropdown js-dropdown" id="year_append_id" >
    </div> &nbsp &nbsp &nbsp
    <div class="c-dropdown js-dropdown2" id="month_append_id"></div>
</div>
<br>

<div id="title_paragh"></div>
  <br>
  <h3>Select Number of Rows</h3>
<div class="ui selection dropdown" id="numRows_dropdown"style=" box-sizing: border-box;min-width: 9.2em!important;">
  <input type="hidden" name="maxRows">
  <i class="dropdown icon"></i>
  <div class="default text"></div>
  <div class="menu">

    <div class="item" data-value="5000">Show All</div>
    <div class="item" data-value="10" selected>10</div>
    <div class="item" data-value="25">25</div>
    <div class="item" data-value="50">50</div>
    <div class="item" data-value="100">100</div>
  </div>
</div>

<table id="table_id" class="ui celled blue sortable selectable striped collapsing table " style="text-align:center" >
  <thead>
    <tr>
      <th>Date</th>
      <th>Reference No</th>
      <th>Immediate Head</th>
      <th>Admin(For Purchasing)</th>
      <th>Finance</th>
      <th>VP</th>
      <th>CEO</th>
      <th>Admin(Closed)</th>
      <th>Total Cycle Time (hr/s)</th>
    </tr>
  </thead>
  <tbody id="tbody_id">
  </tbody>
  <tfoot id="tfoot_id">

  </tfoot>
</table>



</body>

</html>
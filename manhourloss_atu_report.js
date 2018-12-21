

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet">
  <link href="/SiteAssets/Scripts/Man Hour Loss/css/table.css" rel="stylesheet">
  <link href="/SiteAssets/Scripts/Man Hour Loss/css/popup.css" rel="stylesheet">
  <link href="/SiteAssets/Scripts/Man Hour Loss/css/modal.css" rel="stylesheet">
  <link href="/SiteAssets/Scripts/Man Hour Loss/css/dimmer.css" rel="stylesheet">
  <link href="/SiteAssets/Scripts/Man Hour Loss/css/label.css" rel="stylesheet">
  <link href="/SiteAssets/Scripts/Man Hour Loss/css/transition.css" rel="stylesheet">
  <script type="text/javascript" src="/SiteAssets/Scripts/js/jquery.min.js"></script>
  <script type="text/javascript" src="/SiteAssets/Scripts/js/moment.min.js"></script>
  <script type="text/javascript" src="/SiteAssets/Scripts/Man Hour Loss/js/loader.js"></script>
  <script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script>
  <script type="text/javascript" src="/SiteAssets/Scripts/Man Hour Loss/js/popup.js"></script>
  <script type="text/javascript" src="/SiteAssets/Scripts/Man Hour Loss/js/transition.js"></script>
  <script type="text/javascript" src="/SiteAssets/Scripts/Man Hour Loss/js/modal.js"></script>
  <script type="text/javascript" src="/SiteAssets/Scripts/Man Hour Loss/js/dimmer.js"></script>
  <script src=""></script>
  <script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script>

<style>

  /** ---------------------------------------- **/

  @media screen and (max-width: 580px) {
    body {
      font-size: 16px;
      line-height: 22px;
    }
  }

  .wrapper {
    margin: 0 auto;
    padding: 0px;
    max-width: 1450px;
  }

  .table {
    margin: 0 0 40px 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    display: table;
  }
  @media screen and (max-width: 580px) {
    .table {
      display: block;
    }
  }

  .fixdiv{

    position:fixed;
    margin: auto;
    z-index:10;
    top: 65px;
    padding: 4px 0;
    width: 25%;
    border-radius: 5px;
    background: #fcfcfc;
    text-align: center;
    opacity:0.9;
    /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: opacity 0.25s linear, top 0.25s linear;*/
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    

  }
h1{
  margin: 19px;
}
  .fixdiv_month{

    position:fixed;
    margin: auto;
    z-index:10;
    top: 65px;
    left: 510px;
    padding: 4px 0;
    width: 10%;
    border-radius: 5px;
    background: #fcfcfc;
    text-align: center;
    opacity:0.9;
    /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: opacity 0.25s linear, top 0.25s linear;*/
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    

  }


  .fixdiv_quarter{

    position:fixed;
    margin: auto;
    z-index:10;
    top: 110px;
    left: 48px;
    padding: 4px 0;
    width: 10%;
    border-radius: 5px;
    background: #fcfcfc;
    text-align: center;
    opacity:0.9;
    /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: opacity 0.25s linear, top 0.25s linear;*/
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    

  }

  .row {
    display: table-row;
    background: #f6f6f6;
  }
  .row:nth-of-type(odd) {
    background: #e9e9e9;
  }
  .row.header {
    font-weight: 900;
    color: #ffffff;
    background: #ea6153;
  }
  .row.green {
    background: #27ae60;
  }
  .row.blue {
    background: #2980b9;
  }
  .row.orange {
    background: #DC3912;
  }
  @media screen and (max-width: 580px) {
    .row {
      padding: 14px 0 7px;
      display: block;
    }
    .row.header {
      padding: 0;
      height: 6px;
    }
    .row.header .cell {
      display: none;
    }
    .row .cell {
      margin-bottom: 10px;
    }
    .row .cell:before {
      margin-bottom: 3px;
      content: attr(data-title);
      min-width: 98px;
      font-size: 10px;
      line-height: 10px;
      font-weight: bold;
      text-transform: uppercase;
      color: #969696;
      display: block;
    }
  }

  .cell {
    padding: 6px 12px;
    display: table-cell;
  }
  @media screen and (max-width: 580px) {
    .cell {
      padding: 2px 16px;
    }
  }

  /** ---------------------------------------- **/

  #sideNavBox {
  display: none;
  }
  #contentBox {
  margin-left: 20px;
  }
  .ms-fullscreenmode #contentBox
  {
      margin-left: 0;
  }




  #table_id tr:nth-child(even) {background: #f7f7f7}
  #table_id tr:nth-child(odd) {background: #FFF}
  #table_id_employee tr:nth-child(even) {background: #f7f7f7}
  #table_id_employee tr:nth-child(odd) {background: #FFF}

  *, *:before, *:after {
    box-sizing: border-box;
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

  .fixdiv{

    position:fixed;
    margin: auto;
    z-index:10;
    top: 65px;
    padding: 4px 0;
    width: 25%;
    border-radius: 5px;
    background: #fcfcfc;
    text-align: center;
    opacity:0.9;
    /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: opacity 0.25s linear, top 0.25s linear;*/
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    

  }



</style>
  <script type="text/javascript">

    function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }


    var arr_month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    var urlForAllItems = "/_api/Web/Lists/GetByTitle('Man Hour Loss')/Items?$select=Man_x0020_hour_x0020_loss_x0020_,Hours,ATU_x0020_Type,Date,Id,Hours,Section/Id,Section/Title,Department/Id,Department/Title,Name/Title,Name&$expand=Name/Title&$expand=Department&$expand=Section&$top=1000&$OrderBy=Date asc";
    $(document).ready(function() {

     /* $('.activating.element')
        .popup()
      ;*/

      
         
      





        var currentTime = new Date()
        var current_year = currentTime.getFullYear();
        var current_month = currentTime.getMonth();

        //alert(arr_month[current_month]);
        get_atu_report(urlForAllItems,current_year,arr_month[current_month]);

        $("#s4-workspace").scroll(function() {
        OnScrollDiv(this);
    }); 

      });

// Contacted
// Did Not Contact
// System Error
// No Contact (>15mins)
// No Contact (<15mins)
// Planned & Approved
// Unplanned
  
var dataRes;
var arr_absences_data=[];
var arr_tardy_data=[];
var arr_undertime_data=[];
var arr_overall_contact_and_did_not_data=[];
var pass_month ="";
var pass_selected_year ="";
  function get_atu_report(url,selected_year,selected_month) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {
         pass_selected_year = selected_year;
         pass_month = selected_month;

        arr_absences_data=[];
        arr_tardy_data=[];
        arr_undertime_data=[];
        arr_overall_contact_and_did_not_data=[];

          dataRes = data.d.results;
         // //console.log(dataRes)

          var var_year=[];

          for (a=0; a< dataRes.length; a++) {
            var db_year = moment(dataRes[a].Date).format("YYYY");
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

          year_div.innerHTML=" Select Year: <input type='hidden' name='Year' id='Year' class='js-dropdown__input' value='"+selected_year+"'><span class='c-button c-button--dropdown js-dropdown__current'>"+selected_year+"</span><ul class='c-dropdown__list'>"+year_list+"</ul>";



         var var_month=[];
         var arr_month=[];

         for (b=0; b< dataRes.length; b++) {
          var db_month = moment(dataRes[b].Date).format("MMM");
          var db_year = moment(dataRes[b].Date).format("YYYY");
          var db_department = dataRes[b].Section.Title;


            if(selected_year==db_year){
              var_month.push(db_month);
              ////console.log(db_month);
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

          month_div.innerHTML = "Select Month: <input type='hidden' name='Month' id='Month' class='js-dropdown__input2' value='"+last_month+"'><span class='c-button c-button--dropdown js-dropdown__current2'>"+last_month+"</span><ul class='c-dropdown__list'>"+month_list+"</ul>"





          var count_late = 0, count_absent = 0, count_undertime = 0 ;

          var count_late_contacted = 0, count_late_system_error = 0, count_late_no_contact_greater = 0, count_late_no_contact_less = 0;
          var count_absent_contacted = 0, count_absent_did_not_contact = 0, count_absent_error = 0;
          var count_undertime_approved = 0, count_undertime_unplanned = 0;

          //var arr_atu_data={};
          var arr_manhourloss_type =["Late", "Absent", "Undertime"];
         /* list_of_employee_absent_contacted_div = document.getElementById('list_of_employee_absent_contacted');
          list_of_employee_absent_contacted_div.innerHTML = "";



*/
          var arr_list_absences_contacted=[], arr_list_absences_did_not_contacted=[], arr_list_absences_system_error=[] ;

          var arr_list_tardy_contacted=[], arr_list_tardy_system_error=[], arr_list_tardy_no_contact_greater=[], arr_list_tardy_no_contact_less=[] ;

          var arr_list_undertime_planned=[], arr_list_undertime_unplanned=[];

          var arr_list_over_all_contacted=[], arr_list_over_all_did_not_contacted=[];




          for(a=0; a<dataRes.length; a++){
            var manhourloss_type = dataRes[a].Man_x0020_hour_x0020_loss_x0020_;
            var atu_type = dataRes[a].ATU_x0020_Type;

            var db_month = moment(dataRes[a].Date).format("MMM");
            var db_year = moment(dataRes[a].Date).format("YYYY");
            var emp_name = dataRes[a].Name.Title;
            //console.log(emp_name);

            if(manhourloss_type == arr_manhourloss_type[0] && selected_year == db_year && selected_month == db_month){//Late
              count_late++;
              // Contacted
              // System Error
              // No Contact (>15mins)
              // No Contact (<15mins)
              if(atu_type == "Contacted"){
                count_late_contacted++;
                arr_list_tardy_contacted.push(emp_name);
                arr_list_over_all_contacted.push(emp_name);
              }else if(atu_type == "System Error"){
                count_late_system_error++;
                arr_list_tardy_system_error.push(emp_name);
                arr_list_over_all_contacted.push(emp_name);
              }else if(atu_type == "No Contact (>15mins)"){
                count_late_no_contact_greater++;
                arr_list_tardy_no_contact_greater.push(emp_name);
                arr_list_over_all_did_not_contacted.push(emp_name);
              }else if(atu_type == "No Contact (<15mins)"){
                count_late_no_contact_less++;
                arr_list_tardy_no_contact_less.push(emp_name);
                arr_list_over_all_did_not_contacted.push(emp_name);
              }else{
                ////console.log("Unknown Late Atu Type");
                ////console.log(dataRes[a].Id);
              }

            }else if(manhourloss_type == arr_manhourloss_type[1] && selected_year == db_year && selected_month == db_month){//Absent
              count_absent++;
              // Contacted
              // Did Not Contact
              // System Error
              if(atu_type == "Contacted"){
                count_absent_contacted++;
                arr_list_absences_contacted.push(emp_name);
                arr_list_over_all_contacted.push(emp_name);
              }else if(atu_type == "Did Not Contact"){
                count_absent_did_not_contact++;
                arr_list_absences_did_not_contacted.push(emp_name);
                arr_list_over_all_did_not_contacted.push(emp_name);
              }else if(atu_type == "System Error"){
                count_absent_error++;
                arr_list_absences_system_error.push(emp_name);
                arr_list_over_all_contacted.push(emp_name);
              }else{
                ////console.log("Unknown Absent Atu Type");
              }

            }else if(manhourloss_type == arr_manhourloss_type[2] && selected_year == db_year && selected_month == db_month){//Undertime
              count_undertime++;
              // Planned & Approved
              // Unplanned
              if(atu_type == "Planned & Approved"){
                count_undertime_approved++;
                arr_list_undertime_planned.push(emp_name);
                arr_list_over_all_contacted.push(emp_name);
              }else if(atu_type == "Unplanned"){
                count_undertime_unplanned++;
                arr_list_undertime_unplanned.push(emp_name);
                arr_list_over_all_contacted.push(emp_name);
              }else{
                ////console.log("Unknown Undertime Atu Type");
                ////console.log(dataRes[a].Id);
              }

            }


          }//end for loop



         google.charts.load('current', {'packages':['corechart']});

         atu_report_table_absenses = document.getElementById('atu_report_table_absenses');
         atu_report_table_absenses.innerHTML = "<table class='ui blue table'> <thead> <tr><th colspan='3' style='text-align: center;'>Absences</th></tr> <tr> <th>Type</th> <th style='text-align: center;'>No. of Employees</th> <th style='text-align: center;'>Percentage</th> </tr> </thead> <tbody> <tr> <td>Contacted</td> <td style='text-align: center;' class='selectable'><a class='absent_contacted_modal' href='#'>"+count_absent_contacted+"</a></td> <td style='text-align: center;'>"+parseFloat(count_absent_contacted/count_absent*100).toFixed(2)+"%</td> </tr> <tr> <td>Did Not Contact</td> <td style='text-align: center;' class='selectable'><a class='absent_did_not_contact_modal' href='#'>"+count_absent_did_not_contact+"</a></td> <td style='text-align: center;'>"+parseFloat(count_absent_did_not_contact/count_absent*100).toFixed(2)+"%</td> </tr> <tr> <td>System Error</td> <td style='text-align: center;' class='selectable'><a class='absent_error_modal' href='#'>"+count_absent_error+"</a></td> <td style='text-align: center;'>"+parseFloat(count_absent_error/count_absent*100).toFixed(2)+"%</td> </tr> </tbody> <tfoot> <tr><th><b>Total</b></th> <th style='text-align: center;'><b>"+count_absent+"</b></th> <th style='text-align: center;'><b>100.00%</b></th> </tr></tfoot> </table> ";

         arr_absences_data.push(['Type', 'No. of Employees']);
         arr_absences_data.push(['Contacted', count_absent_contacted]);
         arr_absences_data.push(['Did Not Contact', count_absent_did_not_contact]);
         arr_absences_data.push(['System Error', count_absent_error]);

         google.charts.setOnLoadCallback(drawChart_absences);

         //arr_list_absences_contacted = arr_list_absences_contacted.filter(onlyUnique).sort();

         //------------------------CONTACTED----------------------------------------------------------------------------------

        arr_list_absences_contacted.sort();
        var current_absences_contacted = null;
        var cnt_absences_contacted = 0;
         $('#list_of_employee_absent_contacted').empty();

        for (var i = 0; i < arr_list_absences_contacted.length; i++) {
            if (arr_list_absences_contacted[i] != current_absences_contacted) {
                if (cnt_absences_contacted > 0) {
                    $('#list_of_employee_absent_contacted').append("<div class='ui circular labels'>"+current_absences_contacted+" <a class='ui label'>"+cnt_absences_contacted+"</a></div> ");
                }
                current_absences_contacted = arr_list_absences_contacted[i];
                cnt_absences_contacted = 1;
            } else {
                cnt_absences_contacted++;
            }
        }
        if (cnt_absences_contacted > 0) {
            $('#list_of_employee_absent_contacted').append("<div class='ui circular labels'>"+current_absences_contacted+" <a class='ui label'>"+cnt_absences_contacted+"</a></div> ");
        }

        $(".absent_contacted_modal").click(function(){
          $('.ui.modal.absent.contact')
              .modal('show')
            ;
        })
        //------------------------CONTACTED----------------------------------------------------------------------------------

        //------------------------DID NOT CONTACTED----------------------------------------------------------------------------------

        arr_list_absences_did_not_contacted.sort();
        var current_absences_did_not_contacted = null;
        var cnt_absences_did_not_contacted = 0;
         $('#list_of_employee_absent_not_contacted').empty();

        for (var i = 0; i < arr_list_absences_did_not_contacted.length; i++) {
            if (arr_list_absences_did_not_contacted[i] != current_absences_did_not_contacted) {
                if (cnt_absences_did_not_contacted > 0) {
                    $('#list_of_employee_absent_not_contacted').append("<div class='ui circular labels'>"+current_absences_did_not_contacted+" <a class='ui label'>"+cnt_absences_did_not_contacted+"</a></div> ");
                }
                current_absences_did_not_contacted = arr_list_absences_did_not_contacted[i];
                cnt_absences_did_not_contacted = 1;
            } else {
                cnt_absences_did_not_contacted++;
            }
        }
        if (cnt_absences_did_not_contacted > 0) {
            $('#list_of_employee_absent_not_contacted').append("<div class='ui circular labels'>"+current_absences_did_not_contacted+" <a class='ui label'>"+cnt_absences_did_not_contacted+"</a></div> ");
        }

        $(".absent_did_not_contact_modal").click(function(){
          $('.ui.modal.absent.notcontact')
              .modal('show')
            ;
        })
        //------------------------DID NOT CONTACTED----------------------------------------------------------------------------------

       //------------------------SYSTEM ERROR----------------------------------------------------------------------------------

        arr_list_absences_system_error.sort();
        var current_absences_error = null;
        var cnt_absences_error = 0;
         $('#list_of_employee_absent_error').empty();

        for (var i = 0; i < arr_list_absences_system_error.length; i++) {
            if (arr_list_absences_system_error[i] != current_absences_error) {
                if (cnt_absences_error > 0) {
                    $('#list_of_employee_absent_error').append("<div class='ui circular labels'>"+current_absences_error+" <a class='ui label'>"+cnt_absences_error+"</a></div> ");
                }
                current_absences_error = arr_list_absences_system_error[i];
                cnt_absences_error = 1;
            } else {
                cnt_absences_error++;
            }
        }
        if (cnt_absences_error > 0) {
            $('#list_of_employee_absent_error').append("<div class='ui circular labels'>"+current_absences_error+" <a class='ui label'>"+cnt_absences_error+"</a></div> ");
        }

        $(".absent_error_modal").click(function(){
          $('.ui.modal.absent.systemerror')
              .modal('show')
            ;
        })
        //------------------------SYSTEM ERROR----------------------------------------------------------------------------------




//=============================================================================================================================================================================
          atu_report_table_late = document.getElementById('atu_report_table_late');
          atu_report_table_late.innerHTML = "<table class='ui green table'> <thead> <tr><th colspan='3' style='text-align: center;'>Tardy</th></tr> <tr> <th>Type</th> <th style='text-align: center;'>No. of Employees</th> <th style='text-align: center;'>Percentage</th> </tr> </thead> <tbody> <tr> <td>Contacted</td> <td style='text-align: center;' class='selectable'><a class='tardy_contacted_modal' href='#'>"+count_late_contacted+"</a></td> <td style='text-align: center;'>"+parseFloat(count_late_contacted/count_late*100).toFixed(2)+"%</td> </tr><tr> <td>System Error</td> <td style='text-align: center;' class='selectable'><a class='tardy_system_error_modal' href='#'>"+count_late_system_error+"</a></td> <td style='text-align: center;'>"+parseFloat(count_late_system_error/count_late*100).toFixed(2)+"%</td> </tr> <tr> <td>No Contact (>15mins)</td> <td style='text-align: center;'><a class='tardy_no_contact_greater_modal' href='#'>"+count_late_no_contact_greater+"</a></td> <td style='text-align: center;'>"+parseFloat(count_late_no_contact_greater/count_late*100).toFixed(2)+"%</td> </tr> <tr> <td>No Contact (<15mins)</td> <td style='text-align: center;' class='selectable'><a class='tardy_no_contact_less_modal' href='#'>"+count_late_no_contact_less+"</a></td> <td style='text-align: center;'>"+parseFloat(count_late_no_contact_less/count_late*100).toFixed(2)+"%</td> </tr> </tbody> <tfoot> <tr><th><b>Total</b></th> <th style='text-align: center;'><b>"+count_late+"</b></th> <th style='text-align: center;'><b>100.00%</b></th> </tr></tfoot> </table> ";

          arr_tardy_data.push(['Type', 'No. of Employees']);
          arr_tardy_data.push(['Contacted', count_late_contacted]);
          arr_tardy_data.push(['System Error', count_late_system_error]);
          arr_tardy_data.push(['No Contact (>15mins)', count_late_no_contact_greater]);
          arr_tardy_data.push(['No Contact (<15mins)', count_late_no_contact_less]);

          google.charts.setOnLoadCallback(drawChart_tardy);

        //------------------------CONTACTED----------------------------------------------------------------------------------

        arr_list_tardy_contacted.sort();
        var current_tardy_contacted = null;
        var cnt_tardy_contacted = 0;
         $('#list_of_employee_tardy_contacted').empty();

        for (var i = 0; i < arr_list_tardy_contacted.length; i++) {
            if (arr_list_tardy_contacted[i] != current_tardy_contacted) {
                if (cnt_tardy_contacted > 0) {
                    $('#list_of_employee_tardy_contacted').append("<div class='ui circular labels'>"+current_tardy_contacted+" <a class='ui label'>"+cnt_tardy_contacted+"</a></div> ");
                }
                current_tardy_contacted = arr_list_tardy_contacted[i];
                cnt_tardy_contacted = 1;
            } else {
                cnt_tardy_contacted++;
            }
        }
        if (cnt_tardy_contacted > 0) {
            $('#list_of_employee_tardy_contacted').append("<div class='ui circular labels'>"+current_tardy_contacted+" <a class='ui label'>"+cnt_tardy_contacted+"</a></div> ");
        }

        $(".tardy_contacted_modal").click(function(){
          $('.ui.modal.tardy.contact')
              .modal('show')
            ;
        })
        //------------------------CONTACTED----------------------------------------------------------------------------------

         //------------------------SYSTEM ERROR----------------------------------------------------------------------------------

        arr_list_tardy_system_error.sort();
        var current_tardy_sysem_error = null;
        var cnt_tardy_system_error = 0;
         $('#list_of_employee_tardy_system_error').empty();

        for (var i = 0; i < arr_list_tardy_system_error.length; i++) {
            if (arr_list_tardy_system_error[i] != current_tardy_sysem_error) {
                if (cnt_tardy_system_error > 0) {
                    $('#list_of_employee_tardy_system_error').append("<div class='ui circular labels'>"+current_tardy_sysem_error+" <a class='ui label'>"+cnt_tardy_system_error+"</a></div> ");
                }
                current_tardy_sysem_error = arr_list_tardy_system_error[i];
                cnt_tardy_system_error = 1;
            } else {
                cnt_tardy_system_error++;
            }
        }
        if (cnt_tardy_system_error > 0) {
            $('#list_of_employee_tardy_system_error').append("<div class='ui circular labels'>"+current_tardy_sysem_error+" <a class='ui label'>"+cnt_tardy_system_error+"</a></div> ");
        }

        $(".tardy_system_error_modal").click(function(){
          $('.ui.modal.tardy.systemerror')
              .modal('show')
            ;
        })
        //------------------------SYSTEM ERROR----------------------------------------------------------------------------------

         //------------------------NO CONTACT GREATER----------------------------------------------------------------------------------

        arr_list_tardy_no_contact_greater.sort();
        var current_tardy_no_contact_greater = null;
        var cnt_tardy_no_contact_greater = 0;
         $('#list_of_employee_tardy_no_contact_greater').empty();

        for (var i = 0; i < arr_list_tardy_no_contact_greater.length; i++) {
            if (arr_list_tardy_no_contact_greater[i] != current_tardy_no_contact_greater) {
                if (cnt_tardy_no_contact_greater > 0) {
                    $('#list_of_employee_tardy_no_contact_greater').append("<div class='ui circular labels'>"+current_tardy_no_contact_greater+" <a class='ui label'>"+cnt_tardy_no_contact_greater+"</a></div> ");
                }
                current_tardy_no_contact_greater = arr_list_tardy_no_contact_greater[i];
                cnt_tardy_no_contact_greater = 1;
            } else {
                cnt_tardy_no_contact_greater++;
            }
        }
        if (cnt_tardy_no_contact_greater > 0) {
            $('#list_of_employee_tardy_no_contact_greater').append("<div class='ui circular labels'>"+current_tardy_no_contact_greater+" <a class='ui label'>"+cnt_tardy_no_contact_greater+"</a></div> ");
        }

        $(".tardy_no_contact_greater_modal").click(function(){
          $('.ui.modal.tardy.nocontactgreater')
              .modal('show')
            ;
        })
        //------------------------NO CONTACT GREATER----------------------------------------------------------------------------------

         //------------------------NO CONTACT LESS----------------------------------------------------------------------------------

        arr_list_tardy_no_contact_less.sort();
        var current_tardy_no_contact_less = null;
        var cnt_tardy_no_contact_less = 0;
         $('#list_of_employee_tardy_no_contact_less').empty();

        for (var i = 0; i < arr_list_tardy_no_contact_less.length; i++) {
            if (arr_list_tardy_no_contact_less[i] != current_tardy_no_contact_less) {
                if (cnt_tardy_no_contact_less > 0) {
                    $('#list_of_employee_tardy_no_contact_less').append("<div class='ui circular labels'>"+current_tardy_no_contact_less+" <a class='ui label'>"+cnt_tardy_no_contact_less+"</a></div> ");
                }
                current_tardy_no_contact_less = arr_list_tardy_no_contact_less[i];
                cnt_tardy_no_contact_less = 1;
            } else {
                cnt_tardy_no_contact_less++;
            }
        }
        if (cnt_tardy_no_contact_less > 0) {
            $('#list_of_employee_tardy_no_contact_less').append("<div class='ui circular labels'>"+current_tardy_no_contact_less+" <a class='ui label'>"+cnt_tardy_no_contact_less+"</a></div> ");
        }

        $(".tardy_no_contact_less_modal").click(function(){
          $('.ui.modal.tardy.nocontactless')
              .modal('show')
            ;
        })
        //------------------------NO CONTACT LESS----------------------------------------------------------------------------------


//=============================================================================================================================================================================
          atu_report_table_undertime = document.getElementById('atu_report_table_undertime');
          atu_report_table_undertime.innerHTML = "<table class='ui orange table'> <thead> <tr><th colspan='3' style='text-align: center;'>Undertime</th></tr> <tr> <th>Type</th> <th style='text-align: center;'>No. of Employees</th> <th style='text-align: center;'>Percentage</th> </tr> </thead> <tbody> <tr> <td>Planned & Approved</td> <td style='text-align: center;' class='selectable'><a class='undertime_planned_modal' href='#'>"+count_undertime_approved+"</a></td> <td style='text-align: center;'>"+parseFloat(count_undertime_approved/count_undertime*100).toFixed(2)+"%</td> </tr> <tr> <td>Unplanned</td> <td style='text-align: center;' class='selectable'><a class='undertime_unplanned_modal' href='#'>"+count_undertime_unplanned+"</a></td> <td style='text-align: center;'>"+parseFloat(count_undertime_unplanned/count_undertime*100).toFixed(2)+"%</td> </tr> </tbody> <tfoot> <tr><th><b>Total</b></th> <th style='text-align: center;'><b>"+count_undertime+"</b></th> <th style='text-align: center;'><b>100.00%</b></th> </tr></tfoot> </table> ";

          arr_undertime_data.push(['Type', 'No. of Employees']);
          arr_undertime_data.push(['Planned & Approved', count_undertime_approved]);
          arr_undertime_data.push(['Unplanned', count_undertime_unplanned]);

          google.charts.setOnLoadCallback(drawChart_undertime);

          //------------------------PLANNED----------------------------------------------------------------------------------

        arr_list_undertime_planned.sort();
        var current_undertime_planned = null;
        var cnt_undertime_planned = 0;
         $('#list_of_employee_undertime_planned').empty();

        for (var i = 0; i < arr_list_undertime_planned.length; i++) {
            if (arr_list_undertime_planned[i] != current_undertime_planned) {
                if (cnt_undertime_planned > 0) {
                    $('#list_of_employee_undertime_planned').append("<div class='ui circular labels'>"+current_undertime_planned+" <a class='ui label'>"+cnt_undertime_planned+"</a></div> ");
                }
                current_undertime_planned = arr_list_undertime_planned[i];
                cnt_undertime_planned = 1;
            } else {
                cnt_undertime_planned++;
            }
        }
        if (cnt_undertime_planned > 0) {
            $('#list_of_employee_undertime_planned').append("<div class='ui circular labels'>"+current_undertime_planned+" <a class='ui label'>"+cnt_undertime_planned+"</a></div> ");
        }

        $(".undertime_planned_modal").click(function(){
          $('.ui.modal.undertime.planned')
              .modal('show')
            ;
        })
        //------------------------PLANNED----------------------------------------------------------------------------------

         //------------------------PLANNED----------------------------------------------------------------------------------

        arr_list_undertime_unplanned.sort();
        var current_undertime_unplanned = null;
        var cnt_undertime_unplanned = 0;
         $('#list_of_employee_undertime_unplanned').empty();

        for (var i = 0; i < arr_list_undertime_unplanned.length; i++) {
            if (arr_list_undertime_unplanned[i] != current_undertime_unplanned) {
                if (cnt_undertime_unplanned > 0) {
                    $('#list_of_employee_undertime_unplanned').append("<div class='ui circular labels'>"+current_undertime_unplanned+" <a class='ui label'>"+cnt_undertime_unplanned+"</a></div> ");
                }
                current_undertime_unplanned = arr_list_undertime_unplanned[i];
                cnt_undertime_unplanned = 1;
            } else {
                cnt_undertime_unplanned++;
            }
        }
        if (cnt_undertime_unplanned > 0) {
            $('#list_of_employee_undertime_unplanned').append("<div class='ui circular labels'>"+current_undertime_unplanned+" <a class='ui label'>"+cnt_undertime_unplanned+"</a></div> ");
        }

        $(".undertime_unplanned_modal").click(function(){
          $('.ui.modal.undertime.unplanned')
              .modal('show')
            ;
        })
        //------------------------PLANNED----------------------------------------------------------------------------------


//=============================================================================================================================================================================
		//contact_and_did_not_contact_table

		var over_all_contacted = count_absent_contacted + count_absent_error + count_late_contacted + count_late_system_error + count_undertime;
		var over_all_did_not_contacted = count_absent_did_not_contact + count_late_no_contact_greater + count_late_no_contact_less;
		var over_all_total_contact_did_not = over_all_contacted  + over_all_did_not_contacted;

		contact_and_did_not_contact_table = document.getElementById('contact_and_did_not_contact_table');
        contact_and_did_not_contact_table.innerHTML = "<table class='ui orange table'> <thead> <tr><th colspan='3' style='text-align: center;'>Over-All</th></tr> <tr> <th>Type</th> <th style='text-align: center;'>No. of Employees</th> <th style='text-align: center;'>Percentage</th> </tr> </thead> <tbody> <tr> <td>Contacted</td> <td style='text-align: center;' class='selectable'><a class='over_all_contacted_modal' href='#'>"+over_all_contacted+"</a></td> <td style='text-align: center;'>"+parseFloat(over_all_contacted/over_all_total_contact_did_not*100).toFixed(2)+"%</td> </tr> <tr> <td>Did Not Contact</td> <td style='text-align: center;' class='selectable'><a class='over_all_did_not_contacted_modal' href='#'>"+over_all_did_not_contacted+"</a></td> <td style='text-align: center;'>"+parseFloat(over_all_did_not_contacted/over_all_total_contact_did_not*100).toFixed(2)+"%</td> </tr> </tbody> <tfoot> <tr><th><b>Total</b></th> <th style='text-align: center;'><b>"+over_all_total_contact_did_not+"</b></th> <th style='text-align: center;'><b>100.00%</b></th> </tr></tfoot> </table> ";

        arr_overall_contact_and_did_not_data.push(['Type', 'No. of Employees']);
        arr_overall_contact_and_did_not_data.push(['Contacted', over_all_contacted ]);
        arr_overall_contact_and_did_not_data.push(['Did Not Contacted', over_all_did_not_contacted ]);

        google.charts.setOnLoadCallback(drawChart_ver_all_contacted_did_not_contacted);

        //------------------------CONTACTED----------------------------------------------------------------------------------
        arr_list_over_all_contacted.sort();
        var current_over_all_contact = null;
        var cnt_over_all_contact = 0;
         $('#list_of_employee_over_all_contacted').empty();

        for (var i = 0; i < arr_list_over_all_contacted.length; i++) {
            if (arr_list_over_all_contacted[i] != current_over_all_contact) {
                if (cnt_over_all_contact > 0) {
                    $('#list_of_employee_over_all_contacted').append("<div class='ui circular labels'>"+current_over_all_contact+" <a class='ui label'>"+cnt_over_all_contact+"</a></div> ");
                }
                current_over_all_contact = arr_list_over_all_contacted[i];
                cnt_over_all_contact = 1;
            } else {
                cnt_over_all_contact++;
            }
        }
        if (cnt_over_all_contact > 0) {
            $('#list_of_employee_over_all_contacted').append("<div class='ui circular labels'>"+current_over_all_contact+" <a class='ui label'>"+cnt_over_all_contact+"</a></div> ");
        }

        $(".over_all_contacted_modal").click(function(){
          $('.ui.modal.overall.contacted')
              .modal('show')
            ;
        })


        //------------------------CONTACTED----------------------------------------------------------------------------------

        //------------------------DID NOT CONTACTED----------------------------------------------------------------------------------

        arr_list_over_all_did_not_contacted.sort();
        var current_over_all_did_not_contact = null;
        var cnt_over_all_did_not_contact = 0;
         $('#list_of_employee_over_all_did_not_contacted').empty();

        for (var i = 0; i < arr_list_over_all_did_not_contacted.length; i++) {
            if (arr_list_over_all_did_not_contacted[i] != current_over_all_did_not_contact) {
                if (cnt_over_all_did_not_contact > 0) {
                    $('#list_of_employee_over_all_did_not_contacted').append("<div class='ui circular labels'>"+current_over_all_did_not_contact+" <a class='ui label'>"+cnt_over_all_did_not_contact+"</a></div> ");
                }
                current_over_all_did_not_contact = arr_list_over_all_did_not_contacted[i];
                cnt_over_all_did_not_contact = 1;
            } else {
                cnt_over_all_did_not_contact++;
            }
        }
        if (cnt_over_all_did_not_contact > 0) {
            $('#list_of_employee_over_all_did_not_contacted').append("<div class='ui circular labels'>"+current_over_all_did_not_contact+" <a class='ui label'>"+cnt_over_all_did_not_contact+"</a></div> ");
        }

        $(".over_all_did_not_contacted_modal").click(function(){
          $('.ui.modal.overall.didnotcontacted')
              .modal('show')
            ;
        })


        //------------------------DID NOT CONTACTED----------------------------------------------------------------------------------

      

        },//end sucesss
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });//end ajax request
  }//end function

//-drawcharts
      function drawChart_absences() {



        var data = google.visualization.arrayToDataTable(arr_absences_data);

        var options = {
          title: 'Absences ('+pass_month+' - '+pass_selected_year+')'

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_absences'));

        chart.draw(data, options);
      }

      function drawChart_tardy() {

        //console.log("----------TARDY--------")
        //console.log(arr_tardy_data);

        var data = google.visualization.arrayToDataTable(arr_tardy_data);

        var options = {
          title: 'Tardy ('+pass_month+' - '+pass_selected_year+')'

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_tardy'));

        chart.draw(data, options);
      }

      function drawChart_undertime() {

        //console.log("----------UNDERTIME--------")
        //console.log(arr_undertime_data);

        var data = google.visualization.arrayToDataTable(arr_undertime_data);

        var options = {
          title: 'Undertime ('+pass_month+' - '+pass_selected_year+')'

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_undertime'));

        chart.draw(data, options);
      }


        function drawChart_ver_all_contacted_did_not_contacted() {

        var data = google.visualization.arrayToDataTable(arr_overall_contact_and_did_not_data);
        //console.log(arr_overall_contact_and_did_not_data)

        var options = {
          title: 'Over All ('+pass_month+' - '+pass_selected_year+')'

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_over_all_contact_did_not'));

        chart.draw(data, options);
      }



//-drawcharts

//html
      function OnScrollDiv (div) {
        if (div.scrollTop > 100) {
          $("#id_div_fixed").addClass("fixdiv");
        } else {
          $("#id_div_fixed").removeClass("fixdiv");
        }

        if (div.scrollTop > 1683) {
          $("#id_div_fixed_month").addClass("fixdiv_month");
        } else {
          $("#id_div_fixed_month").removeClass("fixdiv_month");
        }
      }
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
        //////////////////////////console.log("b");
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
      //////////////////////console.log("selected_month: "+selected_month);
      var get_selected_year = $("#Year").val();

     get_atu_report(urlForAllItems,get_selected_year,selected_month);

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


<div class="ui mini modal absent contact">
  <div class="header">List of Absent Employee (Contacted)</div>
  <div class="scrolling content" id="list_of_employee_absent_contacted">
  </div>
</div>

<div class="ui mini modal absent notcontact">
  <div class="header">List of Absent Employee (Did Not Contacted)</div>
  <div class="scrolling content" id="list_of_employee_absent_not_contacted">
  </div>
</div>

<div class="ui mini modal absent systemerror">
  <div class="header">List of Absent Employee (System Error)</div>
  <div class="scrolling content" id="list_of_employee_absent_error">
  </div>
</div>

<!--=========================================================================================-->

<div class="ui mini modal tardy contact">
  <div class="header">List of Tardy Employee (Contacted)</div>
  <div class="scrolling content" id="list_of_employee_tardy_contacted">
  </div>
</div>

<div class="ui mini modal tardy systemerror">
  <div class="header">List of Tardy Employee (System Error)</div>
  <div class="scrolling content" id="list_of_employee_tardy_system_error">
  </div>
</div>

<div class="ui mini modal tardy nocontactgreater">
  <div class="header">List of Tardy Employee (No Contact > 15mins)</div>
  <div class="scrolling content" id="list_of_employee_tardy_no_contact_greater">
  </div>
</div>

<div class="ui mini modal tardy nocontactless">
  <div class="header">List of Tardy Employee (No Contact < 15mins)</div>
  <div class="scrolling content" id="list_of_employee_tardy_no_contact_less">
  </div>
</div>
<!--=========================================================================================-->

<div class="ui mini modal undertime planned">
  <div class="header">List of Undertime Employee (Planned & Approved)</div>
  <div class="scrolling content" id="list_of_employee_undertime_planned">
  </div>
</div>

<div class="ui mini modal undertime unplanned">
  <div class="header">List of Undertime Employee (Unplanned)</div>
  <div class="scrolling content" id="list_of_employee_undertime_unplanned">
  </div>
</div>

<!--=========================================================================================-->

<div class="ui mini modal overall contacted">
  <div class="header">List of Over - All Employee (Contacted)</div>
  <div class="scrolling content" id="list_of_employee_over_all_contacted">
  </div>
</div>

<div class="ui mini modal overall didnotcontacted">
  <div class="header">List of Over - All Employee (Did Not Contacted)</div>
  <div class="scrolling content" id="list_of_employee_over_all_did_not_contacted">
  </div>
</div>


<!--=========================================================================================-->
  <br>
  <br>

<div id="id_div_fixed" >
    <div class="c-dropdown js-dropdown" id="year_append_id" >
<!--       Select Year: <input type='hidden' name='Year' id='Year' class='js-dropdown__input' value='2018'>
<span class='c-button c-button--dropdown js-dropdown__current'>2018</span>
<ul class='c-dropdown__list'>
<li class='c-dropdown__item' data-dropdown-value='2018'>2018</li>
<li class='c-dropdown__item' data-dropdown-value='2017'>2017</li>
</ul> -->
    </div> &nbsp &nbsp &nbsp
    <div class="c-dropdown js-dropdown2" id="month_append_id"></div>
</div>


  <span align="right"><h2><a style="text-decoration:none" href="https://intranet.houseofit.com.au/Lists/Man%20Hour%20Loss/AllItems.aspx">Man Hour Loss Calendar/Entry</a></h2></span>

  <table border="0" align="center" >
    <tr>
      <td>
        <div class="table" id="atu_report_table_absenses"></div>

      </td>

      <td width="70%">
        <div id="piechart_absences"  align="center" style="width: 100%; height: 500px"></div>
      </td>
       <!--  test -->
      
    </tr>

    <tr>
      <td colspan="2"><hr></td>
    </tr>

    <tr>

      <td>
       <div class="table" id="atu_report_table_late"></div>

      </td>

      </td>
       <td width="70%">
        <div id="piechart_tardy"  align="center" style="width: 100%; height: 500px"></div>
      </td>
      
    </tr>
    <tr>
      <td colspan="2"><hr></td>
    </tr>
    <tr>
      <td>
        <div class="table" id="atu_report_table_undertime"></div>

        
      </td>
       <td width="70%">
        <div id="piechart_undertime"  align="center" style="width: 100%; height: 500px"></div>
      </td>

    </tr>
    <tr>
    	<td colspan="2"><hr></td>
    </tr>
    <tr>
    	<td>
    		<div class="table" id="contact_and_did_not_contact_table"></div>
    	</td>
    	<td width="70%">
        	<div id="piechart_over_all_contact_did_not"  align="center" style="width: 100%; height: 500px"></div>
      	</td>
    </tr>
  </table>
</body>

</html>
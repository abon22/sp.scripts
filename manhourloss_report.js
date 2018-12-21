

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet">
  <script type="text/javascript" src="/SiteAssets/Scripts/js/jquery.min.js"></script>
  <script type="text/javascript" src="/SiteAssets/Scripts/js/moment.min.js"></script>
  <script type="text/javascript" src="/SiteAssets/Scripts/Man Hour Loss/js/loader.js"></script>
  <script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script>
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
  margin: 12px;
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



</style>
  <script type="text/javascript">



var avg_div;
var total_per_emp_div;

var date_today = new Date();
var current_month = date_today.getMonth();
var arr_month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']



function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}


var arr_data=[];
var pass_selected_year = "";
      function drawChart() {
        //////////////////////console.log("-------------------------------");
        //////////////////////console.log(arr_data);
        //////////////////////console.log("-------------------------------");
        var data = google.visualization.arrayToDataTable(arr_data);

          //////////////////////console.log(data);

        var options = {
          title: "Annual Manhour Loss for "+pass_selected_year,
        
          pieHole: 0.5,
        showLables: 'true',
        pieSliceText: 'value',
        pieSliceTextStyle: {
            color: 'white',
            fontSize:15
        },
        animation:{
        duration: 1000,
        startup: true, 
        easing: 'out',
      },
        is3D:true,

          

          legend:'labeled'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);

      }



    
 var arr_data_line=[];

      function drawChart2() {
        var data2 = google.visualization.arrayToDataTable(arr_data_line);

        var options2 = {
          title: 'Monthly Manhour loss Per Section',
          animation: {
          startup: true,   /* Need to add this for animations */
          duration: 1000,
          easing: 'out',
        }, curveType: 'function',
        legend: 'right',
        pointSize: 5,
        hAxis: {
          title: 'Month'
        },
        vAxis:{    /* You may wish to add this to make curve animations appear from the bottom of the chart */
          title: 'hrs',
          baseline: 0,
        }

        };

        var chart2 = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart2.draw(data2, options2);
      }

        var manhour_manpower_data = [];
        var manhour_team_section_data = [];
        
        function drawChart3() {

      /*  var department_manhour2 =  [
        ["Department", "Man Hour Loss", { role: 'annotation' } ],
        ["IT", 8.94, '8.94'],
        ["CHROD", 10.49, '10.49'],
        ["TQM", 19.30, '19.30'],
        ["FINANCE", 21.45, '21.45']
      ];*/



       // var data2 = google.visualization.arrayToDataTable(department_manhour);
        ////////////////////console.log("===============================")
        ////////////////////console.log(department_manhour2);
        ////////////////////console.log("===============================")


       /* var department_manhour =  [
        manhour_manpower_data
      ];*/
      ////////////////console.log(manhour_manpower_data);
      var data2 = google.visualization.arrayToDataTable(manhour_manpower_data)

   
        var options2 = {
          title: 'Sectional Manhour Loss Vs Manpower Number',
          animation: {
          startup: true,   /* Need to add this for animations */
          duration: 1000,
          easing: 'out',

        },
        legend: 'right',
        is3D:true,
        hAxis: {
          title: 'Sections'
        },
        vAxis:{    /* You may wish to add this to make curve animations appear from the bottom of the chart */
          title: 'Man Hour Loss (hour)',
          baseline: 0,
        }

        };

        var chart2 = new google.visualization.ColumnChart(document.getElementById('bar_chart'));
        chart2.draw(data2, options2);



      }

      var pass_selected_month=""

      function drawChart4() {
        //////////////console.log(pass_selected_month);

      var data2 = google.visualization.arrayToDataTable(manhour_team_section_data)

   
        var options2 = {
          title: "Team Manhour Loss for "+pass_selected_month,
          animation: {
          startup: true,   /* Need to add this for animations */
          duration: 1000,
          easing: 'out',

        },
        legend: 'right',
        is3D:true,
        hAxis: {
          title: 'Man Hour Loss (hour)'
        },
        vAxis:{    /* You may wish to add this to make curve animations appear from the bottom of the chart */
          title: 'Team',
          baseline: 0,
        }

        };

        var chart2 = new google.visualization.BarChart(document.getElementById('bar_chart_team'));
        chart2.draw(data2, options2);

      }


  var manhour_highest_manhour_data = [];

      function drawChart6() {


     // Select Dropdown Per Quarter

       var data2 = google.visualization.arrayToDataTable(manhour_highest_manhour_data);

       ////////////console.log(data2);

       //////////console.log("-------------VAL-----------------");
       //////////console.log(manhour_highest_manhour_data);
       //////////console.log("-------------VAL-----------------");

      var options2 = {
        title: 'Highest Manhour Loss for '+pass_selected_month,
        animation: {
          startup: true,   /* Need to add this for animations */
          duration: 1000,
          easing: 'out',

        },
        legend: 'right',
        hAxis: {
          title: 'Man Hour Loss (hrs)',
        },
        vAxis: {
          title: 'Employee Name',
           baseline: 0,
        }
      };

        var chart2 = new google.visualization.BarChart(document.getElementById('bar_chart_highest_manhour'));
        chart2.draw(data2, options2);

      }

       var arr_data_manhour_loss_number=[];
       var pass_arr_year=[];

      function drawChart7() {

        

       /* var temp_array = [["Month",2017,  { role: 'annotation' } ,2018,  { role: 'annotation' } ],
          ["Jan",255.65, 255.65 ,155.63 ,155.63],
          ["Feb",257.93,257.93, 139.8, 139.8],
          ["Mar",364.98,364.98,125.97,125.97],
          ["Apr",236.31,236.31,126.39,126.39],
          ["May",451.27,451.27,0,0],
          ["Jun",255.96,255.96,0,0],
          ["Jul",234.56,234.56,0,0],
          ["Aug",295.43,295.43,0,0],
          ["Sep",253.74,253.74,0,0],
          ["Oct",228.04,228.04,0,0],
          ["Nov",235.77,235.77,0,0],
          ["Dec",208.98,208.98,0,0]
          ];*/

          ////////console.log("---------temp_array");
          ////////console.log(temp_array);
          ////////console.log("---------temp_array");


          ////////console.log("-----------------arr_data_manhour_loss_number--------------");
          ////////console.log(arr_data_manhour_loss_number)
          ////////console.log("-----------------arr_data_manhour_loss_number--------------");
          
       
        var data2 = google.visualization.arrayToDataTable(arr_data_manhour_loss_number);



        var options2 = {
          title: pass_arr_year[1]+" vs "+pass_arr_year[0]+" Manhour Loss Number(hrs)",
          animation: {
          startup: true,   /* Need to add this for animations */
          duration: 1000,
          easing: 'out',
        }, curveType: 'function',
        legend: 'right',
        pointSize: 10,
        hAxis: {
          title: 'Month'
        },
        vAxis:{    /* You may wish to add this to make curve animations appear from the bottom of the chart */
          title: 'Manhour Loss Number(hrs)',
          baseline: 0,
        }

        };

        var chart2 = new google.visualization.LineChart(document.getElementById('curve_chart_manhour_loss_number'));
        chart2.draw(data2, options2);
      }

      var arr_data_manhour_loss_rate=[];
       var pass_arr_year=[];


            function drawChart8() {

        

       /* var temp_array = [["Month",'2017',  { role: 'annotation' } ,'2018',  { role: 'annotation' } ],
          ["Jan",2.11, 2.11, 0.99, 0.99],
          ["Feb",2.02, 2.02, 0.88, 0.88],
          ["Mar",2.85, 2.85, 0.79, 0.79],
          ["Apr",1.74, 1.74, 0.76, 0.76],
          ["May",3.29, 3.29, 0, 0],
          ["Jun",1.58, 1.58, 0, 0],
          ["Jul",1.74, 1.74, 0, 0],
          ["Aug",2.04, 2.04, 0, 0],
          ["Sep",1.68, 1.68, 0, 0],
          ["Oct",1.48, 1.48, 0, 0],
          ["Nov",1.38, 1.38, 0, 0],
          ["Dec",1.24, 1.24, 0, 0]
          ];*/

        var data2 = google.visualization.arrayToDataTable(arr_data_manhour_loss_rate);



        var options2 = {
          title: pass_arr_year[1]+" vs "+pass_arr_year[0]+" Manhour Loss Rate(%)",
          animation: {
          startup: true,   /* Need to add this for animations */
          duration: 1000,
          easing: 'out',
        },
        legend: 'right',
        pointSize: 10,
        hAxis: {
          title: 'Month'
        },
        vAxis:{    /* You may wish to add this to make curve animations appear from the bottom of the chart */
          title: 'Manhour Loss Rate(%)',
          baseline: 0,
        }

        };

        var chart2 = new google.visualization.LineChart(document.getElementById('curve_chart_manhour_loss_rate'));
        chart2.draw(data2, options2);
      }




  function drawChart5() {


     // Select Dropdown Per Quarter

       var data2 = google.visualization.arrayToDataTable([
        ['Section', 'Jan', 'Feb', 'Mar',  { role: 'annotation' } ],
        ['Dept 1', 10, 24, 20, ''],
        ['Dept 1', 16, 22, 23, ''],
        ['Dept 1', 28, 19, 29, '']
      ]);

      var options2 = {
        title: "Q1 ATU Manhour Loss Report (Team)",
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
        hAxis: {

          title: 'Team'
        },
        vAxis:{    /* You may wish to add this to make curve animations appear from the bottom of the chart */
          title: 'Man Hour Loss (hour)',
          baseline: 0,
        }
      };

        var chart2 = new google.visualization.ColumnChart(document.getElementById('bar_chart_quarter'));
        chart2.draw(data2, options2);

      }





var what_department="";
function getItems(url,selected_year,selected_month,set_what_department) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {
          pass_selected_year = selected_year;

          avg_div = document.getElementById('per_dept_disp');
          total_per_emp_div = document.getElementById('per_emp_disp');
          

          emp_title = document.getElementById('emp_title');
          dept_title = document.getElementById('dept_title');

          emp_title.innerHTML = "Employee Accumulated Manhour Report for "+selected_year;
          dept_title.innerHTML = "Section Accumulated Manhour Report for "+selected_year;
          
          avg_div.innerHTML = "<div class='row header orange'><div class='cell'>Section Name</div><div class='cell'>Total</div><div class='cell'>Jan</div><div class='cell'>Feb</div><div class='cell'>Mar</div><div class='cell'>Apr</div><div class='cell'>May</div><div class='cell'>Jun</div><div class='cell'>Jul</div><div class='cell'>Aug</div><div class='cell'>Sep</div><div class='cell'>Oct</div><div class='cell'>Nov</div><div class='cell'>Dec</div></div>";

          total_per_emp_div.innerHTML = "<div class='row header blue'><div class='cell'>Employee Name</div><div class='cell'>Total</div><div class='cell'>Jan</div><div class='cell'>Feb</div><div class='cell'>Mar</div><div class='cell'>Apr</div><div class='cell'>May</div><div class='cell'>Jun</div><div class='cell'>Jul</div><div class='cell'>Aug</div><div class='cell'>Sep</div><div class='cell'>Oct</div><div class='cell'>Nov</div><div class='cell'>Dec</div></div>";

          dataRes = data.d.results;
          ////////////////console.log(dataRes);
          var var_dept=[];
          var var_year=[];
          var arr_year=[];
          var var_sect=[];

        for (a=0; a< dataRes.length; a++) {
          var db_year = moment(dataRes[a].Date).format("YYYY");
          if(db_year){
            var_year.push(db_year);
          }
        }
        arr_year = var_year.filter(onlyUnique).sort();


        var year_div = document.getElementById('year_append_id');
        var year_list="";

        var department_div = document.getElementById('department_append_id');
        var department_list="";


        //--------------------------------------------------------
         for (a=0; a< arr_year.length; a++) {

          if(selected_year!=arr_year[a]){
            year_list += "<li class='c-dropdown__item' data-dropdown-value='"+arr_year[a]+"'>"+arr_year[a]+"</li>";
          }

            
         }


          
           year_div.innerHTML=" Select Year: <input type='hidden' name='Year' id='Year' class='js-dropdown__input' value='"+selected_year+"'><span class='c-button c-button--dropdown js-dropdown__current'>"+selected_year+"</span><ul class='c-dropdown__list'>"+year_list+"</ul>";

        for (a=0; a< dataRes.length; a++) {
          var db_department = dataRes[a].Section.Title;
          var db_year = moment(dataRes[a].Date).format("YYYY");


          if(db_department){
            if(db_year == selected_year){
              var_dept.push(db_department);
            }

            
          }

        }

        for (a=0; a< dataRes.length; a++) {
          var db_section = dataRes[a].Section.Title;
          var db_year = moment(dataRes[a].Date).format("YYYY");


          if(db_section){
            if(db_year == selected_year){
              var_sect.push(db_section);
            }

            
          }

        }

       // arr_department = var_dept.filter(onlyUnique).sort();
       ////////////////console.log(var_dept);
        arr_department = var_dept.filter(onlyUnique).sort();

        arr_section = var_sect.filter(onlyUnique).sort();
       // //////////////console.log(arr_section);



        
        if(set_what_department){
          what_department = set_what_department;
        }else{
          what_department = "All";
        }

        //what_department = set_what_department;
        if(what_department != "All"){
          ////////////////////console.log("a");

          for (var i=arr_department.length-1; i>=0; i--) {
            if (arr_department[i] != what_department) {
                arr_department.splice(i, 1);
                // break;       //<-- Uncomment  if only the first term has to be removed
            }
          }
        }



        //--------------------------------------------------------

        ////////////////////console.log(arr_department)

        //--------------------------------------------------------
        var var_dept_select=[];

        var arr_department_select=[];
        for (a=0; a< dataRes.length; a++) {
          var db_department_select = dataRes[a].Section.Title;
           var db_year = moment(dataRes[a].Date).format("YYYY");


          if(db_department_select){
            if(db_year == selected_year){
              var_dept_select.push(db_department_select);
            }

            
          }

        }
        //var_dept_select.push("All");
        arr_department_select = var_dept_select.filter(onlyUnique).sort();
        arr_department_select.push("All");
        ////////////////////console.log("################################")
        ////////////////////console.log(arr_department);
        ////////////////////console.log("################################")


        for (a=0; a< arr_department_select.length; a++) {

          if(what_department!=arr_department_select[a]){
            department_list += "<li class='c-dropdown__item' data-dropdown-value='"+arr_department_select[a]+"'>"+arr_department_select[a]+"</li>";
          }

            
         }
         department_div.innerHTML="";
         department_div.innerHTML="Select Department: <input type='hidden' name='Department_Name' id='department_id' class='js-dropdown__input3' value='"+what_department+"'><span class='c-button c-button--dropdown js-dropdown__current3'>"+what_department+"</span><ul class='c-dropdown__list'>"+department_list+"</ul>";



        //-------------------------------------------------------------------------------------------------------------------------------------




          

        for (i=0; i< arr_department.length; i++) {

           var totalperjan = 0, totalperfeb = 0, totalpermar = 0, totalperapr = 0, totalpermay = 0, totalperjun = 0, totalperjul = 0, totalperaug = 0, totalpersep = 0, totalperoct = 0, totalpernov = 0, totalperdec = 0;


          for (a=0; a< dataRes.length; a++) {

       

            var created = dataRes[a].Date;
            var fmtcreatedyear =  moment(created).format("YYYY");
            var fmtcreatedmonth = moment(created).format("MMM");

              if(fmtcreatedyear==selected_year){





                    if(fmtcreatedmonth=="Jan" && arr_department[i] == dataRes[a].Section.Title){
                      totalperjan +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Feb"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperfeb +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Mar"  && arr_department[i] == dataRes[a].Section.Title){
                      totalpermar +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Apr"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperapr +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="May"  && arr_department[i] == dataRes[a].Section.Title){
                      totalpermay +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jun"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperjun +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jul"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperjul +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Aug"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperaug +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Sep"  && arr_department[i] == dataRes[a].Section.Title){
                      totalpersep +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Oct"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperoct +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Nov"  && arr_department[i] == dataRes[a].Section.Title){
                      totalpernov +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Dec"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperdec +=dataRes[a].Hours;
                      
                    }
              }


          } //for loop

            var department_append ="<div class='cell' style='font-weight:500'> "+arr_department[i]+"</div>";

            totalperjan = totalperjan || 0;

            var jan_append ="<div class='cell' > "+parseFloat(totalperjan).toFixed(2)+"</div>";

            totalperfeb = totalperfeb || 0;
            var feb_append ="<div class='cell' > "+parseFloat(totalperfeb).toFixed(2)+"</div>";

            totalpermar = totalpermar || 0;
            var mar_append ="<div class='cell' > "+parseFloat(totalpermar).toFixed(2)+"</div>";

            totalperapr = totalperapr || 0;
            var apr_append ="<div class='cell' > "+parseFloat(totalperapr).toFixed(2)+"</div>";

            totalpermay = totalpermay || 0;
            var may_append ="<div class='cell' > "+parseFloat(totalpermay).toFixed(2)+"</div>";

            totalperjun = totalperjun || 0;
            var jun_append ="<div class='cell' > "+parseFloat(totalperjun).toFixed(2)+"</div>";

            totalperjul = totalperjul || 0;
            var jul_append ="<div class='cell' > "+parseFloat(totalperjul).toFixed(2)+"</div>";

            totalperaug = totalperaug || 0;
            var aug_append ="<div class='cell' > "+parseFloat(totalperaug).toFixed(2)+"</div>";

            totalpersep = totalpersep || 0;
            var sep_append ="<div class='cell' > "+parseFloat(totalpersep).toFixed(2)+"</div>";

            totalperoct = totalperoct || 0;
            var oct_append ="<div class='cell' > "+parseFloat(totalperoct).toFixed(2)+"</div>";

            totalpernov = totalpernov || 0;
            var nov_append ="<div class='cell' > "+parseFloat(totalpernov).toFixed(2)+"</div>";

            totalperdec = totalperdec || 0;

            var dec_append ="<div class='cell' > "+parseFloat(totalperdec).toFixed(2)+"</div>";

            var total_per_department = totalperjan + totalperfeb + totalpermar + totalperapr + totalpermay + totalperjun + totalperjul + totalperaug + totalpersep + totalperoct + totalpernov + totalperdec;

            var total_append ="<div class='cell' > "+parseFloat(total_per_department).toFixed(2)+"</div>";


          $('#per_dept_disp').append("<div class='row'>"+department_append+"<b style='font-weight:500'>"+total_append+"</b>"+jan_append+""+feb_append+""+mar_append+""+apr_append+""+may_append+""+jun_append+""+jul_append+""+aug_append+""+sep_append+""+oct_append+""+nov_append+""+dec_append+"</div>");




        }//for loop


        //-------------------------------------------------------------------------------------------------------------------------------------

          var arr_employee;
          var employee_list=[];

         for (a=0; a< dataRes.length; a++) {
          var db_employee = dataRes[a].Name.Title;
          var created = dataRes[a].Date;
          var db_department = dataRes[a].Section.Title;
          var fmtcreatedyear =  moment(created).format("YYYY");

          if(db_employee){
              if(what_department!="All"){
                if(fmtcreatedyear==selected_year && db_department == what_department){
                    employee_list.push(db_employee);
                }

              }else{
                if(fmtcreatedyear==selected_year){
                    employee_list.push(db_employee);
                }
              }
            

          }

        }

        arr_employee = employee_list.filter(onlyUnique).sort();
        
////////////////////console.log(arr_employee);

var grand_totalperjan = 0, grand_totalperfeb = 0, grand_totalpermar = 0, grand_totalperapr = 0, grand_totalpermay = 0, grand_totalperjun = 0, grand_totalperjul = 0, grand_totalperaug = 0, grand_totalpersep = 0, grand_totalperoct = 0, grand_totalpernov = 0, grand_totalperdec = 0;

for (i=0; i< arr_employee.length; i++) {

           var totalperjan = 0, totalperfeb = 0, totalpermar = 0, totalperapr = 0, totalpermay = 0, totalperjun = 0, totalperjul = 0, totalperaug = 0, totalpersep = 0, totalperoct = 0, totalpernov = 0, totalperdec = 0;


          for (a=0; a< dataRes.length; a++) {

       

            var created = dataRes[a].Date;
            var fmtcreatedyear =  moment(created).format("YYYY");
            var fmtcreatedmonth = moment(created).format("MMM");
            var employee_name = dataRes[a].Name.Title;
            

            //alert(arr_department);



              if(fmtcreatedyear==selected_year && arr_employee[i]==employee_name){


                    if(fmtcreatedmonth=="Jan" ){
                      totalperjan +=dataRes[a].Hours;


                    }else if(fmtcreatedmonth=="Feb"  ){
                      totalperfeb +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Mar"  ){
                      totalpermar +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Apr"  ){
                      totalperapr +=dataRes[a].Hours;
                      grand_totalperjan+=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="May"  ){
                      totalpermay +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jun"  ){
                      totalperjun +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jul"  ){
                      totalperjul +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Aug"  ){
                      totalperaug +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Sep"  ){
                      totalpersep +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Oct"  ){
                      totalperoct +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Nov"  ){
                      totalpernov +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Dec"  ){
                      totalperdec +=dataRes[a].Hours;
                      
                    }
              }


          } //for loop

            var employee_append ="<div class='cell' style='font-weight:500'>"+arr_employee[i]+"</div>";

            totalperjan = totalperjan || 0;

            var jan_append ="<div class='cell' > "+parseFloat(totalperjan).toFixed(2)+"</div>";

            totalperfeb = totalperfeb || 0;
            var feb_append ="<div class='cell' > "+parseFloat(totalperfeb).toFixed(2)+"</div>";

            totalpermar = totalpermar || 0;
            var mar_append ="<div class='cell' > "+parseFloat(totalpermar).toFixed(2)+"</div>";

            totalperapr = totalperapr || 0;
            var apr_append ="<div class='cell' > "+parseFloat(totalperapr).toFixed(2)+"</div>";

            totalpermay = totalpermay || 0;
            var may_append ="<div class='cell' > "+parseFloat(totalpermay).toFixed(2)+"</div>";

            totalperjun = totalperjun || 0;
            var jun_append ="<div class='cell' > "+parseFloat(totalperjun).toFixed(2)+"</div>";

            totalperjul = totalperjul || 0;
            var jul_append ="<div class='cell' > "+parseFloat(totalperjul).toFixed(2)+"</div>";

            totalperaug = totalperaug || 0;
            var aug_append ="<div class='cell' > "+parseFloat(totalperaug).toFixed(2)+"</div>";

            totalpersep = totalpersep || 0;
            var sep_append ="<div class='cell' > "+parseFloat(totalpersep).toFixed(2)+"</div>";

            totalperoct = totalperoct || 0;
            var oct_append ="<div class='cell' > "+parseFloat(totalperoct).toFixed(2)+"</div>";

            totalpernov = totalpernov || 0;
            var nov_append ="<div class='cell' > "+parseFloat(totalpernov).toFixed(2)+"</div>";

            totalperdec = totalperdec || 0;

            var dec_append ="<div class='cell' > "+parseFloat(totalperdec).toFixed(2)+"</div>";

            var total_per_department = totalperjan + totalperfeb + totalpermar + totalperapr + totalpermay + totalperjun + totalperjul + totalperaug + totalpersep + totalperoct + totalpernov + totalperdec;

            var total_append ="<div class='cell' > "+parseFloat(total_per_department).toFixed(2)+"</div>";


          $('#per_emp_disp').append("<div class='row'>"+employee_append+"<b style='font-weight:500'>"+total_append+"</b>"+jan_append+""+feb_append+""+mar_append+""+apr_append+""+may_append+""+jun_append+""+jul_append+""+aug_append+""+sep_append+""+oct_append+""+nov_append+""+dec_append+"</div>");


        }//for loop

       // ////////console.log("grand_totalperjan: "+grand_totalperjan);


//-------------------------------------------------------------------------------------------------------------------------------------


var arr_department;
var arr_section;
arr_data=[];
var arr_obj=[];


        arr_obj=['Section', 'Total Hours Loss'];
        arr_data.push(arr_obj)

        for (a=0; a< arr_department.length; a++) {


          var dept_loss_hours = 0;
          for (b=0; b< dataRes.length; b++) {
            var fmtcreatedyear =  moment(dataRes[b].Date).format("YYYY");
            ////////////////////////console.log("fmtcreatedyear: "+fmtcreatedyear);
            ////////////////////////console.log("selected_year: "+selected_year);
            if(fmtcreatedyear==selected_year){

              if(arr_department[a] == dataRes[b].Section.Title){
             dept_loss_hours +=dataRes[b].Hours;
            }
            }
            

          }
          //////////////////////console.log(arr_department[a]+": "+Number(dept_loss_hours).toFixed(2));
          //arr_obj = arr_department[a];
            var hoursloss = Number(dept_loss_hours).toFixed(2);
          arr_obj = [arr_department[a], Number(hoursloss)];

         arr_data.push(arr_obj)

        }

      //////////////////////console.log(arr_data);

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);


//////////////////////console.log(arr_data_line2);
//, { role: 'annotation' }
var arr_months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    var data_line_obj=[];
    var data_line_dept = [];

    data_line_dept.push("Month");
    for (a=0; a< arr_department.length; a++) {
    data_line_dept.push(arr_department[a]);
    }

var arr_main = [];
var arr_obj2=[];

arr_main.push(data_line_dept);

pass_arr_department = arr_department;
pass_arr_section = arr_section;
////////////////////console.log(pass_arr_department)

    for (a=0; a< arr_months.length; a++) {
    var arr_data_per_month=[];
    arr_data_per_month.push(arr_months[a]);

    for (b=0; b< arr_department.length; b++) {
         var dept_loss_hours = 0;
      for (c=0; c< dataRes.length; c++) {
          var fmtcreatedyear =  moment(dataRes[c].Date).format("YYYY");
          var fmtcreatedmonth =  moment(dataRes[c].Date).format("MMM");

          if(fmtcreatedyear==selected_year){

            if(arr_months[a] == fmtcreatedmonth){

              if(arr_department[b] == dataRes[c].Section.Title){
              dept_loss_hours =dept_loss_hours+dataRes[c].Hours;
            }

            }
          }

      }
      
      var hoursloss = Number(dept_loss_hours).toFixed(2);
      arr_data_per_month.push(Number(hoursloss));
    }

    arr_main.push(arr_data_per_month);

    }

    arr_data_line = arr_main;

//////////////////////console.log("***************************")
//////////////////////console.log(arr_main);

      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart2);

     





      var var_month=[];
      var arr_month=[];

         for (b=0; b< dataRes.length; b++) {
              var db_month = moment(dataRes[b].Date).format("MMM");
              var db_year = moment(dataRes[b].Date).format("YYYY");
              if(selected_year==db_year){
                var_month.push(db_month);

              }
            }

         arr_month = var_month.filter(onlyUnique);

        for (a=0; a<arr_month.length; a++) {

          var last_month = "";
          last_month = arr_month[a];
        }
        
        if(selected_month){
           last_month = selected_month;
        }else{
          last_month = last_month;
        }

      getItems2(urlForAllItems2,selected_year,last_month);
      getItems3(selected_year,last_month);


        },//end sucesss
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });//end ajax request
}//end function
var dataRes2;
var pass_arr_department;
var pass_arr_section;
function getItems2(url,selected_year,selected_month) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {

          //alert(what_department);

          dataRes2 = data.d.results;
         ////////////console.log(dataRes2);


          var arr_count_dept =[];

          for (a=0; a< dataRes2.length; a++) {
          arr_count_dept.push(dataRes2[a].LI_Section);
          }
          var counts_departments={};
          arr_count_dept.forEach(function(x) { counts_departments[x] = (counts_departments[x] || 0)+1; });

       ////////////console.log(counts_departments);


          //dept_loss_number_percent = document.getElementById('per_dept_percent');
          //dept_percent_title = document.getElementById('dept_percent_title');
          //dept_percent_title.innerHTML = "Sectional Hours Percentage ("+selected_month+")";

          //dept_loss_number_percent.innerHTML = "<div class='row header blue'><div class='cell'>Section Name</div><div class='cell'>Manhour Loss</div><div class='cell'>Manpower</div><div class='cell'>% Per Manpower</div></div>";

        var var_month=[];
        var arr_month=[];


         for (b=0; b< dataRes.length; b++) {
              var db_month = moment(dataRes[b].Date).format("MMM");
              var db_year = moment(dataRes[b].Date).format("YYYY");
              var db_department = dataRes[b].Section.Title;


              if(what_department != "All"){
                if(selected_year==db_year && what_department==db_department){
                  var_month.push(db_month);
               }
              }else{
                if(selected_year==db_year){
                  var_month.push(db_month);
                }

              }
              


            }

         arr_month = var_month.filter(onlyUnique);
         ////////////////////console.log("*************");
         
         ////////////////////console.log("*************");


/*
      var quarter_div = document.getElementById('quarter_append_id');

      quarter_div.innerHTML = "Select Quarter: <input type='hidden' name='Quarter' id='Quarter' class='js-dropdown__input4' value='Q1'><span class='c-button c-button--dropdown js-dropdown__current4'>Q1</span><ul class='c-dropdown__list'><li class='c-dropdown__item' data-dropdown-value='Q1'>Q1</li><li class='c-dropdown__item' data-dropdown-value='Q2'>Q2</li><li class='c-dropdown__item' data-dropdown-value='Q3'>Q3</li><li class='c-dropdown__item' data-dropdown-value='Q4'>Q4</li></ul>"*/



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



        var var_dept=[];
        var arr_department=pass_arr_department;

        var arr_section=pass_arr_section;



        ////////////////////console.log("-------");
        ////////////////////console.log(pass_arr_department);

        //////////////////console.log(arr_department);


/*        for (c=0; c< dataRes.length; c++) {
          var db_department = dataRes[c].Department.Title;
          var db_year = moment(dataRes[c].Date).format("YYYY");


          if(db_department){
              if(db_year == selected_year){
                var_dept.push(db_department);
              }
            
          }

        }
        arr_department = var_dept.filter(onlyUnique).sort();*/

        
        if(what_department != "All"){
          ////////////////////console.log("a");

          for (var i=arr_department.length-1; i>=0; i--) {
          if (arr_department[i] != what_department) {
              arr_department.splice(i, 1);
              // break;       //<-- Uncomment  if only the first term has to be removed
          }
      }
        }

       // //////////////////console.log("-----department-----");
        ////////////////////console.log(arr_department);
       // //////////////////console.log("-----department-----");

        //-----------------------------------------------------------------------------------------------------------
        manhour_manpower_data = [];
        manhour_manpower_data.push(["Section", "Man Hour Loss", { role: 'annotation' } ]);

       
        for (i=0; i< arr_department.length; i++) {

          var arr_manhour_manpower = [];

           var totalperjan = 0, totalperfeb = 0, totalpermar = 0, totalperapr = 0, totalpermay = 0, totalperjun = 0, totalperjul = 0, totalperaug = 0, totalpersep = 0, totalperoct = 0, totalpernov = 0, totalperdec = 0;


          for (a=0; a< dataRes.length; a++) {

       

            var created = dataRes[a].Date;
            var fmtcreatedyear =  moment(created).format("YYYY");
            var fmtcreatedmonth = moment(created).format("MMM");

              if(fmtcreatedyear==selected_year){

                    if(fmtcreatedmonth=="Jan" && arr_department[i] == dataRes[a].Section.Title){
                      totalperjan +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Feb"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperfeb +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Mar"  && arr_department[i] == dataRes[a].Section.Title){
                      totalpermar +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Apr"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperapr +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="May"  && arr_department[i] == dataRes[a].Section.Title){
                      totalpermay +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jun"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperjun +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jul"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperjul +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Aug"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperaug +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Sep"  && arr_department[i] == dataRes[a].Section.Title){
                      totalpersep +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Oct"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperoct +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Nov"  && arr_department[i] == dataRes[a].Section.Title){
                      totalpernov +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Dec"  && arr_department[i] == dataRes[a].Section.Title){
                      totalperdec +=dataRes[a].Hours;
                      
                    }
              }


          } //for loop

            var department_append ="<div class='cell' style='font-weight:500'> "+arr_department[i]+"</div>";

            totalperjan = totalperjan || 0;

            var jan_append ="<div class='cell' > "+parseFloat(totalperjan).toFixed(2)+"</div>";

            totalperfeb = totalperfeb || 0;
            var feb_append ="<div class='cell' > "+parseFloat(totalperfeb).toFixed(2)+"</div>";

            totalpermar = totalpermar || 0;
            var mar_append ="<div class='cell' > "+parseFloat(totalpermar).toFixed(2)+"</div>";

            totalperapr = totalperapr || 0;
            var apr_append ="<div class='cell' > "+parseFloat(totalperapr).toFixed(2)+"</div>";

            totalpermay = totalpermay || 0;
            var may_append ="<div class='cell' > "+parseFloat(totalpermay).toFixed(2)+"</div>";

            totalperjun = totalperjun || 0;
            var jun_append ="<div class='cell' > "+parseFloat(totalperjun).toFixed(2)+"</div>";

            totalperjul = totalperjul || 0;
            var jul_append ="<div class='cell' > "+parseFloat(totalperjul).toFixed(2)+"</div>";

            totalperaug = totalperaug || 0;
            var aug_append ="<div class='cell' > "+parseFloat(totalperaug).toFixed(2)+"</div>";

            totalpersep = totalpersep || 0;
            var sep_append ="<div class='cell' > "+parseFloat(totalpersep).toFixed(2)+"</div>";

            totalperoct = totalperoct || 0;
            var oct_append ="<div class='cell' > "+parseFloat(totalperoct).toFixed(2)+"</div>";

            totalpernov = totalpernov || 0;
            var nov_append ="<div class='cell' > "+parseFloat(totalpernov).toFixed(2)+"</div>";

            totalperdec = totalperdec || 0;

            var dec_append ="<div class='cell' > "+parseFloat(totalperdec).toFixed(2)+"</div>";


          var manhour_loss_total="";
          if(selected_month=="Jan"){
              manhour_loss_total = totalperjan;
          }else if(selected_month=="Feb"){
              manhour_loss_total = totalperfeb;
          }else if(selected_month=="Mar"){
              manhour_loss_total = totalpermar;
          }else if(selected_month=="Apr"){
              manhour_loss_total = totalperapr;
          }else if(selected_month=="May"){
              manhour_loss_total = totalpermay;
          }else if(selected_month=="Jun"){
              manhour_loss_total = totalperjun;
          }else if(selected_month=="Jul"){
              manhour_loss_total = totalperjul;
          }else if(selected_month=="Aug"){
              manhour_loss_total = totalperaug;
          }else if(selected_month=="Sep"){
              manhour_loss_total = totalpersep;
          }else if(selected_month=="Oct"){
              manhour_loss_total = totalperoct;
          }else if(selected_month=="Nov"){
              manhour_loss_total = totalpernov;
          }else if(selected_month=="Dec"){
              manhour_loss_total = totalperdec;
          }

            

          /*if(arr_department[i] == "" ){

          }*/
          ////////////////////console.log(counts_departments[arr_department[i]]);

            var percent = manhour_loss_total / counts_departments[arr_department[i]];
            ////////////////////console.log(percent);

          $('#per_dept_percent').append("<div class='row'>"+department_append+"<div class='cell' ><b style='font-weight:500'>"+parseFloat(manhour_loss_total).toFixed(2)+"</b></div><div class='cell' >"+counts_departments[arr_department[i]]+"</div><div class='cell' ><b style='font-weight:500'>"+parseFloat(percent).toFixed(2)+"</b></div></div>");
            
          // manhour_manpower_obj = arr_department[i],
          arr_manhour_manpower = [arr_department[i], Number(parseFloat(percent).toFixed(2)), parseFloat(percent).toFixed(2)];
          manhour_manpower_data.push(arr_manhour_manpower);




      }//for loop

            //google.charts.load('current', {'packages':['corechart']});
      //google.charts.setOnLoadCallback(drawChart3);

        //-----------------------------------------------------------------------------------------------------------

        manhour_team_section_data = [];
        manhour_team_section_data.push(["Section", "Man Hour Loss", { role: 'annotation' } ]);

        




        //////////////console.log(arr_section);

      for (i=0; i< arr_section.length; i++) {//start first loop
          var arr_manhour_manpower = [];

           var totalperjan = 0, totalperfeb = 0, totalpermar = 0, totalperapr = 0, totalpermay = 0, totalperjun = 0, totalperjul = 0, totalperaug = 0, totalpersep = 0, totalperoct = 0, totalpernov = 0, totalperdec = 0;


          for (a=0; a< dataRes.length; a++) {

       

            var created = dataRes[a].Date;
            var fmtcreatedyear =  moment(created).format("YYYY");
            var fmtcreatedmonth = moment(created).format("MMM");

              if(fmtcreatedyear==selected_year){

                    if(fmtcreatedmonth=="Jan" && arr_section[i] == dataRes[a].Section.Title){
                      totalperjan +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Feb"  && arr_section[i] == dataRes[a].Section.Title){
                      totalperfeb +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Mar"  && arr_section[i] == dataRes[a].Section.Title){
                      totalpermar +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Apr"  && arr_section[i] == dataRes[a].Section.Title){
                      totalperapr +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="May"  && arr_section[i] == dataRes[a].Section.Title){
                      totalpermay +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jun"  && arr_section[i] == dataRes[a].Section.Title){
                      totalperjun +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jul"  && arr_section[i] == dataRes[a].Section.Title){
                      totalperjul +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Aug"  && arr_section[i] == dataRes[a].Section.Title){
                      totalperaug +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Sep"  && arr_section[i] == dataRes[a].Section.Title){
                      totalpersep +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Oct"  && arr_section[i] == dataRes[a].Section.Title){
                      totalperoct +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Nov"  && arr_section[i] == dataRes[a].Section.Title){
                      totalpernov +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Dec"  && arr_section[i] == dataRes[a].Section.Title){
                      totalperdec +=dataRes[a].Hours;
                      
                    }
              }


          } //for loop

            var department_append ="<div class='cell' style='font-weight:500'> "+arr_section[i]+"</div>";

            totalperjan = totalperjan || 0;

            var jan_append ="<div class='cell' > "+parseFloat(totalperjan).toFixed(2)+"</div>";

            totalperfeb = totalperfeb || 0;
            var feb_append ="<div class='cell' > "+parseFloat(totalperfeb).toFixed(2)+"</div>";

            totalpermar = totalpermar || 0;
            var mar_append ="<div class='cell' > "+parseFloat(totalpermar).toFixed(2)+"</div>";

            totalperapr = totalperapr || 0;
            var apr_append ="<div class='cell' > "+parseFloat(totalperapr).toFixed(2)+"</div>";

            totalpermay = totalpermay || 0;
            var may_append ="<div class='cell' > "+parseFloat(totalpermay).toFixed(2)+"</div>";

            totalperjun = totalperjun || 0;
            var jun_append ="<div class='cell' > "+parseFloat(totalperjun).toFixed(2)+"</div>";

            totalperjul = totalperjul || 0;
            var jul_append ="<div class='cell' > "+parseFloat(totalperjul).toFixed(2)+"</div>";

            totalperaug = totalperaug || 0;
            var aug_append ="<div class='cell' > "+parseFloat(totalperaug).toFixed(2)+"</div>";

            totalpersep = totalpersep || 0;
            var sep_append ="<div class='cell' > "+parseFloat(totalpersep).toFixed(2)+"</div>";

            totalperoct = totalperoct || 0;
            var oct_append ="<div class='cell' > "+parseFloat(totalperoct).toFixed(2)+"</div>";

            totalpernov = totalpernov || 0;
            var nov_append ="<div class='cell' > "+parseFloat(totalpernov).toFixed(2)+"</div>";

            totalperdec = totalperdec || 0;

            var dec_append ="<div class='cell' > "+parseFloat(totalperdec).toFixed(2)+"</div>";


          var manhour_loss_total="";
          if(selected_month=="Jan"){
              manhour_loss_total = totalperjan;
          }else if(selected_month=="Feb"){
              manhour_loss_total = totalperfeb;
          }else if(selected_month=="Mar"){
              manhour_loss_total = totalpermar;
          }else if(selected_month=="Apr"){
              manhour_loss_total = totalperapr;
          }else if(selected_month=="May"){
              manhour_loss_total = totalpermay;
          }else if(selected_month=="Jun"){
              manhour_loss_total = totalperjun;
          }else if(selected_month=="Jul"){
              manhour_loss_total = totalperjul;
          }else if(selected_month=="Aug"){
              manhour_loss_total = totalperaug;
          }else if(selected_month=="Sep"){
              manhour_loss_total = totalpersep;
          }else if(selected_month=="Oct"){
              manhour_loss_total = totalperoct;
          }else if(selected_month=="Nov"){
              manhour_loss_total = totalpernov;
          }else if(selected_month=="Dec"){
              manhour_loss_total = totalperdec;
          }

            

          /*if(arr_department[i] == "" ){

          }*/
          ////////////////////console.log(counts_departments[arr_department[i]]);
/*
            var percent = manhour_loss_total / counts_departments[arr_section[i]];

            var */
            ////////////////////console.log(percent);

         /* $('#per_dept_percent').append("<div class='row'>"+department_append+"<div class='cell' ><b style='font-weight:500'>"+parseFloat(manhour_loss_total).toFixed(2)+"</b></div><div class='cell' >"+counts_departments[arr_department[i]]+"</div><div class='cell' ><b style='font-weight:500'>"+parseFloat(percent).toFixed(2)+"</b></div></div>");*/
            
          // manhour_manpower_obj = arr_department[i],
          arr_manhour_manpower = [arr_section[i], Number(parseFloat(manhour_loss_total).toFixed(2)), parseFloat(manhour_loss_total).toFixed(2)];
          manhour_team_section_data.push(arr_manhour_manpower);






      }//end first loop
        
        //-----------------------------------------------------------------------------------------------------------

      pass_selected_month = selected_month;

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart4);


      getItems4(selected_year);
      getItems5(selected_year);


  



        },//end success
        error: function (error) {
            alert(JSON.stringify(error));
        }
      });//end ajax request
  }//end function



function getItems3(selected_year,selected_month){
          var arr_employee;
          var employee_list=[];

          pass_selected_month = selected_month;

          manhour_highest_manhour_data = [];
          manhour_highest_manhour_data.push(["Employee Name", "Man Hour Loss", { role: 'annotation' } ]);

         ////////////console.log("what_department: "+what_department);

         for (a=0; a< dataRes.length; a++) {
          var db_employee = dataRes[a].Name.Title;
          var created = dataRes[a].Date;
          var db_department = dataRes[a].Section.Title;
          var fmtcreatedyear =  moment(created).format("YYYY");

          if(db_employee){
              if(what_department!="All"){
                if(fmtcreatedyear==selected_year && db_department == what_department){
                    employee_list.push(db_employee);
                }

              }else{
                if(fmtcreatedyear==selected_year){
                    employee_list.push(db_employee);
                }
              }
            

          }

        }

        arr_employee = employee_list.filter(onlyUnique).sort();


       ////////////console.log(arr_employee);

        var highest_loss_data={};
        var temp_highest_loss_data=[];

        for (i=0; i< arr_employee.length; i++) {
            var totalperjan = 0, totalperfeb = 0, totalpermar = 0, totalperapr = 0, totalpermay = 0, totalperjun = 0, totalperjul = 0, totalperaug = 0, totalpersep = 0, totalperoct = 0, totalpernov = 0, totalperdec = 0;

            for (a=0; a< dataRes.length; a++) {
                var created = dataRes[a].Date;
                var fmtcreatedyear =  moment(created).format("YYYY");
                var fmtcreatedmonth = moment(created).format("MMM");
                var employee_name = dataRes[a].Name.Title;

                if(fmtcreatedyear==selected_year && arr_employee[i]==employee_name){

                    if(fmtcreatedmonth=="Jan" ){
                      totalperjan +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Feb"  ){
                      totalperfeb +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Mar"  ){
                      totalpermar +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Apr"  ){
                      totalperapr +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="May"  ){
                      totalpermay +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jun"  ){
                      totalperjun +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jul"  ){
                      totalperjul +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Aug"  ){
                      totalperaug +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Sep"  ){
                      totalpersep +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Oct"  ){
                      totalperoct +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Nov"  ){
                      totalpernov +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Dec"  ){
                      totalperdec +=dataRes[a].Hours;
                      
                    }
                }


            }//second loop

            totalperjan = totalperjan || 0;

            totalperfeb = totalperfeb || 0;

            totalpermar = totalpermar || 0;

            totalperapr = totalperapr || 0;

            totalpermay = totalpermay || 0;

            totalperjun = totalperjun || 0;

            totalperjul = totalperjul || 0;

            totalperaug = totalperaug || 0;

            totalpersep = totalpersep || 0;

            totalperoct = totalperoct || 0;

            totalpernov = totalpernov || 0;

            totalperdec = totalperdec || 0;

            
                if(selected_month=="Jan" ){
                  temp_highest_loss_data.push({"Name":arr_employee[i],"HourLoss":totalperjan});

                 ////////////console.log("-------------------");
                 ////////////console.log(arr_employee[i]+" : "+totalperjan);
                 ////////////console.log("-------------------");

                }else if(selected_month=="Feb"  ){
                  temp_highest_loss_data.push({"Name":arr_employee[i],"HourLoss":totalperfeb});
                  
                 ////////////console.log("-------------------");
                 ////////////console.log(arr_employee[i]+" : "+totalperfeb);
                 ////////////console.log("-------------------");

                }else if(selected_month=="Mar"  ){
                  temp_highest_loss_data.push({"Name":arr_employee[i],"HourLoss":totalpermar});
                  
                 ////////////console.log("-------------------");
                 ////////////console.log(arr_employee[i]+" : "+totalpermar);
                 ////////////console.log("-------------------");

                }else if(selected_month=="Apr"  ){
                  temp_highest_loss_data.push({"Name":arr_employee[i],"HourLoss":totalperapr});
                  
                 ////////////console.log("-------------------");
                 ////////////console.log(arr_employee[i]+" : "+totalperapr);
                 ////////////console.log("-------------------");

                }else if(selected_month=="May"  ){
                  temp_highest_loss_data.push({"Name":arr_employee[i],"HourLoss":totalpermay});
                  
                 ////////////console.log("-------------------");
                 ////////////console.log(arr_employee[i]+" : "+totalpermay);
                 ////////////console.log("-------------------");

                }else if(selected_month=="Jun"  ){
                  temp_highest_loss_data.push({"Name":arr_employee[i],"HourLoss":totalperjun});
                  
                 ////////////console.log("-------------------");
                 ////////////console.log(arr_employee[i]+" : "+totalperjun);
                 ////////////console.log("-------------------");

                }else if(selected_month=="Jul"  ){
                  temp_highest_loss_data.push({"Name":arr_employee[i],"HourLoss":totalperjul});
                  
                 ////////////console.log("-------------------");
                 ////////////console.log(arr_employee[i]+" : "+totalperjul);
                 ////////////console.log("-------------------");

                }else if(selected_month=="Aug"  ){
                  temp_highest_loss_data.push({"Name":arr_employee[i],"HourLoss":totalperaug});
                  
                 ////////////console.log("-------------------");
                 ////////////console.log(arr_employee[i]+" : "+totalperaug);
                 ////////////console.log("-------------------");

                }else if(selected_month=="Sep"  ){
                  temp_highest_loss_data.push({"Name":arr_employee[i],"HourLoss":totalpersep});
                  
                 ////////////console.log("-------------------");
                 ////////////console.log(arr_employee[i]+" : "+totalpersep);
                 ////////////console.log("-------------------");

                }else if(selected_month=="Oct"  ){
                  temp_highest_loss_data.push({"Name":arr_employee[i],"HourLoss":totalperoct});
                  
                 ////////////console.log("-------------------");
                 ////////////console.log(arr_employee[i]+" : "+totalperoct);
                 ////////////console.log("-------------------");

                }else if(selected_month=="Nov"  ){
                  temp_highest_loss_data.push({"Name":arr_employee[i],"HourLoss":totalpernov});
                  
                 ////////////console.log("-------------------");
                 ////////////console.log(arr_employee[i]+" : "+totalpernov);
                 ////////////console.log("-------------------");

                }else if(selected_month=="Dec"  ){
                  temp_highest_loss_data.push({"Name":arr_employee[i],"HourLoss":totalperdec});
                  
                 ////////////console.log("-------------------");
                 ////////////console.log(arr_employee[i]+" : "+totalperdec);
                 ////////////console.log("-------------------");
                  
                }

                highest_loss_data = temp_highest_loss_data;
                


        }//first loop

        var sort_highest = sortJSON(highest_loss_data,'HourLoss')
       //console.log('sort_highest');
      //console.log(sort_highest);

       //manhour_highest_manhour_data
       //console.log(manhour_highest_manhour_data)
        //TOP 5 = 4rth index
       for (i=0; i<sort_highest.length; i++) {

        //////////console.log(sort_highest[i].Name);
        //////////console.log(sort_highest[i].HourLoss);
        if(i<=4){
          if(sort_highest[i].HourLoss==0.00 || sort_highest[i].HourLoss== 0){
           manhour_highest_manhour_data.push(["",0.00,0.00]);
          }else{
            manhour_highest_manhour_data.push([sort_highest[i].Name,sort_highest[i].HourLoss,sort_highest[i].HourLoss]);
          }
        }
        

       }

        //////////console.log("manhour_high");
        //////////console.log(manhour_highest_manhour_data);
        //////////console.log("manhour_high");

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart6);



}//end function
 var arr_yearly_number =[];
function getItems4(selected_year) {
 // ////////console.log(dataRes);

  // var grand_totalperjan = 0, grand_totalperfeb = 0, grand_totalpermar = 0, grand_totalperapr = 0, grand_totalpermay = 0, grand_totalperjun = 0, grand_totalperjul = 0, grand_totalperaug = 0, grand_totalpersep = 0, grand_totalperoct = 0, grand_totalpernov = 0, grand_totalperdec = 0;


arr_data_manhour_loss_number = [];



var arr_year_curr_pass = [selected_year,selected_year-1];
pass_arr_year = arr_year_curr_pass
////////console.log(arr_year_curr_pass);

arr_data_manhour_loss_number.push(["Month",arr_year_curr_pass[0].toString(),  { role: 'annotation' } ,arr_year_curr_pass[1].toString(),  { role: 'annotation' } ]);

 var grand_totalperjan = 0, grand_totalperfeb = 0, grand_totalpermar = 0, grand_totalperapr = 0, grand_totalpermay = 0, grand_totalperjun = 0, grand_totalperjul = 0, grand_totalperaug = 0, grand_totalpersep = 0, grand_totalperoct = 0, grand_totalpernov = 0, grand_totalperdec = 0;

  
  for (i=0; i< arr_year_curr_pass.length; i++) {



     var totalperjan = 0, totalperfeb = 0, totalpermar = 0, totalperapr = 0, totalpermay = 0, totalperjun = 0, totalperjul = 0, totalperaug = 0, totalpersep = 0, totalperoct = 0, totalpernov = 0, totalperdec = 0;

        for (a=0; a< dataRes.length; a++) {


            var created = dataRes[a].Date;
            var fmtcreatedyear =  moment(created).format("YYYY");
            var fmtcreatedmonth = moment(created).format("MMM");
            var employee_name = dataRes[a].Name.Title;
            

            //alert(arr_department);

              if(fmtcreatedyear==arr_year_curr_pass[i] ){

                    if(fmtcreatedmonth=="Jan" ){
                      totalperjan +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Feb"  ){
                      totalperfeb +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Mar"  ){
                      totalpermar +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Apr"  ){
                      totalperapr +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="May"  ){
                      totalpermay +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jun"  ){
                      totalperjun +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jul"  ){
                      totalperjul +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Aug"  ){
                      totalperaug +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Sep"  ){
                      totalpersep +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Oct"  ){
                      totalperoct +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Nov"  ){
                      totalpernov +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Dec"  ){
                      totalperdec +=dataRes[a].Hours;
                      
                    }
              }

          } //for loop

          if(arr_year_curr_pass[i] == 2017){
          	arr_yearly_number.push({"Year":arr_year_curr_pass[i] ,"totalperjan":255.65 ,"totalperfeb":257.93 ,"totalpermar":364.98 ,"totalperapr":236.31 ,"totalpermay":451.27 ,"totalperjun":225.96 ,"totalperjul":234.56 ,"totalperaug":295.43 ,"totalpersep":253.74 ,"totalperoct":228.04 ,"totalpernov":235.77 ,"totalperdec":208.98});
          }else{
          	arr_yearly_number.push({"Year":arr_year_curr_pass[i] ,"totalperjan":totalperjan ,"totalperfeb":totalperfeb ,"totalpermar":totalpermar ,"totalperapr":totalperapr ,"totalpermay":totalpermay ,"totalperjun":totalperjun ,"totalperjul":totalperjul ,"totalperaug":totalperaug ,"totalpersep":totalpersep ,"totalperoct":totalperoct ,"totalpernov":totalpernov ,"totalperdec":totalperdec});
          }

         
          //arr_yearly_number.push({"Year":arr_year_curr_pass[i] ,"totalperjan":totalperjan ,"totalperfeb":totalperfeb ,"totalpermar":totalpermar ,"totalperapr":totalperapr ,"totalpermay":totalpermay ,"totalperjun":totalperjun ,"totalperjul":totalperjul ,"totalperaug":totalperaug ,"totalpersep":totalpersep ,"totalperoct":totalperoct ,"totalpernov":totalpernov ,"totalperdec":totalperdec});

/*
            ////////console.log(arr_year_curr_pass[i]);
            ////////console.log("totalperjan: "+totalperjan);
            ////////console.log("totalperfeb: "+totalperfeb);
            ////////console.log("totalpermar: "+totalpermar);
            ////////console.log("totalperapr: "+totalperapr);
            ////////console.log("totalpermay: "+totalpermay);
            ////////console.log("totalperjun: "+totalperjun);
            ////////console.log("totalperjul: "+totalperjul);
            ////////console.log("totalperaug: "+totalperaug);
            ////////console.log("totalpersep: "+totalpersep);
            ////////console.log("totalperoct: "+totalperoct);
            ////////console.log("totalpernov: "+totalpernov);
            ////////console.log("totalperdec: "+totalperdec);*/

  }
//arr_yearly_number[0] is the current year
//arr_yearly_number[1] is the current year - 1 

  //////console.log(arr_yearly_number);
  var arr_month_temp = ["Jan" ,"Feb" ,"Mar" ,"Apr" ,"May" ,"Jun" ,"Jul" ,"Aug" ,"Sep" ,"Oct" ,"Nov" ,"Dec"];

  for(c=0; c<arr_month_temp.length; c++){

    if(arr_month_temp[c] == 'Jan'){
      arr_data_manhour_loss_number.push([arr_month_temp[c],arr_yearly_number[0].totalperjan,  arr_yearly_number[0].totalperjan ,arr_yearly_number[1].totalperjan,  arr_yearly_number[1].totalperjan ])

    }else if(arr_month_temp[c] == 'Feb'){
      arr_data_manhour_loss_number.push([arr_month_temp[c],arr_yearly_number[0].totalperfeb,  arr_yearly_number[0].totalperfeb ,arr_yearly_number[1].totalperfeb,  arr_yearly_number[1].totalperfeb ])

    }else if(arr_month_temp[c] == 'Mar'){
      arr_data_manhour_loss_number.push([arr_month_temp[c],arr_yearly_number[0].totalpermar,  arr_yearly_number[0].totalpermar ,arr_yearly_number[1].totalpermar,  arr_yearly_number[1].totalpermar ])

    }else if(arr_month_temp[c] == 'Apr'){
      arr_data_manhour_loss_number.push([arr_month_temp[c],arr_yearly_number[0].totalperapr,  arr_yearly_number[0].totalperapr ,arr_yearly_number[1].totalperapr,  arr_yearly_number[1].totalperapr ])

    }else if(arr_month_temp[c] == 'May'){
      arr_data_manhour_loss_number.push([arr_month_temp[c],arr_yearly_number[0].totalpermay,  arr_yearly_number[0].totalpermay ,arr_yearly_number[1].totalpermay,  arr_yearly_number[1].totalpermay ])

    }else if(arr_month_temp[c] == 'Jun'){
      arr_data_manhour_loss_number.push([arr_month_temp[c],arr_yearly_number[0].totalperjun,  arr_yearly_number[0].totalperjun ,arr_yearly_number[1].totalperjun,  arr_yearly_number[1].totalperjun ])

    }else if(arr_month_temp[c] == 'Jul'){
      arr_data_manhour_loss_number.push([arr_month_temp[c],arr_yearly_number[0].totalperjul,  arr_yearly_number[0].totalperjul ,arr_yearly_number[1].totalperjul,  arr_yearly_number[1].totalperjul ])

    }else if(arr_month_temp[c] == 'Aug'){
      arr_data_manhour_loss_number.push([arr_month_temp[c],arr_yearly_number[0].totalperaug,  arr_yearly_number[0].totalperaug ,arr_yearly_number[1].totalperaug,  arr_yearly_number[1].totalperaug ])

    }else if(arr_month_temp[c] == 'Sep'){
      arr_data_manhour_loss_number.push([arr_month_temp[c],arr_yearly_number[0].totalpersep,  arr_yearly_number[0].totalpersep ,arr_yearly_number[1].totalpersep,  arr_yearly_number[1].totalpersep ])

    }else if(arr_month_temp[c] == 'Oct'){
      arr_data_manhour_loss_number.push([arr_month_temp[c],arr_yearly_number[0].totalperoct,  arr_yearly_number[0].totalperoct ,arr_yearly_number[1].totalperoct,  arr_yearly_number[1].totalperoct ])

    }else if(arr_month_temp[c] == 'Nov'){
      arr_data_manhour_loss_number.push([arr_month_temp[c],arr_yearly_number[0].totalpernov,  arr_yearly_number[0].totalpernov ,arr_yearly_number[1].totalpernov,  arr_yearly_number[1].totalpernov ])

    }else if(arr_month_temp[c] == 'Dec'){
      arr_data_manhour_loss_number.push([arr_month_temp[c],arr_yearly_number[0].totalperdec,  arr_yearly_number[0].totalperdec ,arr_yearly_number[1].totalperdec,  arr_yearly_number[1].totalperdec ])

    }
    
  }



    ////////console.log("+++++++++++++++++++++")
    ////////console.log(arr_data_manhour_loss_number);
    ////////console.log("+++++++++++++++++++++")




    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart7);



    


    ////////console.log(dataRes2);

//      var count_perjan = 0, count_perfeb = 0, count_permar = 0, count_perapr = 0, count_permay = 0, count_perjun = 0, count_perjul = 0, count_peraug = 0, count_persep = 0, count_peroct = 0, count_pernov = 0, count_perdec = 0;

// var count_minus_one_year=0;
// var count_year=0;
    // for(a=0; a<dataRes2.length; a++){

    //   var date_joined = dataRes2[a].LI_DateJoined;
    //   var temp_datejoined = new Date(date_joined);
    //   var employee_date_joined = temp_datejoined.format("MM/dd/yyyy");

    // //////console.log(temp_datejoined.format("MMM"));

      // var temp_number_temp_datejoined = Number(temp_datejoined.format("yyyy"));
      // var temp_arr_year = arr_year_curr_pass[0];// current year 
      // var temp_arr_year_minus_one = arr_year_curr_pass[1];// current year - 1;

      ////////console.log(temp_number_temp_datejoined);
      ////////console.log(temp_arr_year_minus_one);


     // if(temp_number_temp_datejoined <= temp_arr_year){
     //    count_minus_one_year++;
     //     //////console.log("-----------"+temp_number_temp_datejoined+"-----------");
     //    var month_joined = new Date(temp_datejoined.format("MM/dd/yyyy"));
     //    var temp_month_var = new Date("03/30/"+temp_arr_year);
     //    //////console.log(temp_month_var);

     //    if(month_joined.getTime() <= temp_month_var.getTime()){
     //      count_perdec++;
     //    }

     // // ////console.log(Number(temp_datejoined.format("MM")));
     //  //////console.log("---------------------------"+temp_number_temp_datejoined+"---------------------------")
     //  //////console.log("*******************"+Number(temp_datejoined.format("MM"))+"********************")

      
     // }

     // if(temp_number_temp_datejoined <= temp_arr_year){
     //  count_year++;
     // }

   // }

//////console.log(temp_arr_year_minus_one+" : "+count_minus_one_year);
//////console.log(temp_arr_year+" : "+count_year);

//////console.log("count_permonth: "+count_perdec);

}//end function





var urlForAllItems3 = "/_api/Web/Lists/GetByTitle('Employee Profile')/Items?$select=LI_Department,LI_Section,LI_DateJoined,LI_FirstName,LI_LastName,LI_Separated,LI_DateSeparated,LI_EmployeeStatus&$top=1000&$OrderBy=LI_Section asc ";

var first_input_manpower_count ;
function getItems5(selected_year) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + urlForAllItems3,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {

        var dataRes3 = data.d.results;
        ////console.log(dataRes3);
        var arr_manpower_count = [];

        arr_data_manhour_loss_rate = [];

        var arr_count_per_year_active =[];
        var arr_count_per_year_separated =[];
        var arr_count_active_separated_sum = [];

        //selected_year = selected_year;
        selected_year = selected_year;

        var arr_year_curr_pass = [selected_year,selected_year-1];
		pass_arr_year = arr_year_curr_pass;
		
         var manpower_div = document.getElementById('per_manpower_disp');

        manpower_div.innerHTML = "<div class='row header green'><div class='cell'>Year</div><div class='cell'>Jan</div><div class='cell'>Feb</div><div class='cell'>Mar</div><div class='cell'>Apr</div><div class='cell'>May</div><div class='cell'>Jun</div><div class='cell'>Jul</div><div class='cell'>Aug</div><div class='cell'>Sep</div><div class='cell'>Oct</div><div class='cell'>Nov</div><div class='cell'>Dec</div></div>";



//summations

        var arr_year_curr_pass = [selected_year,selected_year-1];

        arr_year_curr_pass.sort(function(a, b){return a-b});
        ////console.log(arr_year_curr_pass);

        var get_loop_year = arr_year_curr_pass[1] - 2016; //2016 december
        ////console.log(get_loop_year);

        var arr_count_year = [];
        for(a=0; a<get_loop_year; a++){
          arr_count_year.push(2017 + a);//more than 1
        }
        ////console.log("===================arr_count_year======================");
        ////console.log(arr_count_year);
        ////console.log("===================arr_count_year======================");


        arr_data_manhour_loss_rate.push(["Month",arr_year_curr_pass[0].toString(),  { role: 'annotation' } ,arr_year_curr_pass[1].toString(),  { role: 'annotation' } ]);

        for (i=0; i<arr_count_year.length; i++) {

        var countperjan_active = 0, countperfeb_active = 0, countpermar_active = 0, countperapr_active = 0, countpermay_active = 0, countperjun_active = 0, countperjul_active = 0, countperaug_active = 0, countpersep_active = 0, countperoct_active = 0, countpernov_active = 0, countperdec_active = 0;

        var countperjan_separated = 0, countperfeb_separated = 0, countpermar_separated = 0, countperapr_separated = 0, countpermay_separated = 0, countperjun_separated = 0, countperjul_separated = 0, countperaug_separated = 0, countpersep_separated = 0, countperoct_separated = 0, countpernov_separated = 0, countperdec_separated = 0;


          for (a=0; a< dataRes3.length; a++) {

            var date_joined = dataRes3[a].LI_DateJoined;
            var temp_datejoined = new Date(date_joined);
            var employee_date_joined = temp_datejoined.format("MM/dd/yyyy");
            var employee_name = dataRes3[a].LI_FirstName +" "+dataRes3[a].LI_LastName;
            var employee_status = dataRes3[a].LI_EmployeeStatus;

          
            var date_separated = dataRes3[a].LI_DateSeparated;
            var temp_dateseparated = new Date(date_separated);
            var employee_date_separated = temp_dateseparated.format("MM/dd/yyyy");

            var active_or_separated = dataRes3[a].LI_Separated;
            //////console.log(active_or_separated);
            if(active_or_separated == "Active"){
              if(arr_count_year[i] == moment(employee_date_joined).format("YYYY")){
                //////console.log(moment(employee_date_joined).format("MMM"));
                var frmt_date_joined = moment(employee_date_joined).format("MMM");

                    if(frmt_date_joined=="Jan" ){
                      countperjan_active ++;

                    }else if(frmt_date_joined=="Feb"  ){
                      countperfeb_active ++;

                    }else if(frmt_date_joined=="Mar"  ){
                      countpermar_active ++;

                    }else if(frmt_date_joined=="Apr"  ){
                      countperapr_active ++;

                    }else if(frmt_date_joined=="May"  ){
                      countpermay_active ++;

                    }else if(frmt_date_joined=="Jun"  ){
                      countperjun_active ++;

                    }else if(frmt_date_joined=="Jul"  ){
                      countperjul_active ++;

                    }else if(frmt_date_joined=="Aug"  ){
                      countperaug_active ++;

                    }else if(frmt_date_joined=="Sep"  ){
                      countpersep_active ++;

                    }else if(frmt_date_joined=="Oct"  ){
                      countperoct_active ++;

                    }else if(frmt_date_joined=="Nov"  ){
                      countpernov_active ++;

                    }else if(frmt_date_joined=="Dec"  ){
                      countperdec_active ++;
                      
                    }
              

              }
            }else if(active_or_separated == "Separated"){
              if(arr_count_year[i] == moment(employee_date_separated).format("YYYY")){
                //////console.log(moment(employee_date_joined).format("MMM"));

                var frmt_date_separated = moment(employee_date_separated).format("MMM");

                    if(frmt_date_separated=="Jan" ){
                      countperjan_separated ++;
                      ////console.log(employee_name +" : "+frmt_date_separated+" : "+arr_count_year[i]+" : "+employee_status )


                    }else if(frmt_date_separated=="Feb"  ){
                      countperfeb_separated ++;
                      ////console.log(employee_name +" : "+frmt_date_separated+" : "+arr_count_year[i]+" : "+employee_status )

                    }else if(frmt_date_separated=="Mar"  ){
                      countpermar_separated ++;
                      ////console.log(employee_name +" : "+frmt_date_separated+" : "+arr_count_year[i]+" : "+employee_status )

                    }else if(frmt_date_separated=="Apr"  ){
                      countperapr_separated ++;
                      ////console.log(employee_name +" : "+frmt_date_separated+" : "+arr_count_year[i]+" : "+employee_status )

                    }else if(frmt_date_separated=="May"  ){
                      countpermay_separated ++;
                      ////console.log(employee_name +" : "+frmt_date_separated+" : "+arr_count_year[i]+" : "+employee_status )

                    }else if(frmt_date_separated=="Jun"  ){
                      countperjun_separated ++;
                      ////console.log(employee_name +" : "+frmt_date_separated+" : "+arr_count_year[i]+" : "+employee_status )

                    }else if(frmt_date_separated=="Jul"  ){
                      countperjul_separated ++;
                      ////console.log(employee_name +" : "+frmt_date_separated+" : "+arr_count_year[i]+" : "+employee_status )

                    }else if(frmt_date_separated=="Aug"  ){
                      countperaug_separated ++;
                      ////console.log(employee_name +" : "+frmt_date_separated+" : "+arr_count_year[i]+" : "+employee_status )

                    }else if(frmt_date_separated=="Sep"  ){
                      countpersep_separated ++;
                      ////console.log(employee_name +" : "+frmt_date_separated+" : "+arr_count_year[i]+" : "+employee_status )

                    }else if(frmt_date_separated=="Oct"  ){
                      countperoct_separated ++;
                      ////console.log(employee_name +" : "+frmt_date_separated+" : "+arr_count_year[i]+" : "+employee_status )

                    }else if(frmt_date_separated=="Nov"  ){
                      countpernov_separated ++;
                      ////console.log(employee_name +" : "+frmt_date_separated+" : "+arr_count_year[i]+" : "+employee_status )

                    }else if(frmt_date_separated=="Dec"  ){
                      countperdec_separated ++;
                      ////console.log(employee_name +" : "+frmt_date_separated+" : "+arr_count_year[i]+" : "+employee_status )
                      
                    }

              

              }

            }


            




          }//2nd loop


          arr_count_per_year_active.push([arr_count_year[i], countperjan_active, countperfeb_active, countpermar_active, countperapr_active, countpermay_active, countperjun_active, countperjul_active, countperaug_active, countpersep_active, countperoct_active, countpernov_active, countperdec_active]);

          arr_count_per_year_separated.push([arr_count_year[i], countperjan_separated, countperfeb_separated, countpermar_separated, countperapr_separated, countpermay_separated, countperjun_separated, countperjul_separated,countperaug_separated, countpersep_separated, countperoct_separated, countpernov_separated, countperdec_separated]);

          arr_count_active_separated_sum.push([arr_count_year[i], countperjan_active-countperjan_separated, countperfeb_active-countperfeb_separated, countpermar_active-countpermar_separated, countperapr_active-countperapr_separated, countpermay_active-countpermay_separated, countperjun_active-countperjun_separated, countperjul_active-countperjul_separated, countperaug_active-countperaug_separated, countpersep_active-countpersep_separated, countperoct_active-countperoct_separated, countpernov_active-countpernov_separated, countperdec_active-countperdec_separated])

        }//1st loop

//summations

        ////console.log("--------------------ACTIVE-------------------")
        ////console.log(arr_count_per_year_active);
        ////console.log("--------------------SEPARATED-------------------")
        ////console.log(arr_count_per_year_separated);
        ////console.log("--------------------SUMMATION-------------------")
        ////console.log(arr_count_active_separated_sum);
        

        
        /*arr_year_curr_pass.sort(function(a, b){return a-b});
        ////console.log(arr_year_curr_pass);

        var get_loop_year = arr_year_curr_pass[1] - 2016; //2016 december
        ////console.log(get_loop_year);

        var arr_count_year = [];
        for(a=0; a<get_loop_year; a++){
          arr_count_year.push(2017 + a);//more than 1
        }
        ////console.log("===================arr_count_year======================");
        ////console.log(arr_count_year);
        ////console.log("===================arr_count_year======================");*/

        var current_date = new Date();
         current_date.setMonth(current_date.getMonth());
         ////console.log("current_date: "+current_date);

         //var current_year = new Date("01/01/2020");


        for(a=0; a<arr_count_year.length; a++){
          //////console.log("arr_count_year a: "+a);
          if(arr_count_year[a] == 2017){
            arr_manpower_count.push([2017, 121, 128, 128, 136, 137, 143, 135, 145, 151, 154, 171, 169]);
          }else{

           // arr_count_active_separated_sum == arr_count_year[a]
            for(b=0; b<arr_count_active_separated_sum.length; b++){
             // ////console.log("arr_count_active_separated_sum b: "+b);
              if(arr_count_active_separated_sum[b][0] == arr_count_year[a]){
               // ////console.log("a"); // true if found in the summation array
               var inside_array_length = arr_count_active_separated_sum[b].length;
               //////console.log(inside_array_length);
               //for(c=1; c<=inside_array_length-1; c++){
                //////console.log("arr_count_active_separated_sum["+b+"]["+c+"]: "+arr_count_active_separated_sum[b][c]);
                var temp_jan=0, temp_feb=0, temp_mar=0, temp_apr=0, temp_may=0, temp_jun=0, temp_jul=0, temp_aug=0, temp_sep=0, temp_oct=0, temp_nov=0, temp_dec=0;

                //arr_count_active_separated_sum[b][1]//jan
                //////console.log("a: "+arr_manpower_count[a-1][12])
                var current_year_today =  moment(current_date).format("YYYY") ;

                ////console.log("arr_count_year["+a+"]: "+arr_count_year[a]+" || current_year_today: "+current_year_today)
                ////console.log("a: "+(moment(current_date).format("MM") >= 2 && arr_count_year[a]<= current_year_today));



                if(moment(current_date).format("MM") >= 1 && arr_count_year[a]<=current_year_today){
                  temp_jan = arr_manpower_count[a-1][12] + arr_count_active_separated_sum[a][1];
                  //////console.log("in");
                }
                if(moment(current_date).format("MM") >= 2 && arr_count_year[a]<= current_year_today){
                  temp_feb = temp_jan +arr_count_active_separated_sum[b][2];
                }
                if(moment(current_date).format("MM") >= 3 && arr_count_year[a]<= current_year_today){
                  temp_mar = temp_feb +arr_count_active_separated_sum[b][3];
                }
                if(moment(current_date).format("MM") >= 4 && arr_count_year[a]<= current_year_today){
                  temp_apr = temp_mar +arr_count_active_separated_sum[b][4];
                }
                if(moment(current_date).format("MM") >= 5 && arr_count_year[a]<= current_year_today){
                  temp_may = temp_apr +arr_count_active_separated_sum[b][5];
                }
                if(moment(current_date).format("MM") >= 6 && arr_count_year[a]<= current_year_today){
                  temp_jun = temp_may +arr_count_active_separated_sum[b][6];
                }
                if(moment(current_date).format("MM") >= 7 && arr_count_year[a]<= current_year_today){
                  temp_jul = temp_jun +arr_count_active_separated_sum[b][7];
                }
                if(moment(current_date).format("MM") >= 8 && arr_count_year[a]<= current_year_today){
                  temp_aug = temp_jul +arr_count_active_separated_sum[b][8];
                }
                if(moment(current_date).format("MM") >= 9 && arr_count_year[a]<= current_year_today){
                  temp_sep = temp_aug +arr_count_active_separated_sum[b][9];
                }
                if(moment(current_date).format("MM") >= 10 && arr_count_year[a]<= current_year_today){
                  temp_oct = temp_sep +arr_count_active_separated_sum[b][10];
                }
                if(moment(current_date).format("MM") >= 11 && arr_count_year[a]<= current_year_today){
                  temp_nov = temp_oct +arr_count_active_separated_sum[b][11];
                }
                if(moment(current_date).format("MM") >= 12 && arr_count_year[a]<= current_year_today){
                  temp_dec = temp_nov +arr_count_active_separated_sum[b][12];
                }

                /*temp_jan = arr_manpower_count[a-1][12] + arr_count_active_separated_sum[b][1];
                temp_feb = temp_jan + arr_count_active_separated_sum[b][2];
                temp_mar = temp_feb + arr_count_active_separated_sum[b][3];
                temp_apr = temp_mar + arr_count_active_separated_sum[b][4];
                temp_may = temp_apr + arr_count_active_separated_sum[b][5];
                temp_jun = temp_may + arr_count_active_separated_sum[b][6];
                temp_jul = temp_jun + arr_count_active_separated_sum[b][7];
                temp_aug = temp_jul + arr_count_active_separated_sum[b][8];
                temp_sep = temp_aug + arr_count_active_separated_sum[b][9];
                temp_oct = temp_sep + arr_count_active_separated_sum[b][10];
                temp_nov = temp_oct + arr_count_active_separated_sum[b][11];
                temp_dec = temp_nov + arr_count_active_separated_sum[b][12];*/


                arr_manpower_count.push([arr_count_year[a], temp_jan, temp_feb, temp_mar, temp_apr, temp_may, temp_jun, temp_jul, temp_aug, temp_sep, temp_oct, temp_nov, temp_dec]);

               //}
               ////console.log("----next loop ----")


               

              }else{
                //////console.log("b");// false if not found in the summation array
              }
            }

            

          }

        }

         

      /*   var year_append ="<div class='cell' style='font-weight:500'>"+arr_count_year[a]+"</div>";

               var jan_append ="<div class='cell' > "+temp_jan+"</div>";
               var feb_append  ="<div class='cell' > "+temp_feb+"</div>";
               var mar_append  ="<div class='cell' > "+temp_mar+"</div>";
               var apr_append  ="<div class='cell' > "+temp_apr+"</div>";
               var may_append  ="<div class='cell' > "+temp_may+"</div>";
               var jun_append  ="<div class='cell' > "+temp_jun+"</div>";
               var jul_append  ="<div class='cell' > "+temp_jul+"</div>";
               var aug_append  ="<div class='cell' > "+temp_aug+"</div>";
               var sep_append  ="<div class='cell' > "+temp_sep+"</div>";
               var oct_append  ="<div class='cell' > "+temp_oct+"</div>";
               var nov_append  ="<div class='cell' > "+temp_nov+"</div>";
               var dec_append  ="<div class='cell' > "+temp_dec+"</div>";

               $('#per_manpower_disp').append("<div class='row'>"+year_append+jan_append+""+feb_append+""+mar_append+""+apr_append+""+may_append+""+jun_append+""+jul_append+""+aug_append+""+sep_append+""+oct_append+""+nov_append+""+dec_append+"</div>");*/

              

               for(a=0; a<arr_manpower_count.length; a++){
               // for(b=0; b<arr_manpower_count[a].length; b++){
                   var year_append ="<div class='cell' style='font-weight:500'>"+arr_manpower_count[a][0]+"</div>";

                   var jan_append ="<div class='cell' > "+arr_manpower_count[a][1]+"</div>";
                   var feb_append  ="<div class='cell' > "+arr_manpower_count[a][2]+"</div>";
                   var mar_append  ="<div class='cell' > "+arr_manpower_count[a][3]+"</div>";
                   var apr_append  ="<div class='cell' > "+arr_manpower_count[a][4]+"</div>";
                   var may_append  ="<div class='cell' > "+arr_manpower_count[a][5]+"</div>";
                   var jun_append  ="<div class='cell' > "+arr_manpower_count[a][6]+"</div>";
                   var jul_append  ="<div class='cell' > "+arr_manpower_count[a][7]+"</div>";
                   var aug_append  ="<div class='cell' > "+arr_manpower_count[a][8]+"</div>";
                   var sep_append  ="<div class='cell' > "+arr_manpower_count[a][9]+"</div>";
                   var oct_append  ="<div class='cell' > "+arr_manpower_count[a][10]+"</div>";
                   var nov_append  ="<div class='cell' > "+arr_manpower_count[a][11]+"</div>";
                   var dec_append  ="<div class='cell' > "+arr_manpower_count[a][12]+"</div>";

                   
               // }

                $('#per_manpower_disp').append("<div class='row'>"+year_append+jan_append+""+feb_append+""+mar_append+""+apr_append+""+may_append+""+jun_append+""+jul_append+""+aug_append+""+sep_append+""+oct_append+""+nov_append+""+dec_append+"</div>");

               }
              ////console.log("============================arr_manpower_count(More Than One Years)==========================")
              ////console.log(arr_manpower_count);
              ////console.log("============================arr_yearly_number==========================")
              ////console.log(arr_yearly_number);

              //RATE = Manpower Number / Manpower Count Per Month

               var arr_month_temp = ["Jan" ,"Feb" ,"Mar" ,"Apr" ,"May" ,"Jun" ,"Jul" ,"Aug" ,"Sep" ,"Oct" ,"Nov" ,"Dec"];
               var arr_manhourloss_rate_temp = [];
            for(a=arr_yearly_number.length-1; a>=0; a--){

            	

				for(b=0; b<arr_manpower_count.length; b++){
					var manhourloss_rate_jan=0, manhourloss_rate_feb=0, manhourloss_rate_mar=0, manhourloss_rate_apr=0, manhourloss_rate_may=0, manhourloss_rate_jun=0, manhourloss_rate_jul=0, manhourloss_rate_aug=0, manhourloss_rate_sep=0, manhourloss_rate_oct=0, manhourloss_rate_nov=0, manhourloss_rate_dec=0

					//////console.log("arr_yearly_number["+a+"].Year: "+arr_yearly_number[a].Year);
					//////console.log("arr_manpower_count["+b+"][0]: "+arr_manpower_count[b][0]);
					if(arr_yearly_number[a].Year == arr_manpower_count[b][0]){//IF Year Found
/*
						////console.log("arr_yearly_number["+a+"].Year: "+arr_yearly_number[a].Year+" == arr_manpower_count["+b+"][0]: "+arr_manpower_count[b][0]);
						////console.log("Jan: "+arr_yearly_number[a].totalperjan +" / "+arr_manpower_count[b][1]);//1
						////console.log("Feb: "+arr_yearly_number[a].totalperfeb +" / "+arr_manpower_count[b][2]);//2
						////console.log("Mar: "+arr_yearly_number[a].totalpermar +" / "+arr_manpower_count[b][3]);//3
						////console.log("Apr: "+arr_yearly_number[a].totalperapr +" / "+arr_manpower_count[b][4]);//4
						////console.log("May: "+arr_yearly_number[a].totalpermay +" / "+arr_manpower_count[b][5]);//5
						////console.log("Jun: "+arr_yearly_number[a].totalperjun +" / "+arr_manpower_count[b][6]);//6
						////console.log("Jul: "+arr_yearly_number[a].totalperjul +" / "+arr_manpower_count[b][7]);//7
						////console.log("Aug: "+arr_yearly_number[a].totalperaug +" / "+arr_manpower_count[b][8]);//8
						////console.log("Sep: "+arr_yearly_number[a].totalpersep +" / "+arr_manpower_count[b][9]);//9
						////console.log("Oct: "+arr_yearly_number[a].totalperoct +" / "+arr_manpower_count[b][10]);//10
						////console.log("Nov: "+arr_yearly_number[a].totalpernov +" / "+arr_manpower_count[b][11]);//11
						////console.log("Dec: "+arr_yearly_number[a].totalperdec +" / "+arr_manpower_count[b][12]);//12
*/

						////console.log("arr_yearly_number["+a+"].Year: "+arr_yearly_number[a].Year+" == arr_manpower_count["+b+"][0]: "+arr_manpower_count[b][0]);

/*
						////console.log("Jan: "+arr_yearly_number[a].totalperjan +" / "+arr_manpower_count[b][1]+ " || Avg: "+parseFloat(Number(arr_yearly_number[a].totalperjan) / Number(arr_manpower_count[b][1]) || 0).toFixed(2) );//1
						////console.log("Feb: "+arr_yearly_number[a].totalperfeb +" / "+arr_manpower_count[b][2]+ " || Avg: "+parseFloat(Number(arr_yearly_number[a].totalperfeb) / Number(arr_manpower_count[b][2]) || 0).toFixed(2) );//2
						////console.log("Mar: "+arr_yearly_number[a].totalpermar +" / "+arr_manpower_count[b][3]+ " || Avg: "+parseFloat(Number(arr_yearly_number[a].totalpermar) / Number(arr_manpower_count[b][3]) || 0).toFixed(2) );//3
						////console.log("Apr: "+arr_yearly_number[a].totalperapr +" / "+arr_manpower_count[b][4]+ " || Avg: "+parseFloat(Number(arr_yearly_number[a].totalperapr) / Number(arr_manpower_count[b][4]) || 0).toFixed(2) );//4
						////console.log("May: "+arr_yearly_number[a].totalpermay +" / "+arr_manpower_count[b][5]+ " || Avg: "+parseFloat(Number(arr_yearly_number[a].totalpermay) / Number(arr_manpower_count[b][5]) || 0).toFixed(2) );//5
						////console.log("Jun: "+arr_yearly_number[a].totalperjun +" / "+arr_manpower_count[b][6]+ " || Avg: "+parseFloat(Number(arr_yearly_number[a].totalperjun) / Number(arr_manpower_count[b][6]) || 0).toFixed(2) );//6
						////console.log("Jul: "+arr_yearly_number[a].totalperjul +" / "+arr_manpower_count[b][7]+ " || Avg: "+parseFloat(Number(arr_yearly_number[a].totalperjul) / Number(arr_manpower_count[b][7]) || 0).toFixed(2) );//7
						////console.log("Aug: "+arr_yearly_number[a].totalperaug +" / "+arr_manpower_count[b][8]+ " || Avg: "+parseFloat(Number(arr_yearly_number[a].totalperaug) / Number(arr_manpower_count[b][8]) || 0).toFixed(2) );//8
						////console.log("Sep: "+arr_yearly_number[a].totalpersep +" / "+arr_manpower_count[b][9]+ " || Avg: "+parseFloat(Number(arr_yearly_number[a].totalpersep) / Number(arr_manpower_count[b][9]) || 0).toFixed(2) );//9
						////console.log("Oct: "+arr_yearly_number[a].totalperoct +" / "+arr_manpower_count[b][10]+ " || Avg: "+parseFloat(Number(arr_yearly_number[a].totalperoct) / Number(arr_manpower_count[b][10]) || 0).toFixed(2) );//10
						////console.log("Nov: "+arr_yearly_number[a].totalpernov +" / "+arr_manpower_count[b][11]+ " || Avg: "+parseFloat(Number(arr_yearly_number[a].totalpernov) / Number(arr_manpower_count[b][11]) || 0).toFixed(2) );//11
						////console.log("Dec: "+arr_yearly_number[a].totalperdec +" / "+arr_manpower_count[b][12]+ " || Avg: "+parseFloat(Number(arr_yearly_number[a].totalperdec) / Number(arr_manpower_count[b][12]) || 0).toFixed(2) );//12
*/

						manhourloss_rate_jan = Number(arr_yearly_number[a].totalperjan) / Number(arr_manpower_count[b][1]) || 0;
						manhourloss_rate_feb = Number(arr_yearly_number[a].totalperfeb) / Number(arr_manpower_count[b][2]) || 0;
						manhourloss_rate_mar = Number(arr_yearly_number[a].totalpermar) / Number(arr_manpower_count[b][3]) || 0;
						manhourloss_rate_apr = Number(arr_yearly_number[a].totalperapr) / Number(arr_manpower_count[b][4]) || 0;
						manhourloss_rate_may = Number(arr_yearly_number[a].totalpermay) / Number(arr_manpower_count[b][5]) || 0;
						manhourloss_rate_jun = Number(arr_yearly_number[a].totalperjun) / Number(arr_manpower_count[b][6]) || 0;
						manhourloss_rate_jul = Number(arr_yearly_number[a].totalperjul) / Number(arr_manpower_count[b][7]) || 0;
						manhourloss_rate_aug = Number(arr_yearly_number[a].totalperaug) / Number(arr_manpower_count[b][8]) || 0;
						manhourloss_rate_sep = Number(arr_yearly_number[a].totalpersep) / Number(arr_manpower_count[b][9]) || 0;
						manhourloss_rate_oct = Number(arr_yearly_number[a].totalperoct) / Number(arr_manpower_count[b][10]) || 0;
						manhourloss_rate_nov = Number(arr_yearly_number[a].totalpernov) / Number(arr_manpower_count[b][11]) || 0;
						manhourloss_rate_dec = Number(arr_yearly_number[a].totalperdec) / Number(arr_manpower_count[b][12]) || 0;

						arr_manhourloss_rate_temp.push([arr_yearly_number[a].Year, 
							manhourloss_rate_jan, 
							manhourloss_rate_feb, 
							manhourloss_rate_mar, 
							manhourloss_rate_apr, 
							manhourloss_rate_may, 
							manhourloss_rate_jun, 
							manhourloss_rate_jul, 
							manhourloss_rate_aug, 
							manhourloss_rate_sep, 
							manhourloss_rate_oct, 
							manhourloss_rate_nov, 
							manhourloss_rate_dec ])

					}
				}
				/* */
			}

			////console.log("************************arr_manhourloss_rate_temp************************")
			////console.log(arr_manhourloss_rate_temp);

				for(c=0; c<arr_month_temp.length; c++){

			       arr_data_manhour_loss_rate.push([arr_month_temp[c], arr_manhourloss_rate_temp[0][c+1], arr_manhourloss_rate_temp[0][c+1], arr_manhourloss_rate_temp[1][c+1], arr_manhourloss_rate_temp[1][c+1] ])

			      // ////console.log("arr_manhourloss_rate_temp[1]["+(c+1)+"]")

			    }//foor loop

            ////console.log("--------------------arr_data_manhour_loss_rate-------------------")
            ////console.log(arr_data_manhour_loss_rate);




        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawChart8);

        },//end success
        error: function (error) {
            alert(JSON.stringify(error));
        }
      });//end ajax request
  }//end function




function sortJSON(data, key) {
    return data.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}


/*&$filter=Name ne 'Attachments' and Name ne 'Item' and Name ne 'Forms'*/

var urlForAllItems = "/_api/Web/Lists/GetByTitle('Man Hour Loss')/Items?$select=Man_x0020_hour_x0020_loss_x0020_,Hours,Date,Id,Hours,Section/Id,Section/Title,Department/Id,Department/Title,Name/Title,Name&$expand=Name/Title&$expand=Department&$expand=Section&$top=1000&$OrderBy=Date asc";

var urlForAllItems2 = "/_api/Web/Lists/GetByTitle('Employee Profile')/Items?$select=LI_Department,LI_Section,LI_DateJoined&$top=1000&$OrderBy=LI_Section asc&$filter=LI_Separated eq 'Active' ";


    function OnScrollDiv (div) {
           ////////////////////console.log(div.scrollTop);
          // temp_scroll=div.scrollTop;
        // //console.log(div.scrollTop);
           ////////////////////console.log(div.scrollTop);

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

     /* if (div.scrollTop > 1638) {
        $("#id_div_fixed_quarter").addClass("fixdiv_quarter");
      } else {
        $("#id_div_fixed_quarter").removeClass("fixdiv_quarter");
      }*/



    }

      $(document).ready(function() {

         
       // $('#Year').val('2018');
        var currentTime = new Date()
        var current_year = currentTime.getFullYear();
        var current_month = currentTime.getMonth();

        //alert(arr_month[current_month]);
        getItems(urlForAllItems,current_year,arr_month[current_month],"All");

        
        
        $("#s4-workspace").scroll(function() {
        OnScrollDiv(this);
    }); 

      });



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
    //////////////////////console.log(selected_year);

    getItems(urlForAllItems,selected_year);


  });
  
  $html.on('click.ui.dropdown', function(e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass('js-dropdown')) {
      $('.js-dropdown').removeClass('is-open');
      ////////////////////////console.log("b");
    }
  });

//------------------------------------MONTH------------------------------------------------

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
    ////////////////////console.log("selected_month: "+selected_month);
    var get_selected_year = $("#Year").val();

   //////////////////////console.log(get_selected_year);

    getItems2(urlForAllItems2,get_selected_year,selected_month);
    getItems3(get_selected_year,selected_month);

  });

     $html2.on('click.ui.dropdown', function(e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass('js-dropdown2')) {
      $('.js-dropdown2').removeClass('is-open');
      //////////////////////console.log("b");
    }
  });




 //-----------------------------QUARTER-------------------------------------------------------


 var $html4 = $('html');
  $html4.on('click.ui.dropdown', '.js-dropdown4', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
  });

   $html4.on('click.ui.dropdown', '.js-dropdown4 [data-dropdown-value]', function(e) {
    e.preventDefault();
    var $item = $(this);
    var $dropdown = $item.parents('.js-dropdown4');
    $dropdown.find('.js-dropdown__input4').val($item.data('dropdown-value'));
    $dropdown.find('.js-dropdown__current4').text($item.text());

////////////console.log("aw");
    //var selected_month = $item.data('dropdown-value');
    ////////////////////console.log("selected_month: "+selected_month);
 //   var get_selected_year = $("#Year").val();

   //////////////////////console.log(get_selected_year);

   // getItems2(urlForAllItems2,get_selected_year,selected_month);
    //getItems(urlForAllItems,selected_year);

  });

     $html4.on('click.ui.dropdown', function(e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass('js-dropdown4')) {
      $('.js-dropdown4').removeClass('is-open');
    }
  });


     

 //------------------------------------------------------------------------------------

 var $html2 = $('html');
  $html2.on('click.ui.dropdown', '.js-dropdown3', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
  });

   $html2.on('click.ui.dropdown', '.js-dropdown3 [data-dropdown-value]', function(e) {
    e.preventDefault();
    var $item = $(this);
    var $dropdown = $item.parents('.js-dropdown3');
    $dropdown.find('.js-dropdown__input3').val($item.data('dropdown-value'));
    $dropdown.find('.js-dropdown__current3').text($item.text());

    var selected_dept = $item.data('dropdown-value');
    ////////////////////console.log("selected_month: "+selected_month);
    var get_selected_year = $("#Year").val();
    var get_selected_month = $("#Month").val();

   //////////////////////console.log(get_selected_year);
//alert("aw");
    //getItems2(urlForAllItems2,get_selected_year,get_selected_month);
    getItems(urlForAllItems,get_selected_year,get_selected_month,selected_dept);

  });

     $html2.on('click.ui.dropdown', function(e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass('js-dropdown3')) {
      $('.js-dropdown3').removeClass('is-open');
      //////////////////////console.log("b");
    }
  });

 //------------------------------------------------------------------------------------
  

/*<div class="c-dropdown js-dropdown2" id="">Select Month: <input type='hidden' name='Month' id='Month' class='js-dropdown__input2' value='Selected Month'><span class='c-button c-button--dropdown js-dropdown__current2'>Selected Month</span><ul class='c-dropdown__list'><li class="c-dropdown__item" data-dropdown-value="test">test</li></ul></div>
    </div>
*/


/*style="position:fixed;z-index:10;"*/


/*
TD in last part with br
<div id="id_div_fixed_quarter">
     <div class="c-dropdown js-dropdown4" id="quarter_append_id" style="z-index:1;"></div>
   </div>
     <div id="bar_chart_quarter"  style="width:100%;height: 100%;" align="center"></div>
</td>

<tr>
  <td style="width:900px;height:500px;">
  
  </td>
  <td style="width:900px;height:500px;">
  <div id="bar_chart_remove"  style="width:100%;height: 100%;" align="center"></div>
  b
  </td>
</tr>

  <td style="vertical-align: top;">

    <div class="wrapper" style="">
      
      <h1 id="dept_percent_title_remove" align="center"></h1>
      <div class="table" id="per_dept_percent_remove">
      </div>
      a

  </td>
*/

  </script>


</head>

<body>
<br>

<div id="id_div_fixed" >
    <div class="c-dropdown js-dropdown" id="year_append_id" ></div> &nbsp &nbsp &nbsp
    <div class="c-dropdown js-dropdown3" id="department_append_id" ></div>
</div>

<span align="right"><h2><a style="text-decoration:none" href="https://intranet.houseofit.com.au/Lists/Man%20Hour%20Loss/AllItems.aspx">Man Hour Loss Calendar/Entry</a></h2></span>

<div class="wrapper">
<h1 id="emp_title"></h1>
  <div class="table" id="per_emp_disp">
  </div>
</div>



<div id="curve_chart"  align="center" style="width: 100%; height: 500px"></div>

<div id="bar_chart_2"  style="width:100%;height: 100%;" align="center"></div>

<hr>
<table class="columns" cellpadding="10" border="0" align="center">
<tr>
  <td style="vertical-align: top;" colspan="2" >

    <div class="wrapper">
    <h1 id="dept_title" align="center"></h1>
      <div class="table" id="per_dept_disp">
      </div>
    </div>
   
  </td>



</tr>


<tr>
  <td style="width:700px;height:700px;" colspan="2">
   <div id="piechart" style="width:100%;height: 100%;"  align="center"  ></div>
   <hr>
  </td>
  
</tr>


<tr>
  <td style="width:800px;height:800px;">
  <br>
  <div id="id_div_fixed_month">
    <div class="c-dropdown js-dropdown2" id="month_append_id"></div>
  </div>
    <div id="bar_chart_highest_manhour"  style="width:100%;height: 100%;" align="center"></div>
 
  </td>

  <td style="width:800px;height:800px;">
      <div id="bar_chart_team"  style="width:100%;height: 100%;" align="center"></div>
  </td>

</tr>

</table>
<hr>

    <div class="wrapper" style="width:100%;height: 100%;">
    <h1 id="manpower_title" align="center">Total Manpower Per Year</h1>
      <div class="table" id="per_manpower_disp">
      </div>
    </div>

<div id="curve_chart_manhour_loss_rate"  align="center" style="width: 100%; height: 500px"></div>
<br>
<div id="curve_chart_manhour_loss_number"   align="center" style="width: 100%; height: 800px"></div>

</body>


 
</html>

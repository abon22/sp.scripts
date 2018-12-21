/*
#888888 0
#D95C5C 1-29
#EFBC72 30-39
#E6BB48 40-59
#DDC928 60-69
#B4D95C 70-89
#66DA81 90-99
#21BA45 100*/

// var overall_percent = 91.13;
var datares_metrics;
var datares_key_performance_score_storage;
var arr_month_text = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


$(document).ready(function() {
    
    
    $('.ui.dropdown')
        .dropdown();

    $('.comment')
        .popup();

    $('#text_year_id').html("Select Year")
    $('#text_month_id').html("Select Month")

    var ctx = document.getElementById("bar-chart");

    myBarChart  = new Chart(ctx, {
                type: 'bar',
                data: {},
                options: {}
            });


    $('#filter_department_id').on('change', function() {


        $('#append_year_id').empty();
        $('#filter_year_id').val("");
        $('#text_year_id').html("Select Year");

        $('#append_month_id').empty();
        $('#filter_month_id').val("");
        $('#text_month_id').html("Select Month");
        
        

        $('#bar-chart').remove();
        $("#canvas-container").append("<canvas id='bar-chart' ></canvas>")
        $('#append_employee_id').empty();
        $('#ota_id').empty();

        $('#team_score_progress').progress({
                percent: 0
            });

        var ctx = document.getElementById("bar-chart");

        myBarChart  = new Chart(ctx, {
                    type: 'bar',
                    data: {},
                    options: {}
                });

        load_metrics(this.value);//department_id
        // ;
    })

    $('#filter_month_id').on('change', function() {
        var select_year = $("#filter_year_id").val(); 
        var select_month = $("#filter_month_id").val(); 

        //console.log(select_year+" || "+select_month)
        ReadKeyPerformanceScoreStorage(select_year, select_month)
    })
    
    $('#filter_year_id').on('change', function() {
        var select_year = $("#filter_year_id").val(); 
        //console.log(select_year)
        // ReadYear_Month(select_year)
        populate_month(select_year);
    })

    $("#refresh_btn" ).click(function() {
        location.reload();
    });
     
   

    
    // console.log(current_month);
    


    $('#team_score_progress').progress({
        percent: 0
    });

    // load_metrics(5);//department_id
    ReadDepartmentListItem();
    // load_key_performance_score_storage(5);
    





}) //end document ready
function error_occured(error){
    $('#loader_show_hide').hide();
    alert(JSON.stringify(error));
}


function load_metrics(department_id){
    $('#loader_show_hide').show()
    


    $.ajax({
       url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Metrics')/items?$select=Title, Key_x0020_Performance_x0020_Indi/Title, Key_x0020_Performance_x0020_Indi/ID, Score &$expand=Key_x0020_Performance_x0020_Indi ",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function(data) {
            datares_metrics = data.d.results;
            // console.log(datares_metrics)
            if(datares_metrics.length >0){
                load_key_performance_score_storage(department_id);
            }
            

            },
        error: function(error) {
            error_occured(error);
        }
    });

}
function load_key_performance_score_storage(department_id){
    $.ajax({
       url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Performance Score Storage')/items?$select=Employee/LI_FirstName, Employee/LI_LastName, Employee/LI_Department, Employee/LI_PositionTitle, Position_x0020_Title/ID, Position_x0020_Title/Title, Department/ID, Department/Title, KPI_x0020_Title/Title, KPI_x0020_Title/ID, Score, Comments, Year, Month, Date, Locked, Remarks &$expand=Employee &$expand=KPI_x0020_Title &$expand=Position_x0020_Title &$expand=Department &$filter=Department/ID eq '" + department_id + "'  &$OrderBy=Employee/LI_FirstName asc &$OrderBy=KPI_x0020_Title/Title desc",

       // url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Performance Score Storage')/items?$select=Employee/LI_FirstName, Employee/LI_LastName, Employee/LI_Department, Employee/LI_PositionTitle, Position_x0020_Title/ID, Position_x0020_Title/Title, Department/ID, Department/Title, KPI_x0020_Title/Title, KPI_x0020_Title/ID, Score, Comments, Year, Month, Date, Locked, Remarks &$expand=Employee &$expand=KPI_x0020_Title &$expand=Position_x0020_Title &$expand=Department &$filter=Department/ID eq '" + department_id + "' ",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function(data) {
            datares_key_performance_score_storage = data.d.results;
           
           if(datares_key_performance_score_storage.length > 0){
                // var currentTime = new Date()
                // var current_year = currentTime.getFullYear();
                // var current_month = currentTime.getMonth();

                // populate_year(current_year);
                populate_year();
                
                // ReadYear_Month(current_year, arr_month_text[current_month]);
                // ReadKeyPerformanceScoreStorage(current_year, arr_month_text[current_month])
                
           }

           $('#loader_show_hide').hide();
            


            },
        error: function(error) {
            error_occured(error);
        }
    });

}
function populate_year(selected_year){
    $('#append_year_id').empty();
    $('#text_year_id').html("")
    $('#filter_year_id').val("")

    var arr_year =[];

    for (var a = 0; a < datares_key_performance_score_storage.length; a++) {
        arr_year.push(datares_key_performance_score_storage[a].Year)
    }

    temp_year_arr = arr_year.filter(onlyUnique)

    var year_list = "";

     for (var a = 0; a < temp_year_arr.length; a++) {
         if(selected_year != temp_year_arr[a])
            year_list += "<div class='item' data-value='" + temp_year_arr[a] + "'>" + temp_year_arr[a] + "</div>";
    }
    $('#append_year_id').append(year_list);


    if(selected_year){

        $('#text_year_id').html(selected_year)
        $('#filter_year_id').val(selected_year)
        $('#append_year_id').append("<div class='item active selected' data-value='" + selected_year+ "'>" + selected_year + "</div>"); 
        
    }else{
        $('#text_year_id').html("Select Year")
    }

}

function populate_month(selected_year){
    $('#append_month_id').empty();
    $('#text_month_id').html("")
    $('#filter_month_id').val("")

    var arr_month=[];

    for (var a = 0; a < datares_key_performance_score_storage.length; a++) {
        // arr_year.push(datares_key_performance_score_storage[a].Year)

        if(selected_year == datares_key_performance_score_storage[a].Year){
            arr_month.push(datares_key_performance_score_storage[a].Month);
        }
    }
    temp_month_arr = arr_month.filter(onlyUnique)


    // temp_year_arr = arr_year.filter(onlyUnique)
    // console.log(temp_year_arr);

        //console.log(temp_month_arr);
        var month_list = "";
        $('#text_month_id').html("Select Month")
        for (var a = 0; a < temp_month_arr.length; a++) {

                month_list += "<div class='item' data-value='" + temp_month_arr[a] + "'>" + temp_month_arr[a]+ "</div>";
            

        }
         $('#append_month_id').append(month_list);
    

}

function ReadYear_Month(selected_year, selected_month) {

    

    $('#append_month_id').empty();
    $('#text_month_id').html("")
    $('#filter_month_id').val("")




            
            var arr_month=[];

            for (var a = 0; a < datares_key_performance_score_storage.length; a++) {
                // arr_year.push(datares_key_performance_score_storage[a].Year)

                if(selected_year == datares_key_performance_score_storage[a].Year){
                    arr_month.push(datares_key_performance_score_storage[a].Month);
                }
            }
            temp_month_arr = arr_month.filter(onlyUnique)


            // temp_year_arr = arr_year.filter(onlyUnique)
            // console.log(temp_year_arr);



            if(selected_month){
                $('#text_month_id').html(selected_month)
                $('#filter_month_id').val(selected_month)
                $('#append_month_id').append("<div class='item active selected' data-value='" + selected_month+ "'>" + selected_month + "</div>");  

                var month_list="";
                
                // console.log(temp_month_arr);
                // console.log(selected_month);
                
                 for (var a = 0; a < temp_month_arr.length; a++) {

                    if(selected_month != temp_month_arr[a])
                        month_list += "<div class='item' data-value='" + temp_month_arr[a] + "'>" + temp_month_arr[a]+ "</div>";
                    

                }
                $('#append_month_id').append(month_list);

            }else{
                //console.log(temp_month_arr);
                var month_list = "";
                $('#text_month_id').html("Select Month")
                for (var a = 0; a < temp_month_arr.length; a++) {

                        month_list += "<div class='item' data-value='" + temp_month_arr[a] + "'>" + temp_month_arr[a]+ "</div>";
                    

                }
                 $('#append_month_id').append(month_list);
            }
        

}


var datares_departments;
function ReadDepartmentListItem() {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Department')/items?$select=Title, ID&$OrderBy=Title",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function(data) {
            datares_departments = data.d.results;
            ////console.log(datares_departments)
            // $('#kpi_select_dept').empty();
            // $('#kpi_select_dept').append("<option value=''>Select Department</option>");

            //var department_div = document.getElementById('');
            var departmen_list = "";

            $('#append_dept_id').append('');

            $('#append_dept_id').dropdown('clear')
            $('#append_dept_id').empty();
            //$('#append_dept_id').append("<option value=''>Select Department</option>");

            for (var a = 0; a < datares_departments.length; a++) {
                ///////console.log(datares_departments[a].Title+" ID: "+datares_departments[a].ID);
                // $('#kpi_select_dept').append('<option value="' + datares_departments[a].ID + '">' + datares_departments[a].Title + '</option>');

                departmen_list += "<div class='item' data-value='" + datares_departments[a].ID + "'>" + datares_departments[a].Title + "</div>";

            }

            $('#append_dept_id').append(departmen_list);



        },
        error: function(error) {
            error_occured(error);
        }
    });
}


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}




function ReadKeyPerformanceScoreStorage(selected_year, selected_month) {

    
    $('#month_year_txt').html("Team Progress Report for "+selected_month+" "+selected_year);


    var arr_employee_name = []; //unique employee
    var department_title ;
    // $.ajax({
    //     url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Performance Score Storage')/items?$select=Employee/LI_FirstName, Employee/LI_LastName, Employee/LI_Department, Employee/LI_PositionTitle, Position_x0020_Title/ID, Position_x0020_Title/Title, Department/ID, Department/Title, KPI_x0020_Title/Title, KPI_x0020_Title/ID, Score, Comments, Year, Month, Date, Locked, Remarks &$expand=Employee &$expand=KPI_x0020_Title &$expand=Position_x0020_Title &$expand=Department &$filter=Department/ID eq '" + department_id + "' ",

    //     method: "GET",
    //     headers: { "Accept": "application/json; odata=verbose" },
    //     success: function(data) {
            // datares_key_performance_score_storage = data.d.results;
            // console.log(datares_key_performance_score_storage);
            var temp_employee = "";

            //console.log(datares_metrics);
            // console.log("selected_year: "+selected_year+", selected_month: "+selected_month)


            for (var a = 0; a < datares_key_performance_score_storage.length; a++) {

                if(datares_key_performance_score_storage[a].Year == selected_year && datares_key_performance_score_storage[a].Month == selected_month){
                    department_title = datares_key_performance_score_storage[a].Department.Title
                    var employee_fname_lname = datares_key_performance_score_storage[a].Employee.LI_FirstName + " " + datares_key_performance_score_storage[a].Employee.LI_LastName;
                    var kpi_title = datares_key_performance_score_storage[a].KPI_x0020_Title.Title;
                    var score = datares_key_performance_score_storage[a].Score;
                    // console.log(kpi_title)

                    arr_employee_name.push(employee_fname_lname);
                    arr_employee_name = arr_employee_name.filter(onlyUnique)
                }

            }

            // unique_arr_employee = arr_employee_name.filter( onlyUnique )

            // console.log(arr_employee_name)
            var obj_employee_kpi_score = [];
            for (var a = 0; a < arr_employee_name.length; a++) {
                // var total_score_per_emp=0;
                var arr_kpi_score = {};
                var total_score = 0;
                var total_metric = 0;
                for (var b = 0; b < datares_key_performance_score_storage.length; b++) {
                    if(datares_key_performance_score_storage[b].Year == selected_year && datares_key_performance_score_storage[b].Month == selected_month){
                        var employee_fname_lname = datares_key_performance_score_storage[b].Employee.LI_FirstName + " " + datares_key_performance_score_storage[b].Employee.LI_LastName;

                        if (arr_employee_name[a] == employee_fname_lname) {

                            var kpi_title = datares_key_performance_score_storage[b].KPI_x0020_Title.Title;
                            var kpi_id = datares_key_performance_score_storage[b].KPI_x0020_Title.ID;
                            //console.log("=========================================")
                            //console.log(kpi_id)
                            //console.log(kpi_title)
                            var score_range=0;
                            for (var m = 0; m < datares_metrics.length; m++) {
                                if(datares_metrics[m].Key_x0020_Performance_x0020_Indi.ID == kpi_id){
                                    if(datares_metrics[m].Score > score_range ){
                                        score_range = datares_metrics[m].Score
                                    }
                                    //console.log(datares_metrics[m].Title +"|| score: "+datares_metrics[m].Score)


                                }
                            }
                            //console.log("score_range: "+score_range);
                            //console.log("=========================================")
                            var kpi_score = datares_key_performance_score_storage[b].Score;
                            total_score += kpi_score;

                            arr_kpi_score[kpi_title+" <i value='"+score_range+"'>("+score_range+"%)</i>"] = kpi_score;
                            arr_kpi_score['Audit Score'] = total_score;
                            total_metric+=score_range;
                            // total_score_per_emp +=  datares_key_performance_score_storage[b].Score;

                            // console.log(employee_fname_lname);
                            // console.log(kpi_title);
                            // console.log(kpi_score);
                            // console.log("------------------------")

                        }
                    }
                }
                arr_kpi_score['Total Metrics'] = total_metric;
                // obj_employee_kpi_score[employee_fname_lname] = arr_kpi_score;
                // obj_employee_kpi_score[arr_employee_name[a]] = {"Audit_score":total_score_per_emp};
                obj_employee_kpi_score[arr_employee_name[a]] = arr_kpi_score;
                // obj_employee_kpi_score.push({[arr_employee_name[a]] : arr_kpi_score });

                // console.log(arr_employee_name[a]+" : "+total_score_per_emp);

                if (arr_employee_name.length - 1 === a) {
                    // console.log('loop ends');
                    $('#th_department_text').html(department_title+" Department")
                    display_team_progress_score(obj_employee_kpi_score, selected_year, selected_month, department_title);
                }
            }

            //if for loop done

    //         },
    //     error: function(error) {
    //         error_occured(error);
    //     }
    // });

}



function display_team_progress_score(obj_employee_kpi_score, selected_year, selected_month, department_title) {
    
    $('#bar-chart').remove();
    $("#canvas-container").append("<canvas id='bar-chart' ></canvas>")
    var ctx = document.getElementById("bar-chart");
     //  var myBarChart  = new Chart(ctx, {
        //     type: 'bar',
        //     data: {},
        //     options: {}
        // });

      // myBarChart.clear();
      // myBarChart.destroy();

    //console.log(obj_employee_kpi_score);
     var arr_data_employee_temp = [];
     var arr_data_percent_temp = [];

     Object.keys(obj_employee_kpi_score)
        .forEach(function eachKey(key) {
            // console.log("Employee: "+key)
            arr_data_employee_temp.push(key)
            // console.log("Audit Score: "+obj_employee_kpi_score[key]['Audit Score'])
             Object.keys(obj_employee_kpi_score[key])
                .forEach(function eachKey(key1) {
                    // console.log(key1)
                    // console.log(key1+": "+obj_employee_kpi_score[key][key1])
                    if(key1 == 'Audit Score'){
                        // console.log(obj_employee_kpi_score[key]['Audit Score'])
                        arr_data_percent_temp.push(obj_employee_kpi_score[key]['Audit Score'])
                    }
                    
                    // console.log("Audit Score: "+obj_employee_kpi_score[key][key1])
                    
                });
            // console.log("=======================")
        });

    // var arr_data_employee = ["Employee 1", "Employee 2", "Employee 3", "Employee 4", "Employee 5", "Employee 6", "Employee 7", "Employee 8", "Employee 9", "Employee 10", "Employee 11", "Employee 12"];
    // var arr_data_percent = [20.00, 75.00, 65.00, 92.00, 38.00, 100.00, 73.00, 55.00, 29.00, 94.00, 65.00, 75.00];
    var arr_data_employee = arr_data_employee_temp;
    var arr_data_percent = arr_data_percent_temp;

    var arr_data_percent_set_color = [];
    var arr_data_percent_set_color2 = [];
    for (var i = 0; i < arr_data_percent.length; i++) {
        // console.log(arr_data_percent[i]);
        var bg_color = "";


        if (arr_data_percent[i] == 0)
            bg_color = "rgb(136,136,136";
        else if (arr_data_percent[i] >= 1 && arr_data_percent[i] <= 29)
            bg_color = "rgb(217,92,92";
        else if (arr_data_percent[i] >= 30 && arr_data_percent[i] <= 39)
            bg_color = "rgb(239,188,114";
        else if (arr_data_percent[i] >= 40 && arr_data_percent[i] <= 59)
            bg_color = "rgb(230,187,72";
        else if (arr_data_percent[i] >= 60 && arr_data_percent[i] <= 69)
            bg_color = "rgb(221,201,40";
        else if (arr_data_percent[i] >= 70 && arr_data_percent[i] <= 89)
            bg_color = "rgb(180,217,92";
        else if (arr_data_percent[i] >= 90 && arr_data_percent[i] <= 99)
            bg_color = "rgb(102,218,129";
        else if (arr_data_percent[i] == 100)
            bg_color = "rgb(33,186,69";

        arr_data_percent_set_color.push(bg_color + ",0.6)");
        arr_data_percent_set_color2.push(bg_color + ")");
    }

    
$('#append_employee_id').empty();
var total_average = 0;
    for (var i = 0; i < arr_data_employee.length; i++) {
        
        var kpi_th_append = "";
        var kpi_td_append = "";

        var kpi_td_audit_score_append = "";
        var kpi_audit_score=0;

        var total_metric=0;

        Object.keys(obj_employee_kpi_score[arr_data_employee[i]])
            .forEach(function eachKey(key1) {
                if(key1 == 'Audit Score'){
                    var class_style = "";
                    if(obj_employee_kpi_score[arr_data_employee[i]][key1] < 75){
                        class_style = "negative";
                    }else{
                        class_style = "positive";
                    }
                    kpi_audit_score = obj_employee_kpi_score[arr_data_employee[i]][key1];
                    kpi_td_audit_score_append += "<td class='"+class_style+"'>"+obj_employee_kpi_score[arr_data_employee[i]][key1]+"%</td>";

                }else if(key1 == 'Total Metrics'){
                    total_metric = obj_employee_kpi_score[arr_data_employee[i]][key1]
                }else{
                    // console.log(arr_data_employee[i]+" || "+key1+":"+obj_employee_kpi_score[arr_data_employee[i]][key1])
                    kpi_th_append += "<th style='white-space:nowrap;'>"+key1+"</th>";
                    kpi_td_append += "<td style=' '>"+obj_employee_kpi_score[arr_data_employee[i]][key1]+"%</td>";
                }
            });



        $('#append_employee_id').append("<tr><td>" + arr_data_employee[i] +
            "</td><td><a  class='scorecard_popup' href='#'>" + arr_data_percent[i].toFixed(2) + "%</a><div class='ui fluid popup bottom left transition hidden' > <table class='ui celled table' style='text-align: center; width: 100%;font-size: 9.5pt; ' id=''> <thead> <tr> <th style=' '>Name</th> "+kpi_th_append+" <th style='white-space:nowrap;'>Total <i>("+total_metric+"%)</i></th></tr> </thead> <tbody> <tr style='display: none'> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr> <tr style=''> <td  style='white-space:nowrap;'>" + arr_data_employee[i] + "</td>"+kpi_td_append+" "+kpi_td_audit_score_append+"</tr> </tbody> </table> <div class='ui indicating progress active' id='team_score_progress_1' data-percent='"+kpi_audit_score+"'> <div class='bar' style='transition-duration: 300ms; width: "+kpi_audit_score+"%;'> <div class='progress'>"+kpi_audit_score+"%</div> </div> </div> </div></td></tr>")

        total_average += arr_data_percent[i];
          


    }

    var overall_total_avg = total_average / arr_data_employee.length;

    $('#ota_id').empty();
    $('#ota_id').append("<b>" + overall_total_avg.toFixed(2) + "%</b>");
    $('#team_score_progress').progress({
        percent: overall_total_avg
    });

    // $('.ui.button')
    // .popup();

    $('.scorecard_popup')
        .popup({
            inline: true,
            hoverable: true,
            position: 'right center',
            // distanceAway: 250
            // delay: {
            //   show: 300,
            //   hide: 800
            // }
        });



    // console.log(arr_data_percent_set_bgcolor);
    // console.log(arr_data_percent_set_bdcolor);

  
        var data = {
                labels: arr_data_employee,
                datasets: [{
                    data: arr_data_percent,
                    // label: 'Audit Score',
                    backgroundColor: arr_data_percent_set_color,
                    borderColor: arr_data_percent_set_color2,
                    borderWidth: 1,

                }]
            }

        var options =  {
            tooltips: false,
            plugins: {
                datalabels: {
                    align: 'start',
                    anchor: 'end',
                    color: "#FFFF",
                    font: {
                        weight: 'bold'
                    }
                }
            },

            legend: {
                display: false,

            },
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
                        suggestedMin: 0,

                        // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
                        suggestedMax: 100,
                        callback: function(value){return value+ "%"}
                    }
                }]
            },
            title: {
                display: true,
                text: department_title+" Department Performance Indicator for "+selected_month+" "+selected_year
            },
            // plugins: {
            //     datalabels: {
            //         align: 'end',
            //         anchor: 'end',
            //         backgroundColor: "",
            //         borderColor: null,
            //         borderRadius: 4,
            //         borderWidth: 1,
            //         color: function(context) {
            //             var value = context.dataset.data[context.dataIndex];
            //             return value < 1 ? '#888888' : value < 30 ? '#D95C5C' : value < 40 ? '#EFBC72' : value < 60 ? '#E6BB48' : value < 70 ? '#DDC928' : value < 80 ? '#B4D95C' : value < 90 ? '#66DA81' : '#21BA45'

            //         }
            //     }
            // }

        }

        myBarChart  = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });

    
$('#loader_show_hide').hide();
       
}
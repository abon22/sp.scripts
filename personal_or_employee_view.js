function OnScrollDiv(div) {


    if (div.scrollTop > 116) {
        $("#id_div_fixed").addClass("fixdiv");
    } else {
        $("#id_div_fixed").removeClass("fixdiv");
    }

    if (div.scrollTop > 116) {
        $("#fixdiv_filter_id").addClass("fixdiv_filter");
    } else {
        $("#fixdiv_filter_id").removeClass("fixdiv_filter");
    }
}

var metric_temp_action = "";
var kpi_temp_action = "";
var kra_temp_action = "";

var loginName = "";
var userid = _spPageContextInfo.userId;



$(document).ready(function () {

    display_bar_chart([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    metric_temp_action = "add_metric";
    kpi_temp_action = "add_kpi";
    kra_temp_action = "add_kra";


    $('.comment')
        .popup();

    $('.ui.dropdown')
        .dropdown();



    // ReadKRAListItem(92);
    // ReadKPIListItem(92);



    $('#kpi_total_progress_id').progress({
        percent: 0
    });

    $('#personal_kpi_score_progress').progress({
        percent: 0
    });

    $("#s4-workspace").scroll(function () {
        OnScrollDiv(this);
    });

    // load_key_performance_score_storage('litoa');


    $("#refresh_btn").click(function () {
        location.reload();
    });

    $('#filter_year_id').on('change', function () {
        var select_year = $("#filter_year_id").val();
        //////console.log(select_year)
        // ReadYear_Month(select_year)
        populate_month(select_year);
    })


    $('#filter_month_id').on('change', function () {
        var select_year = $("#filter_year_id").val();
        var select_month = $("#filter_month_id").val();

        // //console.log(select_year+" || "+select_month)
        // ReadKeyPerformanceScoreStorage(select_year, select_month)
        // //console.log(loginName +" || "+select_month+" || "+select_year)
        populate_kpi_metrics_table(loginName, select_month, select_year)
    })

    GetCurrentUser();

}); //end document ready



function display_bar_chart(bar_chart_data) {
    //================================================================================
    $('#bar-chart').remove();
    $("#canvas-container").append("<canvas id='bar-chart' width='1400px' height='320px'>")
    var ctx = document.getElementById("bar-chart");


    console.log("----bar_chart_data-----")
    console.log(bar_chart_data)
    console.log("----bar_chart_data-----")
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            data: bar_chart_data,
            label: "Percentage",
            backgroundColor: [
                'rgba(255, 82, 82, 0.5)',
                'rgba(224, 64, 251, 0.5)',
                'rgba(124, 77, 255, 0.5)',
                'rgba(68, 138, 255, 0.5)',
                'rgba(64, 196, 255, 0.5)',
                'rgba(100, 255, 218, 0.5)',
                'rgba(105, 240, 174, 0.5)',
                'rgba(178, 255, 89, 0.5)',
                'rgba(238, 255, 65, 0.5)',
                'rgba(255, 215, 64, 0.5)',
                'rgba(255, 110, 64, 0.5)',
                'rgba(97, 97, 97, 0.5)'
            ],
            borderColor: [
                'rgba(255, 82, 82, 1)',
                'rgba(224, 64, 251, 1)',
                'rgba(124, 77, 255, 1)',
                'rgba(68, 138, 255, 1)',
                'rgba(64, 196, 255, 1)',
                'rgba(100, 255, 218, 1)',
                'rgba(105, 240, 174, 1)',
                'rgba(178, 255, 89, 1)',
                'rgba(238, 255, 65, 1)',
                'rgba(255, 215, 64, 1)',
                'rgba(255, 110, 64, 1)',
                'rgba(97, 97, 97, 1)'
            ],
            borderWidth: 1
        }]
    };

    var options = {
        responsive: true,
        /*plugins: {
            datalabels: {
                align: 'start',
                anchor: 'end',
                color: "black",
                font: {
                    weight: 'bold'
                }
            }
        },*/
        legend: {
            display: false,

        },
        scales: {
            yAxes: [{
                ticks: {
                    // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
                    suggestedMin: 0,

                    // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
                    suggestedMax: 100,
                    callback: function (value) { return value + "%" }
                }
            }]
        },
        title: {
            display: true,
            text: ''
        },
        plugins: {
            datalabels: {
                align: 'end',
                anchor: 'end',
                backgroundColor: "",
                font: {
                    weight: 'bold'
                },
                borderColor: null,
                borderRadius: 4,
                borderWidth: 1,
                color: function (context) {
                    // var value = context.dataset.data[context.dataIndex];
                    // return value < 1 ? '#888888' : value < 30 ? '#D95C5C' : value < 40 ? '#EFBC72' : value < 60 ? '#E6BB48' : value < 70 ? '#DDC928' : value < 80 ? '#B4D95C' : value < 90 ? '#66DA81' : '#21BA45'
                    // return value

                }
            }
        }
    }

    myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });



    //================================================================================
}



function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}



function GetCurrentUser() {
    var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";

    var requestHeaders = { "accept": "application/json;odata=verbose" };

    $.ajax({
        url: requestUri,
        contentType: "application/json;odata=verbose",
        headers: requestHeaders,
        success: function (data, request) {
            var temp_loginName = data.d.LoginName;
            loginName = temp_loginName.substring(temp_loginName.indexOf("|") + 10);
            // console.log(data);

            load_key_performance_score_storage(loginName);

        },
        error: function (error) {
            alert(error);
        }
    });
}






var load_key_performance_score_storage_res = "";
var datares_employee_profile = "";
var arr_month_text = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function load_key_performance_score_storage(employee_username) {

    $('#loader_show_hide').show();
    $('#loader').fadeIn(500);
    //employee profile
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Performance Score Storage')/items?$select=ID, Employee/LI_EmployeeID, Employee/LI_Username ,Employee/LI_FirstName, Employee/LI_LastName, Employee/LI_Department, Employee/LI_PositionTitle, Employee/ID, Employee/Title, Position_x0020_Title/ID, Position_x0020_Title/Title, Department/ID, Department/Title, KPI_x0020_Title/Title, KPI_x0020_Title/ID, Score, Comments, Year, Month, Date, Locked, Remarks &$expand=Employee ,KPI_x0020_Title ,Position_x0020_Title ,Department &$filter=Employee/LI_Username eq '" + employee_username + "' ",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            load_key_performance_score_storage_res = data.d.results;

            //console.log("---load_key_performance_score_storage_res---")
            //console.log(load_key_performance_score_storage_res)
            //console.log("---load_key_performance_score_storage_res---")

            var currentTime = new Date()
            var current_year = currentTime.getFullYear();
            var current_month = currentTime.getMonth();

            populate_year(employee_username, current_year)

            $.ajax({
                url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Employee%20Profile')/items?$select=ID, LI_Username, LI_EmployeeID, LI_FirstName, LI_LastName, LI_PositionTitle &$orderby=LI_FirstName asc &$filter=LI_Username eq '" + employee_username + "' &$top=1",
                method: "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                success: function (data) {
                    datares_employee_profile = data.d.results;
                    //console.log("----------datares_employee_profile----------");
                    //console.log(datares_employee_profile)
                    //console.log("----------datares_employee_profile----------");



                    $('#loader_show_hide').hide();
                    $('#loader').fadeOut(500);

                },
                error: function (error) {
                    alert(JSON.stringify(error));
                }
            });
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}

function populate_kpi_metrics_table(employee_username, month, year) {
    var temp_position_id = 0;
    var temp_employee_id = 0;
    var arr_barchart_data = [];
    var jan = 0,
        feb = 0,
        mar = 0,
        apr = 0,
        may = 0,
        jun = 0,
        jul = 0,
        aug = 0,
        sep = 0,
        oct = 0,
        nov = 0,
        dec = 0;

    console.log(load_key_performance_score_storage_res);
    for (var a = 0; a < load_key_performance_score_storage_res.length; a++) {

        if (load_key_performance_score_storage_res[a].Employee.LI_Username == employee_username) {
            // //console.log(load_key_performance_score_storage_res[a].Position_x0020_Title.ID);
            temp_position_id = load_key_performance_score_storage_res[a].Position_x0020_Title.ID;
            temp_employee_id = load_key_performance_score_storage_res[a].Employee.LI_EmployeeID;
            // console.log(load_key_performance_score_storage_res);

            if (load_key_performance_score_storage_res[a].Year == year) {
                console.log(load_key_performance_score_storage_res[a].ID)

                if (load_key_performance_score_storage_res[a].Month == 'January') {
                    jan += Number(load_key_performance_score_storage_res[a].Score);
                } else if (load_key_performance_score_storage_res[a].Month == 'February') {
                    feb += Number(load_key_performance_score_storage_res[a].Score);
                } else if (load_key_performance_score_storage_res[a].Month == 'March') {
                    mar += Number(load_key_performance_score_storage_res[a].Score);
                } else if (load_key_performance_score_storage_res[a].Month == 'April') {
                    apr += Number(load_key_performance_score_storage_res[a].Score);
                } else if (load_key_performance_score_storage_res[a].Month == 'May') {
                    may += Number(load_key_performance_score_storage_res[a].Score);
                } else if (load_key_performance_score_storage_res[a].Month == 'June') {
                    jun += Number(load_key_performance_score_storage_res[a].Score);
                } else if (load_key_performance_score_storage_res[a].Month == 'July') {
                    jul += Number(load_key_performance_score_storage_res[a].Score);
                } else if (load_key_performance_score_storage_res[a].Month == 'August') {
                    aug += Number(load_key_performance_score_storage_res[a].Score);
                } else if (load_key_performance_score_storage_res[a].Month == 'September') {
                    sep += Number(load_key_performance_score_storage_res[a].Score);
                } else if (load_key_performance_score_storage_res[a].Month == 'October') {
                    oct += Number(load_key_performance_score_storage_res[a].Score);
                } else if (load_key_performance_score_storage_res[a].Month == 'November') {
                    nov += Number(load_key_performance_score_storage_res[a].Score);
                } else if (load_key_performance_score_storage_res[a].Month == 'December') {
                    dec += Number(load_key_performance_score_storage_res[a].Score);
                }
            }
        }

        if (load_key_performance_score_storage_res.length - 1 === a) {
            // //console.log("end")
            //ReadKRAListItem(temp_position_id);
            // ReadKPIListItem(temp_position_id);
            arr_barchart_data = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
            // console.log(arr_barchart_data);
            display_bar_chart(arr_barchart_data)

            DisplayKeyPerformanceIndicatorInfo(temp_position_id, temp_employee_id, month, year)
        }
    }


}

function populate_year(employee_username, selected_year) {

    $('#append_year_id').empty();
    $('#text_year_id').html("")
    $('#filter_year_id').val("")

    ////console.log(load_key_performance_score_storage_res);
    var arr_year = [];
    var unique_arr_year = []
    for (var a = 0; a < load_key_performance_score_storage_res.length; a++) {
        if (load_key_performance_score_storage_res[a].Employee.LI_Username == employee_username) {
            // //console.log(employee_username)
            arr_year.push(load_key_performance_score_storage_res[a].Year)
        } //end if
    } //end for loop
    unique_arr_year = arr_year.filter(onlyUnique)

    var year_list = "";

    if (selected_year) {

        $('#text_year_id').html(selected_year)
        $('#filter_year_id').val(selected_year).change()
        $('#append_year_id').append("<div class='item active selected' data-value='" + selected_year + "'>" + selected_year + "</div>");

    } else {
        $('#text_year_id').html("Select Year")
    }


    for (var a = 0; a < unique_arr_year.length; a++) {
        if (selected_year != unique_arr_year[a])
            year_list += "<div class='item' data-value='" + unique_arr_year[a] + "'>" + unique_arr_year[a] + "</div>";
    }
    $('#append_year_id').append(year_list);





}

function populate_month(selected_year) {
    var currentTime = new Date()
    var current_month = currentTime.getMonth();
    var string_month = arr_month_text[current_month];

    ////console.log(string_month);

    $('#append_month_id').empty();
    $('#text_month_id').html("")
    $('#filter_month_id').val("")

    var arr_month = [];

    for (var a = 0; a < load_key_performance_score_storage_res.length; a++) {
        // arr_year.push(datares_key_performance_score_storage[a].Year)

        if (selected_year == load_key_performance_score_storage_res[a].Year) {
            arr_month.push(load_key_performance_score_storage_res[a].Month);
        }
    }
    temp_month_arr = arr_month.filter(onlyUnique)


    // temp_year_arr = arr_year.filter(onlyUnique)
    // ////console.log(temp_year_arr);

    //console.log(temp_month_arr);
    var month_list = "";
    $('#text_month_id').html("Select Month")
    var match_month;
    for (var a = 0; a < temp_month_arr.length; a++) {


        if (temp_month_arr[a] == string_month) {
            month_list += "<div class='item active selected' data-value='" + temp_month_arr[a] + "'>" + temp_month_arr[a] + "</div>";
            match_month = temp_month_arr[a];
        } else {
            month_list += "<div class='item ' data-value='" + temp_month_arr[a] + "'>" + temp_month_arr[a] + "</div>";
        }

    }

    $('#append_month_id').append(month_list);
    ////console.log("match_month: " + match_month)
    if (match_month) {
        //console.log("match")
        $('#text_month_id').html(match_month)
        $('#filter_month_id').val(string_month).change()
    } else {
        $('#text_month_id').html(string_month)
    }

    console.log("in")

    populate_kpi_metrics_table(loginName, string_month, selected_year);


}

var datares_kpi;


function DisplayKeyPerformanceIndicatorInfo(position_id, employee_id_no, month, year) {

    $('#loader_show_hide').show();
    $('#loader').fadeIn(500);


    /*$.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Employee%20Profile')/items?$select=ID, LI_EmployeeID, LI_FirstName, LI_LastName, LI_PositionTitle &$orderby=LI_FirstName asc &$filter=LI_EmployeeID eq '" + employee_id_no + "' &$top=1",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function(data) {
            datares_employee_profile = data.d.results;
            //console.log("----------datares_employee_profile----------");
            //console.log(datares_employee_profile)
            //console.log("----------datares_employee_profile----------");*/

    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Performance Indicator')/items?$select=Title, ID, Department/Title, Position_x0020_Title/Title, Position_x0020_Title/ID, Key_x0020_Result_x0020_Area/Title, Key_x0020_Result_x0020_Area/ID, Minimum_x0020_Score, Maximum_x0020_Score&$expand=Department&$expand=Position_x0020_Title&$expand=Key_x0020_Result_x0020_Area&$OrderBy=Key_x0020_Result_x0020_Area/Title&$filter=Position_x0020_Title/ID eq '" + position_id + "' &$OrderBy=Title desc",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {

            datares_kpi = data.d.results;
            //console.log("----------datares_kpi----------");
            //console.log(datares_kpi);
            //console.log("----------datares_kpi----------");


            var emp_id = employee_id_no;
            //console.log("-------" + emp_id + " || " + position_id + " || " + month + " || " + year + "-------")

            $.ajax({
                url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Performance Score Storage')/items?$select=Employee/LI_EmployeeID,Employee/LI_FirstName, Employee/LI_LastName, Employee/LI_Department, Employee/LI_PositionTitle, Employee/ID, Employee/Title, Position_x0020_Title/ID, Position_x0020_Title/Title, Department/ID, Department/Title, KPI_x0020_Title/Title, KPI_x0020_Title/ID, Score, Comments, Year, Month, Date, Locked, Remarks &$expand=Employee ,KPI_x0020_Title ,Position_x0020_Title ,Department  &$filter= (Position_x0020_Title/ID eq '" + position_id + "') and (Employee/LI_EmployeeID eq '" + emp_id + "' )  and (Month eq '" + month + "' ) and (Year eq '" + year + "' )",

                method: "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                success: function (data) {
                    datares_key_performance_score_storage = data.d.results;

                    //console.log("----------datares_key_performance_score_storage----------");
                    //console.log(datares_key_performance_score_storage)
                    //console.log("----------datares_key_performance_score_storage----------");

                    $("#emp_thead_id").html('');
                    $("#emp_tbody_id").html('');



                    if (datares_key_performance_score_storage.length > 0) {
                        //////console.log(datares_key_performance_score_storage)

                        var th_element = "";
                        var td_element = "";
                        var total_score = 0;

                        // $("#table_kpi").find("tr:gt(0)").remove();
                        var emp_name;

                        for (var a = 0; a < datares_kpi.length; a++) {
                            var kra_title = datares_kpi[a].Key_x0020_Result_x0020_Area.Title;
                            var kpi_title = datares_kpi[a].Title;
                            var kpi_id = datares_kpi[a].ID;

                            th_element += "<th>" + kpi_title + "</th>"

                            for (var b = 0; b < datares_key_performance_score_storage.length; b++) {
                                var emp_fname = datares_key_performance_score_storage[b].Employee.LI_FirstName
                                var emp_lname = datares_key_performance_score_storage[b].Employee.LI_LastName
                                emp_name = emp_fname + " " + emp_lname

                                // 
                                //console.log(kpi_id + " : " + datares_key_performance_score_storage[b].KPI_x0020_Title.ID)
                                if (kpi_id == datares_key_performance_score_storage[b].KPI_x0020_Title.ID) {
                                    //console.log("KPI ID: " + kpi_id + " || Score: " + datares_key_performance_score_storage[b].Score)
                                    td_element += "<td>" + datares_key_performance_score_storage[b].Score + "%</td>"

                                    total_score += datares_key_performance_score_storage[b].Score
                                }


                                // else{
                                //     td_element += "<td>-0%</td>"
                                // }


                            }


                        }
                        //////console.log(td_element);
                        $("#emp_thead_id").html("<th>Name</th>" + th_element + "<th>Total</th><th>Month</th>")
                        $("#emp_tbody_id").html("<td>" + emp_name + "</td>" + td_element + "<td>" + total_score + "%</td><td>" + month + "</td>")
                        $('#personal_kpi_score_progress').progress({
                            percent: total_score
                        });
                        DisplayMetricsInfo();

                    } else {

                        for (var a = 0; a < datares_kpi.length; a++) {
                            var kra_title = datares_kpi[a].Key_x0020_Result_x0020_Area.Title;
                            var kpi_title = datares_kpi[a].Title;
                            var kpi_id = datares_kpi[a].ID;

                            th_element += "<th>" + kpi_title + "</th>"
                            td_element += "<td>0%</td>"

                        }

                        $("#emp_thead_id").html("<th>Name</th>" + th_element + "<th>Total</th><th>Month</th>")
                        $("#emp_tbody_id").html("<td>" + datares_employee_profile[0].LI_FirstName + " " + datares_employee_profile[0].LI_LastName + "</td>" + td_element + "<td>0%</td><td>" + month + "</td>")
                        $('#personal_kpi_score_progress').progress({
                            percent: 0
                        });
                        DisplayMetricsInfo();
                    }


                    $('#loader_show_hide').hide();
                    $('#loader').fadeOut(500);


                },
                error: function (error) {
                    alert(JSON.stringify(error));
                }
            });
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });

    /*},
        error: function(error) {
            alert(JSON.stringify(error));
        }
    });*/


}



var metrics_score_temp = 0;
var kpi_score_total_temp = 0;

function DisplayMetricsInfo() {

    var kpi_select_dept_val = $("#filter_department_id").val();
    var kpi_select_pos_val = $("#filter_position_id").val();


    var datares_metrics;
    metrics_score_temp = 0;
    kpi_score_total_temp = 0;
    //////////console.log("-------------DROPDOWN START-------------")

    /*  $('#kpi_total_progress_id').progress({
                   percent: kpi_score_total_temp
               });*/
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Metrics')/items?$select=Title, ID, Key_x0020_Performance_x0020_Indi/Title,Key_x0020_Performance_x0020_Indi/ID, Score, Remarks&$expand=Key_x0020_Performance_x0020_Indi&$OrderBy=Score",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            datares_metrics = data.d.results;
            //////////console.log("----------datares_metrics----------");
            //////////console.log(datares_metrics);

            $("#table_kpi").find("tr:gt(0)").remove();
            var count_total_kpi = 0;
            // var metric_score = 0;
            kpi_score_total_temp = 0;
            for (var a = 0; a < datares_kpi.length; a++) {
                var kra_title = datares_kpi[a].Key_x0020_Result_x0020_Area.Title;
                var kra_id = datares_kpi[a].Key_x0020_Result_x0020_Area.ID;
                var kpi_title = datares_kpi[a].Title;
                var kpi_id = datares_kpi[a].ID;


                count_total_kpi++;
                ////////////console.log(datares[a].Title+" ID: "+datares[a].ID);   

                var metrics_append = "";

                var metric_score = 0;

                for (var b = 0; b < datares_metrics.length; b++) {
                    ////////////console.log("datares_kpi["+a+"].ID: "+datares_kpi[a].ID);
                    if (datares_kpi[a].ID == datares_metrics[b].Key_x0020_Performance_x0020_Indi.ID) {

                        var metric_id = datares_metrics[b].ID;
                        var metric_title = datares_metrics[b].Title;
                        metric_score = datares_metrics[b].Score;
                        var metric_remarks = datares_metrics[b].Remarks;

                        metrics_append += "<tr><td>" + metric_title + "</td><td>" + metric_score + "%</td><td>" + metric_remarks + "</td></tr>";

                    }



                }

                kpi_score_total_temp += metric_score;


                $('#table_kpi').append("<tr><td id='krakey-" + kra_id + "' data-id='key" + kra_id + "'> <div class='' id='kra_title_" + kra_id + "' style='' >" + kra_title + "</div></td><td><div class='' id='count_kra-" + kra_id + "'  style=''  >" + kpi_title + "</div></td><td>Sharepoint/Requestor/TQM</td><td style='padding: 0px;'>" +
                    "<table class='ui very basic collapsing striped celled table' style='text-align: center; '> <thead> <tr><th width='75%' style='background: #FFFF00!important;' id='th_kpi_title_" + kpi_id + "' >" + kpi_title + "</th> <th style='background: #FFFF00!important;'>Score(%)</th> <th width='25%' style='background: #FFFF00!important;'>Remarks</th></tr></thead><tbody id='tbody-" + kpi_id + "'>" +
                    metrics_append +
                    " </tbody></table>" +
                    "</td></tr>");


            } //end for loop


            $.ajax({
                url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Result Area')/items?$select=Title, ID,  Position_x0020_Title/Title, Position_x0020_Title/ID&$expand=Position_x0020_Title&$OrderBy=Title&$filter=Position_x0020_Title/ID eq '" + kpi_select_pos_val + "' ",

                method: "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                success: function (data) {
                    var datares = data.d.results;
                    //////////////console.log(datares)
                    // $('#kpi_select_pos').dropdown('clear')

                    for (var a = 0; a < datares.length; a++) {
                        //////////////console.log(datares[a].Title+" ID: "+datares[a].ID);
                        //$('#kpi_select_kra').append('<option value="' + datares[a].ID + '">' + datares[a].Title + '</option>');
                        //krakey-12
                        if (!$("#krakey-" + datares[a].ID + " ").length) {
                            //////////console.log("Not Exist")
                            $('#table_kpi').append("<tr><td><div class='ui large label'>" + datares[a].Title + " <i class='delete icon' onClick='delete_kra_onClick(" + datares[a].ID + ")'></i></div></td><td></td><td></td><td></td></tr>");
                        }
                        //$('#table_kpi').append("<tr><td>KRA Here</td><td></td><td></td><td></td></tr>");

                    }
                },
                error: function (error) {
                    alert(JSON.stringify(error));
                }
            });


            if (kpi_score_total_temp == 0) {
                $('#kpi_total_progress_id').removeClass('success');
            }

            $('#kpi_total_progress_id').progress({
                percent: kpi_score_total_temp
            });

            // ////////console.log("kpi_score_total_temp: "+kpi_score_total_temp);

            $('#kpi_count_label_id').html("Total KPI: " + count_total_kpi);

            //alert(kpi_score_total_temp);


            mergerKey();


        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}


//merge cells in key column
function mergerKey() {

    // prevents the same attribute is used more than once Ip
    var idA = [];

    // finds all cells id column Key
    $('td[data-id^="key"]').each(function () {

        var id = $(this).attr('data-id');

        // prevents the same attribute is used more than once IIp
        if ($.inArray(id, idA) == -1) {
            idA.push(id);

            // finds all cells that have the same data-id attribute
            var $td = $('td[data-id="' + id + '"]');

            //counts the number of cells with the same data-id
            var count = $td.size();
            if (count > 1) {

                //If there is more than one
                //then merging                                
                $td.not(":eq(0)").remove();
                $td.attr('rowspan', count);
            }
        }
    })
}
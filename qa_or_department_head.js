var KPIglobal;
var KPSSglobal;
var EPglobal;
var performance_action_click = "";

var idDeparment;

$(function () {

  Search();
  ReadDepartment();
  $('.ui.dropdown').dropdown();
  $('.ui.selection.dropdown').dropdown();
  FilterDepartment();


  $('#currentMonth').html(string_month);
  $('#currentYear').html(current_year);


  $('#cancel_btn_performance').on('click', function (e) {

    $('.ui.modal').modal('hide');

  });



  $('#filter_position_id').on('change', function (e) {

    var kpi_select_dept_val = $("#filter_department_id").val();
    var kpi_select_pos_val = $("#filter_position_id").val();

    var select_year = $("#currentYear").text();
    var select_month = $("#currentMonth").text();

    getKPI(kpi_select_pos_val, kpi_select_dept_val, select_month, select_year);

  });



  $('#filter_year_id').on('change', function (e) {

    var select_year = $("#filter_year_id").val();

    var select_month = $("#currentMonth").text();
    var kpi_select_dept_val = $("#filter_department_id").val();
    var kpi_select_pos_val = $("#filter_position_id").val();

    getKPI(kpi_select_pos_val, kpi_select_dept_val, select_month, select_year);
  });



  $('#filter_month_id').on('change', function (e) {

    var select_year = $("#currentYear").text();
    var select_month = $("#filter_month_id").val();
    var kpi_select_dept_val = $("#filter_department_id").val();
    var kpi_select_pos_val = $("#filter_position_id").val();

    getKPI(kpi_select_pos_val, kpi_select_dept_val, select_month, select_year);
  });



  $('#save_btn_performance').on('click', function (e) {

    if (performance_action_click == "Add") {

      AddDataToEmployeePerformanceStorage();

    } else if (performance_action_click == "Edit") {
      console.log("SAVE");
    }

  });


});

var arr_kpi_id = [];
var obj_employee_info = {};

function Search() {

  $("#search-input").on("keyup", function () {
    var value = $(this).val();

    $("#employee_table tr").each(function (index) {
      if (index !== 0) {

        $row = $(this);

        var id = $row.find("td:first").text();

        if (id.indexOf(value) !== 0) {
          $row.hide();
        } else {
          $row.show();
        }
      }
    });
  });
}


function ShowEmployeeProfile(emp_id, btn_action) {

  if (btn_action == "Add" && performance_action_click == "Add") {
    $("#save_btn_performance").html("Add")
    // //console.log(btn_action)
  } else if (btn_action == "Edit" && performance_action_click == "Edit") {
    $("#save_btn_performance").html = ("Save")
    // //console.log(btn_action)
  }

  $('#employee_total_performance_id').progress({
    percent: 0
  });

  var pos_title = "";
  var dept_title = "";
  var total_performance = 0;
  $.ajax({
    url: `${_spPageContextInfo.webAbsoluteUrl}/_api/Web/Lists/getbytitle('Employee%20Profile')/items?$select=LI_Username, LI_EmployeeID, LI_FirstName, LI_LastName, LI_PositionTitle, LI_Department&$orderby=LI_FirstName asc&$filter=Id eq '${emp_id}'&$top=1`,
    method: "GET",
    headers: {
      "Accept": "application/json; odata=verbose"
    },
    success: function (data) {
      var emp_data_res = data.d.results;
      var emp_username, emp_id_no = "";
      $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Metrics')/items?$select=Title, ID, Key_x0020_Performance_x0020_Indi/Title,Key_x0020_Performance_x0020_Indi/ID, Score, Remarks&$expand=Key_x0020_Performance_x0020_Indi&$OrderBy=Score",
        method: "GET",
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        success: function (data) {
          var metrics_data_res = data.d.results;
          $("#KPIdata").empty();

          var arr_score_per_kpi = [];
          $.each(emp_data_res, function (index, emp_value) {
            $('input[id=name]').val(emp_value.LI_FirstName + " " + emp_value.LI_LastName);
            $('input[id=position_title]').val(emp_value.LI_PositionTitle);
            emp_username = emp_value.LI_Username;
            emp_id_no = emp_value.LI_EmployeeID;
            pos_title = emp_value.LI_PositionTitle;
            dept_title = emp_value.LI_Department;
            // //console.log(KPIglobal);
            //console.log(`emp_username: ${emp_username} || emp_id_no: ${emp_id_no}`);
            //console.log("---KPIglobal---")
            //console.log(KPIglobal)
            //console.log("---KPIglobal---")
            // KPSSglobal = data.d.results;

            // var tr_element = "";
            // var performance_review_html=""

            // obj_to_be_added['__metadata'] = { type: 'SP.Data.Key%20Performance%20Score%20StorageListItem' };
            // obj_to_be_added['Employee'] = emp_id_no;
            // obj_to_be_added['Position_x0020_Title'] = "pos_id";//pos_id
            // obj_to_be_added['Department'] = "dept_id";//dept_id

            obj_employee_info = {
              "__metadata": {
                type: 'SP.Data.Key%20Performance%20Score%20StorageListItem'
              },
              "Employee": emp_id_no,
              "Position_x0020_Title": "pos_id",
              "Department": "dept_id",

            }

            // obj_to_be_added['KPI_x0020_Title'] = emp_id_no;
            // obj_to_be_added['Score'] = emp_id_no;
            // obj_to_be_added['Comments'] = emp_id_no;
            // obj_to_be_added['Year'] = emp_id_no;
            // obj_to_be_added['Month'] = emp_id_no;
            // obj_to_be_added['Date'] = emp_id_no;
            // obj_to_be_added['Remarks'] = emp_id_no;
            // arr_item_tobe_added.push(obj_to_be_added);

            var arr_data_total_performance_score = [];


            $.each(KPIglobal, function (kpi_index, kpi_value) {
              var select_score = '';
              // console.log(`kpi_id : ${kpi_value.ID}`);
              console.log(kpi_value);
              arr_kpi_id.push(kpi_value.ID);
              arr_data_total_performance_score.push(`#kpi_remarks_id_${kpi_value.Id}`);

              var tr_element = `<td style='white-space:normal;' id='${kpi_value.Id}' class='${kpi_value.Id}'> ${kpi_value.Title} </td> <td style='white-space:normal;'>Department Head/TQM</td>`;

              if (metrics_data_res.length > 0) {
                var td_remarks = "";
                var td_remarks_options = "";
                var td_element_score = "";
                var td_element_comments = "";


                $.each(metrics_data_res, function (metrics_index, metrics_value) {

                  // //console.log(`kpi_title: ${kpss_value.KPI_x0020_Title.Title}`);
                  // td_remarks_options = "";
                  var td_score;
                  var td_comments;
                  if (kpi_value.ID == metrics_value.Key_x0020_Performance_x0020_Indi.ID) {
                    // //console.log(`Match : ${kpss_value.KPI_x0020_Title.Id} == ${metrics_value.Key_x0020_Performance_x0020_Indi.ID}`)
                    td_remarks_options += `<div class="item" data-value="${metrics_value.Score}">${metrics_value.Remarks}</div>`;
                    // //console.log(`metrics title: ${metrics_value.Title} metric id: ${metrics_value.ID}`);

                    td_element_score = `<input type='text' id='kpi_kpss_score_id_${kpi_value.ID}' value='' style='width: 60px;' readonly>`

                    td_element_comments = `<textarea rows='1' id='kpi_kpss_comments_id_${kpi_value.ID}'></textarea></td>`


                  }

                })



                $.each(KPSSglobal, function (kpss_index, kpss_value) {
                  if (kpss_value.Employee.LI_EmployeeID == emp_id_no) {

                    if (kpi_value.ID == kpss_value.KPI_x0020_Title.Id) {
                      select_score = kpss_value.Score;
                      var obj_kpi_score = {};
                      obj_kpi_score[`kpi_id_${kpi_value.ID}`] = `${kpss_value.Score}`;

                      td_element_score = `<input type='text' id='kpi_kpss_score_id_${kpi_value.ID}' value='${kpss_value.Score}' style='width: 60px;' readonly>`
                      td_element_comments = `<textarea rows='1' id='kpss_comments-${kpss_value.ID}'>${((kpss_value.Comments != null) ? kpss_value.Comments : '')}</textarea></td>`
                      // kpi_remarks_id_54
                      arr_score_per_kpi.push(obj_kpi_score)








                    }
                  }

                });


                td_remarks = `<input type="hidden" name="score" id="kpi_remarks_id_${kpi_value.Id}">
                                <i class="dropdown icon"></i>
                                <div class="default text">Select</div>
                                <div class="menu">
                                ${td_remarks_options}
                                </div> `





                tr_element += `<td> <div class="ui form"><div class="ui selection dropdown">${td_remarks}</div></div> </td>
                                <td> <div class='ui input'>${td_element_score} </div></td>
                                <td><div class='ui form'><div class='field'> ${td_element_comments} </div></div></td>`;

              } else {
                //console.log("There are no Metrics for this KPI.")
              }


              $("#KPIdata").append(`<tr> ${tr_element} </tr>`);






              $(`#kpi_remarks_id_${kpi_value.Id}`).on('change', function () {
                total_performance = 0;
                $(`#kpi_kpss_score_id_${kpi_value.Id}`).val(this.value);
                for (i = 0; i < arr_data_total_performance_score.length; i++)
                  total_performance += Number($(arr_data_total_performance_score[i]).val());
                $('#employee_total_performance_id').progress({
                  percent: total_performance
                });

              });

              $(`#kpi_remarks_id_${kpi_value.Id}`).val(select_score).change();
              // $(`#kpi_remarks_id_${kpi_value.Id}`).val(10).change();

              $('.ui.selection.dropdown').dropdown();


            }); //second each





          }); // first each

          //console.log(arr_score_per_kpi);



          $('.ui.modal').modal('show');



        },
        error: function (error) {
          //console.log(JSON.stringify(error));
        }
      });


    },

    error: function (error) {
      //console.log(JSON.stringify(error));
    }
  });
}

function ReadDepartment() {

  $.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Department')/items?$select=Title, ID&$OrderBy=Title",
    method: "GET",
    headers: {
      "Accept": "application/json; odata=verbose"
    },
    success: function (data) {

      var datares = data.d.results;
      var departmen_list = "";

      $('#append_dept_id').append('');

      $('#append_dept_id').dropdown('clear')
      $('#append_dept_id').empty();

      for (var a = 0; a < datares.length; a++) {

        $('#kpi_select_dept').append('<option value="' + datares[a].ID + '">' + datares[a].Title + '</option>');
        departmen_list += "<div class='item' data-value='" + datares[a].Title + "'>" + datares[a].Title + "</div>";
      }

      $('#append_dept_id').append(departmen_list);

    },
    error: function (error) {
      alert(JSON.stringify(error));
    }
  });
}

function FilterDepartment() {

  $('#filter_department_id').on('change', function (e) {
    // ReadPosition(this.value) _x003a_ID

    idDeparment = this.value;

    $.ajax({
      url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Position')/items?$select=Title,ID,DepartmentId&$OrderBy=Title&$filter=Department_x003a_Department eq '" + idDeparment + "' ",
      method: "GET",
      headers: {
        "Accept": "application/json; odata=verbose"
      },
      success: function (data) {

        var datares = data.d.results;
        var position_list = "";

        $('#append_pos_id').empty();
        $('#text_pos_id').html('Select Position');

        $('#filter_position_id').val('')
        for (var a = 0; a < datares.length; a++) {

          position_list += "<div class='item' data-value='" + datares[a].Title + "'>" + datares[a].Title + "</div>";
        }

        $('#append_pos_id').append(position_list);

      },
      error: function (error) {
        alert(JSON.stringify(error));
      }
    });
  })
}


function getKPI(postTitle, deptTitle, select_month, select_year) {


  // $('#currentMonth').empty();

  console.log(postTitle + " -- " + deptTitle + " -- " + select_month + " -- " + select_year);




  var tr_element = "";
  performance_action_click = "";


  $('#listMonth').empty();
  $('#listYear').empty();

  populate_year(postTitle, select_year, select_month);

  $('#employee_table').empty();
  $('#listEmployee').empty();


  // populate_month(select_year);

  $.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Performance Indicator')/items?$select=Title, ID, Archived, Department/Title, Position_x0020_Title/Title, Position_x0020_Title/ID, Key_x0020_Result_x0020_Area/Title, Key_x0020_Result_x0020_Area/ID, Minimum_x0020_Score, Maximum_x0020_Score&$expand=Department, Position_x0020_Title, Key_x0020_Result_x0020_Area&$OrderBy=Key_x0020_Result_x0020_Area/Title&$filter=(Position_x0020_Title/Title eq '" + postTitle + "') and (Department/Title eq '" + deptTitle + "') and (Archived eq '0') &$OrderBy=ID asc",
    method: "GET",
    headers: {
      "Accept": "application/json; odata=verbose"
    },
    success: function (data) {

      $('#alert').hide();


      KPIglobal = data.d.results;


      DisplayMetricsInfo();


      if (KPIglobal.length > 0) {

        // (Month eq 'October') and(Year eq '2018') and

        $.ajax({
          url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Key Performance Score Storage')/items?$select=Comments, ID, Score, Year, Month, Comments, Remarks, Locked, Date, KPI_x0020_Title/Title,Employee/LI_EmployeeID, KPI_x0020_Title/Id, Position_x0020_Title/Title,Department/Title &$expand=KPI_x0020_Title,Employee, Position_x0020_Title, Department&$filter=(Month eq '" + select_month + "') and(Year eq '" + select_year + "') and(Position_x0020_Title/Title eq '" + postTitle + "') and (Department/Title eq '" + deptTitle + "') &$OrderBy=KPI_x0020_Title/ID asc",
          method: "GET",
          headers: {
            "Accept": "application/json; odata=verbose"
          },
          success: function (data) {



            KPSSglobal = data.d.results;




            $.ajax({
              url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Employee%20Profile')/items?$select=LI_FirstName,LI_LastName,LI_PositionTitle,LI_Department,LI_Separated,Id,LI_EmployeeID&$orderby=LI_FirstName asc &$filter= (LI_PositionTitle eq '" + postTitle + "' ) and (LI_Department eq '" + deptTitle + "') and (LI_Separated eq 'Active')",
              method: "GET",
              headers: {
                "Accept": "application/json; odata=verbose"
              },
              success: function (data) {


                EPglobal = data.d.results;


                if (KPSSglobal.length > 0) {

                  if (EPglobal.length > 0) {

                    $.each(EPglobal, function (index, value3) {

                      var td_score = 0;
                      var td_element = "";
                      var th_element = "";
                      var edit = '"Edit"';

                      $.each(KPSSglobal, function (index, value2) {

                        $.each(KPIglobal, function (index, value) {

                          var KPI_Id = value.Id;


                          if (KPI_Id == value2.KPI_x0020_Title.Id && value3.LI_EmployeeID == value2.Employee.LI_EmployeeID) {
                            td_element += "<td id='" + value2.ID + "'>" + value2.Score + "</td>"
                            th_element += "<th  id='" + value.Id + "'>" + value.Title + "</th>";
                            td_score += value2.Score;

                          }

                        }); //foreach dataGlobale

                        $('.table-scroll').show();
                        $('#employee_table').html("<th >Employee name</th>" + th_element + "<th >Total</th><th>Action</th>")

                      }) //foreach data

                      tr_element += "<tr><td>" + value3.LI_FirstName + " " + value3.LI_LastName + "</td>" + td_element + "</tr>"
                      performance_action_click = "Edit";
                      $('#listEmployee').append("<tr><td>" + value3.LI_FirstName + " " + value3.LI_LastName + "</td>" + td_element + "<td >" + td_score + "</td>" + "<td><a href='#' onclick='ShowEmployeeProfile(" + value3.Id + "," + edit + ")'>View/Edit</a></td>" + "</tr>")

                    }); //foreach data2  

                  } else {
                    //console.log("EPglobal F-State");
                    $('.table-scroll').hide();
                    $('#alert').html("<p><strong>Oops! </strong>There is no available <b>Employee</b> in this position.</p>")
                    $('#alert').show();
                  }



                } else {

                  var td_element = "";
                  var th_element = "";


                  for (let i = 0; i < KPIglobal.length; i++) {
                    th_element += "<th  id='" + KPIglobal[i].ID + "'>" + KPIglobal[i].Title + "</th>";
                    td_element += "<td>0</td>";

                  }


                  if (EPglobal.length > 0) {
                    //console.log("EPglobal T-State");
                    var add = '"Add"';
                    performance_action_click = "Add";

                    for (let i = 0; i < EPglobal.length; i++) {
                      $('#listEmployee').append("<tr><td>" + EPglobal[i].LI_FirstName + " " + EPglobal[i].LI_LastName + "</td>" + td_element + "<td >0</td>" + "<td><a href='#' onclick='ShowEmployeeProfile(" + EPglobal[i].Id + ", " + add + ")'>View/Add</a></td>" + "</tr>")
                    }

                    $('.table-scroll').show();
                    $('#employee_table').html("<th >Employee name</th>" + th_element + "<th>Average</th><th>Action</th>");

                  } else {
                    //console.log("EPglobal F-State");
                    $('.table-scroll').hide();
                    $('#alert').html("<p><strong>Oops! </strong>There is no available <b>Employee</b> in this position.</p>")
                    $('#alert').show();
                  }

                }

              }, //3rd ajax success
              error: function (error) {
                //console.log(JSON.stringify(error));
              }
            }); //3rd ajax


          }, //2nd ajax success
          error: function (error) {
            //console.log(JSON.stringify(error));
          }
        }); //2nd ajax 


      } else {
        //console.log("KPIglobal F-State")
        $('.table-scroll').hide();
        $('#alert').html("<p><strong>Oops! </strong>There is no available <b>KPI</b> in this position.</p>")
        $('#alert').show();
      }



    }, //1st ajax success
    error: function (error) {
      //console.log(JSON.stringify(error));
    }
  }); //1st ajax

} //function


function storeKPI(kpi_id) {

  // //console.log($('#KPIdata').find('#'+kpi_id).text());//text  
  var kpi_titles = $('#KPIdata').find('#' + kpi_id).text();
  // var data_sources = $('#data_source').val();
  var remarkss = $('#remarks').val();
  var scores = $('#score').val();
  var commentss = $('#comments').val();
}

function passKPI() {
  //console.log("Yes Pass")
  var commentss = $('#comments').val();
  var item = {
    "__metadata": {
      "type": "SP.Data.Key%20Performance%20Score%20StorageListItem"
    },
    // "KPI_x0020_Title": kpi_titles,
    // "Remarks": remarkss,
    // "Score": scores,
    "Comments": commentss
  };

  $.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Performance Score Storage')/items",
    type: "POST",
    contentType: "application/json;odata=verbose",
    data: JSON.stringify(item),
    headers: {
      "Accept": "application/json;odata=verbose",
      "X-RequestDigest": $("#__REQUESTDIGEST").val()
    },
    success: function (data) {
      //console.log("success");
    },
    error: function (error) {
      alert(JSON.stringify(error));
    }
  });
}





var metrics_score_temp = 0;
var kpi_score_total_temp = 0;



function DisplayMetricsInfo() {

  var kpi_select_dept_val = $("#filter_department_id").val();
  var kpi_select_pos_val = $("#filter_position_id").val();
  var datares_kpi = KPIglobal;
  // //console.log(datares_kpi)

  var datares_metrics;
  metrics_score_temp = 0;
  kpi_score_total_temp = 0;
  ////////////console.log("-------------DROPDOWN START-------------")

  /*  $('#kpi_total_progress_id').progress({
                 percent: kpi_score_total_temp
             });*/
  $.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Metrics')/items?$select=Title, ID, Key_x0020_Performance_x0020_Indi/Title,Key_x0020_Performance_x0020_Indi/ID, Score, Remarks&$expand=Key_x0020_Performance_x0020_Indi&$OrderBy=Score",
    method: "GET",
    headers: {
      "Accept": "application/json; odata=verbose"
    },
    success: function (data) {
      datares_metrics = data.d.results;
      ////////////console.log("----------datares_metrics----------");
      ////////////console.log(datares_metrics);

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
        //////////////console.log(datares[a].Title+" ID: "+datares[a].ID);   

        var metrics_append = "";

        var metric_score = 0;

        for (var b = 0; b < datares_metrics.length; b++) {
          //////////////console.log("datares_kpi["+a+"].ID: "+datares_kpi[a].ID);
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
        headers: {
          "Accept": "application/json; odata=verbose"
        },
        success: function (data) {
          var datares = data.d.results;
          ////////////////console.log(datares)
          // $('#kpi_select_pos').dropdown('clear')

          for (var a = 0; a < datares.length; a++) {
            ////////////////console.log(datares[a].Title+" ID: "+datares[a].ID);
            //$('#kpi_select_kra').append('<option value="' + datares[a].ID + '">' + datares[a].Title + '</option>');
            //krakey-12
            if (!$("#krakey-" + datares[a].ID + " ").length) {
              ////////////console.log("Not Exist")
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

      // //////////console.log("kpi_score_total_temp: "+kpi_score_total_temp);

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
      var count = $td.length;
      if (count > 1) {

        //If there is more than one 
        //then merging                                
        $td.not(":eq(0)").remove();
        $td.attr('rowspan', count);
      }
    }
  })
}


var arr_month_text = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var currentTime = new Date();
var current_year = currentTime.getFullYear();


function populate_year(postTitle, select_year, select_month) {

  $('#listYear').empty();



  $.ajax({
    url: _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Key Performance Score Storage')/items?$select=Comments, ID, Score, Year, Month, Comments, Remarks, Locked, Date, Position_x0020_Title/Title&$expand=Position_x0020_Title&$filter=Position_x0020_Title/Title eq '" + postTitle + "' ",
    method: "GET",
    headers: {
      "Accept": "application/json; odata=verbose"
    },
    success: function (data) {

      result_for_KPSS_getYear = data.d.results;

      populate_month(select_year, select_month);

      var array_year = [];

      for (let i = 0; i < result_for_KPSS_getYear.length; i++) {
        array_year.push(result_for_KPSS_getYear[i].Year);

      }

      temp_year_arr = array_year.filter(onlyUnique);
      temp_year_arr.sort();


      var year_list = "";
      var match_year;

      for (var a = 0; a < temp_year_arr.length; a++) {
        if (select_year == temp_year_arr[a]) {
          year_list += "<div class='item active selected' data-value='" + temp_year_arr[a] + "'>" + temp_year_arr[a] + "</div>";
          match_year = temp_year_arr[a];
        } else {
          year_list += "<div class='item' data-value='" + temp_year_arr[a] + "'>" + temp_year_arr[a] + "</div>";
        }
      }

      $('#listYear').append(year_list);

      if (match_year) {
        $('#currentYear').val(match_year);
      } else {
        $('#currentYear').val(year_list);
      }


    },
    error: function (error) {
      alert(JSON.stringify(error));
    }
  });
}

var currentTime = new Date()
var current_month = currentTime.getMonth();
var string_month = arr_month_text[current_month];

var result_for_KPSS_getYear;


function populate_month(select_year, select_month) {
  $('#listMonth').empty();

  var array_month = [];


  for (var i = 0; i < result_for_KPSS_getYear.length; i++) {
    if (select_year == result_for_KPSS_getYear[i].Year) {
      array_month.push(result_for_KPSS_getYear[i].Month);
    }
  }

  temp_month_arr = array_month.filter(onlyUnique);

  var month_list = "";
  var match_month;


  for (var a = 0; a < temp_month_arr.length; a++) {
    if (temp_month_arr[a] == select_month) {
      month_list += "<div class='item active selected' data-value='" + temp_month_arr[a] + "'>" + temp_month_arr[a] + "</div>";
      match_month = temp_month_arr[a]
    } else {
      month_list += "<div class='item' data-value='" + temp_month_arr[a] + "'>" + temp_month_arr[a] + "</div>";
    }
  }


  $('#listMonth').append(month_list);


  if (match_month) {
    $('#current_month').val(match_month);

  } else {
    $('#current_month').val(month_list);

  }
}




function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
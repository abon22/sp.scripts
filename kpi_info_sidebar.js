
function OnScrollDiv (div) {


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

var metric_temp_action ="";
var kpi_temp_action ="";
var kra_temp_action ="";

$(document).ready(function() {

  metric_temp_action = "add_metric";
  kpi_temp_action = "add_kpi";
  kra_temp_action = "add_kra";


  $('.ui.dropdown')
        .dropdown()
  ;

  $('.ui.sidebar')
  .sidebar('setting', 'transition', 'overlay')
  .sidebar('toggle')

;





$("#refresh_btn" ).click(function() {

  var kpi_select_dept_val = $("#filter_department_id").val(); 
  var kpi_select_pos_val = $("#filter_position_id").val(); 

  ReadKRAListItem(kpi_select_pos_val);
  ReadKPIListItem(kpi_select_pos_val);

  DisplayMetricsInfo();
  

  
  

  //DisplayKeyPerformanceIndicatorInfo(kpi_select_pos_val);

  $('#loading_refresh').addClass('loading');
  setTimeout(function(){ 
    $('#loading_refresh').removeClass('loading'); 
  }, 1000);

});
$('#kpi_total_progress_id').progress({
  percent: 0
});

  $("#s4-workspace").scroll(function() {
        OnScrollDiv(this);
  }); 

  //DisplayKeyPerformanceIndicatorInfo();
  ReadDepartmentListItem();
  //ReadKRAListItem();
  //ReadKPIListItem();

  
  $('#filter_department_id').on('change', function() {

    $('#kpi_select_kra').dropdown('clear');
    $('#kpi_select_kra').empty()
    $('#metrics_select_kpi').dropdown('clear');
    $('#metrics_select_kpi').empty()
    kpi_score_total_temp = 0;

    if(kpi_score_total_temp == 0){
        $('#kpi_total_progress_id').removeClass('success');
    }

    $('#kpi_total_progress_id').progress({
        percent: kpi_score_total_temp
    });


    
   // alert(kpi_score_total_temp);
  if(kpi_score_total_temp<100){

      $('#metrics_select_kpi').removeClass('disabled');
      $('#metric_title').removeAttr('readonly');
      $('#metric_score').removeAttr('readonly');
      $('#metric_remarks').removeClass('disabled');
      $('#metrics_btn').removeClass('disabled');
      $('#metrics_btn_reset').removeClass('disabled');
    }

    $("#table_kpi").find("tr:gt(0)").remove();
    
    AppendPosition(this.value)


  })

  $('#filter_position_id').on('change', function() {
    //DisplayKeyPerformanceIndicatorInfo(this.value);
    ReadKRAListItem(this.value);
    ReadKPIListItem(this.value);
  })
/*
  $('#kpi_select_dept').on('change', function() {
    ReadPositionListItem(this.value)
  })*/

  $('#metrics_select_kpi').on('change', function() {
    /*alert(this.value)*/
    $('#metric_remarks').dropdown('clear');
    $('#metric_remarks').empty()
    ////console.log("this.value: "+this.value)
    //set_update_metrics="add";
    
      DisplayMetricsInfo(this.value);
   
    
    


  })

 
  
    //-------------------KRA-------------------------------------------
     $("#kra_btn").click( function(){

      var kpi_select_dept_val = $("#filter_department_id").val();
      var kpi_select_pos_val = $("#filter_position_id").val(); 

      var kra_title = $("#kra_title_id").val();  

       if(kpi_select_dept_val == "" || kpi_select_dept_val == null){
          $('#kpi_select_dept_err').addClass('error');
        }else {
          $('#kpi_select_dept_err').removeClass('error');
        }
        //--------------------------
        if(kpi_select_pos_val == "" || kpi_select_pos_val == null){
          $('#kpi_select_pos_err').addClass('error');
        }else {
          $('#kpi_select_pos_err').removeClass('error');
        }
        //--------------------------

      if(kra_title=="" || kra_title == null){
        $('#kra_title_error').addClass('error');
      }else{
        $('#kra_title_error').removeClass('error');
        //Create_KRA_ListItem();
      }

       if(kpi_select_dept_val!="" && kpi_select_pos_val!="" && kra_title!="" && kra_temp_action=="add_kra"){
        Create_KRA_ListItem();
       }else if(kpi_select_dept_val!="" && kpi_select_pos_val!="" && kra_title!="" && kra_temp_action=="update_kra"){
        Update_KRA_ListItem();
       }

     });

     $("#kra_btn_reset").click( function(){

      Reset_KRA_Fields();

     });

     


    //-------------------KRA-------------------------------------------

    //-------------------KPI-------------------------------------------
    $("#kpi_btn").click( function()
      {

        //var kpi_select_dept_val = $("#kpi_select_dept").dropdown('get value'); 
        var kpi_select_dept_val = $("#filter_department_id").val(); 
        //var kpi_select_pos_val = $("#kpi_select_pos").dropdown('get value'); 
        var kpi_select_pos_val = $("#filter_position_id").val(); 
        //////console.log("kpi_select_pos_val: "+kpi_select_pos_val);;
        var kpi_select_kra_val = $("#kpi_select_kra").dropdown('get value'); 

        var kpi_title = $("#kpi_title").val();   
        //var kpi_min_score = $("#kpi_min_score").val();   
        //var kpi_max_score = $("#kpi_max_score").val(); 
        //Create_KPI_ListItem();

        if(kpi_select_dept_val == "" || kpi_select_dept_val == null){
          $('#kpi_select_dept_err').addClass('error');
        }else {
          $('#kpi_select_dept_err').removeClass('error');
        }
        //--------------------------
        if(kpi_select_pos_val == "" || kpi_select_pos_val == null){
          $('#kpi_select_pos_err').addClass('error');
        }else {
          $('#kpi_select_pos_err').removeClass('error');
        }
        //--------------------------
        if(kpi_select_kra_val == "" || kpi_select_kra_val == null){
          $('#kpi_select_kra_err').addClass('error');
        }else {
          $('#kpi_select_kra_err').removeClass('error');
        }
        //--------------------------
        if(kpi_title == "" || kpi_title == null){
          $('#kpi_title_err').addClass('error');
        }else {
          $('#kpi_title_err').removeClass('error');
        }


        if(kpi_select_dept_val!="" && kpi_select_pos_val!="" && kpi_select_kra_val!="" && kpi_title!="" && kpi_temp_action == "add_kpi"){
          Create_KPI_ListItem();
          ////console.log(kpi_temp_action);
           
        }else if(kpi_select_dept_val!="" && kpi_select_pos_val!="" && kpi_select_kra_val!="" && kpi_title!="" && kpi_temp_action == "update_kpi"){
          Update_KPI_ListItem();
          ////console.log(kpi_temp_action);
           
        }



      });

    $("#kpi_btn_reset").click( function(){
        //$('#kpi_select_dept').dropdown('clear');
        //$('#kpi_select_pos').dropdown('clear');
        Reset_KPI_Fields();
        
    });

    //-------------------KPI-------------------------------------------

    $("#metrics_btn").click( function()
       {
         //Create_Metrics_ListItem();

        var metrics_select_kpi = $("#metrics_select_kpi").dropdown('get value'); 
        var metric_title = $("#metric_title").val();
        var metric_score = $("#metric_score").val();
        var metric_remarks = $("#metric_remarks").val();


        if(metrics_select_kpi == "" || metrics_select_kpi == null){
          $('#metrics_select_kpi_err').addClass('error');
        }else{
          $('#metrics_select_kpi_err').removeClass('error');
        }

        if(metric_title == "" || metric_title == null){
          $('#metric_title_err').addClass('error');
        }else{
          $('#metric_title_err').removeClass('error');
        }

        //////console.log(metrics_score_temp);
        if(metric_score == "" || metric_score == null ){
          $('#metric_score_err').addClass('error');

        }
        else if( metric_score==metrics_score_temp ){
           $('#metric_score_err').removeClass('error');
        }
        else{
          $('#metric_score_err').removeClass('error');
        }

        if(metric_remarks == "" || metric_remarks == null ){
          $('#metric_remarks_err').addClass('error');
        }else{
          $('#metric_remarks_err').removeClass('error');
        }

        if(metrics_select_kpi!="" && metric_title!="" && metric_score!="" && metric_remarks!="" && metric_temp_action == "add_metric"){
          Create_Metrics_ListItem();
          ////console.log("add_metric");
          //alert("aw");


        }else if(metrics_select_kpi!="" && metric_title!="" && metric_score!="" && metric_remarks!="" && metric_temp_action == "update_metric"){
          //Create_Metrics_ListItem();
          Update_Metrics_ListItem();

          ////console.log("update_metric");

          //alert("aw");

        }


       }
    );

    $("#metrics_btn_reset").click( function()
       {
        Reset_Metrics_Fields();
        //DisplayKeyPerformanceIndicatorInfo();
       }
    );




    $("#delete_metrics_btn").click( function()
       {

        var metrics_select_kpi = $("#metrics_select_kpi").dropdown('get value');
        ////console.log("metrics_select_kpi: "+metrics_select_kpi);

        if(metrics_select_kpi == "" || metrics_select_kpi == null){
          $('#metrics_select_kpi_err').addClass('error');
        }else {
          $('#metrics_select_kpi_err').removeClass('error');
        }

        var kpi_select_dept_val = $("#filter_department_id").val(); 
        var kpi_select_pos_val = $("#filter_position_id").val(); 

         if(kpi_select_dept_val == "" || kpi_select_dept_val == null){
          $('#kpi_select_dept_err').addClass('error');
        }else {
          $('#kpi_select_dept_err').removeClass('error');
        }

        if(kpi_select_pos_val == "" || kpi_select_pos_val == null){
          $('#kpi_select_pos_err').addClass('error');
        }else {
          $('#kpi_select_pos_err').removeClass('error');
        }

        if(kpi_select_dept_val!="" && kpi_select_pos_val!="" && metrics_select_kpi!=""){
          //function here
        }

       }
    );

    


});//end document ready

  function Reset_Metrics_Fields(){
    var kpi_select_pos_val = $("#filter_position_id").val(); 
        metric_temp_action = "add_metric";

          $('#metrics_select_kpi').dropdown('clear');
          $("#metric_title").val('');
          $("#metric_score").val('');   
          $('#metric_remarks').dropdown('clear');


        $('#metrics_select_kpi_err').removeClass('error');
        $('#metric_title_err').removeClass('error');
        $('#metric_score_err').removeClass('error');
        $('#metric_remarks_err').removeClass('error');
         $('#kpi_select_dept_err').removeClass('error');
        $('#kpi_select_pos_err').removeClass('error');
        $('#metrics_btn').text("Add");
        ReadKPIListItem_load_option(kpi_select_pos_val)
  }

    function Reset_KPI_Fields(){
        var kpi_select_pos_val = $("#filter_position_id").val(); 
        kpi_temp_action = "add_kpi";

        $('#kpi_select_kra').dropdown('clear');

        $("#kpi_title").val('');
        //$("#kpi_min_score").val('');   
        //$("#kpi_max_score").val(''); 

        $('#kpi_select_dept_err').removeClass('error');
        $('#kpi_select_pos_err').removeClass('error');
        $('#kpi_select_kra_err').removeClass('error');
        $('#kpi_title_err').removeClass('error');
        $('#kpi_min_score_err').removeClass('error');
        $('#kpi_max_score_err').removeClass('error');
        $('#kpi_btn').text("Add");
        ReadKRAListItem(kpi_select_pos_val);
  }

  function Reset_KRA_Fields(){
      kra_temp_action = "add_kpi";
      $('#kra_btn').text('Add');

       $('#kra_title_id').val('');
       $('#kra_title_error').removeClass('error');
       $('#kpi_select_dept_err').removeClass('error');
      $('#kpi_select_pos_err').removeClass('error');
     }


function Create_KRA_ListItem() {
    var kpi_select_pos_val = $("#filter_position_id").val(); 
    var kra_title = $("#kra_title_id").val();   
    var item = {
        "__metadata": { "type": "SP.Data.Key_x0020_Risk_x0020_AssessmentListItem" },
        "Title": kra_title,
        "Position_x0020_TitleId": kpi_select_pos_val,
    };
    $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Key Result Area')/items",
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: JSON.stringify(item),
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: function (data) {
            //////console.log("success");
            Reset_KRA_Fields();

            document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><p><i class='check circle icon'></i>Key Result Area Successfully Added! </p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);
          DisplayKeyPerformanceIndicatorInfo(kpi_select_pos_val)
          ReadKRAListItem(kpi_select_pos_val);

        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}



function Create_KPI_ListItem() {
   // var kpi_select_dept_txt = $("#kpi_select_dept").dropdown('get text');   
    //var kpi_select_dept_val = $("#kpi_select_dept").dropdown('get value'); 

    //var kpi_select_pos_txt = $("#kpi_select_pos").dropdown('get text');
    //var kpi_select_pos_val = $("#kpi_select_pos").dropdown('get value');

    var kpi_select_dept_val = $("#filter_department_id").val(); 
    var kpi_select_pos_val = $("#filter_position_id").val(); 

    //var kpi_select_kra_txt = $("#kpi_select_kra").dropdown('get text');   
    var kpi_select_kra_val = $("#kpi_select_kra").dropdown('get value'); 

    var kpi_title = $("#kpi_title").val();   
    //var kpi_min_score = $("#kpi_min_score").val();   
    //var kpi_max_score = $("#kpi_max_score").val();   

    ////////console.log("kpi_select_dept_txt: "+kpi_select_dept_txt+" kpi_select_pos: "+kpi_select_pos+" kpi_select_kra: "+kpi_select_kra+" kpi_title: "+kpi_title+" kpi_min_score: "+kpi_min_score+" kpi_max_score: "+kpi_max_score)

    var item = {
        "__metadata": { "type": "SP.Data.Key_x0020_Performance_x0020_IndicatorListItem" },
        "DepartmentId": kpi_select_dept_val,
        "Position_x0020_TitleId": kpi_select_pos_val,
        "Key_x0020_Result_x0020_AreaId": kpi_select_kra_val,
        "Title": kpi_title
    };
    $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Key Performance Indicator')/items",
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: JSON.stringify(item),
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: function (data) {
            //////console.log("success");

            Reset_KPI_Fields();

            document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><p><i class='check circle icon'></i>Key Performance Indicator Successfully Added! </p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);

            ReadKPIListItem(kpi_select_pos_val);
            //DisplayKeyPerformanceIndicatorInfo();
            //DisplayKeyPerformanceIndicatorInfo(kpi_select_pos_val);
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}

function Create_Metrics_ListItem() {
    var kpi_select_pos_val = $("#filter_position_id").val(); 

    var metrics_select_kpi = $("#metrics_select_kpi").dropdown('get value'); 
    var metric_title = $("#metric_title").val();
    var metric_score = $("#metric_score").val();
    var metric_remarks = $("#metric_remarks").val();

   ////console.log("metric_score: "+metric_score+" || metrics_score_temp: "+metrics_score_temp);

    if(metric_score>metrics_score_temp || kpi_score_total_temp == 0 || metrics_score_temp == 0){
     // //console.log("kpi_score_total_temp: "+kpi_score_total_temp);
     var get_kpi_score_total_minus_selected_metric_score = kpi_score_total_temp - metrics_score_temp
      var check_kpi_sum = 100-Number(get_kpi_score_total_minus_selected_metric_score);

      ////console.log("check_kpi_sum: "+check_kpi_sum);
      if(metric_score<=check_kpi_sum){

          var item = {
        "__metadata": { "type": "SP.Data.MetricsListItem" },
        "Key_x0020_Performance_x0020_IndiId": metrics_select_kpi,
        "Title": metric_title,
        "Score": metric_score,
        "Remarks": metric_remarks
        };
        $.ajax({
            url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Metrics')/items",
            type: "POST",
            contentType: "application/json;odata=verbose",
            data: JSON.stringify(item),
            headers: {
                "Accept": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val()
            },
            success: function (data) {
                //////console.log("success");

                Reset_Metrics_Fields();

                 document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><p><i class='check circle icon'></i>Metrics Successfully Added! </p></div>"
                setTimeout(function(){ 
                    $('.message')
                      .closest('.message')
                      .transition('fade')
                    ;
                 }, 3000);

                //DisplayKeyPerformanceIndicatorInfo(kpi_select_pos_val);
                DisplayMetricsInfo();

            },
            error: function (error) {
                alert(JSON.stringify(error));
            }
        });



      }else{


       document.getElementById("message_success_id").innerHTML = "<div class='ui negative compact message'><p><i class='info circle icon'></i>Metrics score must not be less than to 100% </p></div>"
        setTimeout(function(){ 
            $('.message')
              .closest('.message')
              .transition('fade')
            ;
         }, 3000);



      }

      
    }


    else{
      //alert("less than");

      document.getElementById("message_success_id").innerHTML = "<div class='ui negative compact message'><p><i class='info circle icon'></i>Metrics score must not be less than to "+metrics_score_temp+" </p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);

    }



  


}

function ReadDepartmentListItem()  
{  
    $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Department')/items?$select=Title, ID&$OrderBy=Title",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
          var datares = data.d.results;
          ////console.log(datares)
          $('#kpi_select_dept').empty();
          $('#kpi_select_dept').append("<option value=''>Select Department</option>");

          //var department_div = document.getElementById('');
          var departmen_list="";
          
          $('#append_dept_id').append(''); 

          $('#append_dept_id').dropdown('clear')
          $('#append_dept_id').empty();
          //$('#append_dept_id').append("<option value=''>Select Department</option>");

          for (var a = 0; a < datares.length; a++) {
            ///////console.log(datares[a].Title+" ID: "+datares[a].ID);
              $('#kpi_select_dept').append('<option value="' + datares[a].ID + '">' + datares[a].Title + '</option>'); 

              departmen_list+="<div class='item' data-value='"+datares[a].ID+"'>"+datares[a].Title+"</div>";

          }

          $('#append_dept_id').append(departmen_list); 



        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
        });
}


function AppendPosition(id)  
{  
    $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Position')/items?$select=Title,ID,DepartmentId&$OrderBy=Title&$filter=Department_x003a_ID eq '"+id+"' ",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
          var datares = data.d.results;
          ////////console.log(datares)
          var position_list="";
          
          $('#append_pos_id').empty();
          $('#text_pos_id').html('Select Position');
          $('#filter_position_id').val('')
          for (var a = 0; a < datares.length; a++) {
            ////////console.log(datares[a].Title+" ID: "+datares[a].ID);
        


          //$('#append_pos_id').append("<option value=''>Select Position</option>");

            $('#kpi_select_pos').append('<option value="' + datares[a].ID + '">' + datares[a].Title + '</option>');  
             position_list+="<div class='item' data-value='"+datares[a].ID+"'>"+datares[a].Title+"</div>";    
          }

          $('#append_pos_id').append(position_list); 
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
        });
}

function ReadKRAListItem(position_id)  
{  
    $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Key Result Area')/items?$select=Title, ID, AttachmentFiles, Position_x0020_Title/Title, Position_x0020_Title/ID&$expand=Position_x0020_Title&$$expand=AttachmentFiles&$OrderBy=Title&$filter=Position_x0020_Title/ID eq '"+position_id+"' ",
  /*    url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Key Performance Indicator')/items?$select=Title, ID, Department/Title, Position_x0020_Title/Title, Position_x0020_Title/ID, Key_x0020_Result_x0020_Area/Title, Key_x0020_Result_x0020_Area/ID, Minimum_x0020_Score, Maximum_x0020_Score&$expand=Department&$expand=Position_x0020_Title&$expand=Key_x0020_Result_x0020_Area&$OrderBy=Key_x0020_Result_x0020_Area/Title&$filter=Position_x0020_Title/ID eq '"+position_id+"'",
  */
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
          var datares = data.d.results;
          console.log(datares)
         // $('#kpi_select_pos').dropdown('clear')
          $('#kpi_select_kra').empty();
          $('#kpi_select_kra').append("<option value=''>Select KRA</option>");
          for (var a = 0; a < datares.length; a++) {
            ////////console.log(datares[a].Title+" ID: "+datares[a].ID);
            $('#kpi_select_kra').append('<option value="' + datares[a].ID + '">' + datares[a].Title + '</option>');  


          }
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
        });
}

function ReadKPIListItem(position_id)  
{  
    $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Key Performance Indicator')/items?$select=Title,ID,Position_x0020_Title/Title, Position_x0020_Title/ID,Key_x0020_Result_x0020_Area/Title, Key_x0020_Result_x0020_Area/ID&$expand=Position_x0020_Title&$expand=Key_x0020_Result_x0020_Area&$OrderBy=Key_x0020_Result_x0020_Area/Title&$filter=Position_x0020_Title/ID eq '"+position_id+"'",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
          var datares = data.d.results;
        //////console.log(datares)
        //$('#metrics_select_kpi').dropdown('clear')
        $('#metrics_select_kpi').empty();
        $('#metrics_select_kpi').append("<option value=''>Select KPI</option>");
          for (var a = 0; a < datares.length; a++) {
            ////////console.log(datares[a].Title+" ID: "+datares[a].ID);
            $('#metrics_select_kpi').append('<option value="' + datares[a].ID + '">' + datares[a].Title + '</option>');      
          }

        DisplayKeyPerformanceIndicatorInfo(position_id);
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
        });
}

function ReadKPIListItem_load_option(position_id)  
{  
    $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Key Performance Indicator')/items?$select=Title,ID,Position_x0020_Title/Title, Position_x0020_Title/ID,Key_x0020_Result_x0020_Area/Title, Key_x0020_Result_x0020_Area/ID&$expand=Position_x0020_Title&$expand=Key_x0020_Result_x0020_Area&$OrderBy=Key_x0020_Result_x0020_Area/Title&$filter=Position_x0020_Title/ID eq '"+position_id+"'",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
          var datares = data.d.results;
        //////console.log(datares)
        //$('#metrics_select_kpi').dropdown('clear')
        $('#metrics_select_kpi').empty();
        $('#metrics_select_kpi').append("<option value=''>Select KPI</option>");
          for (var a = 0; a < datares.length; a++) {
            ////////console.log(datares[a].Title+" ID: "+datares[a].ID);
            $('#metrics_select_kpi').append('<option value="' + datares[a].ID + '">' + datares[a].Title + '</option>');      
          }

        //DisplayKeyPerformanceIndicatorInfo(position_id);
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
        });
}

var datares_kpi;
function DisplayKeyPerformanceIndicatorInfo(position_id)  
{   
    
    $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Key Performance Indicator')/items?$select=Title, ID, Department/Title, Position_x0020_Title/Title, Position_x0020_Title/ID, Key_x0020_Result_x0020_Area/Title, Key_x0020_Result_x0020_Area/ID, Minimum_x0020_Score, Maximum_x0020_Score&$expand=Department&$expand=Position_x0020_Title&$expand=Key_x0020_Result_x0020_Area&$OrderBy=Key_x0020_Result_x0020_Area/Title&$filter=Position_x0020_Title/ID eq '"+position_id+"'",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
        
        datares_kpi = data.d.results;
        ////console.log("----------datares_kpi----------");
        ////console.log(datares_kpi);
        $("#table_kpi").find("tr:gt(0)").remove();
          /*for (var a = 0; a < datares_kpi.length; a++) {
            var kra_title = datares_kpi[a].Key_x0020_Result_x0020_Area.Title;
            var kpi_title = datares_kpi[a].Title;

            //////console.log(datares[a].Title+" ID: "+datares[a].ID);   
            $('#table_kpi').append("<tr><td>"+kra_title+"</td><td>"+kpi_title+"</td><td>Sharepoint/Requestor/TQM</td><td></td></tr>");
          }*/
          DisplayMetricsInfo();
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
        });

}


function delete_metrics_onClick(set_del_id){

  ////console.log("set_del_id: "+set_del_id);

    var myID = set_del_id;  
    if ((myID.length < 1) || isNaN(myID)) {  
        alert(JSON.stringify(error));
    } else {  
        $.ajax({  
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Metrics')/items(" + myID + ")",  
            type: "POST",  
            contentType: "application/json;odata=verbose",  
            headers: {  
                "Accept": "application/json;odata=verbose",  
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
                "IF-MATCH": "*",  
                "X-HTTP-Method": "DELETE",  
            },  
            success: function(data) {
                DisplayMetricsInfo();  
                //alert("success");  
                document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><p><i class='check circle icon'></i>Metrics Successfully Deleted! </p></div>"
                setTimeout(function(){ 
                    $('.message')
                      .closest('.message')
                      .transition('fade')
                    ;
                 }, 3000);

            },  
            error: function(data) {  
               alert(JSON.stringify(error));
            }  
        });  
    }  

}

function delete_kpi_onClick(set_kpi_id){

  ////console.log("set_kpi_id: "+set_kpi_id);
  var rowCount = $("#tbody-"+set_kpi_id+" tr").length;
  ////console.log("rowCount: "+rowCount);

  var get_kpi_title = $("#th_kpi_title_"+set_kpi_id+"").text();

  $("#modal_header_id").text("Deleting Key Performance Indicator");
  //$("#modal_label_id").text(get_kpi_title);
  $("#modal_content_id").html("<p>Are you sure you want to delete this KPI: <b>"+get_kpi_title+"</b> ?</p><em> Note: By clicking yes, this will delete all related metrics in this KPI.</em>");


  var kpi_select_dept_val = $("#filter_department_id").val(); 
  var kpi_select_pos_val = $("#filter_position_id").val(); 

    var myID = set_kpi_id;  
    if ((myID.length < 1) || isNaN(myID)) {  
        alert(JSON.stringify(error));
    } else {  
      if(rowCount == 0){
        $.ajax({  
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Performance Indicator')/items(" + myID + ")",  
            type: "POST",  
            contentType: "application/json;odata=verbose",  
            headers: {  
                "Accept": "application/json;odata=verbose",  
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
                "IF-MATCH": "*",  
                "X-HTTP-Method": "DELETE",  
            },  
            success: function(data) {
               //DisplayMetricsInfo();  
                //alert("success");  
                //DisplayKeyPerformanceIndicatorInfo(kpi_select_pos_val);
                ReadKPIListItem(kpi_select_pos_val);
                document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><p><i class='check circle icon'></i>KPI Successfully Deleted! </p></div>"
                setTimeout(function(){ 
                    $('.message')
                      .closest('.message')
                      .transition('fade')
                    ;
                 }, 3000);

            },  
            error: function(data) {  
               alert(JSON.stringify(error));
            }  
        }); 
      }else{
        $('.ui.modal')
           .modal({
            closable  : false,
            onDeny    : function(){
              return true;
            },
            onApprove : function() {
              //window.alert('Approved!');
                $.ajax({  
                    url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Performance Indicator')/items(" + myID + ")",  
                    type: "POST",  
                    contentType: "application/json;odata=verbose",  
                    headers: {  
                        "Accept": "application/json;odata=verbose",  
                        "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
                        "IF-MATCH": "*",  
                        "X-HTTP-Method": "DELETE",  
                    },  
                    success: function(data) {
                       //DisplayMetricsInfo();  
                        //alert("success");  
                        //DisplayKeyPerformanceIndicatorInfo(kpi_select_pos_val);
                        ReadKPIListItem(kpi_select_pos_val);
                        document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><p><i class='check circle icon'></i>KPI Successfully Deleted! </p></div>"
                        setTimeout(function(){ 
                            $('.message')
                              .closest('.message')
                              .transition('fade')
                            ;
                         }, 3000);

                    },  
                    error: function(data) {  
                       alert(JSON.stringify(error));
                    }  
                }); 
            }
          })
          .modal('show')
        ;

      }//end else
      
      

    }//end else  

}

function delete_kra_onClick(set_kra_id){

  ////console.log("set_kra_id: "+set_kra_id);
  var rowCount = $("#count_kra-"+set_kra_id+" ").length;
  ////console.log("rowCount: "+rowCount);

  var get_kra_title = $("#kra_title_"+set_kra_id+"").text();
  
  $("#modal_header_id").text("Deleting Key Result Area");
  $("#modal_content_id").html("<p>Are you sure you want to delete this KRA: <b>"+get_kra_title+"</b> ?</p><em> Note: By clicking yes, this will delete all related key result area and Key performance indicator.</em>");


  var kpi_select_dept_val = $("#filter_department_id").val(); 
  var kpi_select_pos_val = $("#filter_position_id").val(); 

    var myID = set_kra_id;  
    if ((myID.length < 1) || isNaN(myID)) {  
        alert(JSON.stringify(error));
    } else {  
      if(rowCount == 0){
        $.ajax({  
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Result Area')/items(" + myID + ")",  
            type: "POST",  
            contentType: "application/json;odata=verbose",  
            headers: {  
                "Accept": "application/json;odata=verbose",  
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
                "IF-MATCH": "*",  
                "X-HTTP-Method": "DELETE",  
            },  
            success: function(data) {
               //DisplayMetricsInfo();  
                //alert("success");  
                //DisplayKeyPerformanceIndicatorInfo(kpi_select_pos_val);
                ReadKRAListItem(kpi_select_pos_val);
                ReadKPIListItem(kpi_select_pos_val);
                document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><p><i class='check circle icon'></i>KRA Successfully Deleted! </p></div>"
                setTimeout(function(){ 
                    $('.message')
                      .closest('.message')
                      .transition('fade')
                    ;
                 }, 3000);

            },  
            error: function(data) {  
               alert(JSON.stringify(error));
            }  
        }); 
      }else{
        $('.ui.modal')
           .modal({
            closable  : false,
            onDeny    : function(){
              return true;
            },
            onApprove : function() {
              //window.alert('Approved!');
                $.ajax({  
                    url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Key Result Area')/items(" + myID + ")",  
                    type: "POST",  
                    contentType: "application/json;odata=verbose",  
                    headers: {  
                        "Accept": "application/json;odata=verbose",  
                        "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
                        "IF-MATCH": "*",  
                        "X-HTTP-Method": "DELETE",  
                    },  
                    success: function(data) {
                       //DisplayMetricsInfo();  
                        //alert("success");  
                        //DisplayKeyPerformanceIndicatorInfo(kpi_select_pos_val);
                        ReadKRAListItem(kpi_select_pos_val);
                        ReadKPIListItem(kpi_select_pos_val);
                        document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><p><i class='check circle icon'></i>KRA Successfully Deleted! </p></div>"
                        setTimeout(function(){ 
                            $('.message')
                              .closest('.message')
                              .transition('fade')
                            ;
                         }, 3000);

                    },  
                    error: function(data) {  
                       alert(JSON.stringify(error));
                    }  
                }); 
            }
          })
          .modal('show')
        ;

      }//end else
      
      

    }//end else  

}

var set_metric_edit_id_temp = "";
function edit_metric_onClick(set_metric_edit_id){
 // //console.log("set_metric_edit_id: "+set_metric_edit_id);
  var kpi_select_pos_val = $("#filter_position_id").val(); 
  set_metric_edit_id_temp = set_metric_edit_id;
  ////console.log("set_metric_edit_id_edit_func:"+set_metric_edit_id);

  //ReadKPIListItem_load_option(kpi_select_pos_val);


  $.ajax({
  url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Metrics')/items?$select=Title, ID, Key_x0020_Performance_x0020_Indi/Title,Key_x0020_Performance_x0020_Indi/ID, Score, Remarks&$expand=Key_x0020_Performance_x0020_Indi&$OrderBy=Score&$filter=ID eq '"+set_metric_edit_id+"' ",
  method: "GET",
  headers: { "Accept": "application/json; odata=verbose" },
  success: function (data) {
  var datares_metrics = data.d.results;

  ////console.log(datares_metrics);

   $('#metrics_select_kpi').empty();
   $('#metrics_select_kpi').dropdown('clear');

   $('#metric_remarks').empty();
   $('#metric_remarks').dropdown('clear');

  var metrics_remarks = ['Poor', 'Needs Improvement', 'Meet Expectation', 'Very Good', 'Excellent'];
  for (var a = 0; a < metrics_remarks.length; a++) {
    $('#metric_remarks').append('<option value="' + metrics_remarks[a] + '">' + metrics_remarks[a]+ '</option>');
  }

    for (var a = 0; a < datares_metrics.length; a++) {
      var kpi_id = datares_metrics[a].Key_x0020_Performance_x0020_Indi.ID;
      var kpi_title = datares_metrics[a].Key_x0020_Performance_x0020_Indi.Title;
      var metrics_title = datares_metrics[a].Title;
      var kpi_score = datares_metrics[a].Score;
      var kpi_remarks = datares_metrics[a].Remarks;

      $('#metric_title').val(metrics_title);
      $('#metric_score').val(kpi_score);
      $('#metrics_select_kpi').append('<option value="' + kpi_id + '">' + kpi_title + '</option>');

      $('#metric_remarks').dropdown("set value",kpi_remarks);
      
      $('#metrics_btn').text("Save");
      metric_temp_action = "update_metric";


     /* $('#metric_remarks').append("<option value=''>Select Remarks</option>");
      for (var a = 0; a < metrics_remarks.length; a++) {
        $('#metric_remarks').append('<option value="' + metrics_remarks[a] + '">' + metrics_remarks[a]+ '</option>');
      }*/

    }

  },
    error: function (error) {
        alert(JSON.stringify(error));
    }
});



}


function Update_Metrics_ListItem()
{   
    var kpi_select_pos_val = $("#filter_position_id").val(); 

    var metric_title = $("#metric_title").val();
    var metric_score = $("#metric_score").val();
    var metric_remarks = $("#metric_remarks").val();
    var myID = set_metric_edit_id_temp;   
   // //console.log("set_metric_edit_id_temp_update_func: "+set_metric_edit_id_temp);      
    
    var item = {
        "__metadata": { "type": "SP.Data.MetricsListItem" },
        "Title": metric_title,
        "Score": metric_score,
        "Remarks": metric_remarks
        };

    $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Metrics')/items(" + myID + ")",
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: JSON.stringify(item),
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*",
            "X-HTTP-Method":"MERGE",
        },
        success: function (data) {
            Reset_Metrics_Fields();
            DisplayMetricsInfo();  
            document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><p><i class='check circle icon'></i>Metrics Successfully Updated! </p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);



        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}



var set_kpi_edit_id_temp = "";
function edit_kpi_item_onClick(set_kpi_id){
  //console.log("dbclick_kpi_id: "+set_kpi_id);
  set_kpi_edit_id_temp = set_kpi_id;


      $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Key Performance Indicator')/items?$select=Title,ID,Position_x0020_Title/Title, Position_x0020_Title/ID,Key_x0020_Result_x0020_Area/Title, Key_x0020_Result_x0020_Area/ID&$expand=Position_x0020_Title&$expand=Key_x0020_Result_x0020_Area&$OrderBy=Key_x0020_Result_x0020_Area/Title&$filter=ID eq '"+set_kpi_id+"'",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
          var datares = data.d.results;


        //console.log(datares)
        //$('#metrics_select_kpi').dropdown('clear')
        $('#kpi_select_kra').empty();
          for (var a = 0; a < datares.length; a++) {
            ////////console.log(datares[a].Title+" ID: "+datares[a].ID);
            var kra_title = datares[a].Key_x0020_Result_x0020_Area.Title;
            var kra_id = datares[a].Key_x0020_Result_x0020_Area.ID;
            var kpi_title = datares[a].Title;

            $('#kpi_select_kra').append('<option value="' + kra_id + '">' + kra_title + '</option>');     
            $('#kpi_title').val(kpi_title);

            

          }

          $('#kpi_btn').text("Save");
          kpi_temp_action = "update_kpi";





        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
        });



}

function Update_KPI_ListItem() {
  var kpi_select_pos_val = $("#filter_position_id").val(); 
  var kpi_title = $("#kpi_title").val();
  var myID = set_kpi_edit_id_temp;   

  var item = {
        "__metadata": { "type": "SP.Data.Key_x0020_Performance_x0020_IndicatorListItem" },
        "Title": kpi_title
        };

    $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Key Performance Indicator')/items(" + myID + ")",
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: JSON.stringify(item),
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*",
            "X-HTTP-Method":"MERGE",
        },
        success: function (data) {
            Reset_KPI_Fields();
            
            document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><p><i class='check circle icon'></i>KPI Successfully Updated! </p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);

            ReadKPIListItem(kpi_select_pos_val);


        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });

}

var set_kra_edit_id_temp = "";
function edit_kra_item_onClick(set_kra_id){
  set_kra_edit_id_temp = set_kra_id;

  $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Key Result Area')/items?$select=Title, ID,  Position_x0020_Title/Title, Position_x0020_Title/ID&$expand=Position_x0020_Title&$OrderBy=Title&$filter=ID eq '"+set_kra_id+"' ",

        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {


          var datares = data.d.results;
          //console.log(datares);

           for (var a = 0; a < datares.length; a++) {
              var kra_title = datares[a].Title;
              var kra_id = datares[a].ID;

              $('#kra_title_id').val(kra_title);

           }

           $('#kra_btn').text("Save");
          kra_temp_action = "update_kra";



          
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
        });


}

function Update_KRA_ListItem() {
  var kpi_select_pos_val = $("#filter_position_id").val(); 
  var kra_title = $("#kra_title_id").val();
  var myID = set_kra_edit_id_temp;   

  var item = {
        "__metadata": { "type": "SP.Data.Key_x0020_Risk_x0020_AssessmentListItem" },
        "Title": kra_title
        };

    $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Key Result Area')/items(" + myID + ")",
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: JSON.stringify(item),
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*",
            "X-HTTP-Method":"MERGE",
        },
        success: function (data) {
            Reset_KRA_Fields();
            
            document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><p><i class='check circle icon'></i>KRA Successfully Updated! </p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);

            DisplayKeyPerformanceIndicatorInfo(kpi_select_pos_val)
            ReadKRAListItem(kpi_select_pos_val);


        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });

}


var metrics_score_temp=0;
var kpi_score_total_temp=0;
function DisplayMetricsInfo(set_kpi_id){

  var kpi_select_dept_val = $("#filter_department_id").val(); 
  var kpi_select_pos_val = $("#filter_position_id").val(); 


   var datares_metrics;
   metrics_score_temp = 0;
   kpi_score_total_temp=0;
   ////console.log("-------------DROPDOWN START-------------")

 /*  $('#kpi_total_progress_id').progress({
                percent: kpi_score_total_temp
            });*/
    $.ajax({
        url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Metrics')/items?$select=Title, ID, Key_x0020_Performance_x0020_Indi/Title,Key_x0020_Performance_x0020_Indi/ID, Score, Remarks&$expand=Key_x0020_Performance_x0020_Indi&$OrderBy=Score",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
        datares_metrics = data.d.results;
        ////console.log("----------datares_metrics----------");
        ////console.log(datares_metrics);
        ////console.log("set_kpi_id: "+set_kpi_id);


        if(set_kpi_id){

          //var metrics_remarks = ['(1)Poor', '(2)Needs Improvement', '(3)Meet Expectation', '(4)Very Good', '(5)Excellent'];
          var metrics_remarks = ['Poor', 'Needs Improvement', 'Meet Expectation', 'Very Good', 'Excellent'];
            //metrics_score_temp = 0;
            for (var i = 0; i < datares_metrics.length; i++) {
               // //console.log("datares_metrics[i].Key_x0020_Performance_x0020_Indi.ID: "+datares_metrics[i].Key_x0020_Performance_x0020_Indi.ID);
              if(datares_metrics[i].Key_x0020_Performance_x0020_Indi.ID == set_kpi_id){
                var get_metric_score = datares_metrics[i].Score;
                var get_metric_remarks = datares_metrics[i].Remarks;
                ////console.log("get_metric_score: "+get_metric_score+"|| get_metric_remarks:"+get_metric_remarks);
                ////console.log("set_kpi_id: "+set_kpi_id);
                if(metrics_score_temp<=get_metric_score){
                  metrics_score_temp = get_metric_score;
                  ////console.log("get_metric_score: "+get_metric_score);
                }

                var index = metrics_remarks.indexOf(get_metric_remarks);
                if (index > -1) {
                  metrics_remarks.splice(index, 1);
                }

              }
            }
            //console.log("metrics_remarks: "+metrics_remarks);

            //if(set_update_metrics == "add"){
              $('#metric_remarks').empty();
              $('#metric_remarks').append("<option value=''>Select Remarks</option>");
              for (var a = 0; a < metrics_remarks.length; a++) {
                $('#metric_remarks').append('<option value="' + metrics_remarks[a] + '">' + metrics_remarks[a]+ '</option>');
              }

           // }else if(set_update_metrics == "update" ){
           //   //console.log
           // }
            

        }
        


        $("#table_kpi").find("tr:gt(0)").remove();
        var count_total_kpi=0;
       // var metric_score = 0;
        kpi_score_total_temp = 0;
       for (var a = 0; a < datares_kpi.length; a++) {
            var kra_title = datares_kpi[a].Key_x0020_Result_x0020_Area.Title;
            var kra_id = datares_kpi[a].Key_x0020_Result_x0020_Area.ID;
            var kpi_title = datares_kpi[a].Title;
            var kpi_id = datares_kpi[a].ID;


            count_total_kpi++;
            //////console.log(datares[a].Title+" ID: "+datares[a].ID);   

            var metrics_append="";
            
            var metric_score =0;
            
            for (var b = 0; b < datares_metrics.length; b++) {
              //////console.log("datares_kpi["+a+"].ID: "+datares_kpi[a].ID);
             if(datares_kpi[a].ID == datares_metrics[b].Key_x0020_Performance_x0020_Indi.ID){
                
                var metric_id = datares_metrics[b].ID;
                var metric_title = datares_metrics[b].Title;
                 metric_score = datares_metrics[b].Score;
                var metric_remarks = datares_metrics[b].Remarks;
                //////console.log("datares_kpi[a].ID: "+datares_kpi[a].ID);
                  //kpi_score_total_temp = kpi_score_total_temp + metric_score;
                  //metric_score = metric_score;
                  ////console.log("metric_score: "+metric_score);
                  /*metrics_append+="<tr><td><div class='' style='cursor:pointer;' id='edit_metrics' onClick='edit_onClick("+metric_id+")'><i class='blue edit outline  icon' ></i></div></td><td>"+metric_title+"</td><td>"+metric_score+"%</td><td>"+metric_remarks+"</td><td><div class='' style='cursor:pointer' id='del_metrics' onClick='delete_onClick("+metric_id+")'><i class='red trash alternate outline icon' ></i></div></td></tr>";
*/
                  metrics_append+="<tr><td><div class='' style='cursor:pointer;' id='edit_metrics' onClick='edit_metric_onClick("+metric_id+")'><i class='blue edit outline  icon' ></i></div></td><td>"+metric_title+"</td><td>"+metric_score+"%</td><td>"+metric_remarks+"</td><td><div class='' style='cursor:pointer' id='del_metrics' onClick='delete_metrics_onClick("+metric_id+")'><i class='red trash alternate outline icon' ></i></div></td></tr>";
                 
              }

              
              

            }

            kpi_score_total_temp += metric_score;
            ////console.log("--------------------------------")
            ////console.log("METRIC HERE: "+metric_score);
            ////console.log("--------------------------------")
            if(set_kpi_id!=null || !set_kpi_id){

              ////console.log("kra_id: "+kra_id)
              
           /*
              $('#table_kpi').append("<tr><td id='krakey-"+kra_id+"'> <div class='ui large label'>"+kra_title+"<i class='delete icon'></i></div></td><td><div class='ui large label'>"+kpi_title+"<i class='delete icon'></i></div></td><td>Sharepoint/Requestor/TQM</td><td style='padding: 0px;'>"+
              "<table class='ui very basic collapsing striped celled table' style='text-align: center; '> <thead> <tr><th width='1%' style='background: #1678C2!important;color:white!important;cursor:pointer!important;' class='popup_div' data-inverted=''  data-tooltip='Edit this KPI?' data-position='left center' id='edit_kpi_btn'>Edit</th><th width='75%' style='background: #FFFF00!important;' id='th_kpi_title_"+kpi_id+"' >"+kpi_title+"</th> <th style='background: #FFFF00!important;'>Score(%)</th> <th width='25%' style='background: #FFFF00!important;'>Remarks</th> <th width='1%' style='background: #D01919!important;color:white!important;cursor:pointer!important;' class='popup_div' data-inverted='' data-tooltip='Delete this KPI?' data-position='right center' onClick='delete_kpi_onClick("+kpi_id+")' >Delete</th></tr></thead><tbody id='tbody-"+kpi_id+"'>"
              +metrics_append+
              " </tbody></table>"+
              "</td></tr>");
            */



               /*$('#table_kpi').append("<tr><td id='krakey-"+kra_id+"' data-id='key"+kra_id+"'> <div class='ui large label' id='kra_title_"+kra_id+"'>"+kra_title+"<i class='delete icon' onClick='delete_kra_onClick("+kra_id+")'></i></div></td><td><div class='ui large label' id='count_kra-"+kra_id+"' ondblclick='kpi_item_onClick("+kpi_id+")' style='cursor:pointer;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;user-select: none;' class='popup_div' data-inverted=''  data-tooltip='Double click to edit this KPI.' data-position='top center' >"+kpi_title+"<i class='delete icon' onClick='delete_kpi_onClick("+kpi_id+")'></i></div></td><td>Sharepoint/Requestor/TQM</td><td style='padding: 0px;'>"+
              "<table class='ui very basic collapsing striped celled table' style='text-align: center; '> <thead> <tr><th width='1%' style='background: #FFFF00!important;' >Edit</th><th width='75%' style='background: #FFFF00!important;' id='th_kpi_title_"+kpi_id+"' >"+kpi_title+"</th> <th style='background: #FFFF00!important;'>Score(%)</th> <th width='25%' style='background: #FFFF00!important;'>Remarks</th> <th width='1%' style='background: #FFFF00!important;'  >Delete</th></tr></thead><tbody id='tbody-"+kpi_id+"'>"
              +metrics_append+
              " </tbody></table>"+
              "</td></tr>");*/

              $('#table_kpi').append("<tr><td id='krakey-"+kra_id+"' data-id='key"+kra_id+"'> <div class='ui large label' id='kra_title_"+kra_id+"' style='min-width: 260px!important;max-width: 260px!important;vertical-align: middle!important;margin: auto;padding: 11% 2%;position: relative;' >"+kra_title+"<a class='ui blue top left attached label' onClick='edit_kra_item_onClick("+kra_id+")'><i  class='edit  outline icon' style='margin: 0!important;'></i> </a><a class='ui red top right attached label' onClick='delete_kra_onClick("+kra_id+")'><i  class='trash alternate outline icon' style='margin: 0!important;' ></i></a></div></td><td><div class='ui large label' id='count_kra-"+kra_id+"'  style='min-width: 260px!important;max-width: 260px!important;vertical-align: middle!important;margin: auto;padding: 11% 2%;position: relative;'  >"+kpi_title+"<a class='ui blue top left attached label' onClick='edit_kpi_item_onClick("+kpi_id+")'><i  class='edit  outline icon' style='margin: 0!important;'></i> </a><a class='ui red top right attached label' onClick='delete_kpi_onClick("+kpi_id+")'><i  class='trash alternate outline icon' style='margin: 0!important;' ></i></a></div></td><td>Sharepoint/Requestor/TQM</td><td style='padding: 0px;'>"+
              "<table class='ui very basic collapsing striped celled table' style='text-align: center; '> <thead> <tr><th width='1%' style='background: #FFFF00!important;' >Edit</th><th width='75%' style='background: #FFFF00!important;' id='th_kpi_title_"+kpi_id+"' >"+kpi_title+"</th> <th style='background: #FFFF00!important;'>Score(%)</th> <th width='25%' style='background: #FFFF00!important;'>Remarks</th> <th width='1%' style='background: #FFFF00!important;'  >Delete</th></tr></thead><tbody id='tbody-"+kpi_id+"'>"
              +metrics_append+
              " </tbody></table>"+
              "</td></tr>");

              
               /*$('.popup_div')
                .popup()
              ;*/


            }else{
              ////console.log("Else Here")
            }

          }//end for loop

          /*$('#table_kpi').append("<tr><td>KRA Here</td><td></td><td></td><td></td></tr>");*/


        $.ajax({
          url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('Key Result Area')/items?$select=Title, ID,  Position_x0020_Title/Title, Position_x0020_Title/ID&$expand=Position_x0020_Title&$OrderBy=Title&$filter=Position_x0020_Title/ID eq '"+kpi_select_pos_val+"' ",

          method: "GET",
          headers: { "Accept": "application/json; odata=verbose" },
          success: function (data) {
            var datares = data.d.results;
            ////////console.log(datares)
           // $('#kpi_select_pos').dropdown('clear')
            
            for (var a = 0; a < datares.length; a++) {
              ////////console.log(datares[a].Title+" ID: "+datares[a].ID);
              //$('#kpi_select_kra').append('<option value="' + datares[a].ID + '">' + datares[a].Title + '</option>');
              //krakey-12
              if(!$("#krakey-"+datares[a].ID+" ").length){
                ////console.log("Not Exist")
                $('#table_kpi').append("<tr><td><div class='ui large label'>"+datares[a].Title+" <i class='delete icon' onClick='delete_kra_onClick("+datares[a].ID+")'></i></div></td><td></td><td></td><td></td></tr>");
              }
              //$('#table_kpi').append("<tr><td>KRA Here</td><td></td><td></td><td></td></tr>");
                 
            }
          },
          error: function (error) {
              alert(JSON.stringify(error));
          }
        });


            if(kpi_score_total_temp == 0){
                $('#kpi_total_progress_id').removeClass('success');
            }

            $('#kpi_total_progress_id').progress({
                percent: kpi_score_total_temp
            });

           // //console.log("kpi_score_total_temp: "+kpi_score_total_temp);



             //////console.log("kpi_score_total_temp: "+kpi_score_total_temp);
             //////console.log("count_total_kpi: "+count_total_kpi);
             
             $('#kpi_count_label_id').html("Total KPI: "+count_total_kpi);

             //alert(kpi_score_total_temp);

             if(kpi_score_total_temp == 100){
              $('#metrics_select_kpi').addClass('disabled');
              $('#metric_title').attr('readonly',"");
              $('#metric_score').attr('readonly',"");
              $('#metric_remarks').addClass('disabled');
              $('#metrics_btn').addClass('disabled');
              $('#metrics_btn_reset').addClass('disabled');
             }else if(kpi_score_total_temp<100){

              $('#metrics_select_kpi').removeClass('disabled');
              $('#metric_title').removeAttr('readonly');
              $('#metric_score').removeAttr('readonly');
              $('#metric_remarks').removeClass('disabled');
              $('#metrics_btn').removeClass('disabled');
              $('#metrics_btn_reset').removeClass('disabled');
             }

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



























      

        function GetItemTypeForListName(name)
        {
            return "SP.Data." + name.charAt(0).toUpperCase() + name.split(" ").join("_x00020_").slice(1) + "ListItem";
        }

        


        function ReadListItem()  
        {  
            var myID = $("#numID").val();
            $.ajax({
                url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('" + listName + "')/items(" + myID + ")",
                method: "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                success: function (data) {

                    $("#txtName").val(data.d.Title);              
                    $("#txtEmployeeID").val(data.d.Employee_x0020_ID);
                    $("#slctDepartment").val(data.d.Department);
                    $("#txtCity").val(data.d.City); 
                    $("#txtContactNumber").val(data.d.Contact_x0020_Number);   
                },
                error: function (data) {
                    alert("No Item found");
                    $("#txtName").val("");              
                    $("#txtEmployeeID").val("");
                    $("#slctDepartment").val("");
                    $("#txtCity").val(""); 
                    $("#txtContactNumber").val("");  
                }
                });
        }

        function UpdateListItem()
        {
            var myID = $("#numID").val();

            var name = $("#txtName").val();              
            var employeeID = $("#txtEmployeeID").val();
            var department = $("#slctDepartment").val();
            var city = $("#txtCity").val(); 
            var contactNumber = $("#txtContactNumber").val();          
            
            var item = {
                "__metadata": { "type": itemType },
                "Title": name,
                "Employee_x0020_ID": employeeID,
                "Department": department,                    
                "City": city,
                "Contact_x0020_Number": contactNumber
            };
        
            $.ajax({
                url:  _spPageContextInfo.webAbsoluteUrl  + "/_api/web/lists/getbytitle('" + listName + "')/items(" + myID + ")",
                type: "POST",
                contentType: "application/json;odata=verbose",
                data: JSON.stringify(item),
                headers: {
                    "Accept": "application/json;odata=verbose",
                    "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                    "IF-MATCH": "*",
                    "X-HTTP-Method":"MERGE",
                },
                success: function (data) {
                    alert("success");
                    ReadListItem() ;
                },
                error: function (data) {
                    alert("failed");
                }
            });
        }
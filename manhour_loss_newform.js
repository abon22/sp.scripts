<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script> 
<script type = "text/javascript" >

    $(document).ready(function() {
        //$("#ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice option[value='Contacted']").remove();
        //$("#ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice").append('<option value="option6">option6</option>');
        $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice']").children('option:not(:first)').remove();
        $("select[id='Status_d3d216f2-8fc7-470a-9f39-d547c50e7682_$DropDownChoice']").children('option:not(:first)').remove();


        $("input[type='radio'][name='Man_x0020_hour_x0020_loss_x0020__0e9c4ac4-f7cf-4b4f-baa1-7de7dce50202_$RadioButtonChoiceField']").change(function() {
            $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice']").children('option:not(:first)').remove();
            $("select[id='Status_d3d216f2-8fc7-470a-9f39-d547c50e7682_$DropDownChoice']").children('option:not(:first)').remove();
            switch ($(this).val()) {
                case 'Late':
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="Contacted">Contacted</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="System Error">System Error</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="No Contact (>15mins)">No Contact (>15mins)</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="No Contact (<15mins)">No Contact (<15mins)</option>');


                    $("select[id='Status_d3d216f2-8fc7-470a-9f39-d547c50e7682_$DropDownChoice'").append('<option value="1st">1st</option>');
                    $("select[id='Status_d3d216f2-8fc7-470a-9f39-d547c50e7682_$DropDownChoice'").append('<option value="2nd">2nd</option>');
                    $("select[id='Status_d3d216f2-8fc7-470a-9f39-d547c50e7682_$DropDownChoice'").append('<option value="3rd">3rd</option>');
                    $("select[id='Status_d3d216f2-8fc7-470a-9f39-d547c50e7682_$DropDownChoice'").append('<option value="4th">4th</option>');
                    $("select[id='Status_d3d216f2-8fc7-470a-9f39-d547c50e7682_$DropDownChoice'").append('<option value="5th">5th</option>');
                    break;

                case 'Absent':
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="Contacted">Contacted</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="Did Not Contact">Did Not Contact</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="System Error">System Error</option>');
                    break;

                case 'Undertime':
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="Contacted">Planned & Approved</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="Contacted">Unplanned</option>');

                    break;

                case 'Leave':
                    //console.log("Undertime");
                    //$("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice']").children('option:not(:first)').remove();


                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="VL w/o pay">VL w/o pay</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="VL with pay">VL with pay</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="Mandatory w/o pay">Mandatory w/o pay</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="Mandatory with pay">Mandatory with pay</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="Maternity w/o pay">Maternity w/o pay</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="Maternity with pay">Maternity with pay</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="Sick Leave w/o payacted">Sick Leave w/o pay</option>');
                    $("select[id='ATU_x0020_Type_318f89df-80b0-4cb1-a690-58ae29a16029_$DropDownChoice'").append('<option value="Sick Leave with pay">Sick Leave with pay</option>');

                    $("select[id='Status_d3d216f2-8fc7-470a-9f39-d547c50e7682_$DropDownChoice'").append('<option value="Approved">Approved</option>');
                    $("select[id='Status_d3d216f2-8fc7-470a-9f39-d547c50e7682_$DropDownChoice'").append('<option value="Rejected">Rejected</option>');
                    $("select[id='Status_d3d216f2-8fc7-470a-9f39-d547c50e7682_$DropDownChoice'").append('<option value="Pending Approval">Pending Approval</option>');


                    break;
            }
        });

    });

</script>
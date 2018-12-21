<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>


  $(document).ready(function()
{
console.log("...data")
//----Chage Save to Submit------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    

//resize Describe the Existing Problem
  document.getElementById("ctl00_ctl43_g_2e68e40f_ad3b_47e2_ab6c_adbac203b4dd_ff91_ctl00_ctl00_TextField_inplacerte").style.width = "1265px";
  document.getElementById("ctl00_ctl43_g_2e68e40f_ad3b_47e2_ab6c_adbac203b4dd_ff91_ctl00_ctl00_TextField_inplacerte").style.height = "300px";

//readonly document no
$("input[id='ctl00_ctl43_g_2e68e40f_ad3b_47e2_ab6c_adbac203b4dd_ff131_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_2e68e40f_ad3b_47e2_ab6c_adbac203b4dd_ff131_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_2e68e40f_ad3b_47e2_ab6c_adbac203b4dd_ff131_ctl00_ctl00_TextField").size = "25";



//resize corrective action steps
document.getElementById("ctl00_ctl43_g_2e68e40f_ad3b_47e2_ab6c_adbac203b4dd_ff111_ctl00_ctl00_TextField").style.width = "1265px";
document.getElementById("ctl00_ctl43_g_2e68e40f_ad3b_47e2_ab6c_adbac203b4dd_ff111_ctl00_ctl00_TextField").style.height = "300px";


//resize Corrective Action Steps
document.getElementById("ctl00_ctl43_g_2e68e40f_ad3b_47e2_ab6c_adbac203b4dd_ff111_ctl00_ctl00_TextField").style.width = "1265px";

var div = document.getElementById('ctl00_ctl43_g_2e68e40f_ad3b_47e2_ab6c_adbac203b4dd_ff101_ctl00_ctl00_TextField_inplacerte');
 div.innerHTML = "<table cellspacing='0' class='ms-rteTable-default' style='width: 1270px; height: 301px;'> <tbody> <tr class='ms-rteTableHeaderRow-default' style='text-align: center;'> <th class='ms-rteTableHeaderEvenCol-default' rowspan='1' colspan='6' style='width: 1%; text-align: center;'> <span style='color: #191919; text-decoration: none solid #191919;'> <strong style='text-decoration: none solid #191919;'>5 Why&#39;s Diagram​ ​ </strong> <span style='text-decoration: none solid #191919;'>​ ​</span> ​ ​</span></th> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%; text-align: center;'> <strong>​Measurements</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%; text-align: center;'> <strong>​Materials</strong></td> <td class='ms-rteTableEvenCol-default' style='width: 4%; text-align: center;'> <strong>​Methods</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%; text-align: center;'> <strong>​Machines</strong></td> <td class='ms-rteTableEvenCol-default' style='width: 4%; text-align: center;'> <strong>​Manpower</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%; text-align: center;'> <strong>​Environment</strong></td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​<br/></td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> </tbody></table>";





})



</script>


$(document).ready(function(){

	$("span.hillbillyForm").each(function() {
		displayName = $(this).attr("data-displayName");

		displayName  = displayName.replace(/&(?!amp;)/g,'&amp;'); 
		elem = $(this);
		$("table.ms-formtable td").each(function(){ if (this.innerHTML.indexOf('FieldName="'+displayName+'"') != -1){ $(this).contents().appendTo(elem); } }); });
});

// JavaScript Document

var $state="";	//globals as we have callbacks that need this data.
var $xmldata="";	

$(document).ready(function(){
	$.ajax({							//get the XML data
 		 	url: "xml/xmlfiltering_copy_v1.xml",	//URL to get the data from, this does work in sub directory
 		 	success: loadTable			//callback on success
	});				   
});

function changeFilter(ctry){
	$state=ctry;				//set global state variable to changed state
	$(".datarow").remove();		//clear table
	loadTable($xmldata);		//rebuild
}

function changeProgram(prgm){
	$program=prgm;				//set global state variable to changed state
	$(".datarow").remove();		//clear table
	loadTable($xmldata);		//rebuild
}


function loadTable(data){
	$xmldata=data;					//set our global XML variable to the data from the callback for re-use later.
	$(data).find("vendor state:contains('"+$state+"')").parent().each(function(){ //find each row in the XML with the state we want to show.
		
		var $this=$(this);							//cache selector 
		var $program=$this.find("program").text();		//get program
		var $company=$this.find("company").text();			//get companyephone
		var $state=$this.find("state").text();	//get state
		var $city=$this.find("city").text();	//get City
					
		$("#datatable").append("<tr class='datarow'><td>"+$program+"</td><td>"+$company+"</td><td>"+$city+"</td><td>"+$state+"</td></tr>"); //output table row
	});	
	zebraStripe();
}


//function from previous tutorial with minor change to selector to zebrastripe the table.
function zebraStripe(){
	$("#datatable").each(function(){   
 	var $s=0;
		$(this).find("tr").each(function(){   
			var $t = $(this).children("td");
			$s++; 
			if($s%2==1)
				$t.addClass("stripe"); 
			else
				$t.removeClass("stripe");
		});
  	});
}

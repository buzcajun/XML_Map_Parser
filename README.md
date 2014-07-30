XML_Map_Parser
==============

This is the XML part of the AM Chart Javascript map 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
<style>
body {
	background-color: #333;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
	width: 90%;
	margin: 0px auto;
	color: white;
}
a {
	color: #69C;
}
th {
	text-align: left;
	background-color: #555;
}
td {
	background-color: black;
}

.stripe{
	background-color: #222;	
}

</style>
<link rel="stylesheet" type="text/css" href="css/xmlfiltering_copy.css">
</head>
<body>
<h1>Filtered XML Copy</h1>
<p><strong>Demo:</strong>
  <!-- start of code -->
<div id="criteria"> Selection:
  <input type='radio' name='select1' value="" checked="CHECKED" onChange="changeFilter(this.value);">
  ALL
  <input type='radio' name="select1" value="AL" onChange="changeFilter(this.value);">
  AL
  <input type='radio' name='select1' value="CA" onChange="changeFilter(this.value);">
  CA
  <input type='radio' name='select1' value="CO" onChange="changeFilter(this.value);">
  CO
  <input type='radio' name='select1' value="OH" onChange="changeFilter(this.value);">
  OH </div>
 <div id="criteria"> Program:
  <input type='radio' name='select1' value="" checked="CHECKED" onChange="changeProgram(this.value);">
  ALL
  <input type='radio' name="select1" value="GDSO" onChange="changeProgram(this.value);">
  GDSO
  <input type='radio' name='select1' value="SLS" onChange="changeProgram(this.value);">
  SLS
  <input type='radio' name='select1' value="ORION" onChange="changeProgram(this.value);">
  ORION
   </div>
<p>
<table id='datatable' width="90%" cellpadding="7" cellspacing="1">
  <tr id='tableheader'>
    <th>Program</th>
    <th>Company</th>
    <th>City</th>
    <th>State</th>
  </tr>
</table>
</p>
<script src="js/xmlfiltering_copy.js"></script>
<!-- end of code -->

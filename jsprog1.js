function myFunction() 
{
	var v_name = document.forms[0].name.value
    var v_email = document.forms[0].mailid.value

	window.alert("You have entered the following details \n"
	 + v_name + "\n" 
	 + v_email );
}
function validinput(inputtxt) { 
  var letters = new RegExp(/^[A-Za-z]+$/);
  return letters.test(inputtxt); 
}
$(document).ready(function() {
$("#submit").click(function() {
var name = $("#name").val();
var message = $("#message").val();
var country = $("#country").val();
$("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (validinput(name)&& country!='' && name!='') {
	alert("Thanks for sending the message. I will be in touch.");
}
else {
	alert("Please enter a valid name and/or select a country.");
}
});
});

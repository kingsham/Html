
function calculateTip() {
var bill= document.getElementById("Bamnt").value;
var rate= document.getElementById("rateService").value;
var numofPeople= document.getElementById("people").value;
		// this validates the input
		if (bill === "" || rate == 0) {
		alert("Please enter the amount");
		return;
}
//Checks to see if user input is empty or less than or equal to 1
 if (numofPeople === "" || numofPeople <= 1) {
   numofPeople= 1;
   document.getElementById("each").style.display= "none";
} 
 else {
	document.getElementById("each").style.display= "block";
}
//Calculate tip	
var total =(bill * rate) / numofPeople;
//round to two decimal places
total= Math.round(total * 100) / 100;
//next line allows us to always have two digits after decimal point 
total= total.toFixed(2);
//Display the tip 
document.getElementById("total").style.display= "block";
document.getElementById("tip").innerHTML= total;

}
// Hide the tip amount on load
document.getElementById("total").style.display= "none";
document.getElementById("each").style.display= "none";
document.getElementById("yes").onclick = function() {
	calculateTip(); // When user clicks on button it will call the function 
};

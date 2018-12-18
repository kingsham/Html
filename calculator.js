
function calculateTip() {
var bill= document.getElementById("Bamnt").value;
var rate= document.getElementById("rateService").value;
var numofPeople= document.getElementById("people").value;
		
		if (bill === "" || rate == 0) {
		alert("Please enter the amount");
		return;
}
 if (numofPeople === "" || numofPeople <= 1) {
   numofPeople= 1;
   document.getElementById("each").style.display= "none";
} 
 else {
	document.getElementById("each").style.display= "block";
}
var total =(bill * rate) / numofPeople;

total= Math.round(total * 100) / 100;

total= total.toFixed(2);

document.getElementById("total").style.display= "block";
document.getElementById("tip").innerHTML= total;

}

document.getElementById("total").style.display= "none";
document.getElementById("each").style.display= "none";
document.getElementById("yes").onclick = function() {
	calculateTip();
};
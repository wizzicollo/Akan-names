//hide the alert button
document.getElementById("alert1").style.display = "none";
document.getElementById("alert2").style.display = "none";

//declare an array for my names
var femaleAkanNames = ["Akosua","Adwoa" ,"Abenaa" ,"Akua" ,"Yaa" ,"Afua" ,"Ama"];

var maleAkanNames = ["Kwasi","Kwadwo", "Kwabena" ,"Kwaku", "Yaw", "Kofi", "Kwame"];

var daysWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//calling functions
function getAkanName() {
	var year = parseInt(document.getElementById("year").value);
	var month = parseInt(document.getElementById("month").value);
	var day = parseInt(document.getElementById("day").value);
	var male = document.getElementById("male");
	var female = document.getElementById("female");

	//validate day
	if (day <= 0 || day >= 32) {
		alert(
			"You have entered incorrect day! Kindly reset"
		);
    }
    //validate month
	if (month <= 0 || month >= 13) {
		alert(
			"You have entered incorrect month! Kindly reset"
		);
    }
    //validate year
	if (year <= 0 || year >2020) {
		alert(
			"You have entered incorrect year! Kindly reset"
		);
	}
    var day = new Date(year + "/" + month + "/" + day);
    
	//storing date in variable date of birth
	var dateOfBirth = day.getDay();
	if (male.checked == true) {
		document.getElementById("alert1").style.display = "block";
		document.getElementById("span1").innerHTML =
			"You were born on, " + daysWeek[dateOfBirth];
		document.getElementById("span2").innerHTML =
			"your Akan Name is " + maleAkanNames[dateOfBirth];
	} else if (female.checked == true) {
		document.getElementById("alert1").style.display = "block";
		document.getElementById("span1").innerHTML = daysWeek[dateOfBirth];
		    "You were born on, " + daysWeek[dateOfBirth];
		document.getElementById("span2").innerHTML = femaleAkanNames[dateOfBirth];
		    "your Akan Name is " + femaleAkanNames[dateOfBirth];
	}
}

// button refreshes the whole site
function refreshPage() {
	window.location.reload();
}
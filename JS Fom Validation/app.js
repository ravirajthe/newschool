var submit = document.getElementById('submitBtn');

submit.addEventListener('click',function (e) {
	e.preventDefault();
	
	validateName();
	validateEmail();
	validateZipCode();
	validateCountry();
	
	if (validateName() && validateEmail() && validateZipCode() && validateCountry() ) {
		console.log("form submitted");
		var request = new XMLHttpRequest();
		console.log(request);
		return true;
		
	}
	else{
			console.log("form  not sumbitted");
			return false;
	}
});

// Name field Validation

function validateName() {
	var name = document.getElementById('name').value;
	var nameReg = /^([a-zA-Z\s]{3,})$/;
	var show_nameError= document.getElementById('nameError');
	var rightname = document.getElementById('rightname');
	if (name=="") {
		var nameErr= "* Name field cannot be blank";
		show_nameError.innerHTML = nameErr;
		return false;

	}
	 else if (!name.match(nameReg)) {
		var nameErr = "Only letters can allowed for name";
		show_nameError.innerHTML = nameErr;
		rightname.innerHTML = "";
		return false;
	}
	else if(name.match(nameReg)){
		rightname.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i>";
		return true;	
	}
}

// Email field Validation
function validateEmail() {
	var email = document.getElementById('email').value;
	var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var show_emailError= document.getElementById('emailError');
	var rightemail = document.getElementById('rightemail');
	if (email=="") {
		var emailErr= "Email field cannot be blank";
		show_emailError.innerHTML = emailErr;
		return false;
	}
	 else if (!email.match(emailReg)) {
		var emailErr = "Plese input a valid email address";
		show_emailError.innerHTML = emailErr;
		rightemail.innerHTML="";
		return false;
	}
	else if(email.match(emailReg)){
		rightemail.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i>";
		return true;
	}
}

// Zip Code field Validation
function validateZipCode() {
	var zipcode = document.getElementById('zipcode').value;
	var zipReg = "(^([0-9]{5})$)|(^([0-9]{6})$)";
	var show_zipError= document.getElementById('zipError');
	var rightzip = document.getElementById("rightzip");
	if (zipcode=="") {
		var zipErr= "Zip code field cannot be blank";
		show_zipError.innerHTML = zipErr;
		return false;
	}
	else if (!zipcode.match(zipReg)) {
		var zipErr = "Plese input a valid zip  code";
		show_zipError.innerHTML = zipErr;
		rightzip.innerHTML = "";
		return false;
	}
	else if(zipcode.match(zipReg)){
		rightzip.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i>";
		return true;

	}
}
// country field name
function validateCountry() {
	var country = document.getElementById("country").value;
	var show_countryError = document.getElementById("countryError");
	if (country=="-1") {
		var countryErr = "Plese select country";
		show_countryError.innerHTML = countryErr;
		return false;

	}
	else if(country!="-1"){
		show_countryError.innerHTML = "";
		return true;
	}
}
// hide error function
function hideError(id) {
			var fetchId = document.getElementById(id);
			fetchId.innerHTML = "";		
}







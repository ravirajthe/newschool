var submit = document.getElementById('submitBtn');

submit.addEventListener('click',function (e) {
	e.preventDefault();
	
	validateName();
	validateEmail();
	
	if (validateName() && validateEmail() ) {
		console.log("form submitted");
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
	if (name=="") {
		var nameErr= "Name field cannot be blank";
		show_nameError.innerHTML = nameErr;
		return false;

	}
	 else if (!name.match(nameReg)) {
		var nameErr = "Only letters can allowed for name";
		show_nameError.innerHTML = nameErr;
		return false;
	}
	else if(name.match(nameReg)){
		return true;	
	}
}

// Email field Validation
function validateEmail() {
	var email = document.getElementById('email').value;
	var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var show_emailError= document.getElementById('emailError');
	if (email=="") {
		var emailErr= "Email field cannot be blank";
		show_emailError.innerHTML = emailErr;
		return false;
	}
	 else if (!email.match(emailReg)) {
		var emailErr = "Plese input a valid email address";
		show_emailError.innerHTML = emailErr;
		return false;
	}
	else if(email.match(emailReg)){
		return true;
	}
}


// hide error function
function hideError(id) {
			var fetchId = document.getElementById(id);
			fetchId.innerHTML = "";		
}







const phone = document.getElementById("phone_number") ;
	const email = document.getElementById("email") ;
	if (phone != null){
		phone.onclick = function() {
		navigator.clipboard.writeText(phone.innerText)
		showToast()
		}
	}

	if (email != null){
		email.onclick = function() {
		navigator.clipboard.writeText(email.innerText)
		showToast()
		}
	}


	function showToast() {
	// Get the snackbar DIV
	var x = document.getElementById("snackbar");
		if(x != null){
			x.classList.add("show");
			if(x != null){
				// After 3 seconds, remove the show class from DIV
				setTimeout(() => x?.classList.remove("show"), 3000);
			}
		}
	}
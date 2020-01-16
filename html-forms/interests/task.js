const interestCheck = document.querySelectorAll('.interest__check');

interestCheck[0].addEventListener('change', function() {
	if (interestCheck[0].checked) {
		interestCheck[1].checked = true;
		interestCheck[2].checked = true;
	} else {
		interestCheck[1].checked = false;
		interestCheck[2].checked = false;
	}
})

interestCheck[3].addEventListener('change', function() {
	if (interestCheck[3].checked) {
		interestCheck[4].checked = true;
		interestCheck[5].checked = true;
	} else {
		interestCheck[4].checked = false;
		interestCheck[5].checked = false;
	}
})
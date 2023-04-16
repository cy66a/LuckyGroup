const input = document.querySelector('.search__input');

input.addEventListener('input', () => {
	const cansel = document.querySelector('.search__cancel-button');

	if (input.value.length > 0) {
		cansel.classList.add('active');

		cansel.addEventListener('click', () => {
			input.value = "";
			cansel.classList.remove('active');
		})
	} else {
		cansel.classList.remove('active');
	}

})


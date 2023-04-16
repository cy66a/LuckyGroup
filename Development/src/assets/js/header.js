window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	const scrollPosition = window.scrollY;

	if (scrollPosition > 100) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
})
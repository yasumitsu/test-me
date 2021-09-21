document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();

	const { value } = document.querySelector('input');

	const header = document.querySelector('h1');

	header.innerHTML = value.includes('@') ? 'looks good' : 'invalid email';
});

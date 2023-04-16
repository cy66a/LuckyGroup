document.addEventListener("DOMContentLoaded", () => {
	// Отправка Fetch-запроса
	fetch("https://baconipsum.com/api/?type=lucky")
		.then(response => {
			if (!response.ok) {
				throw new Error("AJAX Error: " + response.statusText);
			}
			return response.json();
		})
		.then(data => {
			const text = data[0]; // Получение текста из ответа
			document.querySelector(".intro__text").textContent = text; // Добавление текста в элемент <p>
		})
		.catch(error => {
			console.error(error);
		});
});
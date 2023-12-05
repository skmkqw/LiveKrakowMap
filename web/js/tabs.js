/*--------------------TABS--------------------*/

const tabsTitle = document.querySelectorAll('.tabs-title');
const tabsContent = document.querySelectorAll('.tab');


// Перебираем все заголовки табов и вешаем на них click
tabsTitle.forEach(item => item.addEventListener('click', event => {

	// Получаем атрибут заголовка на который мы кликнули конкретно!
	const tabsTitleTarget = event.target.getAttribute('data-tab');

	// Удаляем от всех заголовков класс active-tab
	tabsTitle.forEach(element => element.classList.remove('active'));

	// Добавляем всем tab__content класс hidden-tab-content, который скрывает содержимое!
	tabsContent.forEach(element => element.classList.add('hidden'));

	// Добавляем класс active-tab, заголовку который нажали в данный момент!
	item.classList.add('active');

	// Удаляем класс hidden-tab-content, чтобы показывалось его содержимое!
	document.getElementById(tabsTitleTarget).classList.remove('hidden');

}));

// Мы указываем, какая конктретно вкладка должна быть активна при загрузке страницы со старта,
// если нужно, чтобы все вкладки ыли скрыты изначально, то удалите код ниже!
document.querySelector('[data-tab="news"]').classList.add('active');
document.querySelector('#news').classList.remove('hidden');

/*--------------------/TABS--------------------*/
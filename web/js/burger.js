const menu = document.querySelector('.menu-body')
const menuBtn = document.querySelector('.menu-icon')
const body = document.querySelector('body')

if (menu && menuBtn) {
	menuBtn.addEventListener('click', function () {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.querySelectorAll('.menu-link').forEach(link => {
		link.addEventListener('click', function () {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	});
}
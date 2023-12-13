// Получаем все ссылки меню
const menuLinks = document.querySelectorAll('.language-item');

// Функция для выделения ссылки при клике
function handleClick(event) {
  // Удаляем класс active у всех ссылок меню
  menuLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Добавляем класс active к нажатой ссылке
  event.target.classList.add('active');
}

// Добавляем обработчик события click к каждой ссылке меню
menuLinks.forEach(link => {
  link.addEventListener('click', handleClick);
});
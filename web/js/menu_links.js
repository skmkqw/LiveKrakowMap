// Получаем все ссылки меню
const langOption = document.querySelectorAll('.menu-link');

// Функция для выделения ссылки при клике
function handleClick(event) {
  // Удаляем класс active у всех ссылок меню
  langOption.forEach(link => {
    link.classList.remove('active');
  });

  // Добавляем класс active к нажатой ссылке
  event.target.classList.add('active');
}

// Добавляем обработчик события click к каждой ссылке меню
langOption.forEach(link => {
  link.addEventListener('click', handleClick);
});
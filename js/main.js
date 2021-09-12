// sidebar
const sidebarToggleBtn = document.querySelector(".menu-icon-wrapper"); // находим иконку
const menuIcon = document.querySelector(".menu-icon"); // находим меню
const sidebar = document.querySelector(".sidebar"); // находим sidebar

// Клик по кнопке для скрытия / показа фильтра и изменения иконки
sidebarToggleBtn.onclick = function () {
  // настраиваем onclick
  menuIcon.classList.toggle("menu-icon-active"); // добавление и удаление у меню класса menu-icon-active
  sidebar.classList.toggle("sidebar--mobile-active"); // добавление и удаление у sidebar класса sidebar--mobile-active
};

// показ дополнительных карточек
const btnShowMoreCards = document.querySelector(".btn-more"); // находим кнопку
const hiddenCards = document.querySelectorAll(".card-link--hidden");

// клик по кнопке и показ трех карточек
btnShowMoreCards.addEventListener("click", function () {
  hiddenCards.forEach(function (card) {
    card.classList.remove("card-link--hidden");
  });
});

// показать/скрыть виджеты
const widget = document.querySelectorAll(".widget"); // нахожу все widget

widget.forEach(function (widget) {
  // обхожу через forEach
  widget.addEventListener("click", function (e) {
    // в widget слушаю click
    if (e.target.classList.contains("widget__title")) {
      // если есть widget__title значит клик по заголовку
      e.target.classList.toggle("widget__title--active");
      // добавляю дополнительный класс widget__title--active, класс который будет переварачивать стрелочку
      e.target.nextElementSibling.classList.toggle("widget__body--hidden");
      // нахожу следующего соседа и добавляю либо удаляю класс widget__body--hidden (открываем либо закрываем widget)
    }
  });
});

// Location кнопка ЛЮБАЯ

const checkBoxAny = document.querySelector("#location-05");
// нахожу по id  кнопку Любая
const topLocationCheckboxes = document.querySelectorAll(
  "[data-location-param]"
);
// нахожу все location__checkbox

// клик по кнопке ЛЮБАЯ и отключение других чекбоксов
checkBoxAny.addEventListener("change", function () {
  //слушаю клик по значению change
  if (checkBoxAny.checked) {
    // если checkbox включился то
    topLocationCheckboxes.forEach(function (item) {
      //тогда все checkbox я снимаю...
      item.checked = false; // ставлю false
    });
  }
});

// Выбор кнопки ЛЮБАЯ и отключение других кнопок
topLocationCheckboxes.forEach(function (item) {
  item.addEventListener("chenge", function () {
    if (checkBoxAny.checked) {
      checkBoxAny.checked = false;
    }
  });
});

// Показать еще 3 доп опции с чекбоксами в фильтре
const showMoreOptions = document.querySelector(".widget__btn-show-hidden"); //нахожу кнопку
const hiddenCheckBoxes = document.querySelectorAll(".checkbox--hidden"); //находу все доп 3 опции с классом checkbox--hidden

showMoreOptions.onclick = function (e) {
  // клик по кнопке
  e.preventDefault();
  // Если блоки были скрыты - значит показываем
  if (showMoreOptions.dataset.options == "hidden") {
    hiddenCheckBoxes.forEach(function (item) {
      item.style.display = "block";
    });
    showMoreOptions.innerText = "Скрыть дополнительные опции";
    showMoreOptions.dataset.options = "visible";
  }

  // Если блоки были видны - значит скрываем
  else if (showMoreOptions.dataset.options == "visible") {
    hiddenCheckBoxes.forEach(function (item) {
      item.style.display = "none";
    });
    showMoreOptions.innerText = "Показать ещё";
    showMoreOptions.dataset.options == "hidden";
  }
};

/* Код для кнопки, html код строка 17 и строка 18, в main.css со строки 591 до строки 664*/
//document.querySelector('.menu-icon-wrapper').onclick = function () {
//  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
//}

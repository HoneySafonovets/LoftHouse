const navToggleStyle = document.querySelector('.nav-icon');
const navBtn = document.querySelector('.nav-icon-btn');
const headerMobileBtn = document.querySelector('.header__top-row');

// headerMobileBtn.addEventListener('click',)
// navBtn.addEventListener('click', openNavMenu());

navBtn.onclick = function() {
  navToggleStyle.classList.toggle('nav-icon--active');
  headerMobileBtn.classList.toggle('header__top-row--mobile');
  document.body.classList.toggle('no-scroll');
}

// Phone mask
mask('[data-tell-input]');

const phoneInputs = document.querySelectorAll('[data-tell-input]');
phoneInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value == '+') input.value = '';
  })
  input.addEventListener('blur', () => {
    if (input.value == '+') input.value = '';
  })
});

// Yandex map
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
  // Создание карты.
  let myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.943543, 30.338928],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16,
  });

  let myPlacemark = new ymaps.Placemark([59.943543, 30.338928],
    {
      balloonContent: 
      `
      <div class="balloon">
        <div class="balloon__adress">Наб. реки Фонтанки 10-15</div>
        <div class="balloon__contacts">
          <a href="tel:+78121234567">+7 (812) 123-45-67</a>
        </div>
      </div>
      `
    },
    {
    iconLayout: 'default#image',
    iconImageHref: './img/map/location-pin.svg',
    icon_imagesize: [40, 40],
    iconImageOffset: [-20, -40]
  });

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип

  // myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  // myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  myMap.geoObjects.add(myPlacemark);
  myPlacemark.balloon.open();
}
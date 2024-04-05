$(document).ready(function () {
  $('.header__menu-burger').click(function () {
    $('.header__menu').toggleClass('header__menu-open');
    $('.header__menu-burger').toggleClass('header__menu-remove');
    $('body').toggleClass('header__menu-fixed');
  });
});

$('.services__slider-wrapper').slick({
  speed: 500,
  vertical: true,
  asNavFor: '.services__slider-wrapper__info',
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});
$('.services__slider-wrapper__info').slick({
  speed: 500,
  fade: true,
  arrows: false,
  asNavFor: '.services__slider-wrapper',
});

$(document).ready(function () {
  $('.contact__form').submit(function (event) {
    event.preventDefault();

    var templateParams = {
      name: $('[name="Ім’я"]').val(),
      phone: $('[name="Телефон"]').val(),
      email: $('[name="Електрона пошта"]').val(),
      message: $('[name="Коментар..."]').val(),
    };

    emailjs.send('service_7gof71f', 'template_lji0grl', templateParams).then(
      function (response) {
        // Вдало відправлено
        alert('Ваше повідомлення було успішно відправлено.');
        // Очистити форму після успішного відправлення
        $('.contact__form')[0].reset();
      },
      function (error) {
        // Помилка під час відправлення
        alert('Сталася помилка під час відправлення повідомлення.');
      },
    );
  });
});

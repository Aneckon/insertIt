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
  //E-mail Ajax Send
  $('form').submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', //Change
      data: th.serialize(),
    }).done(function () {
      alert('Thank you!');
      setTimeout(function () {
        // Done Functions
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});

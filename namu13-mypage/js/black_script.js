$('#hamburger').click(function () {
  $('.bar1').toggleClass('deg45 white');
  $('.bar2').toggleClass('y90deg white');
  $('.bar3').toggleClass('deg-45 white');

  if ($('#lnb').hasClass('active')) {
    $('#lnb').fadeOut(300).removeClass('active');
    $('body, html').removeClass('no-scroll');
       $('.logo').show();
    $('.logo2').hide();
  } else {
    $('#lnb').fadeIn(300).addClass('active');
    $('body, html').addClass('no-scroll');
       $('.logo2').show();
    $('.logo').hide();
  }
});

$(window).resize(function () {
  if ($(window).width() >= 1024) {
    // PC 화면에서는 메뉴 항상 열림, 햄버거 숨김, 스크롤 가능
    $('#lnb').show().removeClass('active');
    $('.bar1').removeClass('deg45 white');
    $('.bar2').removeClass('y90deg white');
    $('.bar3').removeClass('deg-45 white');
    $('.hamburger').hide();
    $('body, html').removeClass('no-scroll');
  } else {
    // 모바일/태블릿 화면: 메뉴 닫고 햄버거 버튼 보여줌
    $('#lnb').hide().removeClass('active');
    $('.bar1, .bar2, .bar3').removeClass('deg45 y90deg deg-45');
    $('.hamburger').show();
    $('body, html').removeClass('no-scroll');
  }
});
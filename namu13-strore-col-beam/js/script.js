$('#hamburger').click(function () {
    $('.bar1').toggleClass('deg45');
    $('.bar2').toggleClass('y90deg');
    $('.bar3').toggleClass('deg-45');
    $('#lnb').fadeToggle(300);
    $('html, body').toggleClass('no-scroll'); // 스크롤 제어 원할 때
});


// 창 크기 바뀔 때도 다시 체크
$(window).resize(function () {
    if ($(window).width() < 1024) {
        $('#lnb').hide();
        $('.bar1, .bar2, .bar3').removeClass('deg45 y90deg deg-45');
        $('.hamburger').show();
        $('body').removeClass('no-scroll');
    } else {
        $('#lnb').show();
        $('.hamburger').hide();
        $('html, body').removeClass('no-scroll');
    }
});





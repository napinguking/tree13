let isMobileMenuOpen = false;
let isPcMenuOverlayOpen = false; // PC 메뉴 오버레이 상태

// 햄버거 클릭
$('#hamburger').click(function () {
  $('.bar1').toggleClass('deg45');
  $('.bar2').toggleClass('y90deg');
  $('.bar3').toggleClass('deg-45');

  const nowOpen = !$('#lnb').hasClass('active');

  if (nowOpen) {
    $('#lnb').fadeIn(300).addClass('active');
    $('body, html').addClass('no-scroll');
    isMobileMenuOpen = true;
  } else {
    $('#lnb').fadeOut(300).removeClass('active');
    $('body, html').removeClass('no-scroll');
    isMobileMenuOpen = false;
  }
});

// PC 스크롤 시 메뉴 오버레이 토글
window.addEventListener('wheel', (e) => {
  if (window.innerWidth <= 1023) return;

  if (e.deltaY > 0) {
    $('#overlay').css('background', 'rgba(34, 111, 193, 0.5)');
    $('#menuOverlay').addClass('visible');
    $('.scroll-indicator').fadeOut(300);
    isPcMenuOverlayOpen = true;
  } else {
    $('#overlay').css('background', 'transparent');
    $('#menuOverlay').removeClass('visible');
     $('.scroll-indicator').fadeIn(300); 
    isPcMenuOverlayOpen = false;
  }
});

let touchStartY = 0;
let touchEndY = 0;

// 모든 화면 크기에서 터치 가능하게
document.body.addEventListener('touchstart', function (e) {
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.body.addEventListener('touchmove', function (e) {
  touchEndY = e.touches[0].clientY;
}, { passive: true });

document.body.addEventListener('touchend', function () {
  const deltaY = touchStartY - touchEndY;

  // 화면 위로 드래그 → 메뉴 열기
  if (deltaY < -30 && !isMobileMenuOpen) {
    $('#menuOverlay').fadeIn(300).addClass('visible');
    $('#overlay').css('background', 'rgba(34, 111, 193, 0.5)');
    isMobileMenuOpen = true;
  }

  // 화면 아래로 드래그 → 메뉴 닫기
  else if (deltaY > 30 && isMobileMenuOpen) {
    $('#menuOverlay').fadeOut(300).removeClass('visible');
    $('#overlay').css('background', 'transparent');
    isMobileMenuOpen = false;
  }
}, { passive: true });



// 리사이즈 시 상태 유지 처리
let previousWidth = window.innerWidth;

$(window).on('resize', function () {
  const width = window.innerWidth;

  // 🔹 태블릿 이하로 진입 (1024 → 1023 이하로 변경된 순간)
  if (previousWidth > 1023 && width <= 1023) {
    $('#hamburger').css('display', 'flex');

    // 📌 햄버거 메뉴는 초기화하지 않고 유지
    if (isMobileMenuOpen) {
      $('#lnb').show().addClass('active');
      $('body, html').addClass('no-scroll');
    } else {
      $('#lnb').hide().removeClass('active');
      $('body, html').removeClass('no-scroll');
    }

    // 📌 오직 menuOverlay만 닫고 상태 초기화
    $('#menuOverlay').removeClass('visible');
    $('#overlay').css('background', 'transparent');
    isPcMenuOverlayOpen = false;

    $('.bar1, .bar2, .bar3').removeClass('deg45 y90deg deg-45');
  }

  // 🔹 PC로 진입 (1023 → 1024 이상으로 변경된 순간)
  else if (previousWidth <= 1023 && width > 1023) {
    $('#hamburger').hide();
    $('#lnb').show().removeClass('active');
    $('body, html').removeClass('no-scroll');

    if (isPcMenuOverlayOpen) {
      $('#menuOverlay').addClass('visible');
      $('#overlay').css('background', 'rgba(34, 111, 193, 0.9)');
    } else {
      $('#menuOverlay').removeClass('visible');
      $('#overlay').css('background', 'transparent');
    }

    $('.bar1, .bar2, .bar3').removeClass('deg45 y90deg deg-45');
    isMobileMenuOpen = false; // 모바일 상태 초기화
  }

  // 마지막으로 현재 너비 저장
  previousWidth = width;
});



// 초기 상태 설정
$(document).ready(function () {
  if (window.innerWidth <= 1023) {
    $('#hamburger').css('display', 'flex');
    $('#lnb').hide();
  } else {
    $('#hamburger').hide();
    $('#lnb').show();
  }
});

//$(document).ready(function () {
//  if (window.innerWidth < 1024) {
//    $('.scroll-indicator').hide();
//  }
//});

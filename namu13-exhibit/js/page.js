// #page-2,#page-3 숨김
$('.page-2,.page-3').hide();

// .btn-1에 check 클래스 추가
$('.tab-1').addClass('check');


/*
.btn-1 클릭하면
  - check 클래스를 가진 요소는 check 클래스 제거
  - this에 check 클래스 추가
  - section 숨김
  - #page-1 보임
*/
$('.tab-1').click(function () {
  $('.check').removeClass('check');
  $(this).addClass('check');
  $('article').hide();
  $('.page-1').show();
});

/*
.btn-2 클릭하면
  - check 클래스를 가진 요소는 check 클래스 제거
  - this에 check 클래스 추가
  - section 숨김
  - #page-2 보임
*/
$('.tab-2').click(function () {
  $('.check').removeClass('check');
  $(this).addClass('check');
  $('article').hide();
  $('.page-2').show();
});

/*
.btn-3 클릭하면
  - check 클래스를 가진 요소는 check 클래스 제거
  - this에 check 클래스 추가
  - section 숨김
  - #page-3 보임
*/
$('.tab-3').click(function () {
  $('.check').removeClass('check');
  $(this).addClass('check');
  $('article').hide();
  $('.page-3').show();
});

// 스크롤 시 요소 나타나게 하는 Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1
});

// .scroll-fade-up 클래스가 붙은 모든 요소에 observer 적용
document.querySelectorAll('.scroll-fade-up').forEach(el => {
  observer.observe(el);
});

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

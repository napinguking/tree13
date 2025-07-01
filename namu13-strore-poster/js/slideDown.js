// .sub 숨김
$('.sub').hide();

/*
클릭할 때의 경우의 수 3
1. 모든 서브메뉴 숨김 (active 클래스 없음)
2. 클릭한 메뉴의 서브가 펼쳐져 있을 때 (this에 active 클래스)
3. 다른 메뉴의 서브가 펼쳐져 있을 때 (다른 요소에 active 클래스)
*/

/*
css의 가상클래스 active(마우스 버튼을 누르고 있는 상태) 활용
addClass로 active클래스 추가/제거
hasClass로 active클래스 가지고 있는지 확인
*/

/*
.menu>li>span 클릭하면
1. 모든 .sub 접기
2-1. 만약 클릭한 span태그의 동생인 .sub가 펼쳐진 상태면
  (this가 active 클래스를 가지고 있으면)
  - active 클래스 제거
2-2. 아니면
  - this(지금 클릭한 요소)의 동생인 .sub 펼침
  - 다른 모든 요소의 active 클래스 제거 (접힘)
  - this의 active 상태를 유지
*/
$('.stnav>li>span').click(function () {
  $('.sub').slideUp(200);
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(this).next('.sub').slideDown(200);
    // next()는 이동메소드 중 위치이동메소드
    $('.active').removeClass('active');
    $(this).addClass('active');
  };
});
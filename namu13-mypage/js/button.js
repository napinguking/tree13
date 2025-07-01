$(document).ready(function () {
  $('.wishlist-list').on('click', '.btn-delete', function () {
    $(this).closest('.wishlist-item').remove();

    // 항목이 모두 삭제되면 메시지 출력
    if ($('.wishlist-item').length === 0) {
      $('.wishlist-list').html('<p class="empty-wishlist-msg">관심상품이 없습니다.</p>');
    }
  });
});


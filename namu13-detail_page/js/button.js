$(document).ready(function () {
    const $quantityInput = $('.quantity-control input');
    const $minusBtn = $('.quantity-control button').eq(0);
    const $plusBtn = $('.quantity-control button').eq(1);

    $minusBtn.click(function () {
      let current = parseInt($quantityInput.val()) || 0;
      if (current > 0) {
        $quantityInput.val(current - 1);
      }
    });

    $plusBtn.click(function () {
      let current = parseInt($quantityInput.val()) || 0;
      $quantityInput.val(current + 1);
    });
  });

$(document).ready(function () {
  $('.cart-button').click(function () {
    $('#cartModal').fadeIn();
  });

  $('#continueBtn').click(function () {
    $('#cartModal').fadeOut();
  });

  $('#goCartBtn').click(function () {
    window.location.href = '../cart/cart.html'; // 장바구니 페이지 경로 수정 필요
  });
});



$(document).ready(function () {
  let isWished = false;

  $('.wishlist-button').click(function () {
    if (!isWished) {
      isWished = true;
      $(this).addClass('active');
      showWishlistPopup("관심상품이 등록되었습니다");
    } else {
      isWished = false;
      $(this).removeClass('active');
      // 해제 시 팝업 없음
    }
  });

  function showWishlistPopup(message) {
    $('#wishlistMessage').text(message);
    $('#wishlistPopup').fadeIn(200);

    setTimeout(function () {
      $('#wishlistPopup').fadeOut(200);
    }, 1000);
  }
});






















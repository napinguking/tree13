document.addEventListener("DOMContentLoaded", function () {
  const checkAll = document.querySelector(".check-all input[type='checkbox']");
  const itemChecks = document.querySelectorAll(".cart-item input[type='checkbox']");
  const totalPriceEl = document.querySelector(".final-price");
  const summaryTotalEl = document.querySelector(".cart-summary span");
  const deliveryEl = document.querySelector(".cart-summary p:nth-of-type(2) span");

  function updateTotal() {
    let total = 0;

    document.querySelectorAll(".cart-item").forEach(item => {
      const checkbox = item.querySelector("input[type='checkbox']");
      const price = parseInt(item.querySelector(".cart-price").dataset.price, 10);
      const qty = parseInt(item.querySelector(".cart-quantity input").value, 10);

      if (checkbox.checked) {
        total += price * qty;
      }
    });

    let finalTotal = total;
    let deliveryText = '';

    if (total > 30000) {
      deliveryText = '0원 <s>3,000원</s>';
    } else if (total > 0) {
      deliveryText = '3,000원';
      finalTotal += 3000;
    } else {
      deliveryText = '0원';
    }

    // DOM 업데이트
    deliveryEl.innerHTML = deliveryText;
    totalPriceEl.innerHTML = finalTotal.toLocaleString() + ' <small>원</small>';
    summaryTotalEl.textContent = total.toLocaleString() + '원';
  }

  // 수량 버튼 관련 이벤트
  document.querySelectorAll(".cart-item").forEach(item => {
    const minusBtn = item.querySelector("button:nth-of-type(1)");
    const plusBtn = item.querySelector("button:nth-of-type(2)");
    const quantityInput = item.querySelector("input[type='text']");
    const price = parseInt(item.querySelector(".cart-price").dataset.price, 10);
    const sumEl = item.querySelector(".total-price-row .price");

    function updateItemSum() {
      const qty = parseInt(quantityInput.value, 10);
      const itemTotal = price * qty;
      sumEl.innerHTML = itemTotal.toLocaleString() + ' <small>원</small>';
      updateTotal();
    }

    minusBtn.addEventListener("click", () => {
      let qty = parseInt(quantityInput.value, 10);
      if (qty > 1) {
        quantityInput.value = qty - 1;
        updateItemSum();
      }
    });

    plusBtn.addEventListener("click", () => {
      let qty = parseInt(quantityInput.value, 10);
      quantityInput.value = qty + 1;
      updateItemSum();
    });

    quantityInput.addEventListener("change", updateItemSum);
  });

  // 체크박스 이벤트
  itemChecks.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      const allChecked = [...itemChecks].every(chk => chk.checked);
      checkAll.checked = allChecked;
      updateTotal();
    });
  });

  checkAll.addEventListener("change", () => {
    itemChecks.forEach(checkbox => {
      checkbox.checked = checkAll.checked;
    });
    updateTotal();
  });

  updateTotal();
});

































//document.addEventListener("DOMContentLoaded", function () {
//  const checkAll = document.querySelector(".check-all input[type='checkbox']");
//  const itemChecks = document.querySelectorAll(".cart-item input[type='checkbox']");
//  const totalPriceEl = document.querySelector(".final-price");
//  const summaryTotalEl = document.querySelector(".cart-summary span");
//
//  // 수량 및 체크 상태에 따라 총합 계산
//  function updateTotal() {
//    let total = 0;
//
//    document.querySelectorAll(".cart-item").forEach(item => {
//      const checkbox = item.querySelector("input[type='checkbox']");
//      const price = parseInt(item.querySelector(".cart-price").dataset.price, 10);
//      const qty = parseInt(item.querySelector(".cart-quantity input").value, 10);
//
//      if (checkbox.checked) {
//        total += price * qty;
//      }
//    });
//
//    // 업데이트
//    totalPriceEl.innerHTML = total.toLocaleString() + ' <small>원</small>';
//    summaryTotalEl.textContent = total.toLocaleString() + '원';
//  }
//
//  // 수량 버튼 클릭 이벤트도 연결
//  document.querySelectorAll(".cart-item").forEach(item => {
//    const minusBtn = item.querySelector("button:nth-of-type(1)");
//    const plusBtn = item.querySelector("button:nth-of-type(2)");
//    const quantityInput = item.querySelector("input[type='text']");
//    const price = parseInt(item.querySelector(".cart-price").dataset.price, 10);
//    const sumEl = item.querySelector(".total-price-row .price");
//
//    function updateItemSum() {
//      const qty = parseInt(quantityInput.value, 10);
//      const itemTotal = price * qty;
//      sumEl.innerHTML = itemTotal.toLocaleString() + ' <small>원</small>';
//      updateTotal();
//    }
//
//    minusBtn.addEventListener("click", () => {
//      let qty = parseInt(quantityInput.value, 10);
//      if (qty > 1) {
//        quantityInput.value = qty - 1;
//        updateItemSum();
//      }
//    });
//
//    plusBtn.addEventListener("click", () => {
//      let qty = parseInt(quantityInput.value, 10);
//      quantityInput.value = qty + 1;
//      updateItemSum();
//    });
//
//    quantityInput.addEventListener("change", updateItemSum);
//  });
//
//  // 개별 체크박스 클릭 시 총합 업데이트
//  itemChecks.forEach(checkbox => {
//    checkbox.addEventListener("change", updateTotal);
//  });
//
//  // 전체 선택 체크박스 제어
//  checkAll.addEventListener("change", () => {
//    itemChecks.forEach(checkbox => {
//      checkbox.checked = checkAll.checked;
//    });
//    updateTotal();
//  });
//    
//    // 개별 체크 클릭 → 전체선택 체크 여부 자동 판단
//itemChecks.forEach(checkbox => {
//  checkbox.addEventListener("change", () => {
//    const allChecked = [...itemChecks].every(chk => chk.checked);
//    checkAll.checked = allChecked;
//    updateTotal();
//  });
//});
//
//  updateTotal(); // 초기 계산 실행
//});
//
//

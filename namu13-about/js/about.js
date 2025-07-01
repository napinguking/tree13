// 스크롤 시 요소 등장 (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1
});

// .scroll-fade-up 클래스를 가진 요소들을 감시
document.querySelectorAll('.scroll-fade-up').forEach(el => {
  observer.observe(el);
});

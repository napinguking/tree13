document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('header').innerHTML = ` <h1 class="logo"><a href="index.html"><img src="img/tree13-logo-w.png" alt="로고"></a></h1>`;
    document.getElementById('lnb').innerHTML = `<ul class="menu">
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">EXHIBIT</a></li>
            <li><a href="#">STORE</a></li>
            <li><a href="#">TICKETS</a></li>
        </ul>
        <ul class="sns_menu">
            <li><a href="">INSTAGRAM</a></li>
            <li><a href="">TWITTER</a></li>
            <li><a href="">PRIVACY POLICY</a></li>
        </ul>
        <div class="text-block">
            <h2>BLUE VACATION</h2>
            <p>: 짧지만 강렬한 우리의 여름</p>
        </div>

        <ul class="gnb">
            <li><a href="#">LOGIN</a></li>
            <li><a href="#">CART</a></li>
            <li><a href="#">MY PAGE</a></li>
        </ul>`;
    document.getElementById('hamburger').innerHTML = `<div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>`;
    document.getElementById('brand-section').innerHTML = `<h2 class="hidden">섹션 제목</h2>
        <nav class="left-vertical-menu" id="left-vertical-menu">
            <ul>
                <li><a href="#">협업브랜드</a></li>
                <li><a href="#">전시기록</a></li>
            </ul>
        </nav>`;
});

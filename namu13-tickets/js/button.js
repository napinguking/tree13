$(document).ready(function () {
    let count = 0;

    $('.plus').click(function () {
        count++;
        $('#qty').text(count);
    });

    $('.minus').click(function () {
        if (count > 0) {
            count--;
            $('#qty').text(count);
        }
    });
});



























$(document).ready(function() {
    $(".slick-carousel").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1
    });

    donateBtn = document.getElementById('donateBtn');
    // onclick event for link to donation.html
    donateBtn.onclick = function() {
        window.location.href = 'pages/donation.html';
    };

});
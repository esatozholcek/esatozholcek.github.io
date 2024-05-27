$(document).ready(function() {
    // Load local projects data
    $.ajax({
        url: 'json/tree.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var $carousel = $('.slick-carousel');
            data.forEach(function(item) {
                var slide = $('<div></div>');
                slide.html(`
                    <img src="${item.image}" alt="${item.title}">
                    <p>${item.title}</p>
                `);
                $carousel.append(slide);
            });

            // Initialize Slick carousel after slides are appended
            $carousel.slick({
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
                infinite: true,
                speed: 1500,
                slidesToShow: 1,
                arrows: true,
                slidesToScroll: 1
            });


            
        },
        error: function(error) {
            console.error('Error loading projects:', error);
        }
    });

    // Fetch weather data
    const apiKey = '4951a03eaf3463fa11e593e98def0bfc';
    const city = 'Ankara';  // Change to the relevant city

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            const temp = Math.round(data.main.temp);
            $('#weather-container').html(`
            <div>
                <p>${data.name}, ${data.weather[0].main}</p>
            </div>
            <div id="temp">
                <p>${temp}&deg</p>
            <div>
                <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather-icon">
            </div>
            `);
        },
        error: function(error) {
            console.error('Error fetching weather data:', error);
        }
    });

    donateBtn = document.getElementById('donateBtn');
        // onclick event for link to donation.html
        donateBtn.onclick = function() {
        window.location.href = 'pages/donation.html';
    };

});

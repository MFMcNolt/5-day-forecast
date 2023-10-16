// Acceptance Criteria
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
//function that collect user input and display in search history
// Acceptance Criteria
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
//function that collect user input and display in search history
//add event listener to search history item
//add event listner to search button
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
//get local storage info
//add info to local
//render history

$(document).ready(function () {
    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = 'c8976c5d86b7462f86d757575511d91e';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/';

    // Elements
    const $searchInput = $('#myInput');
    const $searchBtn = $('#searchBtn');
    const $historyContainer = $('.history');
    const $cityContainer = $('.city');
    const $fiveDayContainer = $('.five-day');

    // Event listener for the search button
    $searchBtn.click(function () {
        const cityName = $searchInput.val();

        if (cityName) {
            // Save search history (you might want to improve this logic)
            $historyContainer.append(`<p>${cityName}</p>`);

            // Fetch current weather data
            $.get(`${apiUrl}weather?q=${cityName}&appid=${apiKey}`, function (currentWeather) {
                displayCurrentWeather(currentWeather);
            });

            // Fetch 5-day forecast data
            $.get(`${apiUrl}forecast?q=${cityName}&appid=${apiKey}`, function (forecastData) {
                displayFiveDayForecast(forecastData);
            });
        }
    });

    // Function to display current weather
    function displayCurrentWeather(data) {
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        $cityContainer.html(`
            <h3>${cityName}</h3>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${weatherDescription}</p>
        `);
    }

    // Function to display 5-day forecast
    function displayFiveDayForecast(data) {
        const forecastList = data.list;

        $fiveDayContainer.empty(); // Clear previous content

        forecastList.forEach(entry => {
            const date = new Date(entry.dt_txt);
            const day = date.toLocaleDateString('en-US', { weekday: 'long' });
            const temperature = entry.main.temp;
            const weatherDescription = entry.weather[0].description;

            const card = `
                <div class="forecast-card">
                    <h4>${day}</h4>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Description: ${weatherDescription}</p>
                </div>
            `;

            $fiveDayContainer.append(card);
        });
    }
});

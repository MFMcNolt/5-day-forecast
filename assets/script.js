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
            const date = new Date(data.dt * 1000); // Convert timestamp to milliseconds
            const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const uvIndex = data.current.uvi; // Assuming the API provides the UV index
    
            // Get an icon representation of weather conditions
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    
            $cityContainer.html(`
                <h3>${cityName}</h3>
                <p>Date: ${formattedDate}</p>
                <img src="${iconUrl}" alt="Weather Icon">
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
                <p>UV Index: ${uvIndex}</p>
            `);
        }
    
        // Event listener for the search history items
        $historyContainer.on('click', '.search-history-item', function () {
            const cityName = $(this).text();
    
            // Fetch current weather data for the selected city
            $.get(`${apiUrl}weather?q=${cityName}&appid=${apiKey}`, function (currentWeather) {
                displayCurrentWeather(currentWeather);
            });
    
            // Fetch 5-day forecast data for the selected city
            $.get(`${apiUrl}forecast?q=${cityName}&appid=${apiKey}`, function (forecastData) {
                displayFiveDayForecast(forecastData);
            });
        });
    });
    

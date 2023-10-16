# 5-day-forecast

## Description

The motivation behind building this Weather Dashboard was to create a user-friendly web application that allows users to quickly search for the current weather as well as a 5-day forecast for a specific city. The inclusion of a search history feature was aimed at enhancing user experience and providing easy access to previously searched cities.

The project was built to address the need for a simple and intuitive weather application. It goes beyond a mere homework assignment, aiming to provide practical value to users who want to stay informed about the weather conditions for different locations both current and in the future. The inclusion of a search history feature adds a convenient element for users who frequently check the weather for multiple cities.

While working on this project, I learned several key concepts and skills:

- API Integration: I gained experience in integrating external APIs, specifically the OpenWeatherMap API, to fetch real-time weather data.
- Event Handling: I utilized event listeners to capture user input, such as city names and button clicks, to trigger the fetching of weather data.
- Local Storage Usage: The project involved using local storage to store and retrieve search history information, providing a persistent record of user interactions.
- Error Handling: I implemented error handling to manage potential issues, such as failed API requests, providing a more robust user experience.
- Bootstrap CSS: I utilized Bootstrap to help create a user friendly interface without having to take up too much time building with vanilla css.

Overall, the project provided a practical application of web development skills, combining data fetching, dynamic content generation, and user interaction in the context of a weather dashboard.

## Installation

You can visit the live site here: https://mfmcnolt.github.io/5-day-forecast/

There is no installing neccessary for this project, however, I needed to create an Open Weather account which allowed me access to an API Key that I used in my JavaScript.

## Usage and Features

Open the Weather Dashboard in your web browser and you will come to this page, which is fairly straight forward:

![alt text][assets/Images/Screenshot.png]


Below is a breakdown of the site functionality:

- Searching for Weather Information: 
In the "Enter a City Name" input field, type the name of the city you want to check the weather for. Click the "Search" button.
- Viewing Current Weather:
The current weather details for the entered city will be displayed under the "Current Weather" section. Information includes temperature, wind speed, humidity, and a brief weather description.
- Checking the 5-Day Forecast:
Scroll down to the "5-Day Forecast" section to view a forecast for the next five days.
Each day includes the date, temperature, wind speed, humidity, and a weather icon.
- Using Search History:
After searching for a city, its name is added to the "Search History" list on the right side.
Click on a city in the search history to quickly retrieve weather information for that city.
- Using Current Location:
Click the "Use Current Location" button to fetch weather information based on your device's current location.
- UV Index Color Indicators:
The UV Index in the current weather details is color-coded to indicate whether conditions are favorable, moderate, or severe.
- Error Handling:
If there's an issue with the search or data retrieval, an error message will be displayed, providing feedback to the user.
- Responsive Design:
The Weather Dashboard is designed to be responsive, providing a seamless experience across different screen sizes.

## Credits

In order to build this, I needed to invest some time into relearning about API integrations so I managed to find a tutorial, which guided me in my project. Here is the link to the YouTube tutorial I found:

- https://www.youtube.com/watch?v=SeXg3AX82ig&t=1256s


## Tools and Technologies

1. HTML (HyperText Markup Language):
Used for structuring the content of the web page.
2. CSS (Cascading Style Sheets):
Applied styles to HTML elements, providing visual design and layout.
3. Bootstrap:
Utilized the Bootstrap framework for styling and responsiveness.
4. JavaScript:
Used for adding interactivity and dynamic behavior to the web page.
5. jQuery:
Incorporated jQuery, a JavaScript library, for simplified DOM manipulation and event handling.
6. OpenWeatherMap API:
Integrated the OpenWeatherMap API to fetch real-time weather data.
7. Geocoding API (Reverse and Direct):
Used the OpenWeatherMap Geocoding API to convert between geographic coordinates and location names.
8. LocalStorage:
Utilized the LocalStorage feature in JavaScript to store and retrieve search history data locally on the user's device.
9. Git: 
Git was used to track changes and save changes externally especially whilst debugging.

These tools and technologies collectively contribute to the development of a dynamic and feature-rich Weather Dashboard.








[assets/Images/Screenshot.png]: https://raw.githubusercontent.com/MFMcNolt/5-day-forecast/fa781685bbb504dbd50f6446dd930faf0e69004f/assets/Images/Screenshot.png
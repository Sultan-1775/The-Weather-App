// Получаем элементы из DOM
const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('city');
const descriptionEl = document.getElementById('description');
const temperatureEl = document.getElementById('temperature');

// Функция для получения данных о погоде
async function getWeather(city) {
    const apiKey = '774e4ff9d5cd9d9327fa7bec023125a8'; // Замените на ваш ключ
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            // Отображаем информацию о погоде
            descriptionEl.textContent = `Description: ${data.weather[0].description}`;
            temperatureEl.textContent = `Temperature: ${data.main.temp}°C`;
        } else {
            alert('City not found!');
        }
    } catch (error) {
        alert('Error fetching weather data.');
    }
}

// Обработчик клика по кнопке
getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city.');
    }
});

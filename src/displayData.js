export default function displayData(input) {
    console.log(input)
    const name = document.getElementById('name')
    const weatherParameter = document.getElementById('weatherParameter')
    const weatherIcon = document.getElementById('weatherIcon')
    const temperature = document.getElementById('temperature')
    const feelsLike = document.getElementById('feelsLike')
    const humidity = document.getElementById('humidity')
    const windspeed = document.getElementById('windspeed')
    const cloudiness = document.getElementById('cloudiness')
    const sunrise = document.getElementById('sunrise')
    const sunset = document.getElementById('sunset')

    function padTo2Digits(num) {
    return String(num).padStart(2, '0');
    }

    name.textContent = input.name
    weatherParameter.textContent = input.weatherMain
    weatherIcon.src = `http://openweathermap.org/img/w/${input.weatherIcon}.png`
    temperature.textContent = Math.round(input.mainTemp) + String.fromCharCode(176) + 'C'
    feelsLike.textContent = 'Feels like ' + Math.round(input.mainFeelsLike) + String.fromCharCode(176) + 'C'
    humidity.textContent = 'Humidity ' + input.mainHumidity + '%'
    windspeed.textContent = input.windSpeed + ' m/s'
    cloudiness.textContent = input.clouds + '%'
    sunrise.textContent = padTo2Digits(new Date(input.sunrise*1000).getHours()) + ':' + padTo2Digits(new Date(input.sunrise*1000).getMinutes())
    sunset.textContent = padTo2Digits(new Date(input.sunset*1000).getHours()) + ':' + padTo2Digits(new Date(input.sunset*1000).getMinutes())
}
import { fetchapi } from "./fetchapi";

export const dataprocessor = (input) => {
    fetchapi(input).then(data => {
        let apidata = {
            weatherMain: 0,
            weatherIcon: 0,
            mainTemp: 0,
            mainFeelsLike: 0,
            mainHumidity: 0,
            windSpeed: 0,
            clouds: 0,
            sunrise: 0,
            sunset: 0,
        }

        apidata.weatherMain = data.weather[0].main
        apidata.weatherIcon = data.weather[0].icon
        apidata.mainTemp = data.main.temp 
        apidata.mainFeelsLike = data.main.feels_like
        apidata.mainHumidity = data.main.humidity
        apidata.windSpeed = data.wind.speed 
        apidata.clouds = data.clouds.all
        apidata.sunrise = data.sys.sunrise
        apidata.sunset = data.sys.sunset

        return apidata
    })
}
export const fetchapi = async (location) => {
    const getdata = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=ae493baf78620325326ab4c420c1674a&units=metric`)
    const data = await getdata.json()
    return data
}


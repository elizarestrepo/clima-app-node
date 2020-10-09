const axios = require('axios');

const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=44cf5cbb65d7e09bea81d33dae017ecb&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
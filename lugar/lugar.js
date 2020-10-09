const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+"${ encodedUrl }"?json=1`
    });

    const resp = await instance.get()

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data;
    const direccion = data.standard.city;
    const lat = data.alt.loc.latt;
    const long = data.longt;

    return {
        direccion,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLng
}
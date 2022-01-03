const request = require('request')

//const url = `http://api.weatherstack.com/current?access_key=2f9ddab23d328937c3cc7c81ef0a099e&query=53.669834,23.791872&units=m`

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=2f9ddab23d328937c3cc7c81ef0a099e&query=" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude) + "&units=m"
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback(body.error.info, undefined);
        }
        else {
            callback(undefined,
                "Температура сейчас: " + body.current.temperature +
                " Ощущается как: " + body.current.feelslike +
                " Вероятность осадков: " + body.current.precip +
                "Влажность: " + body.current.humidity
            )
        }

    })
}

module.exports = forecast
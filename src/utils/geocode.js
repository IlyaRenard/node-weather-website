const request = require('request')


const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaWx5YWdhdnJpbGlrIiwiYSI6ImNrd2JpMDJvYTAwd3YydnBuanprd3BybmQifQ.dxrNqHtsu5iCP--0N6biWQ'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to geo service!", undefined);
        }
        else if (body.message || body.features[0] === undefined) {
            callback("Not found", undefined);
        }
        else {
            //console.log("Место: " + response.body.features[0].place_name + "\nШирота и долгота: " + response.body.features[0].center);
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
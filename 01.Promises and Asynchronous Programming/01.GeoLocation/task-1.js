(function () {
    let locationElement = document.getElementById("location-element");

    function getGeoLocationPositionPromise() {
        let promise = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve(position)
                },
                (error) => {
                    reject(error)
                });
        });
        return promise;
    }

    function parseLongAndLatCoords(geoLocationPosition) {
        if (geoLocationPosition.coords) {
            return {
                lat: geoLocationPosition.coords.latitude,
                long: geoLocationPosition.coords.longitude
            };
        } else {
            throw {message: "No coords element found", name: "UserException"};
        }
    }

    function createGeolocationImage(coordsObj) {
        var imgElement = document.createElement("img"),
            imgSrc = "http://maps.googleapis.com/maps/api/staticmap?center=" + coordsObj.lat + "," + coordsObj.long + "&zoom=13&size=500x500&sensor=false";

        imgElement.setAttribute("src", imgSrc);

        locationElement.appendChild(imgElement);
    }

    function throwError(errorObj) {
        throw new Error(errorObj.message);
    }

    getGeoLocationPositionPromise()
        .then(parseLongAndLatCoords)
        .then(createGeolocationImage)
        .catch(throwError)
}());
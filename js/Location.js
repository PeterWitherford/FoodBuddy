var x = document.getElementById("demo");
function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}
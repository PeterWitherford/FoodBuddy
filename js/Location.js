var x=document.getElementById("search");
navigator.geolocation.getCurrentPosition(reverseGeoLookup);

function getLocation()
  {
  if (navigator.geolocation)
    {
       navigator.geolocation.getCurrentPosition(reverseGeoLookup);
    }
  else
    {
       x.innerHTML="Geolocation is not supported by this browser.";
    }
  }

function reverseGeoLookup(position) {
    console.log(position);
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
  var req = new XMLHttpRequest()
  req.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon+"&sensor=true", true)
  req.onreadystatechange = function() {
      if(req.readyState == 4) {
          var result = JSON.parse(req.response).results
          for(var i = 0, length = result.length; i < length; i++) {
              for(var j = 0; j < result[i].address_components.length; j++) {
                  var component = result[i].address_components[j]
                  console.log(component.long_name);
                  if(~component.types.indexOf("postal_code")) {
                    var out = document.getElementById('search');
                    out.innerHTML = component.long_name;
                    return false;
                  }
              }
          }
      }
  }
  req.send()
}
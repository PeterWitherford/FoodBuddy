document.getElementById("clickMe").onclick = getLocation;
var x=document.getElementById("search");
getLocation();

function getLocation()
  {
  if (navigator.geolocation)
    {
       navigator.geolocation.watchPosition(reverseGeoLookup);
    }
  else
    {
       x.innerHTML="Geolocation is not supported by this browser.";
    }
  }

function reverseGeoLookup(lon, lat) {
  //make a ajax request -- in prod just use whatever libraryyou have to provide this
  //probably jquery's $.get
  var req = new XMLHttpRequest()
  //put the longitude and latitude into the API query
  req.open("GET", "http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon+"&sensor=true", true)
  //this is just the result callback -- it's the function arg to $.get, essentially
  req.onreadystatechange = function() {
      if(req.readyState == 4) {
          //again jquery will parse for you, but we want the results field
          var result = JSON.parse(req.response).results
          //the maps API returns a list of increasingly general results
          //i.e. street, suburb, town, city, region, country
          for(var i = 0, length = result.length; i < length; i++) {
              //each result has an address with multiple parts (it's all in the reference)
              for(var j = 0; j < result[i].address_components.length; j++) {
                  var component = result[i].address_components[j]
                  //if the address component has postal code then write it out
                  if(~component.types.indexOf("postal_code")) {
                    var out = document.getElementById('search')
                    out.innerHTML += component.long_name
                  }
              }
          }
      }
  }
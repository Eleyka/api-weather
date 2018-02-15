$(document).ready(function () {


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let myPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var latitudeApi = myPosition.lat;
      var longitudApi = myPosition.lng;

      var newApilinkDS = `https://api.darksky.net/forecast/ed1d3c87046153f1a88b95d69989b0af/${latitudeApi},%20${longitudApi}?lang=es`;

      var proxy = 'https://cors-anywhere.herokuapp.com/';


      $.ajax({
        url: proxy + newApilinkDS,
        success: function (data) {
          console.log(data)
          var temperature = data.currently.temperature;
          console.log(temperature)
          var wind = data.currently.windSpeed;
          console.log(wind);
          var pressure = data.currently.pressure;
          console.log(pressure)
          var uv = data.currently.uvIndex
          console.log(uv)
          var humidity = data.currently.humidity;

          $('.wind').append(wind);
          $('.humidity').append(humidity);
          $('.uv').append(uv);
          $('.pressure').append(pressure);



          ;
        }
      });


    });
  }






});

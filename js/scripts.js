// YOUR SCRIPTS GO HERE

$.simpleWeather({
    location: 99004,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('img').attr('src', weather.image);
      

      // Change Change w/ Condition code
      var iconCode = 'icon-' + weather.code;
      $('i').attr('class', iconCode );
      
      // Condition Code
      // Reference Condition Codes
      // https://developer.yahoo.com/weather/documentation.html#codes
      console.log(weather.code);
      
      // If Sunny `code` between 31 and 36       
      if (weather.code >= 31 && weather.code <= 36 ) {
        
        $('body').addClass('sunny');
        
      }
      
       // If Cloudy `code` between 31 and 36       
      if (weather.code >= 26 && weather.code <= 30 ) {
        
        $('body').addClass('cloudy');
        
      }
      
      // If Rainy `code` between 31 and 36       
      if (weather.code >= 5 && weather.code <= 14 ) {
        
        $('body').addClass('rainy');
        
      }
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });


//sidr

$('#sidr-show-hide').sidr();

// Close from inside
$('#close').sidr({
  method: 'close'
})




// Paste jQuery Plugin Code Here

navigator.geolocation.getCurrentPosition(function(position){
	var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
	var latAndLong = latitude + ',' + longitude; 
  console.log(latAndLong);
	return latAndLong;
});





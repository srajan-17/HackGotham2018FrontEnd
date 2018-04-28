function initMap() {
	// 20.5937° N, 78.9629° E
  var uluru = {lat: 40.7, lng: -74};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}

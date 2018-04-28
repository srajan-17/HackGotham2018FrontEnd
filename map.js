function initMap() {
	// 20.5937° N, 78.9629° E
  var ny = {lat: 40.7, lng: -74};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: ny
    });
    var marker = new google.maps.Marker({
      position: ny,
      map: map
    });
}


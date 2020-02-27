function initMap() {
	L.mapquest.key = '4Z14mnizfyotxl9AiM6CsOW5bNgyUwYQ';

   var map = L.mapquest.map('map', {
      center: [32.88, -117.236],
      layers: L.mapquest.tileLayer('map'),
      zoom: 14,
      zoomControl: false
   });

   L.marker([32.88, -117.236]).addTo(map);

}

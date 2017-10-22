(function() {
var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    credentials: 'At7Ns-P4IRo5GYhksVu0OlEiis4GatW1SfUkwEvNKZ5t3_x--f83MAutefAloU0x',
    center: new Microsoft.Maps.Location(47.606209, -122.332071),
    zoom: 12
});
Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
    var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
    // Set Route Mode to walking
    directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.walking });
    var waypoint1 = new Microsoft.Maps.Directions.Waypoint({ address: 'Space Needle' });
    var waypoint2 = new Microsoft.Maps.Directions.Waypoint({ address: 'Pike Market, Washington' });
    directionsManager.addWaypoint(waypoint1);
    directionsManager.addWaypoint(waypoint2);
    // Set the element in which the itinerary will be rendered
    directionsManager.setRenderOptions({ itineraryContainer: document.getElementById('printoutPanel') });
    directionsManager.calculateDirections();
});

})();
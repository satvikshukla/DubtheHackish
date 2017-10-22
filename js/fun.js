/*var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    credentials: 'At7Ns-P4IRo5GYhksVu0OlEiis4GatW1SfUkwEvNKZ5t3_x--f83MAutefAloU0x',
    center: new Microsoft.Maps.Location(47.606209, -122.332071),
    zoom: 12
});
Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
    var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
    // Set Route Mode to walking
    directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.walking });
    var waypoint1 = new Microsoft.Maps.Directions.Waypoint({ address: document.getElementById('first')});
    var waypoint2 = new Microsoft.Maps.Directions.Waypoint({ address: document.getElementById('second')});
    directionsManager.addWaypoint(waypoint1);
    directionsManager.addWaypoint(waypoint2);
    // Set the element in which the itinerary will be rendered
    directionsManager.setRenderOptions({ itineraryContainer: document.getElementById('printoutPanel') });
    directionsManager.calculateDirections();
});*/


(function() {
    var lx = -122.316692;
    var ly = 47.658306;
    var ux = -122.311918;
    var uy = 47.666451;
    function $(x) {
        return document.getElementById(x);
    }

    window.onload = function() {
        $("button").onclick = go_clicked;
    }

    function go_clicked() {
        var input1 = $("t1").value;
        var input2 = $("t2").value;
        //console.log("1");
        var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
            credentials: 'At7Ns-P4IRo5GYhksVu0OlEiis4GatW1SfUkwEvNKZ5t3_x--f83MAutefAloU0x',
            center: new Microsoft.Maps.Location(47.606209, -122.332071),
            zoom: 12
        });
        //console.log("2");
        Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
            var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
            // Set Route Mode to walking
            directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.walking });
            var waypoint1 = new Microsoft.Maps.Directions.Waypoint({ address: input1 });
            var waypoint2 = new Microsoft.Maps.Directions.Waypoint({ address: input2 });
            directionsManager.addWaypoint(waypoint1);
            directionsManager.addWaypoint(waypoint2);
            var flag = true;
            //var n = 1;
            //console.log(waypoint1);
            //console.log(directionsManager.getAllWaypoints()[0]);
            //var waypointOpts = directionsManager.getAllWaypoints()[0].getLocation();
            //console.log(waypointOpts);
            var x1, x2, y1, y2;
            directionsManager.removeWayPoint(1);
            if (((x1 < lx) && (x2 < lx)) || ((x1 > ux) && (x2 > ux)) || ((y1 < ly) && (y2 < ly)) || ((y1 > uy) && (y2 > uy))) {

            }
            else if (((x1 > lx) && (x1 < ux) && (y1 > ly) && (y1 < uy)) || ((x2 > lx) && (x2 < ux) && (y2 > ly) && (y2 < uy))) {
                while (flag) {
                    if (dist_to_corner(x1, y1) < dist_to_destination(x1, y1, x2, y2)) {
                        var tempwaypoint = the_waypoint(x1, y1);
                        directionsManager.addWaypoint(tempwaypoint);
                        waypoint1 = temp_waypoint;
                    }
                    else {
                        flag = false;
                    }
                }
            }
                else {
                    while (flag) {
                        if (((y1 > uy) && (y2 < ly)) || ((y1 < ly) && (y2 > uy))) {

                        }
                        else {
                            flag = false;
                        }
                    }
                }

            directionsManager.addWaypoint(waypoint2);

            // Set the element in which the itinerary will be rendered
            directionsManager.setRenderOptions({ itineraryContainer: document.getElementById('printoutPanel') });
            directionsManager.calculateDirections();
        });
    }

    function dist_to_destination (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2), Math.pow(y2 - y1), 2);
    }

    function dist_to_corner (x1, y1) {
        return Math.min((Math.sqrt(Math.pow(ux - x1, 2), Math.pow(uy - y1), 2)), (Math.sqrt(Math.pow(lx - x1, 2), Math.pow(ly - y1), 2)),
        (Math.sqrt(Math.pow(ux - x1, 2), Math.pow(ly - y1), 2)), (Math.sqrt(Math.pow(lx - x1, 2), Math.pow(uy - y1), 2)));
    }

    function the_waypoint(x1, y1) {
        var temp_waypoint;
        var min = Math.min((Math.sqrt(Math.pow(ux - x1, 2), Math.pow(uy - y1), 2)), (Math.sqrt(Math.pow(lx - x1, 2), Math.pow(ly - y1), 2)),
        (Math.sqrt(Math.pow(ux - x1, 2), Math.pow(ly - y1), 2)), (Math.sqrt(Math.pow(lx - x1, 2), Math.pow(uy - y1), 2)));
        if (min == Math.sqrt(Math.pow(ux - x1, 2), Math.pow(uy - y1), 2)) {
            temp_waypoint = new Microsoft.Maps.Directions.Waypoint({location: new Microsoft.Maps.Location(ux, uy) })
        }
        else if (min == Math.sqrt(Math.pow(lx - x1, 2), Math.pow(ly - y1), 2)) {
            temp_waypoint = new Microsoft.Maps.Directions.Waypoint({location: new Microsoft.Maps.Location(lx, ly) })
        }
        else if (min == Math.sqrt(Math.pow(ux - x1, 2), Math.pow(ly - y1), 2)) {
            temp_waypoint = new Microsoft.Maps.Directions.Waypoint({location: new Microsoft.Maps.Location(ux, ly) })
        }
        else {
            temp_waypoint = new Microsoft.Maps.Directions.Waypoint({location: new Microsoft.Maps.Location(lx, uy) })
        }
        return temp_waypoint;
    }

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

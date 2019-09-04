// Format Rules
// https://en.wikipedia.org/wiki/GeoJSON

function getSinglePolygonCoordinates(polygon) {
  let points = polygon.getPath().getArray();
  let coordinates = [];
  points.forEach(point => {
    coordinates.push([point.lat(), point.lng()]);
  });
  coordinates.push([points[0].lat(), points[0].lng()]);
  return coordinates;
}

/**
  {
    "type": "Polygon", 
    "coordinates": [
        [[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]
    ]
  }
 */
function singlePolygon(polygon) {
  let coordinates = getSinglePolygonCoordinates(polygon);
  console.log(coordinates);
  return {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": coordinates,
    },
    "properties": {
      "name": ""
    }
  };
}

/**
  {
    "type": "MultiPolygon", 
    "coordinates": [
        [
            [[30, 20], [45, 40], [10, 40], [30, 20]]
        ], 
        [
            [[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]
        ]
    ]
  }
 */
function multiPolygon(polygons) {
  let coordinatesArray = [];
  polygons.forEach(polygon => {
    coordinatesArray.push(getSinglePolygonCoordinates(polygon));
  });
  console.log(coordinatesArray);
  return {
    "type": "Feature",
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": coordinatesArray,
    },
    "properties": {
      "name": ""
    }
  };
}

export default function formatToGeoJSON(polygons) {
  if(polygons.length === 0) {
    console.log('Draw polygon first.');
    return;
  } else if (polygons.length === 1) {
    return singlePolygon(polygons[0]);
  } else {
    return multiPolygon(polygons);
  }
}

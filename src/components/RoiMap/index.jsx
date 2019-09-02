import React, {useState, useEffect} from 'react';
import {default as store, persistor} from 'store';
import Routes from 'routes';
import {Provider} from 'react-redux';
import {withScriptjs, withGoogleMap, GoogleMap, Polygon} from 'react-google-maps';
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");
import {Button} from 'antd';

const RoiMap = withScriptjs(withGoogleMap(() => {
  const [center, setCenter] = useState({lat: -37.817252, lng: 144.947494});
  const [allowDraw, setAllowDraw] = useState(false);
  const ref = React.createRef();
  const [polygons, setPolygons] = useState([]);

  function handleClear() {
    polygons.map(poly => {
      console.log(poly);
      poly.setMap(null);
    });
  }

  function renderButtonGroup() {
    return ( 
      <div>
        <Button onClick={() => setAllowDraw(true)}>Start Draw</Button>
        <Button onClick={() => setAllowDraw(false)}>Stop</Button>
        <Button onClick={handleClear}>Clear</Button>
      </div>
    );
  }

  function onPolygonComplete(poly) {
    setPolygons([...polygons, poly]);
    let coordinates = poly.getPath().getArray();
    console.log(coordinates);
    /* whatever you want to do with the polygon */
    // poly.setMap(null);
  }

  return (
    <React.Fragment>
      <GoogleMap
        ref={ref}
        defaultZoom={14}
        center={center}
        onCenterChanged={() => setCenter({lat: ref.current.getCenter().lat(), lng: ref.current.getCenter().lng()})}
      >
        <DrawingManager
          options={{
            drawingControl: allowDraw,
          }}
          // onPolygonComplete={props.onPolygonComplete}
          // onCircleComplete={props.onCircleComplete}
          // onMarkerComplete={props.onMarkerComplete}
          // onPolylineComplete={props.onPolylineComplete}
          // onRectangleComplete={props.onRectangleComplete}
          onPolygonComplete={(ref) => onPolygonComplete(ref)}
          onCircleComplete={()=>{}}
          onMarkerComplete={()=>{}}
          onPolylineComplete={()=>{}}
          onRectangleComplete={()=>{}}
          drawingMode={allowDraw ? window.google.maps.drawing.OverlayType.POLYGON : null}
          defaultOptions={{
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
              ],
            },
          }}
        />
      </GoogleMap>
      {renderButtonGroup()}
    </React.Fragment>
  );
}));

export default RoiMap;

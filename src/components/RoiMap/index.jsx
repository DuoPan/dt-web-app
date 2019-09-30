import React, {useState} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Polygon} from 'react-google-maps';
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");
import {Button} from 'antd';
import formatToGeoJSON from '../../utils/formatToGeoJSON';
import { helloWorldApi } from '../../api';

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
    setPolygons([]);
  }

  function handleSend() {
    formatToGeoJSON(polygons);
    // await demoApi();
    console.log(helloWorldApi());
    console.log('fdnaofndosino');
  }

  function renderButtonGroup() {
    return ( 
      <div>
        <Button onClick={() => setAllowDraw(true)}>Start Draw</Button>
        <Button onClick={() => setAllowDraw(false)}>Stop</Button>
        <Button onClick={handleClear}>Clear</Button>
        <Button onClick={handleSend}>Send GeoJSON</Button>
      </div>
    );
  }

  function onPolygonComplete(poly) {
    setPolygons([...polygons, poly]);
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
          // onCircleComplete={props.onCircleComplete}
          // onMarkerComplete={props.onMarkerComplete}
          // onPolylineComplete={props.onPolylineComplete}
          // onRectangleComplete={props.onRectangleComplete}
          onPolygonComplete={(ref) => onPolygonComplete(ref)}
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

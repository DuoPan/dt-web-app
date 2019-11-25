import React, {useState, useEffect} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");
import {Button} from 'antd';
import formatToGeoJSON from '../../utils/formatToGeoJSON';
import { connect } from 'react-redux'
import {loadLineChartOption, loadHeatmapOption, loadTileImages, selectSerialNumber, resetAllImages} from '../../actions';
import SearchRegion from '../../containers/DemoHomePage/SearchRegion';

const RoiMap = withScriptjs(withGoogleMap(({
  region,
  // doLoadLineChartOption,
  doLoadHeatmapOption,
  doLoadTileImages,
  doSelectSerialNumber,
  doResetAllImages,
}) => {
  const [center, setCenter] = useState({lat: region.lat, lng: region.lng});
  const [allowDraw, setAllowDraw] = useState(false);
  const ref = React.createRef();
  const [polygons, setPolygons] = useState([]);

  useEffect(
    () => {
      setCenter({lat: region.lat, lng: region.lng})
    },
    [region]
  );

  function handleClear() {
    polygons.map(poly => {
      console.log('clear polygon', poly);
      poly.setMap(null);
    });
    setPolygons([]);
    doSelectSerialNumber({cur: -1});
    doResetAllImages();
  }

  function handleSend() {
    const r = formatToGeoJSON(polygons);
    // doLoadLineChartOption(r);
    doLoadHeatmapOption(r);
    doLoadTileImages(r);
    doSelectSerialNumber({cur: 0});
  }

  function renderButtonGroup() {
    return (
      <div style={{display: 'flex'}}>
        <div style={{width: 50}} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '400px',
            justifyContent: 'space-between',
          }}
        >
          <SearchRegion/>
          <Button onClick={() => setAllowDraw(true)} style={{width: '12vw', height: 50, backgroundColor: '#55a34e', color: '#fff'}}>Start Draw</Button>
          <Button onClick={() => setAllowDraw(false)} style={{width: '12vw', height: 50, backgroundColor: '#55a34e', color: '#fff'}}>Stop</Button>
          <Button onClick={handleClear} style={{width: '12vw', height: 50, backgroundColor: '#55a34e', color: '#fff'}}>Clear</Button>
          <Button onClick={handleSend} style={{width: '12vw', height: 50, backgroundColor: '#55a34e', color: '#fff'}}>Confirm Selection</Button>
        </div>
      </div>
    );
  }

  function onPolygonComplete(poly) {
    let area = google.maps.geometry.spherical.computeArea(poly.getPath());
    // if (area.toFixed(2) >= 10000000) {
    //   poly.setMap(null);
    //   alert('Too Big Area');
    //   return;
    // }
    setPolygons([...polygons, poly]);
  }

  return (
    <div style={{}}>
      <GoogleMap
        ref={ref}
        defaultZoom={14}
        center={center}
        mapTypeId={'satellite'}
        onCenterChanged={() => setCenter({lat: ref.current.getCenter().lat(), lng: ref.current.getCenter().lng()})}
      >
        <DrawingManager
          options={{
            drawingControl: allowDraw,
            polygonOptions: {
              editable: true,
              draggable: true
            }
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
            }
          }}
        />
      </GoogleMap>
      {renderButtonGroup()}
    </div>
  );
}));

const mapStateToProps = state => {
  return {
    region: state.region,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // doLoadLineChartOption: (payload) => dispatch(loadLineChartOption(payload)),
    doLoadHeatmapOption: (payload) => dispatch(loadHeatmapOption(payload)),
    doLoadTileImages: (payload) => dispatch(loadTileImages(payload)),
    doSelectSerialNumber: (payload) => dispatch(selectSerialNumber(payload)),
    doResetAllImages: (payload) => dispatch(resetAllImages(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoiMap);

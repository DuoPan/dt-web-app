import React, {useState, useEffect} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
import { connect } from 'react-redux'
import dataStatus from '../../constants/dataStatus'

const Heatmap = withScriptjs(withGoogleMap(({heatmapOption}) => {
  const [center, setCenter] = useState({lat: heatmapOption.lat, lng: heatmapOption.lng});
  const ref = React.createRef();

  useEffect(
    () => {
      if (heatmapOption.status === dataStatus.SUCCESS) {
        setCenter({lat: heatmapOption.lat, lng: heatmapOption.lng})
      }
    },
    [heatmapOption]
  );

  return (
    <React.Fragment>
      <GoogleMap
        ref={ref}
        defaultZoom={18}
        center={center}
        onCenterChanged={() => setCenter({lat: ref.current.getCenter().lat(), lng: ref.current.getCenter().lng()})}
      >
      </GoogleMap>
    </React.Fragment>
  );
}));

const mapStateToProps = state => {
  return {
    heatmapOption: state.heatmapOption,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heatmap);

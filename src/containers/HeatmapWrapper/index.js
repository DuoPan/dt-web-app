import React, { useState } from 'react';
import {connect} from 'react-redux';
import * as styles from './styles.scss';
import Heatmap from 'components/Heatmap';
import getEnv from '../../../.env';

function HeatmapWrapper() {
  return (
    <Heatmap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${getEnv().GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `500px` }} />}
      containerElement={<div className={styles.root}/>}
      mapElement={<div style={{ height: `500px` }} />}
    />
  );
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeatmapWrapper);

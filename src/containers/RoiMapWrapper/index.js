import React, { useState } from 'react';
import {connect} from 'react-redux';
import * as styles from './styles.scss';
import RoiMap from 'components/RoiMap';
import getEnv from '../../../.env';

function RoiMapWrapper() {
  return (
    <RoiMap 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${getEnv().GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `35vw`, width: '100%' }} />}
      containerElement={<div className={styles.root}/>}
      mapElement={<div style={{ height: `35vw`, width: '100%' }} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(RoiMapWrapper)
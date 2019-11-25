import React  from 'react';
import {connect} from 'react-redux';
import * as styles from './styles.scss';
import Heatmap from 'components/Heatmap';

function HeatmapWrapper() {
  return (
    <div style={{transform: 'scale(0.7)', marginTop: -74}}>
      <Heatmap/>
    </div>
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
//    {/*<div style={{backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', width: window.innerWidth * 0.375, marginLef: '10%', marginRight: '10%'}}>*/}
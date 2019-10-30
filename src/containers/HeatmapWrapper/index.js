import React  from 'react';
import {connect} from 'react-redux';
import * as styles from './styles.scss';
import Heatmap from 'components/Heatmap';

function HeatmapWrapper() {
  return (
    <div style={{backgroundColor: '#fff', height: window.innerWidth*0.35/2, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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

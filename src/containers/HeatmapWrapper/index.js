import React  from 'react';
import {connect} from 'react-redux';
import * as styles from './styles.scss';
import Heatmap from 'components/Heatmap';

function HeatmapWrapper() {
  return (
    <Heatmap/>
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

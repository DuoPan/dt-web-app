import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux'
import * as styles from './styles.scss'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

function LineChart({option}) {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(
    () => {
      const renderedInstance = echarts.getInstanceByDom(chartRef.current)
      if (renderedInstance) {
        chartInstance = renderedInstance
      } else {
        chartInstance = echarts.init(chartRef.current)
      }
      chartInstance.setOption(option)
    },
    []
  );

  return (
    <div ref={chartRef} className={styles.chart}/>
  );
}

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);

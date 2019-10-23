import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux'
import * as styles from './styles.scss'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

function LineChart({lineChartOption, serialNumber}) {
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

      const options = {
        xAxis: {
          show: false,
          data: lineChartOption.data[serialNumber.cur].x_value
        },
        yAxis: {
          show: false,
        },
        series: [{
          data: lineChartOption.data[serialNumber.cur].y_value,
          type: 'line'
        }]
      };

      chartInstance.setOption(options)
    },
    [serialNumber.cur]
  );

  return (
    <div ref={chartRef} className={styles.chart}/>
  );
}

const mapStateToProps = state => {
  return {
    lineChartOption: state.lineChartOption,
    serialNumber: state.serialNumber,
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);

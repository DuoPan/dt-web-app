import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux'
import * as styles from './styles.scss'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import formatTimestamp from '../../utils/formatTimestamp'

function LineChart({heatmapOption}) {
  const chartRef = useRef(null);
  let chartInstance = null;
console.log('heatmapOption.lineData',heatmapOption.lineData);
  useEffect(
    () => {
      const renderedInstance = echarts.getInstanceByDom(chartRef.current)
      if (renderedInstance) {
        chartInstance = renderedInstance
      } else {
        chartInstance = echarts.init(chartRef.current)
      }
console.log('dddddd',heatmapOption.clickedX + '_' + heatmapOption.clickedY,heatmapOption.lineData[heatmapOption.clickedX + '_' + heatmapOption.clickedY]);
      const options = {
        xAxis: {
          // show: false,
          // type: 'time',
          data: heatmapOption.lineData[heatmapOption.clickedX + '_' + heatmapOption.clickedY].x_value,
          axisLabel: {
            interval: 10,
            rotate: 45,
            formatter: (function(value){
              var theDate = new Date(Number(value));
              theDate = theDate.toGMTString();
              return theDate.substr(5,11);
            })
          }
        },
        yAxis: {
          show: false,
        },
        series: [{
          data: heatmapOption.lineData[heatmapOption.clickedX + '_' + heatmapOption.clickedY].y_value,
          type: 'line'
        }],
        backgroundColor: '#fff'
      };

      chartInstance.setOption(options)
    },
    [heatmapOption.clickedX, heatmapOption.clickedY]
  );

  return (
    <div ref={chartRef} style={{width: window.innerWidth * 0.9, height: 300}}/>
  );
}

const mapStateToProps = state => {
  return {
    heatmapOption: state.heatmapOption,
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LineChart);

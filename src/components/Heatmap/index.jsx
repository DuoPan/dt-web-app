import React, {useRef, useEffect} from 'react';
import { connect } from 'react-redux'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/heatmap';
import * as styles from '../../containers/DemoHomePage/styles.scss'

function Heatmap({heatmapOption, serialNumber}) {
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
        grid: {
          height: '50%',
          y: '10%'
        },
        xAxis: {
          show: false,
        },
        yAxis: {
          show: false,
        },
        visualMap: {
          min: 0,
          max: 20,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '15%',
          color: ['#d94e5d','#eac736','#50a3ba'],
        },
        series: [{
          name: 'Punch Card',
          type: 'heatmap',
          data: heatmapOption.data[serialNumber.cur],
          label: {
            normal: {
              show: true
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };
      chartInstance.setOption(options);
    },
    [serialNumber.cur]
  );

  return (
    <div ref={chartRef} className={styles.chart}/>
  );
}


const mapStateToProps = state => {
  return {
    heatmapOption: state.heatmapOption,
    serialNumber: state.serialNumber,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heatmap);

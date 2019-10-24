import React, {useRef, useEffect} from 'react';
import { connect } from 'react-redux'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/heatmap';
import * as styles from '../../containers/DemoHomePage/styles.scss'
import HeatmapGrid from 'react-heatmap-grid';

function Heatmap({heatmapOption, serialNumber}) {
  // const chartRef = useRef(null);
  // let chartInstance = null;
  //
  // useEffect(
  //   () => {
  //     const renderedInstance = echarts.getInstanceByDom(chartRef.current)
  //     if (renderedInstance) {
  //       chartInstance = renderedInstance
  //     } else {
  //       chartInstance = echarts.init(chartRef.current)
  //     }
  //
  //     const options = {
  //       grid: {
  //         height: '50%',
  //         y: '10%'
  //       },
  //       xAxis: {
  //         show: false,
  //       },
  //       yAxis: {
  //         show: false,
  //       },
  //       visualMap: {
  //         min: 0,
  //         max: 20,
  //         calculable: true,
  //         orient: 'horizontal',
  //         left: 'center',
  //         bottom: '15%',
  //         color: ['#d94e5d','#eac736','#50a3ba'],
  //       },
  //       series: [{
  //         name: 'Punch Card',
  //         type: 'heatmap',
  //         data: heatmapOption.data[serialNumber.cur],
  //         label: {
  //           normal: {
  //             show: true
  //           }
  //         },
  //         itemStyle: {
  //           emphasis: {
  //             shadowBlur: 10,
  //             shadowColor: 'rgba(0, 0, 0, 0.5)'
  //           }
  //         }
  //       }]
  //     };
  //     chartInstance.setOption(options);
  //   },
  //   [serialNumber.cur]
  // );
  //
  // return (
  //   <div ref={chartRef} className={styles.chart}/>
  // );


  if (serialNumber.cur < 0 || serialNumber.cur >= heatmapOption.data.length) {
    return (<div/>);
  }

  const xLabels = new Array(heatmapOption.data[serialNumber.cur][0].length).fill(0).map((_, i) => '');
  const yLabels = new Array(heatmapOption.data[serialNumber.cur].length).fill(0).map((_, i) => '');
  const data=heatmapOption.data[serialNumber.cur];

  return (
    <HeatmapGrid
      xLabels={xLabels}
      yLabels={yLabels}
      data={data}
      background={'green'}
      height={20}
      squares={true}
      unit={'pd'}
      // cellStyle={(background, value, min, max, data, x, y) => ({
      //   background: `rgba(66, 86, 244, ${1 - (max - value) / (max - min)})`,
      //   fontSize: "11px",
      // })}
      // cellRender={value => value && `${value}`}
    />
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

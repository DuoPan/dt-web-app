import createChart from 'utils/createChart'
import { connect } from 'react-redux'
import { Spin } from 'antd'
import formatTime from 'utils/formatTimestamp'

const getOption = (props) => {
  const { dataSource = [] } = props
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: _.map(dataSource, series => series.name)
    },
    xAxis: {
      type: 'category',
      data: _.map(dataSource[0] && dataSource[0].data, d => d.x)
    },
    yAxis: {
      type: 'value'
    },
    series: _.map(dataSource, (series, i) => ({
      type: 'line',
      ...series,
      data: _.map(series.data, d => d.y)
    }))
  }
  return option
}
const Line = createChart(getOption)

const LineChart = (props) => {
  return <div style={{width: '100%', height: 200, position: 'relative'}}>
    <Line dataSource={props.dataSource} />
    {props.loading ? <Spin style={{position: 'absolute', width: '100%', top: 40}} /> : null}
  </div>
}

const mapStateToProps = state => {
  const currentTime = _.last(state.tileImages.data).timestamp
  return {
    dataSource: [{
      data: _.chain(state.prediction.data)
              .map(d => ({
                x: formatTime(d[0]),
                y: d[0] <= currentTime && d[1] > -1 ? d[1] : null
              }))
              .value(),
      name: 'history'
    }, {
      data: _.chain(state.prediction.data)
        .map(d => ({
          x: formatTime(d[0]),
          y: d[0] > currentTime && d[1] > -1 ? d[1] : null
        }))
        .value(),
      name: 'prediction'
    }],
    loading: state.prediction.loading
  }
}

export default connect(mapStateToProps)(LineChart)

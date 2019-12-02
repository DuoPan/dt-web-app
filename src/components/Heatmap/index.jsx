import React, {useRef, useState} from 'react'
import { connect } from 'react-redux'
import 'echarts/lib/chart/heatmap'
import HeatmapGrid from 'react-heatmap-grid'
import { clickHeatmap, loadPrediction } from 'actions'

function Heatmap ({heatmapOption, tileImages, serialNumber, clickHeatmap, loadPrediction}) {
  if (serialNumber.cur < 0 || serialNumber.cur >= heatmapOption.data.length) {
    return (<div />)
  }

  const xLabels = new Array(heatmapOption.data[serialNumber.cur][0].length).fill(0).map((_, i) => '')
  const yLabels = new Array(heatmapOption.data[serialNumber.cur].length).fill(0).map((_, i) => '')
  const data = heatmapOption.data[serialNumber.cur]
  const wrapEl = useRef(null)

  const [selectedCell, setSelectedCell] = useState([])

  const imgSize = wrapEl && wrapEl.current ? wrapEl.current.clientWidth : 'auto'

  const cellHeight = data ? imgSize / data.length - 1 : 300

  const onClick = (x, y) => {
    setSelectedCell([x, y])
    clickHeatmap({ x, y })
    const val = _.map(heatmapOption.data, (data) => data[y][x])
    const ds = _.map(tileImages.data, h => h.timestamp)
    loadPrediction(ds, val)
  }

  console.log('yy', data)

  return (
    <div ref={wrapEl} style={{width: '100%', height: imgSize}}>
      <HeatmapGrid
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelWidth={0}
        yLabelWidth={0}
        data={data}
        background={'green'}
        squares
        height={cellHeight}
        unit={'pd'}
        onClick={onClick}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: value === -1 ? 'rgba(0,0,0,0)' : `rgba(66, 86, 244, ${Math.min((value + 20) / 100, 1)})`,
          border: x === selectedCell[0] && y === selectedCell[1] ? '1px solid red' : 'none'
        })}
      // cellRender={value => value && `${value}`}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    heatmapOption: state.heatmapOption,
    serialNumber: state.serialNumber,
    tileImages: state.tileImages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickHeatmap: (payload) => {
      dispatch(clickHeatmap(payload))
    },
    loadPrediction: (ds, y) => {
      dispatch(loadPrediction({ds, y}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heatmap)

import React, {useRef} from 'react'
import {connect} from 'react-redux'
import {host} from 'configs'

function TileImageWrapper ({tileImages, serialNumber}) {
  if (serialNumber.cur === -1 || tileImages.data.length <= serialNumber.cur) {
    return (<div />)
  }

  const url = host + tileImages.data[serialNumber.cur].file_uri
  const wrapEl = useRef(null)

  const imgSize = wrapEl && wrapEl.current ? wrapEl.current.clientWidth : 300

  return (
    <div style={{ width: '100%' }} ref={wrapEl}>
      <img src={url} width={imgSize} height={imgSize} style={{transform: 'scaleY(-1)'}} />
      {/*<img src={tileImages.data[serialNumber.cur].file_uri} width={window.innerWidth * 0.375} style={{transform: 'scaleY(-1)'}}/>*/}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tileImages: state.tileImages,
    serialNumber: state.serialNumber
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TileImageWrapper);

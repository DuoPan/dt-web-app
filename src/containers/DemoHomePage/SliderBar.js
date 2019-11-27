import React from 'react';
import {connect} from 'react-redux';
import { Slider, Typography } from 'antd';
import { selectSerialNumber } from '../../actions'
import {debounce} from 'lodash';
import formatTimestamp from '../../utils/formatTimestamp'
import dataStatus from '../../constants/dataStatus'
import './styles.scss'

function SliderBar({tileImages, serialNumber, doSelectSerialNumber}) {
  if (serialNumber.cur === -1 || tileImages.data.length <= serialNumber.cur) {
    return (<div/>)
  }

  const handleChange = debounce((v) => {
    doSelectSerialNumber({cur: v})
  }, 1000)

  return (
    <div style={{marginLeft: '15%', marginRight: '15%', marginTop: 20, marginBottom: 20}}>
      {tileImages.status === dataStatus.SUCCESS && (<Typography.Title level={4} style={{color: '#555', textAlign: 'center'}}>{formatTimestamp(tileImages.data[serialNumber.cur].timestamp)}</Typography.Title>)}
      <Slider
        defaultValue={tileImages.data.length - 1}
        min={0}
        max={tileImages.data.length - 1}
        tipFormatter={null} onChange={handleChange} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tileImages: state.tileImages,
    serialNumber: state.serialNumber
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doSelectSerialNumber: (payload) => dispatch(selectSerialNumber(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderBar);

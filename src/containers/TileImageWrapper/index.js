import React from 'react';
import {connect} from 'react-redux';
import formatTimestamp from '../../utils/formatTimestamp';
import { Typography } from 'antd';


function TileImageWrapper({tileImages, serialNumber}) {
  if (serialNumber.cur === -1 || tileImages.data.length <= serialNumber.cur) {
    return (<div/>);
  }

  const {Title} = Typography;

  return (
    <div>
      <Title level={2}>{formatTimestamp(tileImages.data[serialNumber.cur].timestamp)}</Title>
      <img src={tileImages.data[serialNumber.cur].file_uri} width={window.innerWidth * 0.375} height={window.innerWidth * 0.375}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tileImages: state.tileImages,
    serialNumber: state.serialNumber,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TileImageWrapper);

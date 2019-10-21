import React from 'react';
import {connect} from 'react-redux';
import Typography from 'antd/lib/typography/Typography';
import formatTimestamp from '../../utils/formatTimestamp';

function TileImageWrapper({tileImages, serialNumber}) {
  if (serialNumber.cur === -1 || tileImages.data.length <= serialNumber.cur) {
    return (<div/>);
  }

  return (
    <div>
      <Typography>Time: {formatTimestamp(tileImages.data[serialNumber.cur].timestamp)}</Typography>
      <img src={tileImages.data[serialNumber.cur].file_uri} width={window.innerWidth / 4} height={window.innerWidth / 4}/>
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

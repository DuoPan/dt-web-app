import React from 'react';
import {connect} from 'react-redux';

function TileImageWrapper({tileImages, serialNumber}) {
  if (serialNumber.cur === -1 || tileImages.data.length <= serialNumber.cur) {
    return (<div/>);
  }

  return (
    <div style={{width: 400, height: 400}}>
      <img src={'http://34.66.36.111:80' + tileImages.data[serialNumber.cur].file_uri} width={400} height={400} style={{transform: 'scaleY(-1)'}}/>
      {/*<img src={tileImages.data[serialNumber.cur].file_uri} width={window.innerWidth * 0.375} style={{transform: 'scaleY(-1)'}}/>*/}
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

import React from 'react';
import {connect} from 'react-redux';
import Typography from 'antd/lib/typography/Typography';
import { Icon, Button } from 'antd';
import { selectSerialNumber } from '../../actions'

function SelectBar({tileImages, serialNumber, doSelectSerialNumber}) {
  if (serialNumber.cur === -1 || tileImages.data.length <= serialNumber.cur) {
    return (<div/>);
  }

  function toPreviousPage () {
    if (serialNumber.cur > 0) {
      doSelectSerialNumber({cur: serialNumber.cur - 1})
    }
  }

  function toNextPage () {
    if (serialNumber.cur < tileImages.data.length - 1) {
      doSelectSerialNumber({cur: serialNumber.cur + 1})
    }
  }

  return (
    <div
      style={{
        margin: 'auto',
        width: window.innerWidth * 0.8,
        marginTop: 30,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#55a34e',
          borderRadius: 10,
          paddingLeft: window.innerWidth / 8,
          paddingRight: window.innerWidth / 8,
          paddingTop: 30,
          paddingBottom: 30,
          alignItems: 'center',
        }}
      >
        <Button onClick={toPreviousPage} style={{backgroundColor: 'transparent', border: 'none'}}>
          <Icon type={'left'} style={{fontSize: 24, color: '#fff'}}/>
        </Button>
        <div
          style={{
            display: 'flex',
          }}
        >
          <Typography style={{fontSize: 24, color: '#fff'}}>{serialNumber.cur + 1}</Typography>
          <Typography style={{fontSize: 24, color: '#fff'}}>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</Typography>
          <Typography style={{fontSize: 24, color: '#fff'}}>{tileImages.data.length}</Typography>
        </div>
        <Button onClick={toNextPage} style={{backgroundColor: 'transparent', border: 'none'}}>
          <Icon type={'right'} style={{fontSize: 24, color: '#fff'}}/>
        </Button>
      </div>
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
  return {
    doSelectSerialNumber: (payload) => dispatch(selectSerialNumber(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectBar);

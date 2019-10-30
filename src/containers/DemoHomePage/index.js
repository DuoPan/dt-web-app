import React from 'react'
import {connect} from 'react-redux'
import * as styles from './styles.scss'
import DoodleImage from './DoodleImage'
import Menu from 'components/Menu';
import Layout from 'components/Layout';
import MENU_ITEMS from 'constants/menuItems';
import RoiMapWrapper from '../RoiMapWrapper';
import HeatmapWrapper from '../HeatmapWrapper';
import TileImageWrapper from '../TileImageWrapper';
import LineChart from './LineChart';
import dataStatus from '../../constants/dataStatus'
import SelectBar from './SelectBar';

class Home extends React.Component {

  render () {
    return (
      <Layout>
        <Menu current={MENU_ITEMS.HOME} router={this.props.router}/>
        <DoodleImage/>
        <div className={styles.body}>
          <div className={styles.left}>
            <RoiMapWrapper/>
          </div>
        </div>
        <div className={styles.bt}>
          {this.props.tileImages.status === dataStatus.SUCCESS && <TileImageWrapper/>}
          <div style={{width: window.innerWidth * 0.375, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 53}}>
            {this.props.heatmapOption.status === dataStatus.SUCCESS  && <HeatmapWrapper/>}
            {this.props.lineChartOption.status === dataStatus.SUCCESS && (<LineChart/>)}
          </div>
        </div>
        <SelectBar/>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    lineChartOption: state.lineChartOption,
    heatmapOption: state.heatmapOption,
    tileImages: state.tileImages,
    serialNumber: state.serialNumber,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
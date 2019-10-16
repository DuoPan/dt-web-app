import {connect} from 'react-redux'
import * as styles from './styles.scss'
import DoodleImage from './DoodleImage'
import Menu from 'components/Menu';
import Layout from 'components/Layout';
import MENU_ITEMS from 'constants/menuItems';
import SearchRegion from './SearchRegion';
import { Button } from 'antd';
import RoiMapWrapper from '../RoiMapWrapper';
import HeatmapWrapper from '../HeatmapWrapper';
import LineChart from './LineChart';
import dataStatus from '../../constants/dataStatus'

class Home extends React.Component {

  render () {
    return (
      <Layout>
        <Menu current={MENU_ITEMS.HOME} router={this.props.router}/>
        <DoodleImage/>
        <div className={styles.body}>
          <div className={styles.left}>
            <SearchRegion/>
            <RoiMapWrapper/>
          </div>
          <div className={styles.right}>
            <Button className={styles.btn}>Draw ROI</Button>
            <Button className={styles.btn}>Pan</Button>
            <Button className={styles.btn}>Search</Button>
          </div>
        </div>
        <div className={styles.bt}>
          {this.props.heatmapOption.status === dataStatus.SUCCESS && <HeatmapWrapper/>}
          {this.props.lineChartOption.status === dataStatus.SUCCESS && (<LineChart option={this.props.lineChartOption}/>)}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    lineChartOption: state.lineChartOption,
    heatmapOption: state.heatmapOption,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
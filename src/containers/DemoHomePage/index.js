import {connect} from 'react-redux'
import * as styles from './styles.scss'
import Banner from 'components/DemoCmpt'
import Menu from 'components/Menu';
import Layout from 'components/Layout';
import MENU_ITEMS from 'constants/menuItems';
import SearchRegion from './SearchRegion';
import { Button } from 'antd';
import RoiMapPage from '../RoiMapPage';
import LineChart from './LineChart';
import dataStatus from '../../constants/dataStatus'

class Home extends React.Component {

  render () {
    return (
      <Layout>
        <Menu current={MENU_ITEMS.HOME} router={this.props.router}/>
        <Banner text='Here is a pic' />
        <div className={styles.body}>
          <div className={styles.left}>
            <SearchRegion/>
            <RoiMapPage/>
          </div>
          <div className={styles.right}>
            <Button className={styles.btn}>Draw ROI</Button>
            <Button className={styles.btn}>Pan</Button>
            <Button className={styles.btn}>Search</Button>
          </div>
        </div>
        <div style={{marginTop: 20}}>
          {this.props.lineChartOption.status === dataStatus.SUCCESS && (<LineChart option={this.props.lineChartOption}/>)}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    lineChartOption: state.lineChartOption,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
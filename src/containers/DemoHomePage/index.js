import React from 'react'
import {connect} from 'react-redux'
import * as styles from './styles.scss'
import DoodleImage from './DoodleImage'
import Menu from 'components/Menu'
import Layout from 'components/Layout'
import MENU_ITEMS from 'constants/menuItems'
import RoiMapWrapper from '../RoiMapWrapper'
import TileImageWrapper from '../TileImageWrapper'
import LineChart from './Line'
import dataStatus from '../../constants/dataStatus'
import Heatmap from 'components/Heatmap'
import SliderBar from './SliderBar'
import { Row, Col, Spin } from 'antd'

class Home extends React.Component {
  render () {
    const cardStyle = {
      // backgroundColor: '#fff',
      // padding: 30
    }
    const {tileImages, heatmapOption, router} = this.props

    const init = tileImages.status === dataStatus.INIT && heatmapOption.status === dataStatus.INIT
    return (
      <Layout>
        <Menu current={MENU_ITEMS.HOME} router={router} />
        <div style={{position: 'absolute', top: 60, left: 0, width: '100%'}}>
          <Row gutter={20}>
            <DoodleImage />
          </Row>
          <Row style={{ padding: '40px 50px' }} gutter={40}>
            <Col span={10}>
              <div style={cardStyle}>
                <RoiMapWrapper />
              </div>
            </Col>
            <Col span={14}>
              <div style={{...cardStyle, height: 690}} className={init ? styles.empty : ''}>
                <SliderBar />
                <Row>
                  <Col span={12} style={{ position: 'relative' }}>
                    {tileImages.status === dataStatus.SUCCESS && <TileImageWrapper />}
                    {
                      tileImages.status === dataStatus.LOADING
                        ? <Spin tip='Processing satellite images...' style={{ position: 'absolute', top: 200, width: '100%' }} />
                        : null
                    }
                  </Col>
                  <Col span={12} style={{position: 'relative'}}>
                    {heatmapOption.status === dataStatus.SUCCESS && <Heatmap />}
                    {
                      heatmapOption.status === dataStatus.LOADING
                        ? <Spin tip='Generating heatmap...' style={{ position: 'absolute', top: 200, width: '100%' }} />
                        : null
                    }
                  </Col>
                </Row>
                <div style={{width: '100%', marginTop: 20}}>
                  {heatmapOption.clickedX !== -1 && heatmapOption.clickedY !== -1 && (<LineChart />)}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    // lineChartOption: state.lineChartOption,
    heatmapOption: state.heatmapOption,
    tileImages: state.tileImages,
    serialNumber: state.serialNumber
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
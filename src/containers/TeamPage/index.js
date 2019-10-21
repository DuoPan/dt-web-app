import React, {useState} from 'react';
import {connect} from 'react-redux'
// import * as styles from './styles.scss'
import Menu from 'components/Menu';
import Layout from 'components/Layout';
import MENU_ITEMS from '../../constants/menuItems';
import Person from './Person';

class TeamPage extends React.Component {

  render () {
    return (
      <Layout>
        <Menu current={MENU_ITEMS.TEAM} router={this.props.router}/>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 40,
          }}
        >
          <Person path={require('../../../asset/dxc.png')} name={'dxc'}/>
          <div style={{width: 40}}/>
          <img src={require('../../../asset/dxc.png')} alt={'dxc'} width={(window.innerWidth-160)/5} height={400} style={{backgroundColor: '#55A34E'}}/>
          <div style={{width: 40}}/>
          <img src={require('../../../asset/dxc.png')} alt={'dxc'} width={(window.innerWidth-160)/5} height={400} style={{backgroundColor: '#55A34E'}}/>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 40,
          }}
        >
          <img src={require('../../../asset/dxc.png')} alt={'dxc'} width={(window.innerWidth-160)/5} height={400} style={{backgroundColor: '#55A34E'}}/>
          <div style={{width: 40}}/>
          <img src={require('../../../asset/dxc.png')} alt={'dxc'} width={(window.innerWidth-160)/5} height={400} style={{backgroundColor: '#55A34E'}}/>
          <div style={{width: 40}}/>
          <Person path={require('../../../asset/pd.jpg')} name={'Duo Pan'} fp={'Web Developer'}/>
        </div>
      </Layout>
    ); 
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)
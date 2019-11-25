import React from 'react';
import {connect} from 'react-redux'
import * as styles from './style.scss'
import { Icon } from 'antd';
import MENU_ITEMS from '../../constants/menuItems';
import {rootPath} from 'configs'; // component依赖全局配置是不太好的做法，应该从父组件传prop下来，我比较懒....

function MyMenu({
  router,
  current = MENU_ITEMS.HOME,
} = props) {
  function handleClick(e) {
    router.push(`${rootPath}/${e}`);
  }

  return (
    <div className={styles.rowSp}>
      <img src={require('../../../asset/logo.png')} alt={'logo'} width={60} height={60} />
      <div className={styles.menu}>
        <div key="home" className={styles.item} style={{color: current === 'home' ? '#eee9a3' : '#fff'}} onClick={() => handleClick('home')}>
          <Icon type="home" style={{fontSize: 24}}/>
          &nbsp;Home
        </div>
        <div key="about" className={styles.item} style={{color: current === 'about' ? '#eee9a3' : '#fff'}} onClick={() => handleClick('about')}>
          <Icon type="info-circle" style={{fontSize: 24}}/>
          &nbsp;About
        </div>
        <div key="team" className={styles.item} style={{color: current === 'team' ? '#eee9a3' : '#fff'}} onClick={() => handleClick('team')}>
          <Icon type="team" style={{fontSize: 24}}/>
          &nbsp;Team
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMenu)
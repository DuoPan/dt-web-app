import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import * as styles from './style.scss'
import { Menu, Icon } from 'antd';
import MENU_ITEMS from '../../constants/menuItems';
import {rootPath} from 'configs'; // component依赖全局配置是不太好的做法，应该从父组件传prop下来，我比较懒....

function MyMenu({
  router,
  current = MENU_ITEMS.HOME,
} = props) {
  function handleClick(e) {
    router.push(`${rootPath}/${e.key}`);
  }

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className={styles.menu}>
      <Menu.Item key="home">
        <Icon type="home" />
        Home
      </Menu.Item>
      <Menu.Item key="about">
        <Icon type="info-circle" />
        About
      </Menu.Item>
      <Menu.Item key="team">
        <Icon type="team" />
        Team
      </Menu.Item>
    </Menu>
  );
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMenu)
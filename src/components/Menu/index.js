import React from 'react';
import {connect} from 'react-redux'
import * as styles from './style.scss'
import { Menu, Icon } from 'antd';
import MENU_ITEMS from '../../constants/menuItems';

function MyMenu({
  router,
  current = MENU_ITEMS.HOME,
} = props) {
  function handleClick(e) {
    router.push(e.key);
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
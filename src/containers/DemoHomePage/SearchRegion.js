import React, {useState} from 'react';
import {connect} from 'react-redux'
import * as styles from './styles.scss'
import {Dropdown, Button, Icon, Menu} from 'antd';

function SearchRegion() {
  const [title, setTitle] = useState('Select Region');

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => setTitle('Melbourne')}>
        <Icon type="map" />
        Melbourne
      </Menu.Item>
      <Menu.Item key="2" onClick={() => setTitle('Sydeny')}>
        <Icon type="map" />
        Sydeny
      </Menu.Item>
      <Menu.Item key="3" onClick={() => setTitle('Kan Pei La')}>
        <Icon type="map" />
        Kan Pei La
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} className={styles.dp}>
      <Button>
        {title} <Icon type="down" />
      </Button>
    </Dropdown>
  );
}

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRegion);
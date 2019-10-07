import React, {useState} from 'react';
import {connect} from 'react-redux'
import * as styles from './styles.scss'
import {Dropdown, Button, Icon, Menu} from 'antd';
import {selectRegion} from '../../actions';

function SearchRegion({region, doSelectRegion}) {
  const [title, setTitle] = useState('Select Region');
  function hanldeSelect(n, lat, lng) {
    setTitle(n);
    doSelectRegion({name: n, lat, lng});
  }

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => hanldeSelect('Melbourne', -37.817252, 144.947494)}>
        Melbourne
      </Menu.Item>
      <Menu.Item key="2" onClick={() => hanldeSelect('Sydeny', -33.865143, 151.2099)}>
        Sydeny
      </Menu.Item>
      <Menu.Item key="3" onClick={() => hanldeSelect('Canberra', -35.343784, 149.082977)}>
        Canberra
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
  return {
    region: state.region,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    doSelectRegion: (payload) => dispatch(selectRegion(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRegion);

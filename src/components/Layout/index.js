import React from 'react';
import {connect} from 'react-redux'
import * as styles from './style.scss'

function Layout({children}) {
  return (
    <div className={styles.root}>
      {children}
      <div className={styles.foot}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
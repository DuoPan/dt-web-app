import {connect} from 'react-redux'
// import * as styles from './styles.scss'
import Menu from 'components/Menu';
import Layout from 'components/Layout';
import Typography from 'antd/lib/typography/Typography';
import MENU_ITEMS from '../../constants/menuItems';

class TeamPage extends React.Component {
  render () {
    return (
      <Layout>
        <Menu current={MENU_ITEMS.TEAM} router={this.props.router}/>
        <Typography>This is Team page</Typography>
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
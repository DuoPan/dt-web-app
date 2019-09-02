import {connect} from 'react-redux'
import * as styles from './styles.scss'
import Banner from 'components/DemoCmpt'

class Home extends React.Component {
  render () {
    console.log('hisssss:',this.props);
    return (
      <div onClick={() => this.props.router.push('/roi-map')} >
        <Banner text='go to map' />
      </div>
    ); 
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
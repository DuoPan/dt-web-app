import {connect} from 'react-redux'
import * as styles from './styles.scss'
import Banner from 'components/DemoCmpt'

class Home extends React.Component {
  render () {
    return <div>
      <Banner text='Hello World!' />
    </div>
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
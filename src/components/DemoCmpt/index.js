import * as styles from './style.scss'

export default class Banner extends React.Component {
  render () {
    const {text} = this.props
    return <div className={styles.banner}>
      {text}
    </div>
  }
}
import {browserHistory, Router, Route, IndexRedirect} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import store from 'store'
import { rootPath } from 'configs'

const history = syncHistoryWithStore(browserHistory, store)

export default class Routes extends React.Component {
  render () {
    return (
      <Router history={history}>
        <Route path='/' >
          <IndexRedirect to={rootPath} />
          <Route path={rootPath}>
            <IndexRedirect to='home' />
            <Route path='home' getComponents={(nextState, cb) => {
              import(/* webpackChunkName: "home" */ 'containers/DemoHomePage')
                .then(module => cb(null, module.default))
                .catch(e => console.error(e))
            }} />
            <Route path='about' getComponents={(nextState, cb) => {
              import(/* webpackChunkName: "about" */ 'containers/AboutPage')
                .then(module => cb(null, module.default))
                .catch(e => console.error(e))
            }} />
            <Route path='team' getComponents={(nextState, cb) => {
              import(/* webpackChunkName: "team" */ 'containers/TeamPage')
                .then(module => cb(null, module.default))
                .catch(e => console.error(e))
            }} />
          </Route>
        </Route>
      </Router>
    )
  }
}

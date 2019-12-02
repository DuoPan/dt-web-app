import middlewares from './middlewares'
const rootPath = '/set_fe'

const host = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`

// const host = 'http://35.209.7.185'
export {
  rootPath,
  middlewares,
  host
}

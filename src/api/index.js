import myfetch from 'utils/myfetch'
import 'whatwg-fetch'

const {HOST, apiPrefix} = globalConfig.default

export async function demoApi () {
  // const resp = await myfetch({
  //   url: `${HOST}${apiPrefix}/status?scence_id=${userId}&status=${'start'}&bz_id=${bzId}`,
  //   method: 'POST'
  // })
  // return resp && resp.succeed
  return 'Done'
}

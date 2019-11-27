import myfetch from 'utils/myfetch'
import 'whatwg-fetch'
import getEnv from '../../.env'
import {host} from 'configs'

// const {HOST, apiPrefix} = globalConfig.default
const {HOST, apiPrefix} = getEnv()

export async function demoApi () {
  // const resp = await myfetch({
  //   url: `${HOST}${apiPrefix}/helloWorld`,
  //   method: 'GET'
  // })
  // console.log(resp)
  // return resp
  // return resp && resp.succeed
}

export async function helloWorldApi () {
  const result = await fetch(`${HOST}${apiPrefix}/helloWorld`)
    .then((data) => data.json())
    .then((res) => res.data)
  console.log('result', result)
  return result
}

export async function loadLineChartOptionApi (postData) {
  const resp = await myfetch({
    url: `${HOST}${apiPrefix}/loadLineChartOption`,
    data: postData,
    method: 'POST',
    dataType: 'json',
  })
  return resp //&& resp.succeed
}

export async function loadHeatmapOptionApi (postData) {
  const resp = await myfetch({
    // url: `${host}${apiPrefix}/loadHeatmapOption`,
    url: `${host}/api/v1/score/heatmap`,
    data: postData,
    // data: {"type": "Feature","geometry": {"type": "Polygon",
    //     "coordinates": [[148.60709030303114, -20.540043246963264],
    //       [148.69607543743531, -20.539590412428996],
    //       [148.6865658493269, -20.595756032466892],
    //       [148.6275658455197,-20.606209452942387]]},"properties": {"name": ""}},
    method: 'POST',
    dataType: 'json',
  })
  return resp // && resp.succeed
}

export async function loadTileImagesApi (postData) {
  const resp = await myfetch({
    url: `${host}/api/v1/score/tiles`,
    data: postData,
    // data: {"type": "Feature","geometry": {"type": "Polygon",
    //     "coordinates": [[148.60709030303114, -20.540043246963264],
    //       [148.69607543743531, -20.539590412428996],
    //       [148.6865658493269, -20.595756032466892],
    //       [148.6275658455197,-20.606209452942387]]},"properties": {"name": ""}},
    method: 'POST',
    dataType: 'json',
  })
  return resp // && resp.succeed
}

export async function loadPredctionApi (postData) {
  const resp = await myfetch({
    url: `${host}/api/v1/score/predict`,
    data: postData,
    method: 'POST',
    dataType: 'json'
  })
  return resp // && resp.succeed
}

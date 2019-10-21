import myfetch from 'utils/myfetch'
import 'whatwg-fetch'
import getEnv from '../../.env'

// const {HOST, apiPrefix} = globalConfig.default
const {HOST, apiPrefix} = getEnv();

export async function demoApi () {
  // const resp = await myfetch({
  //   url: `${HOST}${apiPrefix}/helloWorld`,
  //   method: 'GET'
  // })
  // console.log(resp);
  // return resp;
  // return resp && resp.succeed
}

export async function helloWorldApi () {
  const result = await fetch(`${HOST}${apiPrefix}/helloWorld`)
    .then((data) => data.json())
    .then((res) => res.data);
  console.log('result', result)
  return result;
}

export async function loadLineChartOptionApi (postData) {
  const resp = await myfetch({
    url: `${HOST}${apiPrefix}/loadLineChartOption`,
    data: postData,
    method: 'POST',
    dataType: 'json',
  });
  return resp; //&& resp.succeed
}

export async function loadHeatmapOptionApi (postData) {
  const resp = await myfetch({
    // url: `${HOST}${apiPrefix}/loadHeatmapOption`,
    url: `http://10.0.0.56:5000/api/v1/score/heatmap`,
    data: postData,
    method: 'POST',
    dataType: 'json',
  });
  return resp; // && resp.succeed
}
import $axios from "./axios";
export  function getWeiboHotSearch() {
  return $axios({
    url:'webio/weibo/',
    method: 'get'
  })
}
export  function getWeiboHotSearchDetails(params) {
  return $axios({
    url:'webioDetails/'+params.url,
    method: 'get'
  })
}

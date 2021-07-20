import $axios from "./axios";
export function getListAPI () {
  return $axios({
    url: 'api/list',
    method: 'get'
  }, {
    repeat_request_cancel: true
  }
  )
}
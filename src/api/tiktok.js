import $axios from './axios'
export function gettiktokList (data) {
  return $axios({
    url:'tiktok/aweme/v1/web/channel/feed',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}
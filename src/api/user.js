import $axios from "./axios";
import Qs from 'qs'
export  function login (paramsList) {
  return $axios({
    url: 'api/login',
    method: 'post',
    data: paramsList,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    /*允许在向服务器发送前，修改请求数据，但只能用在'PUT','POST'和 'PATCH'这几个请求方法，
    **且后刀面数组中的函数必须返回一个字符串
    */
    transformRequest: [
      (data) => {
        return Qs.stringify(data)
      }
    ]
  })
}
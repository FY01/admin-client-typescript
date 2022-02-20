/*
 * @Descripttion:
 * @version:
 * @@Company:
 * @Author: FY01
 * @Date: 2022-02-15 16:27:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-15 22:09:54
 */

import axios from 'axios'
import { message } from 'antd'

export default function ajax(
  url: string,
  data: { [propName: string]: string } = {},
  method: string = 'GET',
): any {
  return new Promise((resolve, reject) => {
    let promise
    if (method === 'GET' || method === 'get') {
      promise = axios.get(url, {
        params: data,
      })
    } else {
      promise = axios.post(url, data)
    }

    promise
      // request successful
      .then((value) => {
        resolve(value)
      })
      // request failure
      .catch((error) => {
        message.error('请求失败了:' + error)
      })
  })
}

/*
 * @Descripttion:
 * @version:
 * @@Company:
 * @Author: FY01
 * @Date: 2022-02-15 18:02:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-15 22:06:58
 */
import ajax from './ajax'

const BASE = ''

interface T {
  [propName: string]: string
}
// login
export const reqLogin = (username: string, password: string): any =>
  ajax(BASE + '/login', { username, password }, 'POST')

// add an user
export const reqAddUser = (user: { [propName: string]: string }): any =>
  ajax(BASE + 'manage/user/add', user, 'POST')

/*
 * @Descripttion:
 * @version:
 * @@Company:
 * @Author: FY01
 * @Date: 2022-02-15 18:02:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-15 21:55:24
 */
import ajax from './ajax'

const BASE = ''

// login
export const reqLogin = (
  username: string,
  password: string,
): Promise<unknown> => ajax(BASE + '/login', { username, password }, 'POST')

// add an user
export const reqAddUser = (user: {
  [propName: string]: string
}): Promise<unknown> => ajax(BASE + 'manage/user/add', user, 'POST')

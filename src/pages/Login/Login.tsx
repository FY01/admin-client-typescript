/*
 * @Descripttion:
 * @version:
 * @@Company:
 * @Author: FY01
 * @Date: 2022-01-11 15:42:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-12 11:34:40
 */
import React, { Component } from 'react'
import { Button } from 'antd'

import './login.less'

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Login</h1>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

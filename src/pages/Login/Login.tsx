/*
 * @Descripttion:
 * @version:
 * @@Company:
 * @Author: FY01
 * @Date: 2022-01-11 15:42:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-13 14:55:00
 */
import React, { Component } from 'react'

import logo from './images/react.png'
import LoginForm from '../../components/LoginForm/LoginForm'

import './login.less'

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>admin system</h1>
        </header>
        <section className="login-content">
          <h2>Login</h2>
          <LoginForm></LoginForm>
        </section>
      </div>
    )
  }
}

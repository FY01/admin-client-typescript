/*
 * @Descripttion:
 * @version:
 * @@Company:
 * @Author: FY01
 * @Date: 2022-01-11 15:42:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-15 22:50:43
 */
import React, { Component } from 'react'

import logo from './images/react.png'
import LoginForm from '../../components/LoginForm/LoginForm'

import './login.less'

export default class Login extends Component {
  render() {
    console.log(this)
    return (
      <div className="login">
        {/* 0.0 header */}
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>admin system</h1>
        </header>
        {/* 1.0 login content */}
        <section className="login-content">
          <h2>Login</h2>
          {/* <LoginForm></LoginForm> */}
        </section>
      </div>
    )
  }
}

/*
 * @Descripttion:
 * @version:
 * @@Company:
 * @Author: FY01
 * @Date: 2022-01-10 21:37:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-11 16:14:41
 */
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

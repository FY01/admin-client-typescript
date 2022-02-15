/*
 * @Descripttion:
 * @version:
 * @@Company:
 * @Author: FY01
 * @Date: 2022-01-13 14:52:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-15 21:54:28
 */
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { reqLogin } from '@@/src/api'

import './index.less'

interface loginData {
  username: string
  password: string
}
const LoginForm = () => {
  const onFinish = async (values: loginData) => {
    const result = await reqLogin(values.username, values.password)
    console.log(result)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
      //   submit and validate successful
      onFinish={onFinish}
      //   submit and validate failed
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        initialValue="admin"
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Please input your username!',
          },
          {
            min: 4,
            message: "username's length must >= 4",
          },
          {
            max: 12,
            message: "username's length must =< 12",
          },
          {
            pattern: /^[0-9a-zA-Z_]+$/,
            message: 'legal letter: 0-9,a-Z or _ ',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="please inter your username"
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Please input your password!',
          },
          {
            min: 4,
            message: "password's length must >= 8",
          },
          {
            max: 12,
            message: "password's length must =< 12",
          },
          {
            pattern: /^[0-9a-zA-Z_]+$/,
            message: 'legal letter: 0-9,a-Z or _ ',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="please inter your password"
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 24,
        }}
      >
        <Button type="primary" htmlType="submit" className="loginSubmit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm

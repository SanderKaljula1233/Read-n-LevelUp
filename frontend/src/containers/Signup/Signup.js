import React, { Component } from 'react';
import * as actions from '../../store/actions/auth';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';

import { Form, Input, Button } from 'antd';

class Signup extends Component {
 

  onFinish = values => {
    this.props.onAuth(
        values.username, 
        values.email,
        values.password,
        values.confirm
    );
    this.props.history.push('/');
  };


    render() {
        return (
            <Form
              name="register"
              onFinish={this.onFinish}
              initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
              }}
              scrollToFirstError
            >
                <Form.Item
                            name="username"
                            label="Username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
        
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
        
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
        
                      return Promise.reject('The two passwords that you entered do not match!');
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
        
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                        Register
                    </Button>
                    Or 
                    <NavLink 
                        style={{marginRight: '10px'}} 
                        to='/'> Login
                    </NavLink>
                </Form.Item>
            </Form>
          );
    }
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
import { Button, Form, Input } from 'antd';
import React, { FC, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creator';

const LoginForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useAppSelector((state) => state.auth);
  const { login } = useActions();
  const submit = () => {
    login(username, password);
  };
  return (
    <Form onFinish={submit}>
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[{ required: true, message: 'Пожалуйста введите имя!' }]}
      >
        <Input
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Пожалйста введите пароль' }]}
      >
        <Input
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
      {error}
    </Form>
  );
};

export default LoginForm;

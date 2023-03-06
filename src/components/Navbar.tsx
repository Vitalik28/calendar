import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { RoutesName } from '../routes';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.auth);
  return isAuth ? (
    <Layout.Header>
      <Row justify="end">
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <div>Vitalik</div>
          <Menu.Item key={1} onClick={() => console.log('выйти')}>
            выйти
          </Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  ) : (
    <Layout.Header>
      <Row justify="end">
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key={3} onClick={() => navigate(RoutesName.Login)}>
            Логин
          </Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;

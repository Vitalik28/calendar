import React, { useEffect } from 'react';
import './App.css';
import AppRoute from './components/AppRoute';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import { useAppSelector } from './hooks/useAppSelector';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

function App() {
  const { setAuth, setUser } = useActions();
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(true);
      setUser({ username: localStorage.getItem('username') } as IUser);
    }
  });
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRoute />
      </Layout.Content>
    </Layout>
  );
}

export default App;

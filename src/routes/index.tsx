import React from 'react';
import Event from '../pages/Event';
import Login from '../pages/Login';

interface IRoute {
  path: string;
  element?: React.ReactElement | null;
}

export enum RoutesName {
  Login = '/login',
  Event = '/',
}

export const publicRoutes: IRoute[] = [
  { path: RoutesName.Login, element: <Login /> },
];

export const privateRoutes: IRoute[] = [
  { path: RoutesName.Event, element: <Event /> },
];

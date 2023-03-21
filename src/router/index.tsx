import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

// 懒加载一级路由

const Login = lazy(() => import('@/views/Login'));
const Register = lazy(() => import('@/views/Register'));
const Chat = lazy(() => import('@/views/Chat'));
const Avatar = lazy(() => import('@/views/Avatar'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/chat"></Navigate>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/chat',
    element: <Chat></Chat>,
  },
  {
    path: '/avatar',
    element: <Avatar></Avatar>,
  },
];

export default routes;

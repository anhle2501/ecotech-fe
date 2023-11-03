import { createBrowserRouter, Outlet } from 'react-router-dom';
import Error from './pages/Error';
import CustomerContents from './pages/customer/CustomerContents';
import CustomerDetails from './pages/customer/CustomerDetails';
import Header from './components/Header';
import React from 'react';
import Order from './pages/Order';
import User from './pages/User';
import DashBoard from './pages/DashBoard';
import PaymentType from './pages/PaymentType';

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <>
        <Header />
        <Outlet />
      </>,
    children: [
      {
        path: '/customers',
        element: <CustomerContents />,
      },
      {
        path: '/customers/:id',
        element: <CustomerDetails />,
      },
      {
        path: '/orders',
        element: <Order />
      },
      {
        path: '/orders/:id',
        element: <Order />
      },
      {
        path: '/users',
        element: <User />
      },
      {
        path: '/users/:id',
        element: <User />
      },
      {
        path: '/dashboard',
        element: <DashBoard />
      },
      {
        path: '/payment-types',
        element: <PaymentType />
      },
    ],
    errorElement: <Error />,
  }

]);

export default router;

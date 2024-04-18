import { createBrowserRouter, Outlet } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import CustomerContents from './pages/customer/CustomerContents';
import CustomerDetails from './pages/customer/CustomerDetails';
import Header from './components/Header';
import PrivateWrapper from './components/PrivateWrapper';
import React from 'react';
import Order from './pages/Order';
import User from './pages/User';
import DashBoard from './pages/DashBoard';
import PaymentType from './pages/PaymentType';
import Login from './pages/login/Login';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <>
      <Login />
    </>,
    errorElement: <ErrorPage />
  }
  ,
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
        element: <>
          <CustomerContents />
        </>,
      },
      {
        path: '/customers/:id',
        element: <>

          <CustomerDetails />
        </>,
      },
      {
        path: '/orders',
        element:
          <>

            <Order />
          </>
      },
      {
        path: '/orders/:id',
        element:
          <>

            <Order />
          </>
      },
      {
        path: '/users',
        element:
          <>

            <User />
          </>
      },
      {
        path: '/users/:id',
        element:
          <>

            <User />
          </>
      },
      {
        path: '/dashboard',
        element:
          <>

            <DashBoard />
          </>
      },
      {
        path: '/payment-types',
        element:
          <>

            <PaymentType />
          </>
      },
    ],
    errorElement: <ErrorPage />,
  }

]);

export default router;

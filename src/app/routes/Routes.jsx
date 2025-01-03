import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  BarcodePage,
  CornerAPage,
  CornerBPage,
  CornerCPage,
  CornerDPage,
  LoginPage,
  Mypage,
  PaymentPage,
  PointPage,
  RegisterPage,
  ReviewPage,
  SelectCornerPage,
} from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/mypage',
    children: [
      {
        index: true,
        element: <Mypage />,
      },
      {
        path: 'point',
        element: <PointPage />,
      },
      {
        path: 'barcode',
        element: <BarcodePage />,
      },
    ],
  },
  {
    path: '/payment',
    element: <PaymentPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/corner',
    children: [
      {
        index: true,
        element: <SelectCornerPage />,
      },
      {
        path: 'A',
        element: <CornerAPage />,
      },
      {
        path: 'B',
        element: <CornerBPage />,
      },
      {
        path: 'C',
        element: <CornerCPage />,
      },
      {
        path: 'D',
        element: <CornerDPage />,
      },
    ],
  },
  {
    path: '/review',
    element: <ReviewPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};

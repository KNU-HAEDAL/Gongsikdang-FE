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
  ReviewFoodPage,
  ReviewWritePage,
  SelectCornerPage,
} from '@/pages';

import { Layout } from '@/shared';

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
    path: '/register',
    element: <RegisterPage />,
  },

  {
    path: '/mypage',
    children: [
      {
        element: <Layout title='마이페이지' />,
        children: [
          {
            index: true,
            element: <Mypage />,
          },
        ],
      },
      {
        path: 'point',
        element: <Layout title='포인트 충전' />,
        children: [
          {
            index: true,
            element: <PointPage />,
          },
        ],
      },
      {
        path: 'barcode',
        element: <Layout title='바코드 확인' />,
        children: [
          {
            index: true,
            element: <BarcodePage />,
          },
        ],
      },
    ],
  },
  {
    path: '/payment',
    children: [
      {
        element: <Layout title='상품 결제' />,
        children: [
          {
            index: true,
            element: <PaymentPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/corner',
    children: [
      {
        element: <Layout title='코너 선택' />,
        children: [
          {
            index: true,
            element: <SelectCornerPage />,
          },
        ],
      },
      {
        path: 'A',
        children: [
          {
            element: <Layout title='A 코너' />,
            children: [
              {
                index: true,
                element: <CornerAPage />,
              },
            ],
          },
        ],
      },
      {
        path: 'B',
        children: [
          {
            element: <Layout title='B 코너' />,
            children: [
              {
                index: true,
                element: <CornerBPage />,
              },
            ],
          },
        ],
      },
      {
        path: 'C',
        children: [
          {
            element: <Layout title='C 코너' />,
            children: [
              {
                index: true,
                element: <CornerCPage />,
              },
            ],
          },
        ],
      },
      {
        path: 'D',
        children: [
          {
            element: <Layout title='D 코너' />,
            children: [
              {
                index: true,
                element: <CornerDPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/review/food',
    children: [
      {
        element: <Layout title='음식 리뷰' />,
        children: [
          {
            index: true,
            element: <ReviewFoodPage />,
          },
          {
            path: ':foodId',
            element: <ReviewFoodPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/review/write',
    children: [
      {
        element: <Layout title='리뷰 작성' />,
        children: [
          {
            index: true,
            element: <ReviewWritePage />,
          },
        ],
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BarcodePage } from '@/pages/barcode';
import { CafeteriaPage } from '@/pages/cafeteria';
import { ChooseRestaurantPage } from '@/pages/choose-restaurant';
import { GongsikdangPage } from '@/pages/gongsikdang';
import { LoginPage } from '@/pages/login';
import { Mypage } from '@/pages/mypage';
import { PaymentPage } from '@/pages/payment';
import { RegisterPage } from '@/pages/register';
import { RestaurantInfoPage } from '@/pages/restaurant-info';

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
    element: <Mypage />,
  },
  {
    path: '/payment',
    element: <PaymentPage />,
  },
  {
    path: '/cafeteria',
    element: <CafeteriaPage />,
  },
  {
    path: '/barcode',
    element: <BarcodePage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/choose-restaurant',
    element: <ChooseRestaurantPage />,
  },
  {
    path: '/gongsikdang',
    element: <GongsikdangPage />,
  },
  {
    path: '/restaurant-info',
    element: <RestaurantInfoPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};

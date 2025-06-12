import App from './App';
import Home from './components/home/HomePage';
import Shop from './components/shop/ShopPage';
import Cart from './components/cart/CartPage';
import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];

export default routes;

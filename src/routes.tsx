import App from './App';
import Home from './components/pages/HomePage';
import Shop from './components/pages/ShopPage';
import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
    ],
  },
];

export default routes;

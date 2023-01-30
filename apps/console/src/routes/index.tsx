import { useRoutes } from 'react-router-dom';

import { ConsoleLayout } from '../layouts';
import {
  Welcome,
  AllProducts,
  AllUsers,
  SingleProduct,
  SingleUser
} from '../components';

export function ConsoleRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Welcome />,
    },
    {
      path: '/products',
      element: <AllProducts />,
    },
    {
      path: '/products/:productId',
      element: <SingleProduct />,
    },
    {
      path: '/users',
      element: <AllUsers />,
    },
    {
      path: '/users/:userId',
      element: <SingleUser />,
    },
    {
      path: '*',
      element: <Welcome />,
    }
  ]);

  return (
    <ConsoleLayout>
      {routes}
    </ConsoleLayout>
  )
}

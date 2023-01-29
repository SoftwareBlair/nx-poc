import { useRoutes } from 'react-router-dom';

import { ConsoleLayout } from '../layouts';
import { AllUsers, SingleUser } from '../app/components';



export function ConsoleRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <AllUsers />,
      children: [
        { path: '/user/:id', element: <SingleUser /> },
        { path: '*', element: <h1>Not Found</h1>},
      ],
    },
  ]);

  return (
    <ConsoleLayout>
      {routes}
    </ConsoleLayout>
  )
}

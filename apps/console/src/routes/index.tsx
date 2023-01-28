import { useRoutes } from 'react-router-dom';

import { ConsoleLayout } from '../layouts';
// import { AllUsers } from '../components/AllUsers';
// import { SingleUser } from '../components/SingleUser';



export function UserConsoleRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      // element: <AllUsers />,
      children: [
        // { path: '/user/:id', element: <SingleUser /> },
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

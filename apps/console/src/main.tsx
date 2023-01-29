import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/main.scss';

import { ConsoleRoutes } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ConsoleRoutes />
    </BrowserRouter>
  </StrictMode>
);

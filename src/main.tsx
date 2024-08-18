import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store/store.ts';
import { Provider } from 'react-redux';
import { PrimeReactProvider } from 'primereact/api';
import App from './app/App.tsx';
import './app/style/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </Provider>
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import HomeRoute from './routes/Home.tsx';
import ProductsByCategory from './routes/ProductByCategory.tsx';
import FarmRoute from './routes/Farms.tsx';

const controllers = createBrowserRouter([
  HomeRoute,
  ProductsByCategory,
  FarmRoute,
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={controllers} fallbackElement={<h1>Carregando</h1>} />
  </React.StrictMode>,
);

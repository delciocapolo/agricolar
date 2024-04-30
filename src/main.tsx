import React from 'react';
import ReactDOM from 'react-dom/client';
import '../public/style/main.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import HomeRoute from './routes/Home.tsx';
import ProductsByCategory from './routes/ProductByCategory.tsx';

const controllers = createBrowserRouter([
  HomeRoute,
  ProductsByCategory
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={controllers} fallbackElement={<h1>Carregando</h1>} />
  </React.StrictMode>,
);

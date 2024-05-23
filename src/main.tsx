import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// rotes
import HomeRoute from './routes/Home.tsx';
import ProductsByCategory from './routes/ProductByCategory.tsx';
import FarmRoute from './routes/Farms.tsx';
import LoginRoute from './routes/LoginOrRegister.tsx';
import Dashboard from './routes/Dashboard.tsx';
import ContextComponent from './components/ContextComponent/ContextComponent.tsx';

const server = new ApolloClient({
  uri: 'http://localhost:5055/v1/api',
  cache: new InMemoryCache({
    addTypename: true,
  }),
  name: 'API-Agricolar',
});


const controllers = createBrowserRouter([
  HomeRoute,
  ProductsByCategory,
  FarmRoute,
  LoginRoute,
  Dashboard,
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={server}>
      <ContextComponent>
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <RouterProvider router={controllers} />
        </CookiesProvider>
      </ContextComponent>
    </ApolloProvider>
  </React.StrictMode>,
);

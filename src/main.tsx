import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// rotes
import HomeRoute from './routes/Home.tsx';
import ProductsByCategory from './routes/ProductByCategory.tsx';
import FarmRoute from './routes/Farms.tsx';
import LoginRoute from './routes/LoginOrRegister.tsx';
import Dashboard from './routes/Dashboard.tsx';

const configInMemoryCache = {
  addTypename: true,
}
const farmer = new ApolloClient({
  uri: 'http://localhost:5055/v1/farmer/create',
  cache: new InMemoryCache({
    ...configInMemoryCache
  }),
  name: 'Farmer-server',
});

const customer = new ApolloClient({
  uri: 'http://localhost:5055/v1/costumer/create',
  cache: new InMemoryCache({
    ...configInMemoryCache
  }),
  name: 'customer-server',
});

const all = new ApolloClient({
  uri: 'http://localhost:5055/v1/set',
  cache: new InMemoryCache({
    ...configInMemoryCache
  }),
  name: 'set-server',
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
    <ApolloProvider client={farmer}>
      <ApolloProvider client={customer}>
        <ApolloProvider client={all}>
          <RouterProvider router={controllers} fallbackElement={<h1>Carregando</h1>} />
        </ApolloProvider>
      </ApolloProvider>
    </ApolloProvider>
  </React.StrictMode>,
);

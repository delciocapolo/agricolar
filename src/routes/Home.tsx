import type { RouteObject } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../components/ErrorPage/error-page';

const HomeRoute: RouteObject = {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
};

export default HomeRoute;
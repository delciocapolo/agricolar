import type { RouteObject } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage/error-page';
import LoginComponent from '../components/Login/Login';

const LoginRoute: RouteObject = {
    path: "/login",
    element: <LoginComponent />,
    errorElement: <ErrorPage />,
};

export default LoginRoute;
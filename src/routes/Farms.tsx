import type { RouteObject } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage/error-page';
import Farms from '../components/FarmComponent/Farms';
import { loader as rootLoader } from '../components/FarmComponent/helpers/LoadData';

const FarmRoute: RouteObject = {
    path: "/fazendas",
    element: <Farms />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
};

export default FarmRoute;
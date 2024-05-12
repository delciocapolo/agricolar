import type { RouteObject } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage/error-page';
import DashboardComponent from '../components/Farmer/Dashboard/DashboardComponent';
import { loader as DashboardLoader } from '../components/Farmer/Dashboard/helpers/loadData';

const Dashboard: RouteObject = {
    path: "/dashboard",
    element: <DashboardComponent />,
    loader: DashboardLoader,
    errorElement: <ErrorPage />
};

export default Dashboard;
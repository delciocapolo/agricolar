import type { RouteObject } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage/error-page';
import Category from '../components/Categories/Category';
import { loader as CategoryLoader } from '../components/Categories/InternalComponents/BaseCategory';

const ProductsByCategory: RouteObject = {
    path: "/produtos/:category",
    element: <Category />,
    loader: CategoryLoader,
    errorElement: <ErrorPage />
};

export default ProductsByCategory;
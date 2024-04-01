// handle all the routes.

import React from 'react'

const DashBoardPage = React.lazy(()=> import('../pages/Dashboard'));
const ProductManagement = React.lazy(()=> import('../pages/product-management'));
const CategoriesPage = React.lazy(()=> import('../pages/categories-page'));


const pages_routes = [
    { path: '/dashboard', name: 'Dashboard', element: <DashBoardPage />, exact: true  },
    { path: '/products', name: 'Product Management', element: <ProductManagement />, exact: true  },
    { path: '/category', name: 'Categories Management', element: <CategoriesPage />, exact: true  },

]

export default pages_routes;
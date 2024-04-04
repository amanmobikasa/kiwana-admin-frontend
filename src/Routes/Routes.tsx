// handle all the routes.

import ComingSoonPage from '@/pages/coming-soon';
import React from 'react'

const DashBoardPage = React.lazy(()=> import('../pages/Dashboard'));
const ProductManagement = React.lazy(()=> import('../pages/product-management'));
const CategoriesPage = React.lazy(()=> import('../pages/categories-page'));


const pages_routes = [
    { path: '/dashboard', name: 'Dashboard', element: <DashBoardPage />, exact: true  },
    { path: '/products', name: 'Product Management', element: <ProductManagement />, exact: true  },
    { path: '/category', name: 'Categories Management', element: <CategoriesPage />, exact: true  },
    { path: '/orders', name: 'Orders Management', element: <ComingSoonPage />, exact: true  },
    { path: '/coupon', name: 'Coupon Management', element: <ComingSoonPage />, exact: true  },
    { path: '/banner', name: 'Banner Management', element: <ComingSoonPage />, exact: true  },
    { path: '/transaction', name: 'Transaction Management', element: <ComingSoonPage />, exact: true  },
    { path: '/manage-admin', name: 'Admin Management', element: <ComingSoonPage />, exact: true  },
    { path: '/customers', name: 'Customers Management', element: <ComingSoonPage />, exact: true  },
    { path: '/settings', name: 'Setting', element: <ComingSoonPage />, exact: true  },
    { path: '/help', name: 'Help Page', element: <ComingSoonPage />, exact: true  },
    
    

]

export default pages_routes;
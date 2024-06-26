// handle all the routes.
import Banner from '@/pages/Banner';
import TransactionPage from '@/pages/Transaction-page';
import CouponPage from '@/pages/coupon-page';
import React from 'react'

const DashBoardPage = React.lazy(()=> import('../pages/Dashboard'));
const ProductManagement = React.lazy(()=> import('../pages/product-management'));
const CategoriesPage = React.lazy(()=> import('../pages/categories-page'));
const ComingSoonPage = React.lazy(()=> import('../pages/coming-soon'));
const OrderPage = React.lazy(()=> import('../pages/orders-page'));


const pages_routes = [
    { path: '/dashboard', name: 'Dashboard', element: <DashBoardPage />, exact: true  },
    { path: '/products', name: 'Product Management', element: <ProductManagement />, exact: true  },
    { path: '/category', name: 'Categories Management', element: <CategoriesPage />, exact: true  },
    { path: '/orders', name: 'Orders Management', element: <OrderPage />, exact: true  },
    { path: '/coupon', name: 'Coupon Management', element: <CouponPage />, exact: true  },
    { path: '/banner', name: 'Banner Management', element: <Banner />, exact: true  },
    { path: '/transaction', name: 'Transaction Management', element: <TransactionPage />, exact: true  },
    { path: '/manage-admin', name: 'Admin Management', element: <ComingSoonPage />, exact: true  },
    { path: '/customers', name: 'Customers Management', element: <ComingSoonPage />, exact: true  },
    { path: '/settings', name: 'Setting', element: <ComingSoonPage />, exact: true  },
    { path: '/help', name: 'Help Page', element: <ComingSoonPage />, exact: true  },   

]

export default pages_routes;
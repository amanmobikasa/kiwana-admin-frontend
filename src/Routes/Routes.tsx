// handle all the routes.
import React from 'react'
// const CardTemp = React.lazy(() => import('../components/customcomponents/cardtemp'));
const DashBoardPage = React.lazy(()=> import('../pages/Dashboard'));


const pages_routes = [
    { path: '/dashboard', name: 'Dashboard', element: <DashBoardPage />, exact: true  },

]

export default pages_routes;
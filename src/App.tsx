import React, { Suspense } from 'react'
import './App.css'
import '@radix-ui/themes/styles.css';
// import { Button } from './components/ui/button'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import pages_routes from './Routes/Routes'
import PrimaryLayout from './layout/primary-layout';
import { Toaster } from "@/components/ui/toaster"
import { AlertDialog } from '@radix-ui/react-alert-dialog';
const DashboardNavbar = React.lazy(() => import('./common/dashboard-navbar'));


function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
    <Toaster />
    <BrowserRouter>
      <Suspense>
        <AlertDialog>
        <PrimaryLayout>
        <DashboardNavbar />
        <Routes>
          {pages_routes.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={page.element}
            />
          ))}
        </Routes>
        </PrimaryLayout>
        </AlertDialog>
      </Suspense>
    </BrowserRouter>
      
    </>
  )
}

export default App

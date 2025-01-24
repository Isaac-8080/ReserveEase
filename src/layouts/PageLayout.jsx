import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom"

import React, { Suspense } from "react"
import RootLayout from "./RootLayout"
import Home from "../pages/Home"
import PageNotFound from "../pages/PageNotFound"

const Register = React.lazy(() => import('../pages/Register'));
const Login = React.lazy(() => import('../pages/Login'));

function PageLayout() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading Register...</div>}>
          <Register />
        </Suspense>} />
        <Route path="login" element={<Suspense fallback={<div>Loading Login...</div>}>
          <Login />
        </Suspense>} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default PageLayout

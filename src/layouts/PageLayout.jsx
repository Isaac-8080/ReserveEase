import React from "react";

import RootLayout from "./RootLayout";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Loading from "../components/Loading";
import SuspenseWrapper from "../components/SuspenseWrapper";
const Register = React.lazy(() => import('../pages/Register'));
const Login = React.lazy(() => import('../pages/Login'));

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom";

function PageLayout() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route
          path="home"
          element={
            <SuspenseWrapper fallback={<Loading message="Loading ..." />}>
              <Home />
            </SuspenseWrapper>
          }
        />
        <Route
          path="register"
          element={
            <SuspenseWrapper fallback={<Loading message="Loading Register..." />}>
              <Register />
            </SuspenseWrapper>
          }
        />
        <Route
          path="login"
          element={
            <SuspenseWrapper fallback={<Loading message="Loading Login..." />}>
              <Login />
            </SuspenseWrapper>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default PageLayout;

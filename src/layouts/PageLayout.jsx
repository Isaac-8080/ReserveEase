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
import ListLoading from "../components/ListLoading";

function PageLayout() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route
          path="home"
          element={
            <SuspenseWrapper fallback={<ListLoading />}>
              <Home />
            </SuspenseWrapper>
          }
        />
        <Route
          path="register"
          element={
            <SuspenseWrapper fallback={<Loading />}>
              <Register />
            </SuspenseWrapper>
          }
        />
        <Route
          path="login"
          element={
            <SuspenseWrapper fallback={<Loading />}>
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

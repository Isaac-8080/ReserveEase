import React from "react";
//import AppRoutes from "../routes/AppRoutes";

import RootLayout from "./RootLayout";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Loading from "../components/Loading";
import SuspenseWrapper from "../components/SuspenseWrapper";
const Register = React.lazy(() => import('../pages/Register'));
const Login = React.lazy(() => import('../pages/Login'));

import AdminLayout from "../layouts/AdminLayout";
const AdRegister = React.lazy(() => import('../pages/AdRegister'));
const AdLogin = React.lazy(() => import('../pages/AdLogin'));
const AdHome = React.lazy(() => import('../pages/AdHome'));
const AdReservations = React.lazy(() => import('../pages/AdReservations'));
const AdTables = React.lazy(() => import('../pages/AdTables'));
const AdNotFound = React.lazy(() => import('../pages/AdNotFound'));

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
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
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
          path="ad_register"
          element={
            <SuspenseWrapper fallback={<Loading />}>
              <AdRegister />
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
        <Route
            path="reservations"
            element={
              <SuspenseWrapper fallback={<Loading />}>
                <AdReservations />
              </SuspenseWrapper>
            }
          />
          
          
        <Route
          path="tables"
          element={
            <SuspenseWrapper fallback={<Loading />}>
              <AdTables />
            </SuspenseWrapper>
          }
        />
        <Route
          path="admin"
          element={
            <SuspenseWrapper fallback={<Loading />}>
              <AdHome />
            </SuspenseWrapper>
          }
        />
        <Route path="admin" element={<AdminLayout />}>
          <Route
            path="login"
            element={
              <SuspenseWrapper fallback={<Loading />}>
                <AdLogin />
              </SuspenseWrapper>
            }
          /> 
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default PageLayout;


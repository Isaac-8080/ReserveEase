import React from "react";

import RootLayout from "./RootLayout";
import PageNotFound from "../pages/PageNotFound";
import Loading from "../components/Loading";
import ListLoading from "../components/ListLoading";
import SuspenseWrapper from "../components/SuspenseWrapper";
const Register = React.lazy(() => import('../pages/Register'));
const Login = React.lazy(() => import('../pages/Login'));
const Reservations = React.lazy(() => import('../pages/Reservations'));
const Home = React.lazy(() => import('../pages/Home'));

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

        <Route index  
          element={
            <SuspenseWrapper fallback={<ListLoading />}>
              <Home />
            </SuspenseWrapper>
          }
        />

        <Route path="home" 
          element={
            <SuspenseWrapper fallback={<ListLoading />}>
              <Home />
            </SuspenseWrapper>
          }
        />

        <Route
          path="reservations"
          element={
            <SuspenseWrapper fallback={<Loading />}>
              <Reservations />
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

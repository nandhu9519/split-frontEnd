import React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AUTH, PUBLIC } from "./routes";
import Loader from "../components/common/Loader";
import App from "../components/user/App";
import { Home } from "../pages/home/home";

const Signup = lazy(() => import("../pages/auth/signup/Signup"));
const Login = lazy(() => import("../pages/auth/login/Login"));

const Main = () => {
  return (
    <div>
      <Suspense fallback={Loader}>
        <Routes>
          <Route path={PUBLIC.BASE_PATH} element={<App />} />
          <Route path={AUTH.PAGES.SIGNUP} element={<Signup />} />
          <Route path={AUTH.PAGES.LOGIN} element={<Login />} />
          <Route path={PUBLIC.PAGES.LANDING} element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Main;

import React, { lazy } from "react";
import Home from "@/views/Home";
import Login from "@/views/Login";

const About = lazy(() => import("@/views/About"));
const Page1 = lazy(() => import("@/views/Page1"));
const User = lazy(() => import("@/views/User"));
const Responsive = lazy(() => import("@/views/Responsive"));

import { Navigate } from "react-router-dom";

// 懒加载模式的组件写法 外面需要套一层loading的提示加载组件

const withLoadingComponent = (element: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{element}</React.Suspense>
);

const routes = [
  // 嵌套路由的开始 ----
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: "/user",
        element: withLoadingComponent(<User />),
      },
      {
        path: "/about",
        element: withLoadingComponent(<About />),
      },
    ],
  },
  // 嵌套路由的结束 ----
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/responsive",
    element: withLoadingComponent(<Responsive />),
  },
  // 访问其余路径的时候直接跳到首页
  {
    path: "*",
    element: <Navigate to="/page1" />,
  },
];

export default routes;

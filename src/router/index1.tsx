import React, { lazy } from "react";
import Home from "@/views/Home";
// import About from "@/views/About";
const About = lazy(() => import("@/views/About"));
const Page1 = lazy(() => import("@/views/Page1"));
const Page2 = lazy(() => import("@/views/Page2"));

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
        path: "/page2",
        element: withLoadingComponent(<Page2 />),
      },
      {
        path: "/about",
        element: withLoadingComponent(<About />),
      },
    ],
  },
  // 嵌套路由的结束 ----
];

export default routes;

import { useEffect } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import router from "@/router";
import { message } from "antd";

function ToLogin() {
  const navigate = useNavigate();
  // 加载完这个组件之后实现跳转
  useEffect(() => {
    // 加载完组件之后执行里边代码
    navigate("/login");
    message.warning("你还没有登录,请登录之后再访问!");
  }, []);

  return <div></div>;
}
function ToPage1() {
  const navigate = useNavigate();
  // 加载完这个组件之后实现跳转
  useEffect(() => {
    // 加载完组件之后执行里边代码
    navigate("/page1");
  }, []);

  return <div></div>;
}

// 手写封装路由守卫
function BeforeRouterEnter() {
  const outlet = useRoutes(router);
  /* 后台管理系统俩种经典的跳转情况:
      1.如果访问的是登录页面,并且有token,跳转到首页
      2.如果访问的不是登录也买你,并且没有token,跳转到首页
      3.其余正常放行
  */
  const { pathname } = useLocation();
  let token = localStorage.getItem("ly-react-management-token");
  // 1.如果访问的是登录页面,并且有token,跳转到首页
  if (pathname === "/login" && token) {
    // 这里不能直接使用useNavigate来实现跳转,因为需要BeforeRouterEnter是一个正常jsx组件
    return <ToPage1 />;
  }
  // 2.如果访问的不是登录也买你,并且没有token,跳转到首页
  if (pathname !== "/login" && !token) {
    console.log("111");
    return <ToLogin />;
  }
  return outlet;
}

function App() {
  // const outlet = useRoutes(router);
  return (
    <div className="App">
      {/* 跳转 相当于 router-link */}
      {/* <Link to="/home">首页</Link>
      <Link to="/about">关于</Link> */}
      {/* 占位符 相当于 router-view */}
      {/* <Outlet></Outlet> */}
      {/* <BeforeRouterEnter /> */}
      {/* {outlet} */}

      <BeforeRouterEnter />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
// 样式初始化一般放在最前面
import "reset-css";
// UI框架的样式
// import 'antd/dist/antd.css';
// 全局的样式
import "@/assets/style/global.scss";
// 组件样式
import App from "@/App";
import { BrowserRouter } from "react-router-dom";
// 组件写法
// import Router from "@/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

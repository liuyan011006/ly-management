// 组件形式的写法
import App from "@/App";
import Home from "@/views/Home";
import About from "@/views/About";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// 俩种路由模式的组件： BrowserRouter  HashRouter

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* 配置用户访问/ */}
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export dafault baseRouter;

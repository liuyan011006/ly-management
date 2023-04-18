import { Link, useRoutes } from "react-router-dom";
import router from "@/router/index1";
function App() {
  const outlet = useRoutes(router);
  return (
    <div className="App">
      {/* 跳转 相当于 router-link */}
      {/* <Link to="/home">首页</Link>
      <Link to="/about">关于</Link> */}
      {/* 占位符 相当于 router-view */}
      {/* <Outlet></Outlet> */}

      {outlet}
    </div>
  );
}

export default App;

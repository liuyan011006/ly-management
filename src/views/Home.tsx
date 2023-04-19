import { Breadcrumb, Layout } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/*左边侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        {/* 菜单位置 */}
        <MainMenu />
      </Sider>
      {/* 右边内容 */}
      <Layout className="site-layout">
        {/* 头部 */}
        <Header
          className="site-layout-background"
          style={{ paddingLeft: "16px" }}
        >
          {/* 面包屑 */}
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* 内容 */}
        <Content
          style={{ margin: "16px 16px 0" }}
          className="site-layout-background"
        >
          {/* 窗口内容进行处理 */}
          <Outlet />
        </Content>
        {/* 底部 */}
        <Footer style={{ textAlign: "center", padding: 0, lineHeight: "48px" }}>
          Ant Design ©2023 Created by 悍匪 ly
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;

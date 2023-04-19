import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];
// 登录请求道数据之后，就可以跟items这个数据进行匹配
const items: MenuItem[] = [
  {
    label: "Option 1",
    key: "/page1",
    icon: <PieChartOutlined />,
  },
  {
    label: "Option 2",
    key: "/page2",
    icon: <DesktopOutlined />,
  },
  {
    label: "Option 3",
    key: "page3",
    icon: <UserOutlined />,
    children: [
      {
        label: "Tom",
        key: "/page3/page301",
      },
      {
        label: "Bill",
        key: "/page3/page302",
      },
      {
        label: "Alex",
        key: "/page3/page303",
      },
    ],
  },
  {
    label: "Option 4",
    key: "page4",
    icon: <TeamOutlined />,
    children: [
      {
        label: "Tom",
        key: "/page4/page401",
      },
      {
        label: "Bill",
        key: "/page4/page402",
      },
    ],
  },
  {
    label: "Option 5",
    key: "/page5",
    icon: <FileOutlined />,
  },
];

const MainMenu: React.FC = () => {
  const navigateTo = useNavigate();
  const { pathname } = useLocation();
  const menuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };

  let firstOpenKey: string = "";
  // 在这里进行对比
  function findKey(item: { key: string }) {
    return item.key === pathname;
  }

  // 多对比的是多个children
  for (let i = 0; i < items.length; i++) {
    if (
      items[i]!["children"] &&
      items[i]!["children"].length > 1 &&
      items[i]!["children"].find(findKey)
    ) {
      firstOpenKey = items[i]!.key as string;
      break;
    }
  }

  // 设置展开项的初始值
  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
  const handleChange = (keys: string[]) => {
    // 展开和回收某项彩带的时候执行这里的代码
    setOpenKeys([keys[keys.length - 1]]);
    // console.log(keys[0]); // keys是一个数组，记录但其概念哪一项是展开的
  };

  return (
    <Menu
      theme="dark"
      // defaultSelectedKeys 表示当前样式所在的选中项的key
      defaultSelectedKeys={[pathname]}
      mode="inline"
      // 菜单项数据
      items={items}
      // 点击跳转路径
      onClick={menuClick}
      // 某项菜单展开回收事件
      onOpenChange={handleChange}
      // 当前展开项的key数组
      openKeys={openKeys}
    />
  );
};

export default MainMenu;

// import './comp1.scss' //全局引入
import {
  DesktopOutlined,
  BankOutlined,
  CommentOutlined,
  ForkOutlined,
  CoffeeOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import styles from "./index.module.scss";

interface NavItem {
  name: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  {
    name: "首页",
    icon: <BankOutlined />,
  },
  {
    name: "发现",
    icon: <DesktopOutlined />,
  },
  {
    name: "娱乐",
    icon: <CoffeeOutlined />,
  },
  {
    name: "友链",
    icon: <ForkOutlined />,
  },
  {
    name: "关于",
    icon: <DesktopOutlined />,
  },
  {
    name: "留言",
    icon: <CommentOutlined />,
  },
];
const Comp1 = () => {
  return (
    <header className={styles.responsiveHeader}>
      <div className={styles.navContainer}>
        <div className={styles.navTitle}>
          <p>小研睡不醒</p>
        </div>
        <div className={styles.nav}>
          {navItems.map((item) => {
            return (
              <div key={item.name}>
                {item.icon}&nbsp;<a>{item.name}</a>
              </div>
            );
          })}
        </div>
        <div className={styles.list}>
          <UnorderedListOutlined />
        </div>
      </div>
      <div className={styles.title}>
        <h1>小研睡不醒</h1>
        <p>醉后不知天在水，满船清梦压星河。</p>
      </div>
    </header>
  );
};
export default Comp1;

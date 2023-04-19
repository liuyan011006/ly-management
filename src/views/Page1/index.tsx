import React from "react";
import { Card, Col, Row } from "antd";
import styles from "./page1.module.scss";
import "./page1.less";

const Page1: React.FC = () => {
  return (
    <div className={styles.pageBox}>
      <h1>欢迎来到后台管理系统</h1>
      <Row gutter={16} style={{ padding: "10px" }}>
        <Col span={8}>
          <Card
            title="介绍"
            bordered={false}
            cover={
              <img alt="美食" width="300" src="/src/assets/image/food1.png" />
            }
          >
            这个一个响应式网站
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="美食"
            bordered={false}
            cover={
              <img alt="美食" width="300" src="/src/assets/image/food1.png" />
            }
          >
            这个一个响应式网站
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="美食"
            bordered={false}
            cover={
              <img alt="美食" width="300" src="/src/assets/image/food1.png" />
            }
          >
            这个一个响应式网站
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Page1;

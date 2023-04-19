import React from "react";
import styles from "./responsive.module.scss";
import { Card } from "antd";
import ResponsiveHeader from "@/components/ResponsiveHeader";

const arr = [
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
  {
    item: "123123",
  },
];
const Responsive: React.FC = () => {
  return (
    <>
      <ResponsiveHeader />

      <div className={styles.mainContainer}>
        <div className={styles.containerBox}>
          {arr.map((item) => {
            return (
              <div className={styles.cardBox} key={item.item}>
                <Card bordered={true}>{item.item}</Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Responsive;

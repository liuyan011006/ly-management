import React, { ChangeEvent, useEffect, useState } from "react";
import { Input, Space, Button, message } from "antd";
import styles from "./login.module.scss";
import initLoginBg from "./init";
import "./login.less";
import { useNavigate } from "react-router-dom";

import { LoginAPI } from "@/request/api";

const Login: React.FC = () => {
  // 加载完这个组件之后，加载背景
  useEffect(() => {
    initLoginBg();
    window.onresize = function () {
      initLoginBg();
    };
    // getCaptchaImg();
  }, []);
  const navigateTo = useNavigate();
  const [accountVal, setAccount] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [captchaVal, setCaptchaVal] = useState("");
  // 获取验证码图片信息
  // const [captchaImg, setCaptchaImg] = useState("");
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccount(e.target.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value);
  };
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaVal(e.target.value);
  };
  // 登录按钮
  const goToLogin = async () => {
    // 验证是否为空值
    if (!accountVal.trim() || !passwordVal.trim() || !captchaVal.trim()) {
      message.warning("请完整输入信息!");
      return;
    }
    if (captchaVal.toLowerCase() !== "Hxsc5p".toLowerCase()) {
      message.warning("验证码错误!");
      return;
    }
    const res = await LoginAPI({
      account: accountVal,
      password: passwordVal,
    });
    console.log(res);
    // if (res.code === 200) {
    //   console.log(res);
    //   //  1.提示登录成功
    //   message.success("登录成功!", 3);
    //   //  2.保存token
    //   localStorage.setItem("ly-react-management-token", res.token);
    //   //  3.跳转/page1
    //   navigateTo("/page1");
    //   //  4.删除本地保存的uuid
    //   localStorage.removeItem("uuid");
    // }
  };

  // // 获取验证码
  // const getCaptchaImg = async () => {
  //   const res = await CaptchaAPI();
  //   if (res.code !== 200) return;
  //   let str: string = "data:image/gif;base64,";
  //   setCaptchaImg(str + res.img);
  //   localStorage.setItem("uuid", res.uuid);
  // };

  return (
    <div className={styles.loginPage}>
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      {/* 登录部分 */}
      <div className={styles.loginBox + " loginbox"}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>悍匪ly&nbsp;·&nbsp;通用后台管理</h1>
          <p> strive everyday </p>
        </div>
        {/* form表单 */}
        <div className="form">
          {/* 间距 */}
          <Space direction="vertical" size="large" style={{ display: "flex" }}>
            <Input placeholder="用户名" onChange={usernameChange} />
            <Input.Password placeholder="密码" onChange={passwordChange} />
            <div className="captchaBox">
              <Input placeholder="验证码" onChange={captchaChange} />
              <div className="captchaImg">
                <img src="/src/assets/image/code.png" height="38" />
              </div>
            </div>
            <Button type="primary" onClick={goToLogin} block>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Login;

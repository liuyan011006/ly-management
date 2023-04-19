// 这个文件专门定义请求参数的，和响应的类型
// 验证码的响应类型约束
// 登录请求参数类型约束
interface LoginAPIReq {
  account: string;
  password: string;
}
// 登录的响应类型约束
interface LoginAPIRes {
  msg: string;
  code: number;
  token: string;
}

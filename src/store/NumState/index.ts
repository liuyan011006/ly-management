// 书写vuex格式
const store = {
  state: {
    num: 20,
  },
  actions: {
    add1(newState: { num: number }) {
      newState.num++;
    },
    add2(newState: { num: number }, action: { type: string; val: number }) {
      newState.num += action.val;
    },
  },
  asyncAction: {
    asyncAdd1(dispatch: Function) {
      setTimeout(() => {
        dispatch({ type: "add1" });
      }, 1000);
    },
  },
};

export default store;
// 封装的目的：最终事有利于我们开发或者维护
// 封装的思路是：将来开发的时候只需要把数据写的方法写入到状态文件中，例如：
// XxxxStatus/index.ts ,而不需要操作其他文件。（我们往这个方向封装）

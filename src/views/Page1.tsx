import { useSelector, useDispatch } from "react-redux"; // hooks
import numState from "@/store/NumState";

// TS中提供了ReturnType
const Page1 = () => {
  const { num, arr } = useSelector((state: RootState) => ({
    num: state.handleNum.num,
    arr: state.handleArr.arr,
  }));
  const dispatch = useDispatch();
  const changeNum = () => {
    // 最开始的写法 - 同步的写法
    // dispatch({ type: "add2", val: 100 });
    // 异步的写法 - redux-thunk的用法
    // dispatch((dis: Function) => {
    //   setTimeout(() => {
    //     dis({ type: "add2", val: 100 });
    //   }, 1000);
    // });
    dispatch(numState.asyncAction.asyncAdd1);
  };

  const changeArr = () => {
    dispatch({ type: "arrPush", val: 100 });
  };
  return (
    <div>
      <p>{num}</p>
      <button onClick={changeNum}>123</button>
      <p>{arr}</p>
      <button onClick={changeArr}>123</button>
    </div>
  );
};

export default Page1;

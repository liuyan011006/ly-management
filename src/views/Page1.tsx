import { useSelector, useDispatch } from "react-redux"; // hooks
import numState from "@/store/NumState";

// TS中提供了ReturnType
const Page1 = () => {
  const { num, arr } = useSelector((state: RootState) => ({
    num: state.handleNum.num,
    arr: state.handleArr.arr,
  }));

  const dispatch = useDispatch();
  console.log(numState);
  const changeNum = () => {
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

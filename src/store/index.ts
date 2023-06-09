import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import reduxThunk from "redux-thunk";
import handleNum from "./NumState/reducer";
import handleArr from "./ArrState/reducer";
import handleXxx from "./XxxxState/reducer";

const reducers = combineReducers({
  handleNum,
  handleArr,
  handleXxx,
});

// 创建数据仓库
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()为了让浏览器正常使用redux-dev-tools插件
// const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// 判断有没有__REDUX_DEVTOOLS_EXTENSION_COMPOSE__这个模块  加载异步方法
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose; //rt

const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;

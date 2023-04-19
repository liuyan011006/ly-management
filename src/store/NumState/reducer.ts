// reducer固定写法 后面写 index.ts就可以
import handle from "./index";

let actionNames = {};
for (let key in handle.actions) {
  actionNames[key] = key;
}

let reducer = (state = { ...handle.state }, action: { type: string }) => {
  let newState = JSON.parse(JSON.stringify(state));
  for (let key in actionNames) {
    if (action.type === actionNames[key]) {
      handle.actions[actionNames[key]](newState, action);
    }
  }
  return newState;
};

export default reducer;

import { AnyAction, createStore } from "redux";

const myReducer = (initialState: any = {}, _action: AnyAction) => {
  return initialState;
};

export default (initialState: any = {}, _options: any = {}) => {
  return createStore(myReducer, initialState);
};

import { store } from "./store";

export type AppDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>;

export type DispatchFunc = () => AppDispatch;

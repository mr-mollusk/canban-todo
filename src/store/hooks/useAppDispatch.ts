import { useDispatch } from "react-redux";
import { DispatchFunc } from "../store.types";

export const useAppDispatch: DispatchFunc = useDispatch;

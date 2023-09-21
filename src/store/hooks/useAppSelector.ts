import { TypedUseSelectorHook } from "react-redux";
import { rootState } from "../store.types";
import { useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reducers/reducers";
import { AppDispatch } from "@/store";

export function useAppDispatch() {
  return useDispatch<AppDispatch>();
}

export function useAppSelector<TSelected>(
  selector: (state: RootState) => TSelected
) {
  return useSelector<RootState, TSelected>(selector);
}

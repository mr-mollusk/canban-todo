import { IComment } from "../../../models";
import { CommentsAction, CommentsActionTypes } from "./commentReducer.types";

export const getCommentsAction = (id: number): CommentsAction => ({
  type: CommentsActionTypes.getComments,
  payload: id,
});
export const setCommentsAction = (data: Array<IComment>): CommentsAction => ({
  type: CommentsActionTypes.setComments,
  payload: data,
});

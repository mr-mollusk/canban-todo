import { IComment } from "../../../models";

export interface CommentsState {
  comments: Array<IComment>;
}

export enum CommentsActionTypes {
  getComments = "get_comments",
  setComments = "set_comments",
}

interface GetCommentsAction {
  type: CommentsActionTypes.getComments;
  payload: number;
}
interface SetCommentsAction {
  type: CommentsActionTypes.setComments;
  payload: Array<IComment>;
}

export type CommentsAction = GetCommentsAction | SetCommentsAction;

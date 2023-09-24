import {
  CommentsAction,
  CommentsActionTypes,
  CommentsState,
} from "./commentReducer.types";

const initialState: CommentsState = { comments: [] };

export const commentsReducer = (
  state = initialState,
  action: CommentsAction
): CommentsState => {
  switch (action.type) {
    case CommentsActionTypes.setComments: {
      return { comments: action.payload };
    }
    default: {
      return state;
    }
  }
};

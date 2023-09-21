export interface IComment {
  id: number;
  username: string;
  text: string;
  parent: IComment;
}

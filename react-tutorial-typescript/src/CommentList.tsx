namespace app.components {

  interface ICommentListProps {}
  interface ICommentListState {}

  export class CommentList extends React.Component<ICommentListProps, ICommentListState> {
    public render() {
      return (
        <div className="commentList">
          <Comment author="Pete Hunt">This is one comment</Comment>
          <Comment author="Jordan Walke">This is *another* comment</Comment>
        </div>
      )
    }
  }
}

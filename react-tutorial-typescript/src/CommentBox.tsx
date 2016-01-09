namespace app.components {

  interface ICommentBoxProps {}
  interface ICommentBoxState {}

  export class CommentBox extends React.Component<ICommentBoxProps, ICommentBoxState> {
    public render() {
      return (
        <div className="commentBox">
        Hello, world! I am a CommentBox.
        </div>
      )
    }
  }
}

namespace app.components {

  interface ICommentBoxProps {
    data: [IComment]
  }
  interface ICommentBoxState {}

  export class CommentBox extends React.Component<ICommentBoxProps, ICommentBoxState> {
    public render() {
      return (
        <div className="commentBox">
          <CommentList data={this.props.data}/>
          <CommentForm />
        </div>
      )
    }
  }
}

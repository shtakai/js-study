namespace app.components {

  interface ICommentListProps {
    data: [IComment]
  }
  interface ICommentListState {}

  export class CommentList extends React.Component<ICommentListProps, ICommentListState> {
    public render() {
      var commentNodes = this.props.data.map ((comment) => {
        return (
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        )
      })
      return (
        <div className="commentList">
          {commentNodes}
        </div>
      )
    }
  }
}

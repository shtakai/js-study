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
          <Comment author="Pete Hunt">This is one comment</Comment>
          <Comment author="Jordan Walke">This is *another* comment</Comment>
        </div>
      )
    }
  }
}

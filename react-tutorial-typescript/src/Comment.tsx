namespace app.components {

  interface ICommentProps extends React.Props<any> {
    author: string
  }
  interface ICommentState {}

  export class Comment extends React.Component<ICommentProps, ICommentState> {
    public render() {
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          {this.props.children}
        </div>
      )
    }
  }
}

import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface ICommentProps extends React.Props<any> {
  author: string
}
interface ICommentState {}

export default class Comment extends React.Component<ICommentProps, ICommentState> {
  public rawMarkup() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true})
    return { __html: rawMarkup }
  }
  public render() {
    return (
      <div className="comment">
      <h2 className="commentAuthor">
      {this.props.author}
      </h2>
      <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
}

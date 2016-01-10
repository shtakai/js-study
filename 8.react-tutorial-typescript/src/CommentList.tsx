import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {IComment} from "./interfaces";
import Comment from './Comment'

interface ICommentListProps {
  data: IComment[]
}

export default class CommentList extends React.Component<ICommentListProps, any> {
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

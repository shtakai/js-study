import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface ICommentFormProps {}
interface ICommentFormState {}

export default class CommentForm extends React.Component<ICommentFormProps, ICommentFormState> {
  public render() {
    return (
      <div className="commentForm">
      Hello, world! I am a CommentForm.
      </div>
    )
  }
}

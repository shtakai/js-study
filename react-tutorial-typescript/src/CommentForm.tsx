namespace app.components {

  interface ICommentFormProps {}
  interface ICommentFormState {}

  export class CommentForm extends React.Component<ICommentFormProps, ICommentFormState> {
    public render() {
      return (
        <div className="commentForm">
          Hello, world! I am a CommentForm.
        </div>
      )
    }
  }
}

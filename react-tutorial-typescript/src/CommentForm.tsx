import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface ICommentFormProps {}
interface ICommentFormState {
  author: string;
  text: string;
}

export default class CommentForm extends React.Component<ICommentFormProps, ICommentFormState> {
  constructor(props: ICommentFormProps) {
    super(props);
    this.state = {author: '', text: ''};
  }

  handleAuthorChange(e) {
    this.setState({author:e.target.value as string, text: this.state.text})
  }

  handleTextChange(e) {
    this.setState({author:this.state.author, text: e.target.value as string})
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    this.setState({author: '', text: ''});
  }

  public render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input
        type="text"
        placeholder="Your name"
        value={this.state.author}
        onChange={this.handleAuthorChange.bind(this)}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
        />
        <input type="submit" value="Post" />
      </form>
    )
  }
}

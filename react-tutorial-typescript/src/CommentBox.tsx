import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as request from 'superagent'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

interface ICommentBoxProps {
  data: [IComment];
  url: string;
}
interface ICommentBoxState {}

export default class CommentBox extends React.Component<ICommentBoxProps, ICommentBoxState> {
  public componentDidMount() {
    request
    .get(this.props.url)
    .end((err, res) => {
      if (err) {
        console.error(this.props.url);
        throw err;
      }
      this.setState({data: res.body});
    });
  }

  public render() {
    return (
      <div className="commentBox">
      <CommentList data={this.props.data}/>
      <CommentForm />
      </div>
    )
  }
}

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as request from 'superagent'
import {IComment} from "./interfaces";
import CommentList from './CommentList'
import CommentForm from './CommentForm'

interface ICommentBoxProps {
  url: string;
  pollInterval: number;
}
interface ICommentBoxState {
  data: any;
}

export default class CommentBox extends React.Component<ICommentBoxProps, ICommentBoxState> {
  constructor(props : ICommentBoxProps) {
    super(props);
    let data = [{id: 1, author: "a", text: "a"}]
    this.state = {data: data};
  }

  loadCommentsFromServer() {
    request
    .get(this.props.url)
    .end((err, res) => {
      if (err) {
        console.error(this.props.url);
        throw err;
      }
      console.log(res.body)
      this.setState({data: res.body});
    });
  }

  handleCommentSubmit(comment) {
    var comments = this.state.data;
    comment.id = Date.now()
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    request
    .post(this.props.url)
    .send(comment)
    .end((err, res) => {
      if (err) {
        console.error(this.props.url);
        this.setState({data: comments});
        throw err;
      }
      console.log(res.body)
      this.setState({data: res.body});
    });
    console.log("submit")
  }

  public componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }

  public render() {
    return (
      <div className="commentBox">
      <CommentList data={this.state.data} />
      <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    )
  }
}

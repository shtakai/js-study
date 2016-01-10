import * as React from 'react'
import * as ReactDOM from 'react-dom'
import CommentBox from "./CommentBox"

interface IAppProps {}
interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
  public render(){
    return (
      <CommentBox data={data} url="http://localhost:3000/api/comments"　/>
    )
  }
}

var data: [IComment] = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

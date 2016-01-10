import * as React from 'react'
import * as ReactDOM from 'react-dom'
import CommentBox from "./CommentBox"

export default class App extends React.Component<any, any> {
  public render(){
    return (
      <CommentBox url="http://localhost:3000/api/comments" pollInterval={2000} />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

namespace app.components {

  interface IAppProps {}
  interface IAppState {}
  export class App extends React.Component<IAppProps, IAppState> {
    public render(){
      return (
        <CommentBox data={data}/>
      )
    }
  }
}

var data: [IComment] = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var App = app.components.App;
ReactDOM.render(
  <App />,
  document.getElementById('content')
);

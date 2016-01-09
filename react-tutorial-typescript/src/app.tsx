namespace app.components {

  interface IAppProps {}
  interface IAppState {}
  export class App extends React.Component<IAppProps, IAppState> {
    public render(){
      return (
        <CommentBox />
      )
    }
  }
}

var App = app.components.App;
ReactDOM.render(
  <App />,
  document.getElementById('content')
);

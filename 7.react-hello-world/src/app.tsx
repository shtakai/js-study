namespace app.components {
  export class App extends React.Component<any, any> {
    style: any;
    constructor() {
      super()
      this.style = {
        title: {
          color: "#ddd",
          textAlign: "center"
        }
      }
    }

    public render(){
      return (
        <header>
          <h1 id="title" style={this.style.title}>Hello good!</h1>
        </header>
      )
    }
  }
}

var App = app.components.App;
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

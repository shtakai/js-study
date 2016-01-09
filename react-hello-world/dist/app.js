var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var components;
    (function (components) {
        var App = (function (_super) {
            __extends(App, _super);
            function App() {
                _super.call(this);
                this.style = {
                    title: {
                        color: "#ddd",
                        textAlign: "center"
                    }
                };
            }
            App.prototype.render = function () {
                return (React.createElement("header", null, React.createElement("h1", {"id": "title", "style": this.style.title}, "Hello good!")));
            };
            return App;
        })(React.Component);
        components.App = App;
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
var App = app.components.App;
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=app.js.map
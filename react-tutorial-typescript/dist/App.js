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
                _super.apply(this, arguments);
            }
            App.prototype.render = function () {
                return (React.createElement(components.CommentBox, null));
            };
            return App;
        })(React.Component);
        components.App = App;
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
var App = app.components.App;
ReactDOM.render(React.createElement(App, null), document.getElementById('content'));
//# sourceMappingURL=App.js.map
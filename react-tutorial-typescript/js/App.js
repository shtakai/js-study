var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox_1 = require("./CommentBox");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement(CommentBox_1.default, {"url": "http://localhost:3000/api/comments", "pollInterval": 2000}));
    };
    return App;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
ReactDOM.render(React.createElement(App, null), document.getElementById('content'));
//# sourceMappingURL=App.js.map
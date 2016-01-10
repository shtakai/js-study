var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var components;
    (function (components) {
        var CommentBox = (function (_super) {
            __extends(CommentBox, _super);
            function CommentBox() {
                _super.apply(this, arguments);
            }
            CommentBox.prototype.componentDidMount = function () {
                var _this = this;
                request
                    .get(this.props.url)
                    .end(function (err, res) {
                    if (err) {
                        console.error(_this.props.url);
                        throw err;
                    }
                    _this.setState({ data: res.body });
                });
            };
            CommentBox.prototype.render = function () {
                return (React.createElement("div", {className: "commentBox"}, React.createElement(components.CommentList, {data: this.props.data}), React.createElement(components.CommentForm, null)));
            };
            return CommentBox;
        }(React.Component));
        components.CommentBox = CommentBox;
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=CommentBox.js.map
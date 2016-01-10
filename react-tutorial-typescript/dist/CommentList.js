var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var components;
    (function (components) {
        var CommentList = (function (_super) {
            __extends(CommentList, _super);
            function CommentList() {
                _super.apply(this, arguments);
            }
            CommentList.prototype.render = function () {
                var commentNodes = this.props.data.map(function (comment) {
                    return (React.createElement(components.Comment, {"author": comment.author, "key": comment.id}, comment.text));
                });
                return (React.createElement("div", {"className": "commentList"}, React.createElement(components.Comment, {"author": "Pete Hunt"}, "This is one comment"), React.createElement(components.Comment, {"author": "Jordan Walke"}, "This is *another* comment")));
            };
            return CommentList;
        })(React.Component);
        components.CommentList = CommentList;
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=CommentList.js.map
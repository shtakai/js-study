var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var components;
    (function (components) {
        var Comment = (function (_super) {
            __extends(Comment, _super);
            function Comment() {
                _super.apply(this, arguments);
            }
            Comment.prototype.rawMarkup = function () {
                var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
                return { __html: rawMarkup };
            };
            Comment.prototype.render = function () {
                return (React.createElement("div", {"className": "comment"}, React.createElement("h2", {"className": "commentAuthor"}, this.props.author), React.createElement("span", {"dangerouslySetInnerHTML": this.rawMarkup()})));
            };
            return Comment;
        })(React.Component);
        components.Comment = Comment;
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=Comment.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var CommentForm = (function (_super) {
    __extends(CommentForm, _super);
    function CommentForm() {
        _super.apply(this, arguments);
    }
    CommentForm.prototype.render = function () {
        return (React.createElement("div", {"className": "commentForm"}, "Hello, world! I am a CommentForm."));
    };
    return CommentForm;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentForm;
//# sourceMappingURL=CommentForm.js.map
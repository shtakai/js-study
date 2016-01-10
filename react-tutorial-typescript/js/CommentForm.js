var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var CommentForm = (function (_super) {
    __extends(CommentForm, _super);
    function CommentForm(props) {
        _super.call(this, props);
        this.state = { author: '', text: '' };
    }
    CommentForm.prototype.handleAuthorChange = function (e) {
        this.setState({ author: e.target.value, text: this.state.text });
    };
    CommentForm.prototype.handleTextChange = function (e) {
        this.setState({ author: this.state.author, text: e.target.value });
    };
    CommentForm.prototype.handleSubmit = function (e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.setState({ author: '', text: '' });
    };
    CommentForm.prototype.render = function () {
        return (React.createElement("form", {"className": "commentForm", "onSubmit": this.handleSubmit.bind(this)}, React.createElement("input", {"type": "text", "placeholder": "Your name", "value": this.state.author, "onChange": this.handleAuthorChange.bind(this)}), React.createElement("input", {"type": "text", "placeholder": "Say something...", "value": this.state.text, "onChange": this.handleTextChange.bind(this)}), React.createElement("input", {"type": "submit", "value": "Post"})));
    };
    return CommentForm;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentForm;
//# sourceMappingURL=CommentForm.js.map
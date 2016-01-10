"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var request = require('superagent');
var CommentList_1 = require('./CommentList');
var CommentForm_1 = require('./CommentForm');
var CommentBox = (function (_super) {
    __extends(CommentBox, _super);
    function CommentBox(props) {
        _super.call(this, props);
        var data = [{ id: 1, author: "a", text: "a" }];
        this.state = { data: data };
    }
    CommentBox.prototype.loadCommentsFromServer = function (url) {
        var _this = this;
        request
            .get(url)
            .end(function (err, res) {
            if (err) {
                console.error(url);
                throw err;
            }
            console.log(res.body);
            _this.setState({ data: res.body });
        });
    };
    CommentBox.prototype.componentDidMount = function () {
        var _this = this;
        this.loadCommentsFromServer(this.props.url);
        setInterval(function () { return _this.loadCommentsFromServer(_this.props.url); }, this.props.pollInterval);
    };
    CommentBox.prototype.render = function () {
        return (React.createElement("div", {className: "commentBox"}, React.createElement(CommentList_1.default, {data: this.state.data}), React.createElement(CommentForm_1.default, null)));
    };
    return CommentBox;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentBox;
//# sourceMappingURL=CommentBox.js.map
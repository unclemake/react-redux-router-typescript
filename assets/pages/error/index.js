define(function(require, exports, module) {"use strict";
var React = require('react');
var index_1 = require('../../components/header/index');
var index_2 = require('../../components/footer/index');
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
    }
    Main.prototype.render = function () {
        var id = this.props.params.id || 404;
        return React.createElement("div", null, React.createElement(index_1["default"], {text: '出错了！T.T'}), React.createElement("main", {className: "main-pb error-box"}, React.createElement("table", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("p", {className: "pr"}, React.createElement("img", {className: "img", src: "/asset/pages/error/error.jpg"}), React.createElement("span", {className: "error-code"}, id)))))), React.createElement(index_2["default"], null));
    };
    return Main;
}(React.Component));
exports.__esModule = true;
exports["default"] = Main;
})
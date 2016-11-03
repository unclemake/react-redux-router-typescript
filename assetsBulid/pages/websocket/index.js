"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define("pages/websocket/index.js", function (require, exports, module) {
    "use strict";

    var React = require('node_modules/react/index');

    var Component = function (_React$Component) {
        _inherits(Component, _React$Component);

        function Component() {
            _classCallCheck(this, Component);

            return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
        }

        _createClass(Component, [{
            key: "btnClick",
            value: function btnClick() {
                this.setState({
                    text: '1',
                    text2: 'text2'
                });
            }
        }, {
            key: "render",
            value: function render() {
                var state = this.state;

                return React.createElement("section", { className: 'page=home' }, React.createElement("h2", null, "简单例子1444"), React.createElement("div", null, React.createElement("a", { onClick: this.btnClick.bind(this), className: 'ant-btn' }, "点我")));
            }
        }]);

        return Component;
    }(React.Component);

    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Component;
});
//# sourceMappingURL=index.js.map

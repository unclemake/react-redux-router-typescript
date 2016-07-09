define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
const React = require('react');
class Component extends React.Component {
    render() {
        return React.createElement("section", null, "404");
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})
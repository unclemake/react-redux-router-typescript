define(function(require, exports, module) {/// <reference path="../../index.d.ts" />
"use strict";
const React = require('react');
class App extends React.Component {
    render() {
        return React.createElement("nav", null, React.createElement("a", null, "医院介绍"), React.createElement("a", null, "专家介绍"), React.createElement("a", null, "就医指南"), React.createElement("a", null, "健康贴士"), React.createElement("a", null, "素材库"));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
})
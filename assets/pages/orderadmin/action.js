define(function(require, exports, module) {"use strict";
/// <reference path="../index.d.ts" />
/**
 * action
 */
const redux_actions_1 = require('redux-actions');
/**
 * 添加用户列表
 */
exports.UPDATE_USER = 'UPDATE_USER';
exports.updateState = redux_actions_1.createAction(exports.UPDATE_USER, (args) => args);
})
define(function(require, exports, module) {"use strict";
/// <reference path="../index.d.ts" />
/**
 * action
 */
const redux_actions_1 = require('redux-actions');
/**
 * 修改进度
 */
exports.UPDATE_STATE = 'UPDATE_STATE';
exports.updateOrder = redux_actions_1.createAction(exports.UPDATE_STATE, (id) => id);
})
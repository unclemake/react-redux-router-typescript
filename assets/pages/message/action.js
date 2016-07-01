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
exports.updateState = redux_actions_1.createAction(exports.UPDATE_STATE, (id) => id);
/**
 * 修改标签selected
 */
exports.UPDATE_LABEL_SELECTED = 'UPDATE_LABEL_SELECTED';
exports.update_label_selected = redux_actions_1.createAction(exports.UPDATE_LABEL_SELECTED, (args) => args);
/**
 * 修改素材selected
 */
exports.UPDATE_MATERIA_SELECTED = 'UPDATE_MATERIA_SELECTED';
exports.update_materia_selected = redux_actions_1.createAction(exports.UPDATE_MATERIA_SELECTED, (args) => args);
/**
 * 修改用户组selected
 */
exports.UPDATE_GROUP_SELECTED = 'UPDATE_GROUP_SELECTED';
exports.update_group_selected = redux_actions_1.createAction(exports.UPDATE_GROUP_SELECTED, (args) => args);
/**
 * 修改用户selected
 */
exports.UPDATE_USER_SELECTED = 'UPDATE_USER_SELECTED';
exports.update_user_selected = redux_actions_1.createAction(exports.UPDATE_USER_SELECTED, (args) => args);
})
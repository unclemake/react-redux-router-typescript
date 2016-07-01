/// <reference path="../index.d.ts" />
/**
 * action
 */
import { handleActions, createAction, Action } from 'redux-actions';
import * as Model from './model';

/**
 * 添加用户列表
 */
export const UPDATE_USER = 'UPDATE_USER';
export const updateState = createAction<Model.orderUser>(
    UPDATE_USER,
    (args) => args
);


/// <reference path="../index.d.ts" />
/**
 * action
 */
import { handleActions, createAction, Action } from 'redux-actions';
import * as Model from './model';

/**
 * 修改进度
 */
export const UPDATE_STATE = 'UPDATE_STATE';
export const updateOrder = createAction<number>(
    UPDATE_STATE,
    (id) => id
);




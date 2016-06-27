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
export const updateState = createAction<number>(
    UPDATE_STATE,
    (id) => id
);


/**
 * 修改标签selected
 */
export const UPDATE_LABEL_SELECTED = 'UPDATE_LABEL_SELECTED';
export const update_label_selected = createAction<{ id: number, selected: string }>(
    UPDATE_LABEL_SELECTED,
    (args) => args
);

/**
 * 修改素材selected
 */
export const UPDATE_MATERIA_SELECTED = 'UPDATE_MATERIA_SELECTED';
export const update_materia_selected = createAction<{ id: number, selected: string }>(
    UPDATE_MATERIA_SELECTED,
    (args) => args
);

/**
 * 修改用户组selected
 */
export const UPDATE_GROUP_SELECTED = 'UPDATE_GROUP_SELECTED';
export const update_group_selected = createAction<{ id: number, selected: string }>(
    UPDATE_MATERIA_SELECTED,
    (args) => args
);

/**
 * 修改用户selected
 */
export const UPDATE_USER_SELECTED = 'UPDATE_USER_SELECTED';
export const update_user_selected = createAction<{ id: number, selected: string }>(
    UPDATE_MATERIA_SELECTED,
    (args) => args
);


export type Todo = {
    id?: number;
    text: string;
    completed: boolean;
    edit?: boolean
};

export type IState = {
    filter: SelectedEnum
    list: Todo[]
};

export enum SelectedEnum {
    All,
    Active,
    Completed
}

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const EDIT_FILTER = 'EDIT_FILTER';
export const EDIT_EDIT = 'EDIT_EDIT';
import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    Todo, IState,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL,
    CLEAR_COMPLETED,
    EDIT_FILTER,
    SelectedEnum
} from './model';

const initialState: IState = {
    Filter: SelectedEnum.All,
    list: [<Todo>{
        text: 'Use Redux with TypeScript',
        completed: false,
        id: 0
    }]
}

export let reducer = handleActions<IState, Todo | SelectedEnum>({
    [ADD_TODO]: (state: IState, action: Action<Todo>): IState => {
        state.list = [{
            id: state.list.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: action.payload.completed,
            text: action.payload.text
        }, ...state.list]

        return { ...state };
    },

    [DELETE_TODO]: (state: IState, action: Action<Todo>): IState => {
        state.list = state.list.filter(todo =>
            todo.id !== action.payload.id
        );
        return { ...state };
    },


    [EDIT_TODO]: (state: IState, action: Action<Todo>): IState => {
        state.list = state.list.map(todo =>
            todo.id === action.payload.id
                ? assign(<Todo>{}, todo, { text: action.payload.text })
                : todo
        );
        return { ...state };
    },

    [COMPLETE_TODO]: (state: IState, action: Action<Todo>): IState => {
        state.list = state.list.map(todo =>
            todo.id === action.payload.id ?
                assign({}, todo, { completed: !todo.completed }) :
                todo
        );
        return { ...state };
    },

    [COMPLETE_ALL]: (state: IState, action: Action<Todo>): IState => {
        const areAllMarked = state.list.every(todo => todo.completed);
        state.list = state.list.map(todo => assign({}, todo, {
            completed: !areAllMarked
        }));
        return { ...state };
    },

    [CLEAR_COMPLETED]: (state: IState, action: Action<Todo>): IState => {
        state.list = state.list.filter(todo => todo.completed === false);
        return { ...state };
    },

    [EDIT_FILTER]: (state: IState, action: Action<SelectedEnum>): IState => {
        state.Filter = action.payload;
        return { ...state };
    }

}, initialState);

export default reducer;

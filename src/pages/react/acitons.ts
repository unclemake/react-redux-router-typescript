import { createAction, Action } from 'redux-actions';
import { Todo } from './model';

import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL,
    CLEAR_COMPLETED,
    EDIT_FILTER,
    EDIT_EDIT,
    SelectedEnum
} from './model';

const addTodo = createAction<Todo, string>(
    ADD_TODO,
    (text: string) => ({ text, completed: false })
);

const deleteTodo = createAction<Todo, Todo>(
    DELETE_TODO,
    (todo: Todo) => todo
);

const editTodo = createAction<Todo, Todo, String>(
    EDIT_TODO,
    (todo: Todo, newText: string) => Object.assign(todo, { text: newText })
);

const completeTodo = createAction<Todo, Todo>(
    COMPLETE_TODO,
    (todo: Todo) => todo
)

const completeAll = createAction<void>(
    COMPLETE_ALL,
    () => null
)

const clearCompleted = createAction<void>(
    CLEAR_COMPLETED,
    () => null
);

const editFilter = createAction<SelectedEnum, SelectedEnum>(
    EDIT_FILTER,
    (selectedEnum: SelectedEnum) => selectedEnum
);

const editEdit = createAction<Todo, Todo>(
    EDIT_EDIT,
    (todo: Todo) => todo
);

export {
    addTodo,
    deleteTodo,
    editTodo,
    completeTodo,
    completeAll,
    clearCompleted,
    editFilter,
    editEdit
}

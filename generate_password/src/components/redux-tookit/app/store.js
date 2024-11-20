import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../feature/todoSlice';
import selectedTodoReducer from '../feature/selectedTodoSlice';

export const store = configureStore({
    // reducer: todoReducer
    reducer: {
        todos: todoReducer,
        selectedTodo: selectedTodoReducer,
    },
})
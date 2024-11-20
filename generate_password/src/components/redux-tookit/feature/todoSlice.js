import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoNotes: []
    // todoNotes: [{
    //     id: Date.now(),
    //     note: 'Helloo World !!!',
    //     isCompleted: false
    // }]
}

export const todoSlice = createSlice({
    name: 'todoNotes',
    initialState,
    reducers: {
        addTodoNote: (state, action) => {
            const todoNote = {
                id: Date.now(),
                note: action.payload,
                isCompleted: false
            }
            state.todoNotes.push(todoNote);
        },
        deleteTodoNote: (state, action) => {
            state.todoNotes = state.todoNotes.filter((note) => action.payload.id !== note.id);
        },
        updateTodoNote: (state, action) => {
            state.todoNotes = state.todoNotes.map((note) => action.payload.id === note.id ? action.payload : note);
        },
        toogleComplete: (state, action) => {
            state.todoNotes = state.todoNotes.map((note) => action.payload.id === note.id ? action.payload : note);
        }
    }
});

export const {addTodoNote, deleteTodoNote, updateTodoNote, toogleComplete} = todoSlice.actions;

export default todoSlice.reducer;
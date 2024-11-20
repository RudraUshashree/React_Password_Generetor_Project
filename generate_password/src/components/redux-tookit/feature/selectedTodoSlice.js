import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedNote: {
        note: {
            id: null,
            note: '',
            isCompleted: false
        },
        isEditable: false
    }
}

export const selectedTodoSlice = createSlice({
    name: "selectedTodo",
    initialState,
    reducers: {
        setSelectedTodoNote: (state, action) => {
            state.selectedNote = action.payload;
        },
        isNoteEditable: (state, action) => {
            state.selectedNote.isEditable = !action.payload;
        }
    }
})

export const {setSelectedTodoNote, isNoteEditable} = selectedTodoSlice.actions;

export default selectedTodoSlice.reducer;
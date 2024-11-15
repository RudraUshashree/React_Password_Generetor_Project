import { createContext, useContext } from "react";

export const TodoNoteContext = createContext({
    allTodosNotes: [],
    addTodoNote : (note) => {},
    updateTodoNote: (id, updatedNote) => {},
    deleteTodoNote: (id) => {},
    toggleTodoNoteComplete: (id, note) => {}
});

export const useTodoNote = () => {
    return useContext(TodoNoteContext);
}

export const TodoNoteContextProvider = TodoNoteContext.Provider;

import React, { useEffect, useState } from 'react'
import Addnote from './Addnote'
import ShowNotes from './ShowNotes'
import './Todonotes.css'
import { TodoNoteContextProvider } from './contexts'

function Todonotes() {
    const [allTodosNotes, setAllNotes] = useState([]);

    const addTodoNote = (note) => {
        setAllNotes((prevNotes) => [{id: Date.now(), ...note}, ...prevNotes]);
    }

    const updateTodoNote = (id, updatedNote) => {
        setAllNotes((prevNotes) => {
            return prevNotes.map((note) => note.id === id ? updatedNote : note);
        });
    }

    const deleteTodoNote = (id) => {
        setAllNotes((prevNotes) => {
            return prevNotes.filter((note) => id !== note.id);
        })
    }

    const toggleTodoNoteComplete = (id) => {
        setAllNotes((prevNotes) => {
            return prevNotes.map((note) => note.id === id ? {...note, isCompleted: !note.isCompleted} : note);
        });
    }
    
    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('todoNotes'));
        if(notes && notes.length > 0) {
            setAllNotes(notes);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todoNotes', JSON.stringify(allTodosNotes))
    }, [allTodosNotes])

  return (
    <TodoNoteContextProvider value={{allTodosNotes, addTodoNote, updateTodoNote, deleteTodoNote, toggleTodoNoteComplete}}>
        <div className='d-flex align-items-center justify-content-center p-3'>
            <h2>Manage Your Todos</h2>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
            <Addnote />
        </div>
        <div>
            {allTodosNotes.map((note) => (
                <div key={note.id}>
                    <ShowNotes todoNote={note} />
                    <br />
                </div>
            ))}
        </div>
    </TodoNoteContextProvider>
  )
}

export default Todonotes
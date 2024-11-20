import React from 'react'
import ShowTodoNotes from './ShowTodoNotes'
import AddTodoNote from './AddTodoNote'
import { useSelector } from 'react-redux';

function TodoNotes() {
    const allTodoNotes = useSelector(state => state.todos.todoNotes);

  return (
    <>
    <div className='d-flex text-align-center justify-content-center p-2'>
        <h4>Manage Your TodoNotes</h4>
    </div>
    <div className='d-flex text-align-center justify-content-center p-2'>
        <AddTodoNote />
    </div>
    <div>
        {allTodoNotes.map((note) => (
            <div key={note.id}>
                <ShowTodoNotes key={note.id} todoNote={note}/>
            </div>
        ))}
    </div>
    </>
  )
}

export default TodoNotes
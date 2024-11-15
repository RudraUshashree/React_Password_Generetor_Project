import React, { useState } from 'react'
import { useTodoNote } from './contexts';

function Addnote() {
    const [note, setNote] = useState("");
    const {addTodoNote} = useTodoNote();

    const onAddBtnClick = (e) => {
        e.preventDefault();
        
        if(!note) return;

        addTodoNote({note: note, isCompleted: false});
        setNote("");
    }
  return (
    <div>
        <form onSubmit={onAddBtnClick} className='d-flex align-items-center justify-content-center w-100 gap-2 p-3'>
            <input className="form-control form-control" type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder='Add Notes'/>
            <button className='btn btn-success' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Addnote
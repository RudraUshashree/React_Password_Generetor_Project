import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodoNote, updateTodoNote } from './feature/todoSlice';
import { isNoteEditable } from './feature/selectedTodoSlice';

function AddTodoNote() {
    const [note, setNote] = useState("");
    const dispatch = useDispatch();
    const selectedNote = useSelector(state => state.selectedTodo.selectedNote);
    
    useEffect(() => {
      if(selectedNote.isEditable) {
        setNote(selectedNote.todoNote.note || "");
      }
    }, [selectedNote])

    const onSubmitBtnClick = (e) => {
        e.preventDefault();
        if(selectedNote.isEditable && note !== '') {
          dispatch(updateTodoNote({...selectedNote.todoNote, note: note}));
          dispatch(isNoteEditable(selectedNote.isEditable));
        }else {
          dispatch(addTodoNote(note));
        }
        setNote('');
    }
  return (
    <div>
        <form onSubmit={onSubmitBtnClick} className='d-flex align-items-center justify-content-center w-100 gap-2 p-3'>
            <input className="form-control form-control" type="text" value={note || ""} onChange={(e) => setNote(e.target.value)} placeholder='Add Notes'/>
            <button className='btn btn-success' type='submit'>{(selectedNote.isEditable && note !== '') ? 'Update' : 'Add'}</button>
        </form>
    </div>
  )
}

export default AddTodoNote
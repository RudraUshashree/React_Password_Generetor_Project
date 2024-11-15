import React, { useState } from 'react'
import './ShowNotes.css'
import { useTodoNote } from './contexts';

function ShowNotes({ todoNote }) {
   console.log('Show todoNote: ',todoNote);
    const [upNote, setUpNote] = useState(todoNote.note);
    const [isEditable, setIsEditable] = useState(false);

    const {updateTodoNote, deleteTodoNote, toggleTodoNoteComplete} = useTodoNote();

    const onUpdate = () => {
        updateTodoNote(todoNote.id, {...todoNote, note: upNote});
        setIsEditable(false);
    }

    const onEditBtnClick = () => {
        if(todoNote.isCompleted) return;

        if(isEditable) {
            onUpdate();
        } else {
            setIsEditable((prev) => !prev);
        }
    }

    const onDeleteBtnClick = () => {
        deleteTodoNote(todoNote.id)
    }

    const onCheckBoxChecked = () => {
        toggleTodoNoteComplete(todoNote.id);
    }

  return (
    <div className='d-flex align-items-center justify-content-center'>
        <div className="d-flex align-items-center justify-content-between todo-main p-2"  style={{ backgroundColor: todoNote.isCompleted ? '#83df83' : '#e2b5db'}}>
            <div className="d-flex align-items-center gap-2">
                <input type="checkbox" className="form-check-input" checked={todoNote.isCompleted} onChange={() => onCheckBoxChecked()}/>
                <input type="text" value={upNote} readOnly={!isEditable} onChange={(e) => setUpNote(e.target.value)} className="form-control form-control-sm" 
                style={{ backgroundColor: todoNote.isCompleted ? '#83df83' : '#e2b5db', border: todoNote.isCompleted ? '2px solid #83df83' : '2px solid #e2b5db', textDecoration: todoNote.isCompleted ? 'line-through' : 'none'}}/>
            </div>
    
            <div className='btns-last'>
                <button className={`btn ${isEditable ? 'btn-success' : 'btn-primary'} me-2`} disabled={todoNote.isCompleted} onClick={() => onEditBtnClick()}>{isEditable ? 'Update' : 'Edit' }</button>
                <button className="btn btn-danger" onClick={() => onDeleteBtnClick()}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default ShowNotes
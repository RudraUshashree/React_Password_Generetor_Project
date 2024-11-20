import React, { useState } from 'react'
import './ShowTodoNotes.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoNote } from './feature/todoSlice';
import { setSelectedTodoNote } from './feature/selectedTodoSlice';

function ShowTodoNotes({todoNote}) {
    const dispatch = useDispatch();

    const [isEdit, setIsEdit] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const onDeleteBtnClick = (id) => {
        dispatch(deleteTodoNote({id}));
    };

    const onCheckboxChange = (todoNote) => {
        console.log('Checkbox toggled for todoNote with id:', todoNote);
    };
    
    const onRadioChange = (todoNote) => {
        setIsEdit(true);
        dispatch(setSelectedTodoNote({todoNote, isEditable: true}));
    }
 
   return (
    <>
            <div className='d-flex align-items-center justify-content-center p-2'>
                <div className="d-flex align-items-center justify-content-between todo-main p-2">
                    <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input"
                        type="radio"
                        name="todoGroup" 
                        value={todoNote.id}
                        onChange={() => onRadioChange(todoNote)}
                    />
                        <p key={todoNote.id} style={{textDecoration: isEdit ? 'line-through' : 'none'}}>{todoNote.note}</p>
                    </div>
            
                    <div className='d-flex align-items-center justify-content-between gap-2'>
                        <input type="checkbox" className="form-check-input" checked={todoNote.isCompleted}  onChange={() => onCheckboxChange(todoNote)}/>
                        <button className="btn btn-danger" onClick={() => onDeleteBtnClick(todoNote.id)}>Delete</button>
                    </div>
                </div>
            </div>
    </>
   )
}

export default ShowTodoNotes
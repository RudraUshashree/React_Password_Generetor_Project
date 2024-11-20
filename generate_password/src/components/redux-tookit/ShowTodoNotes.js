import React from 'react'
import './ShowTodoNotes.css'
import { useDispatch } from 'react-redux';
import { deleteTodoNote, toogleComplete } from './feature/todoSlice';
import { setSelectedTodoNote } from './feature/selectedTodoSlice';

function ShowTodoNotes({todoNote}) {
    const dispatch = useDispatch();

    const onDeleteBtnClick = (id) => {
        dispatch(deleteTodoNote({id}));
    };

    const onCheckboxChange = (todoNote) => {
        dispatch(toogleComplete({...todoNote, isCompleted: !todoNote.isCompleted}));
        dispatch(setSelectedTodoNote({todoNote, isEditable: false}));
    };
    
    const onRadioChange = (todoNote) => {
        dispatch(setSelectedTodoNote({todoNote, isEditable: true}));
    }

   return (
    <>
            <div className='d-flex align-items-center justify-content-center p-2'>
                <div className="d-flex align-items-center justify-content-between todo-main p-2" style={{backgroundColor: todoNote.isCompleted ? '#cceeb9' : '#e2b5db' }}>
                    <div className="d-flex align-items-center gap-2">
                    <input className="form-check-input"
                        type="radio"
                        name="todoGroup"
                        value={todoNote.id}
                        onChange={() => onRadioChange(todoNote)}
                        disabled={todoNote.isCompleted}
                    />
                        <p key={todoNote.id} style={{textDecoration: todoNote.isCompleted ? 'line-through' : 'none'}}>{todoNote.note}</p>
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
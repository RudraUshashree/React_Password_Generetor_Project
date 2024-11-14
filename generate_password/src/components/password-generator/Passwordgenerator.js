import React, { useCallback, useEffect, useRef, useState } from 'react'
import './Passwordgenerator.css'

function Passwordgenerator() {

  const [length, setLength] = useState(0);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  //useRef for highlighting the selected password in input.
  const passwordRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(passwordInput);
  }, [passwordInput])

  const generatePassword = useCallback(() => {
    let pass = "";
    let alphabetsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(allowNumber) alphabetsStr += '0123456789';
    if(allowChar) alphabetsStr += '!~@#$%^&*(){}_+-=';

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * alphabetsStr.length + 1);
      pass += alphabetsStr.charAt(char)
    }

    setPasswordInput(pass);
  }, [length, allowNumber, allowChar, setPasswordInput])
  
  useEffect(() => {
    generatePassword();
  }, [length, allowNumber, allowChar, generatePassword])

  return (
    <div className="password-generator-main">
        <div className='password-generator-box'>
            <h2>Password Generator</h2>
            <div className='d-flex align-items-center p-2 gap-2'>
                <input className='form-control' type="text" value={passwordInput} placeholder='Password' ref={passwordRef} readOnly/>
                <button className='btn btn-primary' onClick={(e) => copyPasswordToClipBoard(e.target.value)}>Copy</button>
            </div>
            <div className='d-flex align-items-center p-2 gap-3'>
                <input type="range" className="form-range" min="6" max="50" step="1" value={length} onChange={(e) => setLength(e.target.value)}/> <label>Length: {length}</label>
                <input className="form-check-input" type="checkbox" value={allowNumber} onChange={() => {setAllowNumber((prev) => !prev)}}/> Numbers
                <input className="form-check-input" type="checkbox" value={allowChar} onChange={() => {setAllowChar((prev) => !prev)}}/> Characters
            </div>
        </div> 
    </div>
  )
}

export default Passwordgenerator
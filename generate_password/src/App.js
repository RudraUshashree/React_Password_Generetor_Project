import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("white");

  const [length, setLength] = useState(0);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  //useRef for password selection.
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
    <>
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

      <div className="full-screen" style={{backgroundColor:color}}>
        <div className="colorsDiv">
          <button className="btnColor" onClick={() => setColor("red")} style={{backgroundColor:"red"}}>Red</button>
          <button className="btnColor" onClick={() => setColor("green")} style={{backgroundColor:"green"}}>Grren</button>
          <button className="btnColor" onClick={() => setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
          <button className="btnColor" onClick={() => setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
          <button className="btnColor" onClick={() => setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
          <button className="btnColor" onClick={() => setColor("purple")} style={{backgroundColor:"purple"}}>purple</button>
          <button className="btnColor" onClick={() => setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
        </div>
      </div>
    </>
  );
}

export default App;
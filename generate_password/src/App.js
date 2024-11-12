import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("white");
  return (
    <>
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
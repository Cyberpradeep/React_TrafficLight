import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const [red,setRed] = useState(false);
  // const [yellow,setYellow] = useState(false);
  // const [green,setGreen] = useState(false);
  const [color, setColor] = useState(""); 
  return (
      <div className="container">
        <h1>Traffic Light</h1>
        <div className="light-box">
          <div className={color == "red"?"light red active":"light red"}></div>
          <div className={color== "yellow"?"light yellow active":"light yellow"}></div>
          <div className={color == "green"?"light green active":"light green"}></div>
        </div>
        <button className="stop" onClick={() => setColor("red")}>Red</button>
        <button className="ready"onClick={() => setColor("yellow")}>Yellow</button>
        <button className="go" onClick={() => setColor("green")}>Green</button>
      </div>
  );
}

export default App;

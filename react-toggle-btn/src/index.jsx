import React, {useState} from 'react';
import ReactDOM from 'react-dom';



 const App = ()=>{
  const [clicked, toggleclicked] = useState(false);
     let text = "i want to be clicked!";
     if(clicked){
      text = "un-click me!";
     }
    return(
      <button onClick={() => {toggleclicked(!clicked)}}>{text}</button>
    );
    }
 ReactDOM.render(
  <App />,
  document.getElementById("root")
 );
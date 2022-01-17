import React from "react";
import "./style.css";
import sampleComponent from './sampleComponent'

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)
        usman
      </p>
      <sampleComponent a{10}/>
      <sampleComponent b{30}/>
    </div>
  );
}

import { useState } from "react";

import "./App.css";
import Timer from "./Components/Timer";

function App() {
  const [showComponent, setShowComponent]=useState(false)

  return(
    <>
    <button onClick={()=> setShowComponent(true)}></button>
    <Timer/>
    </>
  )
}

export default App;

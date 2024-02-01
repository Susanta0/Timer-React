import { useState } from "react";
import "./App.css";
import Timer from "./Components/Timer";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      <div className="mainContainer">
        <button onClick={() => setShowComponent(!showComponent)}>
          {showComponent ? "Hide" : "Show"}
        </button>
      </div>
      {showComponent ? <Timer /> : <p>Click the button for show timer</p>}
    </>
  );
}

export default App;

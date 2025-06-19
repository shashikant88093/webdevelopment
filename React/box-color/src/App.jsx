import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const totalbox = 60;
  const [boxColor, setBoxColor] = useState(0);

  useEffect(() => {
    let timeInterval = setInterval(() => {
      setBoxColor((prev) => (prev + 1) % (totalbox + 1));
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [boxColor]);

  const square = Array.from({ length: totalbox }, (_, i) => (
    <div
      className="square"
      key={i}
      style={{
        backgroundColor: i < boxColor ? "white" : "black",
      }}
    />
  ));

  return (
    <>
      <div className="grid">{square}</div>
    </>
  );
}

export default App;

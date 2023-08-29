import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [numbers, setNumbers] = useState({
    numberOne: 0,
    numberTwo: 2,
    numberThree: 3,
  });

  let update = () => {
    setNumbers({ ...numbers, numberOne: numbers.numberOne + 1 });
  };

  useEffect(() => {
    setNumbers({
      ...numbers,
      numberTwo: numbers.numberTwo + 5,
      numberThree: numbers.numberThree - 5,
    });
  }, [numbers.numberOne]);

  return (
    <div className="App" onClick={update}>
      <div className="container">
        <h1>{numbers.numberOne}</h1>
        <h1>{numbers.numberTwo}</h1>
        <h1>{numbers.numberThree}</h1>
      </div>
    </div>
  );
}

export default App;

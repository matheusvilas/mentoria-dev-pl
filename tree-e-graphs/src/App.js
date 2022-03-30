import { useState } from "react";
import { PrettyPrintJson } from "./PrettyPrintJson";

function App() {
  const [object, setObject] = useState({ a: 1, b: 2 });
  const [list, setList] = useState([1, 2, 3]);

  return (
    <div className="App">
      <PrettyPrintJson>{object}</PrettyPrintJson>
      <PrettyPrintJson>{list}</PrettyPrintJson>
      <button
        onClick={() => {
          setObject({
            ...object,
            c: 3,
          });
        }}
      >
        add
      </button>
    </div>
  );
}

export default App;

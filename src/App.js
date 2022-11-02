import { useState, useEffect } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(response => response.json())
      .then(json => {
        // Get the random solution from the database.
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        
        // Set the new solution value with the value of "word" key.
        setSolution(randomSolution.word);
      })
  }, [setSolution]); // useEffect called again if there are changes in setSolution

  return (
    <div className="App">
      <h1>Wordle</h1>

      {
        solution
        // Wordle component accept solution as props.
        // App -> Worlde -> Grid -> Row
          && <Wordle solution={solution} />
      }

    </div>
  );
}

export default App;
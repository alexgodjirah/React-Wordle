import { useState, useEffect } from "react";

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
          && <div>Solution is: {solution}</div>
      }
    </div>
  );
}

export default App;
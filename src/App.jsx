import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/run")
      .then((res) => res.json())
      .then((data) => setWords(data));
  });
  return <div className="App">{JSON.stringify(words)}</div>;
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [definitions, setDefinitions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/keyboard")
      .then((response) => response.json())
      .then((data) => {
        setDefinitions(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(definitions[0]);

  return (
    <div className="App">
      <h1>Definitions:</h1>
      <strong>Word:</strong> {definitions[0].word} <br />
      <div className="audio">
        <strong>Phonetic:</strong> {definitions[0].phonetics[1]?.text} <br />
        {definitions[0].phonetics[0].audio ? (
          <audio controls src={definitions[0].phonetics[0]?.audio}>
            Your browser does not support the audio element.
          </audio>
        ) : (
          <audio controls>
            <source
              src={definitions[0].phonetics[2]?.audio}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        )}
        <br />
      </div>
      <ul>
        {definitions[0].meanings.map((meaning, meaningIndex) => (
          <li key={meaningIndex}>
            <strong>Part of Speech:</strong> {meaning.partOfSpeech} <br />
            <strong>Meaning:</strong> <br />
            {meaning.definitions[0]?.definition}
            <br />
            {meaning.definitions[1]?.definition} <br />
            {meaning.definitions[2]?.definition} <br />
            <strong>Synonyms: </strong>
            {meaning.synonyms[0]}
            <br />
            {meaning.definitions[0]?.example && (
              <>
                <strong>Example:</strong> {meaning.definitions[0]?.example}
                <br />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

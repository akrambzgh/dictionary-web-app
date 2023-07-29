import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [definitions, setDefinitions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dog")
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
      <h1>{definitions[0].word}</h1>
      <div className="audio">
        <h3>{definitions[0].phonetics[1]?.text}</h3>
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
      </div>
      <div className="meanings">
        {definitions[0].meanings.map((meaning, meaningIndex) => (
          <div className="meaning" key={meaningIndex}>
            <h2>{meaning.partOfSpeech}</h2>
            <h3>Meaning</h3>
            <ul>
              <li>{meaning.definitions[0]?.definition}</li>
              {meaning.definitions[1]?.definition && (
                <li>{meaning.definitions[1]?.definition}</li>
              )}
              {meaning.definitions[2]?.definition && (
                <li>{meaning.definitions[2]?.definition}</li>
              )}
              {meaning.definitions[0]?.example && (
                <span className="example">
                  {meaning.definitions[0]?.example}
                </span>
              )}
            </ul>
            {meaning.synonyms[0] === "" ? (
              <div className="synonims">
                <span>Synonyms</span> <span>{meaning.synonyms[0]}</span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

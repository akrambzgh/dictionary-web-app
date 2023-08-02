/* eslint-disable react/prop-types */

function Meanings({ definitionsArr }) {
  return (
    <div className="meanings">
      {definitionsArr[0]?.meanings?.map((meaning, meaningIndex) => (
        <div className="meaning" key={meaningIndex}>
          <h2>
            {meaning.partOfSpeech}
            <div className="line"></div>
          </h2>
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
                &quot;
                {meaning.definitions[0]?.example}
                &quot;
              </span>
            )}
            {meaning.definitions[1]?.example &&
              !meaning.definitions[0]?.example && (
                <span className="example">
                  &quot;
                  {meaning.definitions[1]?.example}
                  &quot;
                </span>
              )}
          </ul>
          {meaning.synonyms[0] && meaning.synonyms[0] !== "" && (
            <div className="synonyms">
              <span>Synonyms </span>{" "}
              <span className="synonyme-word">{meaning.synonyms[0]}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default Meanings;

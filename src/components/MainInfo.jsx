/* eslint-disable react/prop-types */
function MainInfo({ definitions, audioRef, handlePlay }) {
  return (
    <div className="main-info">
      {definitions[0].phonetics[0].audio ? (
        <audio ref={audioRef} controls src={definitions[0].phonetics[0]?.audio}>
          Your browser does not support the audio element.
        </audio>
      ) : definitions[0].phonetics[2]?.audio ? (
        <audio ref={audioRef} controls src={definitions[0].phonetics[2]?.audio}>
          Your browser does not support the audio element.
        </audio>
      ) : definitions[0].phonetics[4]?.audio ? (
        <audio ref={audioRef} controls src={definitions[0].phonetics[4]?.audio}>
          Your browser does not support the audio element.
        </audio>
      ) : (
        <audio ref={audioRef} controls src={definitions[0].phonetics[1]?.audio}>
          Your browser does not support the audio element.
        </audio>
      )}
      <div className="word-texts">
        <h1>{definitions[0].word}</h1>
        <h3>{definitions[0].phonetic}</h3>
      </div>
      <div className="audio" onClick={handlePlay}>
        <img src="./play.png" alt="" />
      </div>
    </div>
  );
}
export default MainInfo;

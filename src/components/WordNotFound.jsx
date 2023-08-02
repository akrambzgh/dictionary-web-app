/* eslint-disable react/prop-types */

function WordNotFound({ definitions }) {
  return (
    <div className="error">
      {!definitions[0] && <h1>this word does not exist</h1>}
    </div>
  );
}
export default WordNotFound;

/* eslint-disable react/prop-types */

function Source({ definitions }) {
  return (
    <div className="source">
      {definitions[0]?.phonetics[0]?.audio ? (
        <h3>
          source{" "}
          <a
            href={definitions[0]?.sourceUrls[0]}
            target="_blank"
            rel="noreferrer"
          >
            {definitions[0]?.sourceUrls[0]}
          </a>
        </h3>
      ) : definitions[0]?.phonetics[2]?.audio ? (
        <h3>
          source{" "}
          <a
            href={definitions[0]?.sourceUrls[0]}
            target="_blank"
            rel="noreferrer"
          >
            {definitions[0]?.sourceUrls[0]}
          </a>
        </h3>
      ) : definitions[0]?.phonetics[4]?.audio ? (
        <h3>
          source{" "}
          <a
            href={definitions[0]?.sourceUrls[0]}
            target="_blank"
            rel="noreferrer"
          >
            {definitions[0]?.sourceUrls[0]}
          </a>
        </h3>
      ) : (
        <h3></h3>
      )}
    </div>
  );
}
export default Source;

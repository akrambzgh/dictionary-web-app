/* eslint-disable react/prop-types */

function Source({ definitions }) {
  return (
    <div className="source">
      <h3>
        source{" "}
        <a href={definitions[0].sourceUrls[0]}>
          {definitions[0].sourceUrls[0]}
        </a>
      </h3>
    </div>
  );
}
export default Source;

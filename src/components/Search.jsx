/* eslint-disable react/prop-types */
function Search({ search, getWord }) {
  return (
    <div className="search">
      <input type="text" name="search" value={search} onChange={getWord} />
      <img src="./search.svg" alt="" />
    </div>
  );
}
export default Search;

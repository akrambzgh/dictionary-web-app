/* eslint-disable react/prop-types */
function Search({ search, getWord, searchInDictionary }) {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        value={search}
        onChange={getWord}
        placeholder="Search For Words"
      />
      <img src="./search.svg" alt="" onClick={searchInDictionary} />
    </div>
  );
}
export default Search;

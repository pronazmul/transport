import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result._id}>{result.content}</div>
      ))}
    </div>
  );
};

export default SearchResults;

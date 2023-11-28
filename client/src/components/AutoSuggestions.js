import React from "react";

const AutoSuggestions = ({ suggestions }) => {
  return (
    <div>
      {suggestions.map((suggestion) => (
        <div key={suggestion}>{suggestion}</div>
      ))}
    </div>
  );
};

export default AutoSuggestions;

interface searchProps {
  onChange: (text: string | number) => void;
}

import React, { memo } from "react";

interface SearchProps {
  onChange: (text: string | number) => void;
}

function Search({ onChange }: SearchProps) {
  console.log("search render!!");
  return (
    <input
      type="text"
      className="search-input"
      placeholder="search user"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default memo(Search);

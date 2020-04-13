import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../Store";
import "./SearchBar.css";
import { SearchBarInterface } from "../../Interfaces";

const SearchBar = ({ label, a11y }: SearchBarInterface) => {
  const [value, setValue] = useState("");
  const [, dispatch] = useContext(Context);

  const updateFilter = (value: string) => {
    setValue(value);
    if (dispatch) dispatch({ type: "FILTER_KEYWORDS", payload: value.trim() });
  };

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const param = search.get("search");
    if (param !== null && param !== "") {
      updateFilter(param);
    }
  }, []);

  return (
    <div role="search" className="search-bar">
      <input
        type="text"
        className="keyword-input"
        placeholder={label}
        value={value}
        title={label}
        aria-describedby="search-bar-description"
        onChange={(event) => updateFilter(event.target.value)}
      />
      <span className="sr-only" id="search-bar-description" aria-hidden="true">
        {a11y}
      </span>
    </div>
  );
};

export default SearchBar;

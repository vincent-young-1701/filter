import React, { useContext, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import DataViewer from "../DataViewer/DataViewer";
import axios from "axios";
import { Context } from "../../Store";
import { KeywordInterface, FilterWrapperInterface } from "../../Interfaces";
import "./FilterWrapper.css";

const FilterWrapper = ({ endpoint }: FilterWrapperInterface) => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        if (dispatch)
          setTimeout(
            () => dispatch({ type: "SET_KEYWORDS", payload: response.data }),
            3000
          );
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="filter-wrapper">
      <section className="filter" aria-labelledby="h1">
        {state.loading ? (
          <h2 className="h2">Loading&hellip;</h2>
        ) : (
          <React.Fragment>
            <SearchBar
              label="Type your keyword here&hellip;"
              a11y="Results update below after each key press."
            />
            <ul
              className="keyword-results"
              role="list"
              aria-label="Keyword Results"
            >
              {state.filtered.map((keyword: KeywordInterface) => {
                return (
                  <DataViewer
                    data={keyword.data}
                    id={keyword.id}
                    key={keyword.id}
                  />
                );
              })}
            </ul>
          </React.Fragment>
        )}
      </section>
    </div>
  );
};

export default FilterWrapper;

import React from "react";
import "normalize.css";
import "./App.css";
import FilterWrapper from "../FilterWrapper/FilterWrapper";
import Store from "../../Store";

const App = () => {
  return (
    <Store>
      <h1 id="h1">Keywords</h1>
      <FilterWrapper endpoint="./sentences.json" />
    </Store>
  );
};

export default App;

import React from "react";
import "./DataViewer.css";
import { KeywordInterface } from "../../Interfaces";

const DataViewer = ({ data }: KeywordInterface) => (
  <li className="keyword-result">{data}</li>
);

export default DataViewer;

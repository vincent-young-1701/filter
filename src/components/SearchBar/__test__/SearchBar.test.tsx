import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import SearchBar from "../SearchBar";

describe("<SearchBar />", () => {
  const label = "Type your keyword here&hellip;";
  const a11y = "Results update below after each key press.";
  const endpoint = "./sentences.json";

  test("should render props passed into component", () => {
    render(<SearchBar label={label} a11y={a11y} />);
    expect(screen.getByPlaceholderText(label)).toBeInTheDocument();
    expect(screen.getByText(a11y)).toBeInTheDocument();
  });
});

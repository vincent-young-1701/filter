import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import DataViewer from "../DataViewer";

describe("<DataViewer />", () => {
  const data = "All your base are belong to us.";
  const id = "5";

  test("should render data passed into component", () => {
    render(<DataViewer data={data} id={id} />);
    expect(screen.getByText(data)).toBeInTheDocument();
  });
});

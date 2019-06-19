import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import "@testing-library/react/cleanup-after-each"

describe("<Dashboard />", () => {
  it("contains a lock gate button", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/lock gate/i);
  });
  it("contains a close gate button", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/close gate/i);
  });
  it("contains an open sign", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/open/i);
  });
  it("contains an unlocked sign", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/unlocked/i);
  });
});
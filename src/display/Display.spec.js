import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";
import "@testing-library/react/cleanup-after-each"
import 'jest-dom/extend-expect'

 it("renders without crashing", () => {
  render(<Display />);
});

describe("<Display />", () => {
  it("Display unlocked and open", () => {
    const component = render(<Display locked={false} closed={false} />);
    const unlocked = component.getByText("Unlocked");
    expect(unlocked).toHaveTextContent(/unlocked/i);

    const open = component.getByText("Open");
    expect(open).toHaveTextContent(/open/i);
  });
});
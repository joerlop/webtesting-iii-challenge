import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";
import "@testing-library/react/cleanup-after-each"
import 'jest-dom/extend-expect'

 it("renders without crashing", () => {
  render(<Display />);
});

describe("<Display />", () => {
  it("Displays unlocked and open", () => {
    const component = render(<Display locked={false} closed={false} />);
    const unlocked = component.getByText("Unlocked");
    expect(unlocked).toHaveTextContent(/unlocked/i);

    const open = component.getByText("Open");
    expect(open).toHaveTextContent(/open/i);
  });
  it("Displays locked and closed", () => {
    const component = render(<Display locked={true} closed={true} />);
    const locked = component.getByText("Locked");
    expect(locked).toHaveTextContent(/locked/i);

    const closed = component.getByText("Closed");
    expect(closed).toHaveTextContent(/closed/i);
  });
  it("Uses red-led class", () => {
    const component = render(<Display locked={true} closed={true} />);
    const locked = component.getByText("Locked");
    expect(locked).toHaveClass("red-led");

    const closed = component.getByText("Closed");
    expect(closed).toHaveClass("red-led");
  });
  it("Uses green-led class", () => {
    const component = render(<Display locked={false} closed={false} />);
    const unlocked = component.getByText("Unlocked");
    expect(unlocked).toHaveClass("green-led");

    const open = component.getByText("Open");
    expect(open).toHaveClass("green-led");
  });
});
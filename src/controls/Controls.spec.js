import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

describe("<Controls />", () => {
  it("Displays lock and close buttons", () => {
    const component = render(<Controls locked={false} closed={false} />);
    const lock = component.getByText("Lock Gate");
    expect(lock).toHaveTextContent(/lock gate/i);

    const close = component.getByText("Close Gate");
    expect(close).toHaveTextContent(/close gate/i);
  });
  it("Displays unlock and open buttons", () => {
    const component = render(<Controls locked={true} closed={true} />);
    const unlock = component.getByText("Unlock Gate");
    expect(unlock).toHaveTextContent(/unlock gate/i);

    const open = component.getByText("Open Gate");
    expect(open).toHaveTextContent(/open gate/i);
  });
  it("Button text changes to open gate", () => {
    let { getByText } = render(<Controls />);

    let button = getByText(/close gate/i);

    fireEvent.click(button);

    getByText(/open gate/i);
  });
  it("Lock button is disabled", () => {
    const { getByText } = render(<Controls locked={false} closed={false} />);

    let button = getByText(/lock gate/i);

    expect(button).toHaveAttribute("disabled");
  });
  it("Lock button is disabled", () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);

    let button = getByText(/open gate/i);

    expect(button).toHaveAttribute("disabled");
  });
});

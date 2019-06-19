import React from "react";
import { render } from "@testing-library/react";
import Controls from "./Controls";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

describe("<Controls />", () => {
  it("Displays lock and close buttons", () => {
    const component = render(
      <Controls
        locked={false}
        closed={false}
      />
    );
    const lock = component.getByText("Lock Gate");
    expect(lock).toHaveTextContent(/lock gate/i);

    const close = component.getByText("Close Gate");
    expect(close).toHaveTextContent(/close gate/i);
  });
});

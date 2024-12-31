import React from "react";
import Input from "./input";

describe("Input component", () => {
  it("Should render input", () => {
    const component = render(<Input />);
    expect(component).toMatchSnapshot();
  });

  describe("defaultProps", () => {
    it("value", () => {
      const component = shallow(<Input value={"Test"} />);
      expect(component).toMatchSnapshot();
    });

    it("handle - onChange", () => {
      const result = Input.defaultProps.onChange();
      expect(result).toBe(undefined);
    });
    it("handle - onKeyPress", () => {
      const result = Input.defaultProps.onKeyPress();
      expect(result).toBe(undefined);
    });
  });
});

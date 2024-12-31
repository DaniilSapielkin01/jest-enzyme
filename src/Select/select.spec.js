import React from "react";
import Select from "./select";

const propsTest = {
  options: [
    {
      value: "text1",
      label: "Test 1",
    },
    {
      value: "text2",
      label: "Test 2",
    },
  ],
  handleChange: () => {},
  value: 0,
};

const setUp = (props) => shallow(<Select {...props} />);

describe("Select component", () => {
  describe("Has props", () => {
    const component = setUp(propsTest);

    it("should render select element", () => {
      const select = component.find("select");
      expect(select).toHaveLength(1);
    });

    it("should render 2 options", () => {
      const options = component.find("option");
      expect(options).toHaveLength(+propsTest.options.length);
    });
  });

  describe("Has no props", () => {
    const component = setUp();
    it("should render placeholder", () => {
      const placeholder = component.find(".placeholder");
      expect(placeholder).toHaveLength(1);
    });
  });

  describe("defaultProps", () => {
    it("test handleChange", () => {
      const result = Select.defaultProps.handleChange();
      expect(result).toBe("Test");
    });
  });
});

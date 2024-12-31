import React from "react";
import Posts from "./posts";

const setUp = () => shallow(<Posts />);

describe("Posts component", () => {
  const DEFAULT_PAGE = 10;
  let component;
  let instance;

  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });

  it("should be render Posts component", () => {
    expect(component).toMatchSnapshot();
  });

  describe("Posts handlers", () => {
    it("handleSearch", () => {
      expect(component.state().searchQuery).toBe("");
      instance.handleInputChange({ target: { value: "test" } });
      expect(component.state().searchQuery).toBe("test");
    });

    it("handleHitsChange", () => {
      expect(component.state().hitsPerPage).toBe(20);
      instance.handleHitsChange({ target: { value: DEFAULT_PAGE } });
      expect(component.state().hitsPerPage).toBe(DEFAULT_PAGE);
    });

    it("getSearch - should click 'Enter' ", () => {
      instance.setState({ page: DEFAULT_PAGE });
      instance.getSearch({ key: "Enter" });
      expect(component.state().page).toBe(0);
    });

    it("getSearch - should click no 'a' button", () => {
      instance.setState({ page: DEFAULT_PAGE });
      instance.getSearch({ key: "a" });
      expect(component.state().page).toBe(DEFAULT_PAGE);
    });
  });
});

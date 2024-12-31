import React from "react";
import Title from "./title";

const setUp = (props) => shallow(<Title {...props} />);

describe("Title component", () => {
  it("shoud render Title with props", () => {
    expect(setUp({ title: "My title" })).toMatchSnapshot();
  });
  it("shoud render Title without props", () => {
    expect(setUp()).toMatchSnapshot();
  });
});

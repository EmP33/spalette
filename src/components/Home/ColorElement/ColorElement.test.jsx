import React from "react";
import { shallow } from "enzyme";
import ColorElement from "./ColorElement";

it("should render ColorElement component properly", () => {
  expect(
    shallow(
      <ColorElement
        baseColor="#111"
        testerColor="#111"
        usedDivColor="#111"
        colorName="Black"
        usedInText="Button"
      />
    )
  ).toMatchSnapshot();
});

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe("clipboard", () => {
  beforeAll(() => {
    navigator.clipboard.writeText("#111");
  });
  it("should copy text to clipboard on click", () => {
    jest.spyOn(navigator.clipboard, "writeText");

    const wrapper = shallow(
      <ColorElement
        baseColor="#111"
        testerColor="#111"
        usedDivColor="#111"
        colorName="Black"
        usedInText="Button"
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.find(".color-tester").simulate("click");
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("#111");
  });
});

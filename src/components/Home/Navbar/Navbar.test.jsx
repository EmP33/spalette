import { shallow } from "enzyme";
import Navbar from "./Navbar";
import { Provider } from "react-redux";

describe("Navbar Component", () => {
  const wrapper = shallow(
    <Navbar background="#fff" text="#000" buttonColor="#fff" />
  );
  it("should render navbar properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

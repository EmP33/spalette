import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer Component", () => {
  const wrapper = shallow(<Footer backgroundColor="#111" colorText="#fff" />);
  it("should render Footer component with correct background and text color", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("elements inside footer and footer should have correct background and text color", () => {
    expect(wrapper.prop("style")).toHaveProperty("background", "#111");
    expect(wrapper.find(".footer__ghprofile").prop("style")).toHaveProperty(
      "color",
      "#fff"
    );
    expect(wrapper.find(".logo").prop("style")).toHaveProperty("color", "#fff");
    expect(wrapper.find(".footer__ghrepo").prop("style")).toHaveProperty(
      "color",
      "#fff"
    );
  });
});

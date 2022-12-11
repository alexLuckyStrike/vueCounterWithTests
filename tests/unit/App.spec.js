import { mount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";
import App from "@/App.vue";

describe("отслеживание счетчика", () => {
  let wrapper;
  const findButtonByText = (text) =>
    wrapper.findAll("button").wrappers.find((elem) => elem.text() === text);
  const createComponent = () => {
    wrapper = mount(App);
  };
  afterEach(() => {
    wrapper.destroy();
  });
  it("count the result", async () => {
    createComponent();
    await findButtonByText("+").trigger("click");
    expect(wrapper.text()).toContain("1");
  });
});

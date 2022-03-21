import CheckBox from "./CheckBox";

export default {
  title: "components/checkbox",
  components: CheckBox,
};

const Template = (args) => <CheckBox {...args} />;

export const Checked = Template.bind({});

Checked.args = {
  checked: true,
};

export const Unchecked = Template.bind({});

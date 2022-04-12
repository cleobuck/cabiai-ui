import TextInput from "./TextInput";

export default {
	title: "components/text inputs/texts",
	component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const unSelected = Template.bind({});

unSelected.args = {
	placeholder: "Adresse email",
};

export const selected = Template.bind({});

selected.args = {
	placeholder: "Adresse email",
};

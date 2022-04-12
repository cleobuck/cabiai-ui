import TextInput from "./TextInput";

export default {
	title: "components/text inputs",
	component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Texts = Template.bind({});

Texts.args = {
	placeholder: "Adresse email",
};

import Password from "./Password";

export default {
	title: "components/text inputs/password",
	component: Password,
};

const Template = (args) => <Password {...args} />;

export const Hidden = Template.bind({});

Hidden.args = {
	placeholder: "Mot de passe",
};

export const Shown = Template.bind({});

Shown.args = {
	placeholder: "Mot de passe",
};

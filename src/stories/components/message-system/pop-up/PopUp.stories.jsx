import PopUp from "./PopUp";

export default {
	title: "components/messages/pop-ups",
	components: PopUp,
};

const Template = (args) => <PopUp {...args} />;

export const Warning = Template.bind({});

Warning.args = {
	type: "warning",
	message: "Attention, il ne reste plus qu'une place.",
};

export const Error = Template.bind({});

Error.args = {
	type: "error",
	message: "Il y a un problème technique ...",
};

export const Success = Template.bind({});

Success.args = {
	type: "success",
	message: "Ton annonce a bien été mise à jour",
};

export const Information = Template.bind({});

Information.args = {
	type: "information",
	message: "Une description en de plus de 300 carac...",
};

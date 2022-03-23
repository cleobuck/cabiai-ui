import InlineMessage from "./InlineMessage";
import PasswordMessage from "./PasswordMessage";
import ReinitializeEmail from "./ReinitializeEmail";

export default {
	title: "components/messages/inline-messages",
	components: InlineMessage,
};

const Template = (args) => <InlineMessage {...args} />;

export const Warning = Template.bind({});

Warning.args = {
	type: "warning",
	message:
		"Voici l’adresse email que tu as renseigné. sTu peux modifier ton adresse e-mail et cliquer sur “Recevoir à nouveau”.",
};

export const Error = Template.bind({});

Error.args = {
	type: "error",
	message: <PasswordMessage />,
};

export const Success = Template.bind({});

Success.args = {
	type: "success",
	message: <ReinitializeEmail email="cleo.buck@gmail.com" />,
};

export const Information = Template.bind({});

Information.args = {
	type: "information",
	message:
		"Voici l’adresse email que tu as renseigné. Tu peux modifier ton adresse e-mail et cliquer sur 'Recevoir à nouveau'",
};

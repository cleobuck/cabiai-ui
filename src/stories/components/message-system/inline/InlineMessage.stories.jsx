import InlineMessage from "./InlineMessage";
import PasswordMessage from "./PasswordMessage";

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
	message:
		"Un lien pour réinitialiser ton mot de passe a été envoyé par e-mail à %emailadress%. Si tu ne reçois pas, vérifie l’adresse email saisie. ",
};

export const Information = Template.bind({});

Information.args = {
	type: "information",
	message:
		"Voici l’adresse email que tu as renseigné. Tu peux modifier ton adresse e-mail et cliquer sur 'Recevoir à nouveau'",
};

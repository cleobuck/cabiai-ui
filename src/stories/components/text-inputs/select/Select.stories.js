import Select from "./Select";

export default {
	title: "components/text inputs/select",
	component: Select,
};

const Template = (args) => <Select {...args} />;

const choices = [
	{
		id: 1,
		title: "Australie",
		value: "AUS",
	},

	{
		id: 2,
		title: "Angleterre",
		value: "UK",
	},
	{
		id: 3,
		title: "Belgique",
		value: "BE",
	},
];

export const unSelected = Template.bind({});

unSelected.args = {
	title: "Pays",
	choices: choices,
};

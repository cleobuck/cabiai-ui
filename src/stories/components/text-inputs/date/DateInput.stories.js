import DateInput from "./DateInput";

export default {
	title: "components/text inputs",
	component: DateInput,
};

const Template = (args) => <DateInput {...args} />;

export const Date = Template.bind({});

Date.args = {
	placeholder: "Date de naissance",
};

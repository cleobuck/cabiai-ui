import DateInput from "./DateInput";

export default {
	title: "components/text inputs/date",
	component: DateInput,
};

const Template = (args) => <DateInput {...args} />;

export const Default = Template.bind({});

Default.args = {
	placeholder: "Date de naissance",
};

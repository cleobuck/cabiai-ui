import DatePicker from "./DatePicker";

export default {
	title: "blocks",
	component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

export const datepicker = Template.bind({});

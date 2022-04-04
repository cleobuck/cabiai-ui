import FilterButton from "./FilterButton";

export default {
	title: "components/inputs/filter",
	component: FilterButton,
};

const Template = (args) => <FilterButton {...args} />;

export const Default = Template.bind({});

Default.args = {
	placeholder: "Destination",
};

export const PickedChoices = Template.bind({});

PickedChoices.args = {
	placeholder: "Destination",
	content: ["Suède", "Danemark"],
	active: true,
};

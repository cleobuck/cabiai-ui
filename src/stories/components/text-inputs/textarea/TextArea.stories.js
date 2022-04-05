import TextArea from "./TextArea";

export default {
	title: "components/text inputs/text area",
	component: TextArea,
};

const Template = (args) => <TextArea {...args} />;

export const Empty = Template.bind({});

Empty.args = {
	title: "Description",
	maxLength: 500,
};

import React from "react";
import Button from "./Button";
import Facebook from "./assets/facebook.png";
import Google from "./assets/google.png";

export default {
	title: "components/buttons",
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const special = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
special.args = {
	style: "primary",
	title: "continuer",
};

export const normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
normal.args = {
	style: "secondary-button-1",
	title: "continuer",
};

export const secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
secondary.args = {
	style: "secondary-button-2",
	title: "continuer",
};

export const outlined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
outlined.args = {
	style: "outline-button",
	title: "continuer",
};

export const inactive = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
inactive.args = {
	style: "",
	active: false,
	title: "continuer",
};

export const facebook = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
facebook.args = {
	style: "outline-button",
	social: Facebook,
	title: "continuer avec Facebook",
};

export const google = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
google.args = {
	style: "outline-button",
	social: Google,
	title: "continuer avec Google",
};

export const NoOutline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoOutline.args = {
	style: "no-outline",
	title: "voir tout ",
};

export const ActiveChoice = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ActiveChoice.args = {
	style: "button-active-choice",
	title: "Indifférent",
};

export const InActiveChoice = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InActiveChoice.args = {
	style: "button-inactive-choice",
	title: "Indifférent",
};

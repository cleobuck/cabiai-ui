import React from "react";
import SearchBar from "./SearchBar";

export default {
	title: "components/text inputs/search bar",
	component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const UnfocusedHomepage = Template.bind({});

UnfocusedHomepage.args = {
	placeholder: "Rechercher une destination...",
	isFocused: false,
	homepage: true,
};

export const FocusedHomepage = Template.bind({});

FocusedHomepage.args = {
	placeholder: "Rechercher une destination...",
	isFocused: true,
	homepage: true,
};

export const Unfocused = Template.bind({});

Unfocused.args = {
	placeholder: "Rechercher...",
	isFocused: false,
};

export const Focused = Template.bind({});

Focused.args = {
	placeholder: "Montagne",
	isFocused: true,
};

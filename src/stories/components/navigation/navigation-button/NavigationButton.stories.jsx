import React from "react";
import ProfileIcon from "../../../assets/svg/static/account-info.svg";

import NavigationButton from "./NavigationButton";

export default {
	title: "components/navigation",
	component: NavigationButton,
};

const Template = (args) => <NavigationButton {...args} />;

export const navigationButton = Template.bind({});

navigationButton.args = {
	title: "Informations personnelles",
	logo: ProfileIcon,
};

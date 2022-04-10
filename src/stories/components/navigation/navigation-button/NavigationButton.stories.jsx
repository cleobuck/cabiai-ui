import React from "react";
import AccountIcon from "../../../assets/svg/account-icon/Account";

import NavigationButton from "./NavigationButton";

export default {
	title: "components/navigation",
	component: NavigationButton,
};

const Template = (args) => <NavigationButton {...args} />;

export const navigationButton = Template.bind({});

navigationButton.args = {
	title: "Informations personnelles",
	logo: AccountIcon,
};

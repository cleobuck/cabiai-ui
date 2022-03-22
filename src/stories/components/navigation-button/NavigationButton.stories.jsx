import React from "react";
import ProfileIcon from "../../assets/svg/static/account-info.svg";

import NavigationButton from "./NavigationButton"

export default {
  title: "components/buttons/navigation",
  component: NavigationButton
}

const Template = args => <NavigationButton {...args}/>


export const normal = Template.bind({})

normal.args = {
  title: "Informations personnelles",
  logo: ProfileIcon
}


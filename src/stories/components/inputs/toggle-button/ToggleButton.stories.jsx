import React from "react";
import ToggleButton from "./ToggleButton";

export default  {
    title: "components/inputs/toggle",
    component: ToggleButton
}

const Template = args => <ToggleButton {...args} />

export const Unchecked = Template.bind({})

Unchecked.args = {
    checked: false
}

export const Checked = Template.bind({})

Checked.args = {
    checked: true
}

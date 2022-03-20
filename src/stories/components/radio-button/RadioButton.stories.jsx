import React from "react";
import RadioButton from "./RadioButton";

export default  {
    title: "components/radio button",
    component: RadioButton
}

const Template = args => <RadioButton {...args} />

export const Unchecked = Template.bind({})

Unchecked.args = {
    checked: false
}

export const Checked = Template.bind({})

Checked.args = {
    checked: true
}

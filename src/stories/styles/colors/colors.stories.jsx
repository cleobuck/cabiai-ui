import React from "react";
import Colors from "./Colors";
export default {
    title: "styles/colors",
    component: Colors
}

const Template = args => <Colors {...args} />

export const Palette = Template.bind({});

Palette.args = {
    format: "palette"
}

export const SystemMessage = Template.bind({});

SystemMessage.args = {
    format: "system-message"
}

export const Fonts = Template.bind({});

Fonts.args = {
    format: "fonts"
}
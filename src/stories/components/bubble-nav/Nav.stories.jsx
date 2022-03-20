import React from "react"
import NavComponent from "./Nav.component";

export default {
    title: "components/progress bar",
    component: NavComponent
}

const Template = args => <NavComponent {...args} />

export const step1 = Template.bind({})

step1.args = {
    step: 1
}

export const step2 = Template.bind({})

step2.args = {
    step: 2
}
export const step3 = Template.bind({})

step3.args = {
    step: 3
}
export const step4 = Template.bind({})

step4.args = {
    step: 4
}
export const step5 = Template.bind({})

step5.args = {
    step: 5
}
import React from "react"
import Badges from "./Badges"

export default {
    title: "components/stickers",
    component: Badges
}


const Template = args => <Badges {...args}/>

export const active = Template.bind({})

active.args = {
    title: "montagne",
    active: true
}

export const inactive = Template.bind({})

inactive.args = {
    title: "montagne",
    active: false
}

export const neutral = Template.bind({})

neutral.args = {
    title: "Date flexible",
    neutral: true
}
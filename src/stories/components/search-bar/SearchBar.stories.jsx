import React from "react"
import SearchBar from "./SearchBar"

export default {
    title: "components/search bar",
    component: SearchBar
}

const Template = args => <SearchBar {...args} />

export const Unfocused = Template.bind({}) 

Unfocused.args = {
    placeholder: "Rechercher une destination...",
    isFocused: false
}

export const Focused = Template.bind({}) 

Focused.args = {
    placeholder: "Rechercher une destination...",
    isFocused: true
}
import React from "react";
import PlusMinusButton from "./PlusMinusButton"

export default {
  title: "components/plus-minus-button",
  component: PlusMinusButton
}

const Template = args => <PlusMinusButton {...args}/>

export const normal = Template.bind({})

normal.args = {
  amount: 3
}


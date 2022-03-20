import React from "react";
import SexChoice from "./SexChoice"

export default {
  title: "components/sex choice button",
  component: SexChoice
}

const Template = args => <SexChoice {...args}/>

export const activeNeutral = Template.bind({})

activeNeutral.args = {
  type: 0,
  active: true
}

export const activeFemale = Template.bind({})

activeFemale.args = {
  type: 1,
  active: true
}

export const activeMale = Template.bind({})

activeMale.args = {
  type: 2,
  active: true
}

export const inactiveNeutral = Template.bind({})

inactiveNeutral.args = {
  type: 0,
 active: false
}

export const inactiveFemale = Template.bind({})

inactiveFemale.args = {
  type: 1,
 active: false
}

export const inactiveMale = Template.bind({})

inactiveMale.args = {
  type: 2,
  active: false
}




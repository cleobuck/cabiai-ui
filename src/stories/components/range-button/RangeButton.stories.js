import React from "react";
import RangeButton from "./RangeButton";

export default {
  title: "components/inputs/range",
  component: RangeButton,
};

const Template = (args) => <RangeButton {...args} />;

export const active = Template.bind({});

active.args = {
  min: 0,
  max: 1000,
  onChange: () => {},
  active: true,
};

export const inactive = Template.bind({});

inactive.args = {
  min: 0,
  max: 1000,
  onChange: () => {},
  active: false,
};

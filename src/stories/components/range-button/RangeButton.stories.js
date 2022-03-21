import React from "react";
import RangeButton from "./RangeButton";

export default {
  title: "components/range button",
  component: RangeButton,
};

const Template = (args) => <RangeButton {...args} />;

export const normal = Template.bind({});

normal.args = {
  min: 0,
  max: 1000,
  onChange: () => {},
};

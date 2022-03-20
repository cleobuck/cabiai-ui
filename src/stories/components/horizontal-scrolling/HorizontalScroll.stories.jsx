import React from "react";
import HorizontalScroll from "./HorizontalScroll";
import DestinationTemplate from "./templates/DestinationTemplate";
import mockDestinations from "./mockData/destinationList";

export default {
  title: "components/horizontal scroll",
  component: HorizontalScroll
}


const Template = args => <HorizontalScroll {...args} />;

export const normal = Template.bind({});


normal.args = {
  title: "Catégories",
  dimensions: {
    height: "256px",
    width: "200px"
  },
  overlay: true,
  TemplateComponent: DestinationTemplate,

  data: mockDestinations
}
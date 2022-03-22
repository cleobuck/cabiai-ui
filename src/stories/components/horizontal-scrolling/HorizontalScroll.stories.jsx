import React from "react";
import HorizontalScroll from "./HorizontalScroll";
import DestinationTemplate from "./templates/DestinationTemplate";
import mockDestinations from "./mockData/destinationList";

export default {
  title: "components/horizontal scroll",
  component: HorizontalScroll
}


const Template = args => <HorizontalScroll {...args} />;

export const destinationPortrait = Template.bind({});


destinationPortrait.args = {
  title: "Catégories",
  dimensions: {
    height: "256px",
    width: "200px"
  },
  overlay: true,
  TemplateComponent: DestinationTemplate,

  data: mockDestinations
}


export const destinationLandscape = Template.bind({});


destinationLandscape.args = {
  title: "Catégories",
  dimensions: {
    height: "142px",
    width: "242px"
  },
  overlay: true,
  TemplateComponent: DestinationTemplate,

  data: mockDestinations
}




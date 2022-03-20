import React from "react";
import TextStyles from "./TextStyles";

export default {
  title: "styles/texts",
  component: TextStyles,

}

const Template = args => <TextStyles {...args} /> 


export const Headers = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Headers.args = {
  format: "headers"
};


export const Subtitles = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Subtitles.args = {
  format: "subtitles"
};


export const Body = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Body.args = {
  format: "body"
};



export const Others = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Others.args = {
  format: "others"
};



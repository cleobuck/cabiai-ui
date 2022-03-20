import React from "react";
import Footer from "./Footer";

export default {
  title: "parts/footer",
  component: Footer,
  argTypes: {
    // activeLink: {
    //   options: ["Annonces", "Favoris", "Avantages", "Compte"],
    //   control: { type: 'radio' },
    // },
  },
}

const Template = args => <Footer {...args} /> 

export const FooterComponent = Template.bind({})


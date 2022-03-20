import React from "react";
import Menu from "./Menu";
import ProfilePicture from "./assets/profile-picture.jpg";

export default {
  title: "parts/menu",
  component: Menu,
  argTypes: {
    activeLink: {
      options: ["Annonces", "Favoris", "Avantages", "Compte"],
      control: { type: 'radio' },
    },
  },
}

const Template = args => <Menu {...args} /> 

export const notLoggedIn = Template.bind({})

export const LoggedIn = Template.bind({})


LoggedIn.args = {
  profilePicture: ProfilePicture
}


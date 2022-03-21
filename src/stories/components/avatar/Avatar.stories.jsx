import Avatar from "./Avatar";
import ProfileImg from "./profile-picture.jpg";
import Female from "./female-avatar.png";
import Male from "./male-avatar.jpg";

export default {
  title: "components/avatar",
  components: Avatar
}


const Template = args => <Avatar {...args} />


export const ProfilePicture = Template.bind({})

ProfilePicture.args ={
  size: "150px",
  img: ProfileImg
}

export const SmallProfilePicture = Template.bind({})

SmallProfilePicture.args = {
  size: "48px",
  img: ProfileImg
}

export const UnknownProfilePicture = Template.bind({})

UnknownProfilePicture.args = {
  size: "48px"
}

export const WomanAvatar = Template.bind({})

WomanAvatar.args = {
  size: "150px",
  img: Female
}

export const ManActiveAvatar = Template.bind({})

ManActiveAvatar.args = {
  size: "150px",
  img: Male,
  active: true
}
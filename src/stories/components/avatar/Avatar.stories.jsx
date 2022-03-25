import Avatar from "./Avatar";
import ProfileImg from "./profile-picture.jpg";
import Female from "./female-avatar.png";
import Male from "./male-avatar.jpg";

export default {
	title: "components/avatar",
	components: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const ProfilePicture = Template.bind({});

ProfilePicture.args = {
	size: "150",
	img: ProfileImg,
};

export const SmallProfilePicture = Template.bind({});

SmallProfilePicture.args = {
	size: "48",
	img: ProfileImg,
};

export const WomanAvatar = Template.bind({});

WomanAvatar.args = {
	size: "150",
	img: Female,
};

export const ManActiveAvatar = Template.bind({});

ManActiveAvatar.args = {
	size: "150",
	img: Male,
	active: true,
};

export const MissingProfilePicture = Template.bind({});

MissingProfilePicture.args = {
	size: "150",
};

import PostCard from "./PostCard";

export default {
	title: "blocks/cards/post",
	component: PostCard,
};

const Template = (args) => <PostCard {...args} />;

export const Default = Template.bind({});

Default.args = {
	data: {
		endDate: "01/31/2023",
		startDate: "01/01/2023",
		title: "Tour d’Europe du nord en voiture",
		countryList: ["Islande", "SriLanka", "Perou", "Italie", "Afghanistan"],
		flexibleDate: true,
	},
	favorite: false,
	// unavailable: true
};

export const Favorite = Template.bind({});

Favorite.args = {
	data: {
		endDate: "01/31/2023",
		startDate: "01/01/2023",
		title: "Tour d’Europe du nord en voiture",
		countryList: ["Islande", "SriLanka", "Perou", "Italie", "Afghanistan"],
		flexibleDate: true,
	},
	favorite: true,
	// unavailable: true
};

export const Unavailable = Template.bind({});

Unavailable.args = {
	data: {
		endDate: "01/31/2023",
		startDate: "01/01/2023",
		title: "Tour d’Europe du nord en voiture",
		countryList: ["Islande", "SriLanka", "Perou", "Italie", "Afghanistan"],
		flexibleDate: true,
	},
	favorite: true,
	unavailable: true,
};

import FilterModal from "./FilterModal";

import SortFilterContent from "./sort-filter/SortFilterContent";

export default {
	title: "components/modals/filter",
	component: FilterModal,
};

const Template = (args) => <FilterModal {...args} />;

export const SortBy = Template.bind({});

SortBy.args = {
	title: "Trier par",
	isOpen: true,
	children: (
		<SortFilterContent
			options={[
				{ id: 1, label: "Date de départ", checked: true },
				{ id: 2, label: "Budget croissant" },
				{ id: 3, label: "Budget décroissant" },
			]}
			type="sort"
		/>
	),
};

export const Filter = Template.bind({});

Filter.args = {
	title: "",
	isOpen: true,
	children: (
		<SortFilterContent
			options={[
				{ id: 1, label: "Finlande", checked: true },
				{ id: 2, label: "Islande", checked: true },
				{ id: 3, label: "Norvège" },
				{ id: 3, label: "Suède" },
			]}
			type="filter"
		/>
	),
};

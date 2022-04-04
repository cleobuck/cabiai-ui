import FilterModal from "./FilterModal";

import SortFilterContent from "./sort-filter/SortFilterContent";

export default {
	title: "blocks/modals/from bottom",
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
				{ id: 4, label: "Suède" },
				{ id: 5, label: "Danemark" },
				{ id: 6, label: "Pologne" },
				{ id: 7, label: "Lituanie" },
			]}
			type="filter"
		/>
	),
};

export const FilterClosed = Template.bind({});

FilterClosed.args = {
	title: "",
	isOpen: false,
	children: (
		<SortFilterContent
			options={[
				{ id: 1, label: "Finlande", checked: true },
				{ id: 2, label: "Islande", checked: true },
				{ id: 3, label: "Norvège" },
				{ id: 4, label: "Suède" },
				{ id: 5, label: "Danemark" },
				{ id: 6, label: "Pologne" },
				{ id: 7, label: "Lituanie" },
			]}
			type="filter"
		/>
	),
};

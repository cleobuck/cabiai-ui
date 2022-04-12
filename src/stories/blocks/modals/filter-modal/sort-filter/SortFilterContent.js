import React from "react";
import RadioButton from "stories/components/inputs/radio-button/RadioButton";
import CheckBox from "stories/components/inputs/checkbox/CheckBox";
import "./sortContent.scss";

export default function SortContent({ options, type }) {
	return (
		<ul className={`modal-sorting-list ${type === "filter" ? "-filter" : ""}`}>
			{options.map((sortOption) => (
				<li key={sortOption.id}>
					<span>{sortOption.label} </span>
					{type === "sort" && <RadioButton checked={sortOption.checked} />}
					{type === "filter" && <CheckBox checked={sortOption.checked} />}
				</li>
			))}
		</ul>
	);
}

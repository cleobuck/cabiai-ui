import React from "react";
import "./filter.scss";
import PropTypes from "prop-types";
import Chevron from "../../assets/svg/chevron/Chevron";

export default function FilterButton({ active, placeholder, content = [] }) {
	return (
		<button className={`filter-button ${active ? "-active" : ""}`}>
			{active ? `${content[0]} + ${content.length - 1}` : placeholder}
			<Chevron className="filter-chevron" />
		</button>
	);
}

FilterButton.propTypes = {
	active: PropTypes.bool,
	placeholder: PropTypes.string,
	content: PropTypes.object,
};

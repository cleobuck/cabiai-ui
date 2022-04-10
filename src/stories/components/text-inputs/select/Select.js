import React, { useState } from "react";
import "./select.scss";
import "../textinputs.scss";
import Chevron from "../../../assets/svg/chevron/Chevron";
export default function Select({ choices, title }) {
	const [isOpen, toggleDropDown] = useState(false);
	const [pickedValue, setPickedValue] = useState({
		id: 0,
		value: title,
		title: title,
	});
	return (
		<div
			className={`input-text select-input ${isOpen ? "-open" : ""}`}
			onClick={() => toggleDropDown((isOpen) => !isOpen)}
		>
			<div className="custom-dropdown">
				<div className={`label-wrapper ${isOpen ? "-isOpen" : ""}`}>
					<label
						key={pickedValue.id}
						htmlFor="my-dropdown"
						className="custom-dropdown-label"
						data-toggle="dropdown"
					>
						{pickedValue.title}
					</label>

					<button>
						<Chevron className="select-chevron" />
					</button>
				</div>

				<ul className={isOpen ? "-isOpen" : ""}>
					{choices.map((choice) => (
						<li
							key={choice.id}
							onClick={() => setPickedValue(choice)}
							className={`custom-dropdown-list-item `}
							data-value={choice.value}
						>
							{choice.title}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

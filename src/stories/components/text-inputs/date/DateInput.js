import React from "react";

import "../textinputs.scss";
import useFocus from "../../../utils/useFocus";
export default function DateInput({ placeholder }) {
	const [ref, isFocused] = useFocus();
	return (
		<div ref={ref} className={`${isFocused ? "focused" : ""} input-text`}>
			{isFocused && <span> {placeholder} </span>}
			<input type="date" placeholder={placeholder} />
		</div>
	);
}

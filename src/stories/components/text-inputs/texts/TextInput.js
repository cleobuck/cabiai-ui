import React from "react";
import "./textinput.scss";
import "../textinputs.scss";

import useFocus from "../../../utils/useFocus";
export default function TextInput({ placeholder, focused }) {
	const [ref, isFocused] = useFocus();
	return (
		<div ref={ref} className={`${isFocused ? "focused" : ""} input-text`}>
			{isFocused && <span> {placeholder} </span>}
			<input type="text" placeholder={placeholder} />
		</div>
	);
}

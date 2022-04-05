import React from "react";
import "./textinput.scss";
import "../textinputs.scss";
export default function TextInput({ placeholder, focused }) {
	return (
		<div className={`${focused ? "focused" : ""} input-text`}>
			{focused && <span> {placeholder} </span>}
			<input type="text" placeholder={placeholder} />
		</div>
	);
}

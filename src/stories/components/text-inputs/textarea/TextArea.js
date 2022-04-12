import React, { useState } from "react";
import "./textarea.scss";
import "../textinputs.scss";
import useFocus from "../../../utils/useFocus";
export default function TextArea({
	title,
	description = "description",
	maxLength = 0,
}) {
	const [ref, isFocused] = useFocus();
	const [text, setText] = useState("");

	const write = (e) => {
		setText(e.target.value);
	};
	return (
		<>
			<div ref={ref} className="input-text textarea">
				{isFocused && <span> {description} </span>}
				<textarea
					placeholder={description}
					onChange={write}
					className={!isFocused ? "-unfocused" : ""}
				/>
			</div>
			<div className="textarea-charcount">
				caractères {text.length} /{maxLength}
			</div>
		</>
	);
}

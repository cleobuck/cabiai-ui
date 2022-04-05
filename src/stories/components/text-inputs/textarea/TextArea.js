import React, { useState } from "react";
import "./textarea.scss";
import "../textinputs.scss";
export default function TextArea({
	title,
	description = "description",
	maxLength = 0,
}) {
	const [isFocused, setFocus] = useState(false);
	const [text, setText] = useState("");

	const write = (e) => {
		setText(e.target.value);
	};
	return (
		<>
			<div className="input-text textarea">
				{isFocused && <span> {description} </span>}
				<textarea
					placeholder={description}
					onClick={() => setFocus(true)}
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

import React, { useRef, useEffect, useState } from "react";

import "../textinputs.scss";

export default function DateInput({ placeholder }) {
	const ref = useRef(null);

	const [isFocused, setFocus] = useState(false);

	useEffect(() => {
		const toggleFocus = (e) => {
			if (e.target === ref.current || ref.current.contains(e.target)) {
				setFocus(true);
			} else {
				setFocus(false);
			}
		};
		window.addEventListener("click", toggleFocus);

		return () => {
			window.removeEventListener("click", toggleFocus);
		};
	}, [ref]);

	return (
		<div ref={ref} className={`${isFocused ? "focused" : ""} input-text`}>
			{isFocused && <span> {placeholder} </span>}
			<input type="date" placeholder={placeholder} />
		</div>
	);
}

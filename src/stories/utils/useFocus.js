import { useRef, useState, useEffect } from "react";

export default function useFocus() {
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

	return [ref, isFocused];
}

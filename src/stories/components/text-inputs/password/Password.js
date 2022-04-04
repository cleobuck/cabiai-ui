import React, { useState } from "react";
import "./password.scss";
import "../textinputs.scss";
import usePrevious from "./usePrevious";
export default function Password({ placeholder }) {
	const [password, setPassword] = useState("");
	const prevPasswordLength = usePrevious(password.length);
	const [hideAll, toggleHide] = useState(false);
	const [isRevealed, setReveal] = useState(false);

	const [isFocused, setFocus] = useState(false);

	const onHiddenPasswordChange = (e) => {};

	const onPasswordChange = (e) => {
		setPassword(e.target.value);

		if (!isRevealed) {
			toggleHide(false);

			setTimeout(() => toggleHide(true), 1500);
		}
	};

	return (
		<div className={`${isFocused ? "-focused" : ""} input-text`}>
			{isFocused && <span> {placeholder} </span>}

			<div className="password-wrapper">
				<input
					className={`input-hidden ${
						isFocused && !isRevealed ? "-hidden" : "-focused"
					}`}
					value={password}
					onChange={onPasswordChange}
					type="text"
					placeholder={isFocused ? "" : "password"}
					onClick={() => setFocus(true)}
				/>
				{password.length > 0 && !isRevealed && (
					<input
						type="text"
						className="password-dots"
						placeholder={placeholder}
						value={
							hideAll || (password && prevPasswordLength > password.length)
								? Array.from(new Array(password.length))
										.map(() => String.fromCharCode(183))
										.join("")
								: Array.from(new Array(password.length - 1))
										.map(() => String.fromCharCode(183))
										.join("") + password[password.length - 1]
						}
						onClick={() => setFocus(true)}
						onChange={onHiddenPasswordChange}
					/>
				)}
				{isFocused && (
					<button
						onClick={() => setReveal((isRevealed) => !isRevealed)}
						className="no-outline show-password"
					>
						{isRevealed ? "Masquer" : "Afficher"}
					</button>
				)}
			</div>
		</div>
	);
}

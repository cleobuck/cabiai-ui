import React from "react";
import "./badges.scss";
import CloseButton from "../../assets/svg/close-button/close-button";
export default function Badges({
	title,
	active,
	neutral = false,
	chosen = false,
}) {
	return (
		<span
			className={`badge ${active ? "-active" : neutral ? "-neutral" : ""} ${
				chosen ? "-chosen" : ""
			}`}
		>
			{" "}
			{title} {chosen && <CloseButton className="close-badge" />}
		</span>
	);
}

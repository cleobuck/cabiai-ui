import "./Avatar.scss";
import React from "react";
import AccountIcon from "../../assets/svg/account-icon/Account";

export default function Avatar({ img, size, active = false }) {
	return img ? (
		<figure
			className={`avatar-wrapper ${active ? "-active" : ""}`}
			style={{ width: `${size}px`, height: `${size}px` }}
		>
			<img src={img} alt="user profile" />
		</figure>
	) : (
		<figure
			className={`avatar-wrapper ${active ? "-active" : ""}`}
			style={{ width: `${size}px`, height: `${size}px` }}
		>
			<AccountIcon className="default-image" />
			{size >= 100 && (
				<button style={{ width: `${size}px` }} className="button-text">
					{" "}
					Uploader une photo
				</button>
			)}
		</figure>
	);
}

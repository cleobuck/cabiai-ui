import React from "react";
import "./close-button.scss";

export default function CloseButton({ className }) {
	return (
		<svg
			className={`close-button ${className}`}
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M1.52228 1.51267C1.77423 1.2614 2.18272 1.2614 2.43467 1.51267L7.99998 7.06297L13.5653 1.51267C13.8172 1.2614 14.2257 1.2614 14.4777 1.51267C14.7296 1.76394 14.7296 2.17134 14.4777 2.42261L8.91237 7.9729L14.4777 13.5232C14.7296 13.7745 14.7296 14.1819 14.4777 14.4331C14.2257 14.6844 13.8172 14.6844 13.5653 14.4331L7.99998 8.88283L2.43467 14.4331C2.18272 14.6844 1.77423 14.6844 1.52228 14.4331C1.27033 14.1819 1.27033 13.7745 1.52228 13.5232L7.08758 7.9729L1.52228 2.42261C1.27033 2.17134 1.27033 1.76394 1.52228 1.51267Z"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

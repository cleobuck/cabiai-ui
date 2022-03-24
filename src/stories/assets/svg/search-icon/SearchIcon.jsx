import React from "react";

export default function SearchIcon({ className }) {
	return (
		<svg
			className={className}
			viewBox="0 0 40 40"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="20" cy="20" r="20" fill="#0396A6" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M19.359 9.42308C13.8705 9.42308 9.42308 13.8669 9.42308 19.3464C9.42308 24.8258 13.8705 29.2697 19.359 29.2697C22.0972 29.2697 24.5749 28.1648 26.3729 26.375C28.1791 24.5771 29.2949 22.0927 29.2949 19.3464C29.2949 13.8669 24.8475 9.42308 19.359 9.42308ZM7.5 19.3464C7.5 12.8028 12.8105 7.5 19.359 7.5C25.9075 7.5 31.2179 12.8028 31.2179 19.3464C31.2179 22.2781 30.1509 24.9621 28.3854 27.03L32.218 30.8582C32.5937 31.2334 32.5941 31.8423 32.2188 32.218C31.8435 32.5937 31.2347 32.5941 30.8589 32.2188L27.0228 28.387C24.9563 30.1366 22.2803 31.1928 19.359 31.1928C12.8105 31.1928 7.5 25.89 7.5 19.3464Z"
			/>
		</svg>
	);
}

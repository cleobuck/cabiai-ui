import React from "react";
import ErrorIcon from "../../assets/svg/error-icon/ErrorIcon";
import InfoIcon from "../../assets/svg/info-icon/InfoIcon";
import SuccessIcon from "../../assets/svg/success-icon/SuccessIcon";
import WarningIcon from "../../assets/svg/warning-icon/WarningIcon";

export default function MessageSystem({ type, message }) {
	return (
		<div className={`message-system message-system-${type}`}>
			{type === "success" && <SuccessIcon className="message-success-icon" />}
			{type === "warning" && <WarningIcon className="message-warning-icon" />}
			{type === "information" && <InfoIcon className="message-info-icon" />}
			{type === "error" && <ErrorIcon className="message-error-icon" />}

			<p> {message} </p>
		</div>
	);
}

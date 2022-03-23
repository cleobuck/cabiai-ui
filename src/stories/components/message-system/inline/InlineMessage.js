import React from "react";
import ErrorIcon from "../../../assets/svg/error-icon/ErrorIcon";
import InfoIcon from "../../../assets/svg/info-icon/InfoIcon";
import SuccessIcon from "../../../assets/svg/success-icon/SuccessIcon";
import WarningIcon from "../../../assets/svg/warning-icon/WarningIcon";
import "./InlineMessage.scss";

export default function InlineMessage({ type, message }) {
	return (
		<div className={`inline-message inline-message-${type}`}>
			{type === "success" && <SuccessIcon className="inline-success-icon" />}
			{type === "warning" && <WarningIcon className="inline-warning-icon" />}
			{type === "information" && <InfoIcon className="inline-info-icon" />}
			{type === "error" && <ErrorIcon className="inline-error-icon" />}

			<p> {message}</p>
		</div>
	);
}

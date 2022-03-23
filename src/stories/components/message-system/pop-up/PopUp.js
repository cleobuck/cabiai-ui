import React from "react";
import ErrorIcon from "../../../assets/svg/error-icon/ErrorIcon";
import InfoIcon from "../../../assets/svg/info-icon/InfoIcon";
import SuccessIcon from "../../../assets/svg/success-icon/SuccessIcon";
import WarningIcon from "../../../assets/svg/warning-icon/WarningIcon";
import "./PopUp.scss";

export default function PopUp({ type, message }) {
	return (
		<div className={`pop-up pop-up-${type}`}>
			{type === "success" && <SuccessIcon className="pop-up-success-icon" />}
			{type === "warning" && <WarningIcon className="pop-up-warning-icon" />}
			{type === "information" && <InfoIcon className="pop-up-info-icon" />}
			{type === "error" && <ErrorIcon className="pop-up-error-icon" />}

			<p> {message} </p>
		</div>
	);
}

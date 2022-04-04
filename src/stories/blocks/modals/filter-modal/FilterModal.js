import React from "react";
import CloseButton from "../../../assets/svg/close-button/close-button";
import "./filter-modal.scss";
import Overlay from "./overlay/Overlay";
import Button from "../../../styles/buttons/Button";

export default function FilterModal({ title, children, isOpen }) {
	return (
		<>
			<Overlay />
			<div className={`filter-modal ${isOpen ? "-open" : ""} `}>
				{" "}
				<span className="filter-modal-drag-line"> </span>
				<div className="filter-modal-title">
					{title} <CloseButton className="standard filter-close" />{" "}
				</div>
				<div className="filter-modal-content">{children} </div>
				<div className="filter-modal-buttons">
					<Button style="no-outline filter-erase-button" title="Effacer" />
					<Button
						style="secondary-button-1 filter-apply-button"
						title="Appliquer"
					/>
				</div>
			</div>
		</>
	);
}

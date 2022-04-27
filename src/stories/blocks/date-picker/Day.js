import React from "react";

export default function Day({ id, day }) {
	return (
		<div
			key={id}
			className={
				"date-picker-month-body-table-day" + (day.selected ? " selected" : "")
			}
			// onClick={() => props.changeCurrentDay(day)}
		>
			<p>{day.empty ? "" : day.number}</p>
		</div>
	);
}

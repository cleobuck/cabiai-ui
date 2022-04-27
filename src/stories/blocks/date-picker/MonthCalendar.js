import React, { useEffect, useState } from "react";
import {
	CalendarLoop,
	firstLetterOfDays,
	getMonthName,
	range,
} from "./dateUtils";
import Day from "./Day";

export default function MonthCalendar({ month }) {
	let [currentDays, setCurrentDays] = useState([]);

	useEffect(() => setCurrentDays(CalendarLoop(month)), [month]);

	return (
		<div className="date-picker-month">
			<div className="date-picker-month-header">
				<h2>
					{getMonthName(month.month)} {month.year}
				</h2>
			</div>
			<div className="date-picker-month-body">
				<div className="date-picker-month-body-header">
					{firstLetterOfDays.map((weekday, index) => {
						return (
							<div
								key={index}
								className="date-picker-month-body-header-weekday"
							>
								<p>{weekday}</p>
							</div>
						);
					})}
				</div>
				<div className="date-picker-month-body-table">
					{currentDays.map((day, index) => {
						return (
							<Day day={day} key={`${index}-${month.month}-${month.year}`} />
						);
					})}
				</div>
			</div>
		</div>
	);
}

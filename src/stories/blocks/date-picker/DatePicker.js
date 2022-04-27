import React, { useState } from "react";
import "./datepicker.scss";
import InfiniteScroll from "react-infinite-scroller";
import { addMonths, getMonthData } from "./dateUtils";
import MonthCalendar from "./MonthCalendar";

export default function DatePicker() {
	const [latestShownDate, setLatestShownDate] = useState(new Date());

	const [monthsData, setMoreMonths] = useState([
		{
			...getMonthData(
				latestShownDate.getFullYear(),
				latestShownDate.getMonth()
			),
		},
	]);

	function loadMore() {
		const newMonth = addMonths(1, latestShownDate);
		const newMonthObject = getMonthData(
			newMonth.getFullYear(),
			newMonth.getMonth()
		);
		setMoreMonths([...monthsData, newMonthObject]);
		setLatestShownDate(newMonth);
	}

	return (
		<div className="date-picker">
			<InfiniteScroll
				pageStart={0}
				loadMore={loadMore}
				hasMore={true || false}
				loader={
					<div className="loader" key={0}>
						Loading ...
					</div>
				}
				useWindow={false}
			>
				{monthsData.map((month) => (
					<MonthCalendar key={`${month.month}-${month.year}`} month={month} />
				))}
			</InfiniteScroll>
		</div>
	);
}

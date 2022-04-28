export function getDaysInMonth(year, month) {
	return new Date(year, month, 0).getDate();
}

export function getMonthName(number) {
	return [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	][number];
}

export function getDay(number) {
	if (number === 0) {
		return "Sunday";
	}
	return [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	][number - 1];
}

export const firstLetterOfDays = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];

export const getMonthData = (year, month) => {
	return {
		id: `${month}-${year}`,
		numOfDays: getDaysInMonth(year, month + 1),
		firstDayObject: new Date(year + "-" + (month + 1) + "-01"),
		month: month,
		year: year,
	};
};

export function addMonths(numOfMonths, date = new Date()) {
	date.setMonth(date.getMonth() + numOfMonths);
	return date;
}

export function range(start, end) {
	return Array(end - start + 1)
		.fill()
		.map((_, idx) => start + idx);
}

export const CalendarLoop = (month) => {
	let day = month.firstDayObject;
	const weekdayOfFirstDay =
		month.firstDayObject.getDay() !== 0 ? month.firstDayObject.getDay() : 7;

	let currentDays = [];
	let monthStarted = false;
	let monthEnded = false;

	for (let cell = 1; cell < 44; cell++) {
		if ((!monthStarted && cell !== weekdayOfFirstDay) || monthEnded) {
			currentDays.push({
				empty: true,
			});

			continue;
		}

		if (!monthStarted && cell === weekdayOfFirstDay) {
			monthStarted = true;
		} else {
			day.setDate(day.getDate() + 1);
			if (day.getMonth() !== month.month) {
				monthEnded = true;
				continue;
			}
		}

		let calendarDay = {
			date: new Date(day),
			month: day.getMonth(),
			number: day.getDate(),
			selected: day.toDateString() === month.firstDayObject.toDateString(),
			year: day.getFullYear(),
		};

		currentDays.push(calendarDay);
	}

	return currentDays;
};

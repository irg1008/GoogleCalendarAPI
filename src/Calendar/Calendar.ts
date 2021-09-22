import { Config, Events, EventQuery } from "src/types/Calendar.types";
import { getCalendarEvents } from "src/middlewares/calendar";

const rootUrl = "https://www.googleapis.com/calendar/v3/calendars/";

class Calendar {
	private config: Config;

	constructor(config: Config) {
		this.config = config;
	}

	getEvents = (eventQuery: EventQuery) =>
		getCalendarEvents({
			...eventQuery,
			calId: this.calId,
			apiKey: this.apiKey,
		});

	listEvents = () => {};
	watchEvents = () => {};
}

export default Calendar;
